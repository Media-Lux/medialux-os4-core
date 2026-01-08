// ============================================================
// OS4 TRESOR – Secure API Routes
// Version: 1.1.0
// Author: @chef (Operator Level 10)
// Verified by: @blackwolf
// Audited by: @jura
// ============================================================

import type { Express } from "express";
import { createServer, type Server } from "http";
import {
  getUncachableGitHubClient,
  OS4_REPO,
  isGitHubConnected,
  getFileCommitInfo,
  clearGitHubCache,
} from "./github";
import {
  pullRequestSchema,
  pushRequestSchema,
  migrateRequestSchema,
  migrationDocumentSchema,
  type StatusResponse,
  type PullResponse,
  type PushResponse,
  type MigrateResponse,
  type MigrationDocument,
} from "@shared/schema";
import { z } from "zod";
import YAML from "yaml";

const API_VERSION = "1.2.0";

// ============================================================
// Helper: Parse YAML frontmatter from markdown content
// ============================================================
function parseYamlFrontmatter(
  content: string,
): { frontmatter: Record<string, any>; body: string } | null {
  const normalizedContent = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const match = normalizedContent.match(
    /^---\n([\s\S]*?)\n---(?:\n([\s\S]*))?$/,
  );
  if (!match) return null;

  try {
    const yamlContent = match[1];
    const body = match[2] || "";
    const frontmatter = YAML.parse(yamlContent);
    return { frontmatter: frontmatter || {}, body };
  } catch {
    return null;
  }
}

// ============================================================
// Register Routes
// ============================================================
export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // ==========================================================
  // GET /api/status
  // ==========================================================
  app.get("/api/status", async (_req, res) => {
    try {
      const connected = await isGitHubConnected();
      const response: StatusResponse = {
        status: connected ? "healthy" : "degraded",
        version: API_VERSION,
        repository: OS4_REPO.repo,
        timestamp: new Date().toISOString(),
        github: {
          connected,
          owner: connected ? OS4_REPO.owner : undefined,
          repo: connected ? OS4_REPO.repo : undefined,
        },
      };
      res.json(response);
    } catch {
      res.status(500).json({
        status: "error",
        version: API_VERSION,
        repository: OS4_REPO.repo,
        timestamp: new Date().toISOString(),
        github: { connected: false },
      });
    }
  });

  // ==========================================================
  // GET /api/system/status – Source of Truth status
  // ==========================================================
  app.get("/api/system/status", async (_req, res) => {
    try {
      const connected = await isGitHubConnected();
      const hasPin = !!process.env.OS4_OPERATOR_PIN;
      const hasTresorKey = !!process.env.OS4_TRESOR_PUSH_KEY;
      const hasGitHubToken = !!(
        process.env.OS4_TRESOR_GITHUB_TOKEN ||
        process.env.OS4_Tresor_Github_Token ||
        process.env.GITHUB_TOKEN
      );

      let pendingCount = 0;
      let lastPushSha: string | null = null;
      let lastPushTime: string | null = null;
      let errorClass: string | null = null;

      if (connected) {
        try {
          const octokit = await getUncachableGitHubClient();

          // Count pending items
          try {
            const { data: pendingDir } = await octokit.repos.getContent({
              owner: OS4_REPO.owner,
              repo: OS4_REPO.repo,
              path: "system/pending",
              ref: "main",
            });
            if (Array.isArray(pendingDir)) {
              pendingCount = pendingDir.filter(
                (f) => f.type === "file" && f.name.startsWith("PENDING_") && f.name.endsWith(".json")
              ).length;
            }
          } catch {
            // Pending directory doesn't exist
          }

          // Get last push from audit - robust parsing for key variants
          try {
            const today = new Date().toISOString().slice(0, 10);
            const auditPath = `system/audit/OS4_PUSH_HISTORY_${today}.yml`;
            const { data: auditFile } = await octokit.repos.getContent({
              owner: OS4_REPO.owner,
              repo: OS4_REPO.repo,
              path: auditPath,
              ref: "main",
            });
            if (!Array.isArray(auditFile) && auditFile.type === "file") {
              const auditContent = Buffer.from(auditFile.content, "base64").toString("utf-8");
              const lines = auditContent.split("\n");
              // Find last commit SHA (supports: commitSha, commit_sha)
              for (let i = lines.length - 1; i >= 0; i--) {
                const shaMatch = lines[i].match(/(?:commitSha|commit_sha):\s*(\w+)/i);
                if (shaMatch && shaMatch[1] !== "null") {
                  lastPushSha = shaMatch[1];
                  break;
                }
              }
              // Find last timestamp (supports: approvedAt, approved_at, timestamp)
              for (let i = lines.length - 1; i >= 0; i--) {
                const timeMatch = lines[i].match(/(?:approvedAt|approved_at|timestamp):\s*(.+)/i);
                if (timeMatch) {
                  const val = timeMatch[1].trim();
                  if (val && val !== "null") {
                    lastPushTime = val;
                    break;
                  }
                }
              }
            }
          } catch {
            // Audit file doesn't exist - leave null values
          }
        } catch (err: any) {
          errorClass = err.status === 401 ? "auth_expired" : "github_error";
        }
      } else {
        errorClass = "github_disconnected";
      }

      // Determine githubWrite status: OK, BLOCKED, or UNKNOWN
      let githubWriteStatus: "OK" | "BLOCKED" | "UNKNOWN" = "UNKNOWN";
      if (!hasGitHubToken || !connected) {
        githubWriteStatus = "BLOCKED";
      } else if (errorClass === "auth_expired" || errorClass === "github_error") {
        githubWriteStatus = "BLOCKED";
      } else if (lastPushSha) {
        githubWriteStatus = "OK";
      }

      res.json({
        success: true,
        apiHealth: connected ? "operational" : "degraded",
        githubWrite: hasGitHubToken && connected,
        githubWriteStatus,
        manualPushReady: hasPin && hasGitHubToken && connected,
        autoPushReady: hasTresorKey && hasGitHubToken && connected,
        pendingCount,
        lastPushSha,
        lastPushTime,
        errorClass,
        operatorAuth: hasPin ? "configured" : "missing",
        version: API_VERSION,
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        apiHealth: "error",
        errorClass: "internal_error",
        error: error.message,
      });
    }
  });

  // ==========================================================
  // GET /api/context/snapshot – ContextRouter read-only activation
  // Parses Working Brain state, returns structured JSON
  // ==========================================================
  app.get("/api/context/snapshot", async (_req, res) => {
    const WORKING_BRAIN_PATH = "OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE_CURRENT_V1.md";
    const fallback = {
      active: { id: null, title: "unknown", status: "unknown", blocked_by: null },
      counts: { waiting: 0, parked: 0 },
      meta: { state_ref: WORKING_BRAIN_PATH, updated_at: "" },
    };

    try {
      const octokit = await getUncachableGitHubClient();
      const { data } = await octokit.repos.getContent({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: WORKING_BRAIN_PATH,
        ref: "main",
      });

      if (Array.isArray(data) || data.type !== "file") {
        console.warn("[CONTEXT] Working Brain path is not a file");
        return res.json(fallback);
      }

      const content = Buffer.from(data.content, "base64").toString("utf-8");
      const parsed = parseYamlFrontmatter(content);

      if (!parsed) {
        console.warn("[CONTEXT] Failed to parse Working Brain frontmatter");
        return res.json(fallback);
      }

      const fm = parsed.frontmatter;

      // Extract active task
      const activeTask = fm.active || fm.current || {};
      const activeId = activeTask.id || activeTask.task_id || null;
      const activeTitle = activeTask.title || activeTask.name || "unknown";
      const activeStatus = activeTask.status || "unknown";
      const blockedBy = activeTask.blocker || activeTask.blocked_by || null;

      // Extract counts
      const waitingList = fm.waiting || fm.queue || [];
      const parkedList = fm.parked || fm.deferred || [];
      const waitingCount = Array.isArray(waitingList) ? waitingList.length : 0;
      const parkedCount = Array.isArray(parkedList) ? parkedList.length : 0;

      // Extract updated timestamp
      const updatedAt = fm.updated_at || fm.last_updated || fm.timestamp || "";

      res.json({
        active: {
          id: activeId,
          title: activeTitle,
          status: activeStatus,
          blocked_by: blockedBy,
        },
        counts: {
          waiting: waitingCount,
          parked: parkedCount,
        },
        meta: {
          state_ref: WORKING_BRAIN_PATH,
          updated_at: updatedAt,
        },
      });
    } catch (error: any) {
      console.error(`[CONTEXT] snapshot error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.json(fallback);
    }
  });

  // ==========================================================
  // V1.2: GET/POST /api/listFiles – Directory listing with tree API
  // ==========================================================
  const listFilesSchema = z.object({
    root: z.string().default(""),
    depth: z.number().int().min(1).max(10).default(5),
    maxFiles: z.number().int().min(1).max(1000).default(500),
    include: z.array(z.string()).optional(),
    exclude: z.array(z.string()).optional(),
    branch: z.string().default("main"),
  });

  const handleListFiles = async (params: z.infer<typeof listFilesSchema>, res: any) => {
    const { root, depth, maxFiles, include, exclude, branch } = params;

    if (root.includes("..")) {
      return res.status(400).json({ success: false, error: "Invalid path: '..' not allowed" });
    }

    try {
      const octokit = await getUncachableGitHubClient();
      const { data: refData } = await octokit.git.getRef({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        ref: `heads/${branch}`,
      });

      const { data: treeData } = await octokit.git.getTree({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        tree_sha: refData.object.sha,
        recursive: "true",
      });

      let files = treeData.tree
        .filter((item) => item.type === "blob")
        .map((item) => ({
          path: item.path || "",
          sha: item.sha || "",
          size: item.size || 0,
        }));

      // Filter by root
      if (root) {
        const normalizedRoot = root.endsWith("/") ? root : root + "/";
        files = files.filter((f) => f.path.startsWith(normalizedRoot) || f.path === root.replace(/\/$/, ""));
      }

      // Filter by depth
      const rootDepth = root ? root.split("/").filter(Boolean).length : 0;
      files = files.filter((f) => {
        const fileDepth = f.path.split("/").filter(Boolean).length;
        return fileDepth <= rootDepth + depth;
      });

      // Filter by include patterns
      if (include && include.length > 0) {
        files = files.filter((f) =>
          include.some((pattern) => f.path.includes(pattern) || f.path.endsWith(pattern))
        );
      }

      // Filter by exclude patterns
      if (exclude && exclude.length > 0) {
        files = files.filter((f) =>
          !exclude.some((pattern) => f.path.includes(pattern) || f.path.endsWith(pattern))
        );
      }

      // Apply maxFiles cap
      const truncated = files.length > maxFiles;
      files = files.slice(0, maxFiles);

      res.json({
        success: true,
        root,
        branch,
        files,
        count: files.length,
        truncated,
      });
    } catch (error: any) {
      console.error(`[LISTFILES] error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to list files",
      });
    }
  };

  app.get("/api/listFiles", async (req, res) => {
    const parsed = listFilesSchema.safeParse({
      root: req.query.root,
      depth: req.query.depth ? Number(req.query.depth) : undefined,
      maxFiles: req.query.maxFiles ? Number(req.query.maxFiles) : undefined,
      include: req.query.include ? String(req.query.include).split(",") : undefined,
      exclude: req.query.exclude ? String(req.query.exclude).split(",") : undefined,
      branch: req.query.branch,
    });
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: parsed.error.message });
    }
    return handleListFiles(parsed.data, res);
  });

  app.post("/api/listFiles", async (req, res) => {
    const parsed = listFilesSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: parsed.error.message });
    }
    return handleListFiles(parsed.data, res);
  });

  // ==========================================================
  // V1.2: GET/POST /api/searchFiles – Search by filename
  // ==========================================================
  const searchFilesSchema = z.object({
    query: z.string().min(1),
    roots: z.array(z.string()).default([""]),
    maxResults: z.number().int().min(1).max(100).default(50),
    branch: z.string().default("main"),
  });

  const handleSearchFiles = async (params: z.infer<typeof searchFilesSchema>, res: any) => {
    const { query, roots, maxResults, branch } = params;

    if (roots.some((r) => r.includes(".."))) {
      return res.status(400).json({ success: false, error: "Invalid path: '..' not allowed" });
    }

    try {
      const octokit = await getUncachableGitHubClient();
      const { data: refData } = await octokit.git.getRef({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        ref: `heads/${branch}`,
      });

      const { data: treeData } = await octokit.git.getTree({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        tree_sha: refData.object.sha,
        recursive: "true",
      });

      const queryLower = query.toLowerCase();
      let matches = treeData.tree
        .filter((item) => item.type === "blob")
        .filter((item) => {
          const pathLower = (item.path || "").toLowerCase();
          return pathLower.includes(queryLower);
        })
        .filter((item) => {
          if (roots.length === 0 || (roots.length === 1 && roots[0] === "")) return true;
          return roots.some((root) => {
            const normalizedRoot = root.endsWith("/") ? root : root + "/";
            return (item.path || "").startsWith(normalizedRoot);
          });
        })
        .map((item) => ({
          path: item.path || "",
          sha: item.sha || "",
          size: item.size || 0,
        }));

      const truncated = matches.length > maxResults;
      matches = matches.slice(0, maxResults);

      res.json({
        success: true,
        query,
        branch,
        matches,
        count: matches.length,
        truncated,
      });
    } catch (error: any) {
      console.error(`[SEARCHFILES] error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to search files",
      });
    }
  };

  app.get("/api/searchFiles", async (req, res) => {
    const parsed = searchFilesSchema.safeParse({
      query: req.query.query,
      roots: req.query.roots ? String(req.query.roots).split(",") : undefined,
      maxResults: req.query.maxResults ? Number(req.query.maxResults) : undefined,
      branch: req.query.branch,
    });
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: parsed.error.message });
    }
    return handleSearchFiles(parsed.data, res);
  });

  app.post("/api/searchFiles", async (req, res) => {
    const parsed = searchFilesSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: parsed.error.message });
    }
    return handleSearchFiles(parsed.data, res);
  });

  // ==========================================================
  // V1.2: POST /api/pullMany – Batch read (max 50 files)
  // ==========================================================
  const pullManySchema = z.object({
    paths: z.array(z.string().min(1)).min(1).max(50),
    branch: z.string().default("main"),
  });

  app.post("/api/pullMany", async (req, res) => {
    const parsed = pullManySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: parsed.error.message });
    }

    const { paths, branch } = parsed.data;

    if (paths.some((p) => p.includes(".."))) {
      return res.status(400).json({ success: false, error: "Invalid path: '..' not allowed" });
    }

    try {
      const octokit = await getUncachableGitHubClient();
      const results: Array<{
        path: string;
        success: boolean;
        content?: string;
        sha?: string;
        error?: string;
      }> = [];

      for (const path of paths) {
        try {
          const { data } = await octokit.repos.getContent({
            owner: OS4_REPO.owner,
            repo: OS4_REPO.repo,
            path,
            ref: branch,
          });

          if (Array.isArray(data) || data.type !== "file") {
            results.push({ path, success: false, error: "Not a file" });
          } else {
            const content = Buffer.from(data.content, "base64").toString("utf-8");
            results.push({ path, success: true, content, sha: data.sha });
          }
        } catch (err: any) {
          results.push({ path, success: false, error: err.message || "Failed to read" });
        }
      }

      res.json({
        success: true,
        branch,
        results,
        requested: paths.length,
        fetched: results.filter((r) => r.success).length,
      });
    } catch (error: any) {
      console.error(`[PULLMANY] error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to batch read",
      });
    }
  });

  // ==========================================================
  // V1.2: GET /api/getFileMeta – Preflight for update (exists + sha)
  // ==========================================================
  app.get("/api/getFileMeta", async (req, res) => {
    const schema = z.object({
      path: z.string().min(1),
      branch: z.string().default("main"),
    });

    const parsed = schema.safeParse({
      path: req.query.path,
      branch: req.query.branch,
    });

    if (!parsed.success) {
      return res.status(400).json({ success: false, error: "path required" });
    }

    const { path, branch } = parsed.data;

    if (path.includes("..")) {
      return res.status(400).json({ success: false, error: "Invalid path: '..' not allowed" });
    }

    try {
      const octokit = await getUncachableGitHubClient();
      const { data } = await octokit.repos.getContent({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path,
        ref: branch,
      });

      if (Array.isArray(data)) {
        return res.json({ success: true, path, exists: true, isDirectory: true, sha: null });
      }

      res.json({
        success: true,
        path,
        exists: true,
        isDirectory: false,
        sha: data.sha,
        size: data.size,
      });
    } catch (error: any) {
      if (error.status === 404) {
        return res.json({ success: true, path, exists: false, sha: null });
      }
      console.error(`[GETFILEMETA] error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to get file meta",
      });
    }
  });

  // ==========================================================
  // GET /api/pull – Read files from GitHub repository
  // ==========================================================
  app.get("/api/pull", async (req, res) => {
    try {
      const querySchema = z.object({
        path: z.string().min(1),
        branch: z.string().default("main"),
      });
      const parsed = querySchema.safeParse(req.query);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          path: (req.query.path as string) || "",
          error: "Pfad ist erforderlich",
        });
      }

      const { path, branch } = parsed.data;
      const octokit = await getUncachableGitHubClient();
      const { data } = await octokit.repos.getContent({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path,
        ref: branch,
      });

      if (Array.isArray(data) || data.type !== "file") {
        return res.status(400).json({
          success: false,
          path,
          error: "Pfad ist keine Datei",
        });
      }

      const content = Buffer.from(data.content, "base64").toString("utf-8");
      const commitInfo = await getFileCommitInfo(octokit, path, branch);

      res.json({
        success: true,
        path,
        content,
        sha: data.sha,
        encoding: "utf-8",
        commit: commitInfo || undefined,
      });
    } catch (error: any) {
      console.error("Pull error:", error);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        path: (req.query.path as string) || "",
        error: error.message || "Fehler beim Lesen der Datei",
      });
    }
  });

  // ==========================================================
  // POST /api/push – Write new or updated files to GitHub
  // Dual Authorization: manual (PIN) or auto (tresorKey + manualConfirm)
  // ==========================================================
  app.post("/api/push", async (req, res) => {
    try {
      const mode = req.body?.mode || "manual";

      // --- MANUAL MODE: Operator PIN required ---
      if (mode === "manual") {
        const operator = req.body?.operatorPIN ?? req.body?.operatorCode;
        const storedPin = process.env.OS4_OPERATOR_PIN;

        if (!operator || operator !== storedPin) {
          console.warn(
            `[PUSH] 403 mode=manual reason=invalid_pin path=${req.body?.path || "?"}`,
          );
          return res.status(403).json({
            success: false,
            authorized: false,
            mode,
            message: "Unauthorized operator code – push blocked & logged",
          });
        }
      }
      // --- AUTO MODE: tresorKey + manualConfirm required ---
      else if (mode === "auto") {
        const tresorKey =
          req.body?.tresorKey ||
          (req.headers["x-os4-tresor-key"] as string | undefined);
        const manualConfirm = req.body?.manualConfirm;
        const storedTresorKey = process.env.OS4_TRESOR_PUSH_KEY;

        const keyOk = tresorKey && tresorKey === storedTresorKey;
        const confirmOk = manualConfirm === true;

        if (!keyOk || !confirmOk) {
          console.warn(
            `[PUSH] 403 mode=auto reason=${!keyOk ? "invalid_key" : "missing_confirm"} path=${req.body?.path || "?"}`,
          );
          return res.status(403).json({
            success: false,
            authorized: false,
            mode,
            error: "Auto push requires tresorKey + manualConfirm",
          });
        }
      }
      // --- INVALID MODE ---
      else {
        return res.status(400).json({
          success: false,
          error: "Invalid mode. Use 'manual' or 'auto'.",
        });
      }

      // --- Schema-Prüfung & Commit ---
      const parsed = pushRequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          path: req.body?.path || "",
          error: parsed.error.errors.map((e) => e.message).join(", "),
        });
      }

      const { path, content, commitMessage, branch, sha } = parsed.data;

      if (!content || content.trim().length === 0) {
        return res.status(400).json({
          success: false,
          path,
          error: "Leerer Inhalt ist nicht erlaubt.",
        });
      }

      console.log(`[PUSH] mode=${mode} path=${path} commitMessage="${commitMessage}"`);

      const octokit = await getUncachableGitHubClient();
      const encodedContent = Buffer.from(content, "utf-8").toString("base64");

      const { data } = await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path,
        message: commitMessage,
        content: encodedContent,
        branch,
        sha,
      });

      const result = {
        success: true,
        authorized: true,
        mode,
        path,
        sha: data.content?.sha,
        commitUrl: data.commit.html_url || undefined,
        commit: {
          message: commitMessage,
          sha: data.commit.sha || "",
        },
      };
      console.log(`[PUSH] 200 OK path=${path} sha=${result.sha?.slice(0, 7)}`);
      res.json(result);
    } catch (error: any) {
      console.error(`[PUSH] ERROR path=${req.body?.path || "?"} error=${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        path: req.body?.path || "",
        error: error.message || "Fehler beim Schreiben der Datei",
      });
    }
  });

  // ==========================================================
  // POST /api/pending/create – Create pending push request
  // Auth: tresorKey (X-OS4-TRESOR-KEY header or body)
  // ==========================================================
  app.post("/api/pending/create", async (req, res) => {
    try {
      const tresorKey =
        req.body?.tresorKey ||
        (req.headers["x-os4-tresor-key"] as string | undefined);
      const storedKey = process.env.OS4_TRESOR_PUSH_KEY;

      if (!tresorKey || tresorKey !== storedKey) {
        console.warn(`[PENDING] 403 create reason=invalid_key`);
        return res.status(403).json({
          success: false,
          error: "Unauthorized tresorKey",
        });
      }

      const { target, requestedBy } = req.body;
      if (!target?.path || !target?.content || !target?.commitMessage) {
        return res.status(400).json({
          success: false,
          error: "Missing target.path, target.content, or target.commitMessage",
        });
      }

      // Path validation: must not start with /
      if (target.path.startsWith("/")) {
        return res.status(400).json({
          success: false,
          error: "target.path must not start with /",
        });
      }

      const ts = Date.now();
      const rand = Math.random().toString(36).slice(2, 8);
      const pendingId = `PENDING_${ts}_${rand}`;
      const pendingPath = `system/pending/${pendingId}.json`;

      const pendingData = {
        id: pendingId,
        createdAt: new Date().toISOString(),
        requestedBy: requestedBy || "unknown",
        target: {
          path: target.path,
          content: target.content,
          commitMessage: target.commitMessage,
          branch: target.branch || "main",
        },
        status: "pending",
      };

      const octokit = await getUncachableGitHubClient();
      const encodedContent = Buffer.from(
        JSON.stringify(pendingData, null, 2),
        "utf-8"
      ).toString("base64");

      await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pendingPath,
        message: `[OS4] Pending created: ${pendingId}`,
        content: encodedContent,
        branch: "main",
      });

      console.log(`[PENDING] created id=${pendingId} target=${target.path}`);
      res.json({ success: true, pendingPath, pendingId });
    } catch (error: any) {
      console.error(`[PENDING] create error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to create pending",
      });
    }
  });

  // ==========================================================
  // GET /api/pending/list – List pending push requests
  // ==========================================================
  app.get("/api/pending/list", async (_req, res) => {
    try {
      const octokit = await getUncachableGitHubClient();
      let items: any[] = [];

      try {
        const { data } = await octokit.repos.getContent({
          owner: OS4_REPO.owner,
          repo: OS4_REPO.repo,
          path: "system/pending",
          ref: "main",
        });

        if (Array.isArray(data)) {
          const jsonFiles = data.filter(
            (f) => f.type === "file" && f.name.startsWith("PENDING_") && f.name.endsWith(".json")
          );

          for (const file of jsonFiles) {
            try {
              const { data: fileData } = await octokit.repos.getContent({
                owner: OS4_REPO.owner,
                repo: OS4_REPO.repo,
                path: file.path,
                ref: "main",
              });

              if (!Array.isArray(fileData) && fileData.type === "file") {
                const content = Buffer.from(fileData.content, "base64").toString("utf-8");
                const parsed = JSON.parse(content);
                items.push({ ...parsed, sha: fileData.sha, filePath: file.path });
              }
            } catch {
              // Skip invalid files
            }
          }
        }
      } catch (e: any) {
        if (e.status !== 404) throw e;
        // Directory doesn't exist yet - return empty list
      }

      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      res.json({ success: true, items });
    } catch (error: any) {
      console.error(`[PENDING] list error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to list pending",
      });
    }
  });

  // ==========================================================
  // POST /api/pending/approve – Approve and execute pending push
  // Auth: operatorPIN or operatorCode
  // ==========================================================
  app.post("/api/pending/approve", async (req, res) => {
    try {
      const operator = req.body?.operatorPIN ?? req.body?.operatorCode;
      const storedPin = process.env.OS4_OPERATOR_PIN;

      if (!operator || operator !== storedPin) {
        console.warn(`[PENDING] 403 approve reason=invalid_pin`);
        return res.status(403).json({
          success: false,
          error: "Unauthorized operator PIN",
        });
      }

      const { pendingId } = req.body;
      if (!pendingId || typeof pendingId !== "string" || !pendingId.startsWith("PENDING_")) {
        return res.status(400).json({
          success: false,
          error: "Invalid or missing pendingId",
        });
      }

      // Server-derived path for security (not client-supplied)
      const pendingPath = `system/pending/${pendingId}.json`;

      const octokit = await getUncachableGitHubClient();

      // Load pending JSON
      const { data: pendingFileData } = await octokit.repos.getContent({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pendingPath,
        ref: "main",
      });

      if (Array.isArray(pendingFileData) || pendingFileData.type !== "file") {
        return res.status(400).json({ success: false, error: "Invalid pending file" });
      }

      const pendingContent = Buffer.from(pendingFileData.content, "base64").toString("utf-8");
      const pending = JSON.parse(pendingContent);

      // Validate target path doesn't start with /
      if (pending.target.path.startsWith("/")) {
        return res.status(400).json({
          success: false,
          error: "target.path must not start with /",
        });
      }

      // Execute actual push to target path
      let targetSha: string | undefined;
      try {
        const { data: existing } = await octokit.repos.getContent({
          owner: OS4_REPO.owner,
          repo: OS4_REPO.repo,
          path: pending.target.path,
          ref: pending.target.branch || "main",
        });
        if (!Array.isArray(existing) && existing.type === "file") {
          targetSha = existing.sha;
        }
      } catch {
        // File doesn't exist, no sha needed
      }

      const { data: pushResult } = await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pending.target.path,
        message: pending.target.commitMessage,
        content: Buffer.from(pending.target.content, "utf-8").toString("base64"),
        branch: pending.target.branch || "main",
        sha: targetSha,
      });

      // Move pending to approved
      const approvedPath = `system/pending_approved/APPROVED_${pendingId}.json`;
      const approvedData = {
        ...pending,
        status: "approved",
        approvedAt: new Date().toISOString(),
        commitSha: pushResult.commit.sha,
        commitUrl: pushResult.commit.html_url,
      };

      await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: approvedPath,
        message: `[OS4] Approved: ${pendingId}`,
        content: Buffer.from(JSON.stringify(approvedData, null, 2), "utf-8").toString("base64"),
        branch: "main",
      });

      // Delete original pending file (use server-fetched sha, not client-supplied)
      await octokit.repos.deleteFile({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pendingPath,
        message: `[OS4] Pending executed: ${pendingId}`,
        sha: pendingFileData.sha,
        branch: "main",
      });

      // Append to audit log
      const today = new Date().toISOString().slice(0, 10);
      const auditPath = `system/audit/OS4_PUSH_HISTORY_${today}.yml`;
      let existingAudit = "";
      let auditSha: string | undefined;
      try {
        const { data: auditFile } = await octokit.repos.getContent({
          owner: OS4_REPO.owner,
          repo: OS4_REPO.repo,
          path: auditPath,
          ref: "main",
        });
        if (!Array.isArray(auditFile) && auditFile.type === "file") {
          existingAudit = Buffer.from(auditFile.content, "base64").toString("utf-8");
          auditSha = auditFile.sha;
        }
      } catch {
        // Audit file doesn't exist yet
      }

      const auditEntry = `\n- id: ${pendingId}\n  action: approved\n  path: ${pending.target.path}\n  commit_sha: ${pushResult.commit.sha}\n  operator_id: operator_pin_auth\n  timestamp: ${approvedData.approvedAt}\n  error_class: null\n`;
      const newAuditContent = existingAudit + auditEntry;

      await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: auditPath,
        message: `[OS4] Audit: approved ${pendingId}`,
        content: Buffer.from(newAuditContent, "utf-8").toString("base64"),
        branch: "main",
        sha: auditSha,
      });

      console.log(`[PENDING] approved id=${pendingId} commitSha=${pushResult.commit.sha?.slice(0, 7)}`);
      res.json({
        success: true,
        pendingId,
        commitSha: pushResult.commit.sha,
        commitUrl: pushResult.commit.html_url,
      });
    } catch (error: any) {
      console.error(`[PENDING] approve error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to approve pending",
      });
    }
  });

  // ==========================================================
  // POST /api/pending/reject – Reject pending push request
  // Auth: operatorPIN or operatorCode
  // ==========================================================
  app.post("/api/pending/reject", async (req, res) => {
    try {
      const operator = req.body?.operatorPIN ?? req.body?.operatorCode;
      const storedPin = process.env.OS4_OPERATOR_PIN;

      if (!operator || operator !== storedPin) {
        console.warn(`[PENDING] 403 reject reason=invalid_pin`);
        return res.status(403).json({
          success: false,
          error: "Unauthorized operator PIN",
        });
      }

      const { pendingId } = req.body;
      if (!pendingId || typeof pendingId !== "string" || !pendingId.startsWith("PENDING_")) {
        return res.status(400).json({
          success: false,
          error: "Invalid or missing pendingId",
        });
      }

      // Server-derived path for security
      const pendingPath = `system/pending/${pendingId}.json`;

      const octokit = await getUncachableGitHubClient();

      // Load pending JSON
      const { data: pendingFileData } = await octokit.repos.getContent({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pendingPath,
        ref: "main",
      });

      if (Array.isArray(pendingFileData) || pendingFileData.type !== "file") {
        return res.status(400).json({ success: false, error: "Invalid pending file" });
      }

      const pendingContent = Buffer.from(pendingFileData.content, "base64").toString("utf-8");
      const pending = JSON.parse(pendingContent);

      // Move pending to rejected
      const rejectedPath = `system/pending_rejected/REJECTED_${pendingId}.json`;
      const rejectedData = {
        ...pending,
        status: "rejected",
        rejectedAt: new Date().toISOString(),
      };

      await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: rejectedPath,
        message: `[OS4] Rejected: ${pendingId}`,
        content: Buffer.from(JSON.stringify(rejectedData, null, 2), "utf-8").toString("base64"),
        branch: "main",
      });

      // Delete original pending file (use server-fetched sha)
      await octokit.repos.deleteFile({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pendingPath,
        message: `[OS4] Pending rejected: ${pendingId}`,
        sha: pendingFileData.sha,
        branch: "main",
      });

      // Append to audit log for rejection
      const today = new Date().toISOString().slice(0, 10);
      const auditPath = `system/audit/OS4_PUSH_HISTORY_${today}.yml`;
      let existingAudit = "";
      let auditSha: string | undefined;
      try {
        const { data: auditFile } = await octokit.repos.getContent({
          owner: OS4_REPO.owner,
          repo: OS4_REPO.repo,
          path: auditPath,
          ref: "main",
        });
        if (!Array.isArray(auditFile) && auditFile.type === "file") {
          existingAudit = Buffer.from(auditFile.content, "base64").toString("utf-8");
          auditSha = auditFile.sha;
        }
      } catch {
        // Audit file doesn't exist yet
      }

      const auditEntry = `\n- id: ${pendingId}\n  action: rejected\n  path: ${pending.target.path}\n  commit_sha: null\n  operator_id: operator_pin_auth\n  timestamp: ${rejectedData.rejectedAt}\n  error_class: null\n`;
      const newAuditContent = existingAudit + auditEntry;

      await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: auditPath,
        message: `[OS4] Audit: rejected ${pendingId}`,
        content: Buffer.from(newAuditContent, "utf-8").toString("base64"),
        branch: "main",
        sha: auditSha,
      });

      console.log(`[PENDING] rejected id=${pendingId}`);
      res.json({ success: true, pendingId });
    } catch (error: any) {
      console.error(`[PENDING] reject error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to reject pending",
      });
    }
  });

  // ==========================================================
  // GET /api/audit/history – Fetch parsed audit entries from GitHub
  // Returns: approved/rejected pending actions with commit info
  // ==========================================================
  app.get("/api/audit/history", async (req, res) => {
    try {
      const date = (req.query.date as string) || new Date().toISOString().slice(0, 10);
      const octokit = await getUncachableGitHubClient();
      const auditPath = `system/audit/OS4_PUSH_HISTORY_${date}.yml`;

      let entries: any[] = [];
      let rawContent = "";

      try {
        const { data: auditFile } = await octokit.repos.getContent({
          owner: OS4_REPO.owner,
          repo: OS4_REPO.repo,
          path: auditPath,
          ref: "main",
        });

        if (!Array.isArray(auditFile) && auditFile.type === "file") {
          rawContent = Buffer.from(auditFile.content, "base64").toString("utf-8");
          
          // Parse YAML entries - each entry starts with "- id:"
          const entryBlocks = rawContent.split(/\n(?=- id:)/);
          for (const block of entryBlocks) {
            if (!block.trim()) continue;
            
            const entry: any = {};
            
            // Parse each field with robust key matching
            const idMatch = block.match(/id:\s*(.+)/);
            if (idMatch) entry.id = idMatch[1].trim();
            
            const actionMatch = block.match(/action:\s*(.+)/);
            if (actionMatch) entry.action = actionMatch[1].trim();
            
            const pathMatch = block.match(/path:\s*(.+)/);
            if (pathMatch) entry.path = pathMatch[1].trim();
            
            const shaMatch = block.match(/(?:commit_sha|commitSha):\s*(.+)/i);
            if (shaMatch) {
              const val = shaMatch[1].trim();
              entry.commitSha = val === "null" ? null : val;
            }
            
            const operatorMatch = block.match(/(?:operator_id|operatorId):\s*(.+)/i);
            if (operatorMatch) entry.operatorId = operatorMatch[1].trim();
            
            const timestampMatch = block.match(/(?:timestamp|approvedAt|approved_at|rejectedAt|rejected_at):\s*(.+)/i);
            if (timestampMatch) {
              const val = timestampMatch[1].trim();
              entry.timestamp = val === "null" ? null : val;
            }
            
            const errorMatch = block.match(/(?:error_class|errorClass):\s*(.+)/i);
            if (errorMatch) {
              const val = errorMatch[1].trim();
              entry.errorClass = val === "null" ? null : val;
            }
            
            if (entry.id) {
              entries.push(entry);
            }
          }
        }
      } catch (e: any) {
        if (e.status !== 404) throw e;
        // Audit file doesn't exist for this date
      }

      // Sort by timestamp descending (newest first)
      entries.sort((a, b) => {
        const aTime = a.timestamp ? new Date(a.timestamp).getTime() : 0;
        const bTime = b.timestamp ? new Date(b.timestamp).getTime() : 0;
        return bTime - aTime;
      });

      res.json({
        success: true,
        date,
        entries,
        count: entries.length,
      });
    } catch (error: any) {
      console.error(`[AUDIT] history error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to fetch audit history",
      });
    }
  });

  // ==========================================================
  // POST /api/pending/create-test – Create test pending (no client secret)
  // Server uses OS4_TRESOR_PUSH_KEY internally for backoffice proof
  // ==========================================================
  app.post("/api/pending/create-test", async (req, res) => {
    try {
      const storedKey = process.env.OS4_TRESOR_PUSH_KEY;
      if (!storedKey) {
        return res.status(500).json({
          success: false,
          error: "OS4_TRESOR_PUSH_KEY not configured on server",
        });
      }

      const ts = Date.now();
      const rand = Math.random().toString(36).slice(2, 8);
      const pendingId = `PENDING_${ts}_${rand}`;
      const pendingPath = `system/pending/${pendingId}.json`;

      const testTarget = {
        path: "system/logs/test/PENDING_BACKOFFICE_PROOF.md",
        content: `# Pending Proof\n\nCreated: ${new Date().toISOString()}\nPending ID: ${pendingId}\n\nIf approved, this file exists.\n`,
        commitMessage: "test(pending): backoffice create pending proof",
        branch: "main",
      };

      const pendingData = {
        id: pendingId,
        createdAt: new Date().toISOString(),
        requestedBy: "backoffice_test",
        target: testTarget,
        status: "pending",
      };

      const octokit = await getUncachableGitHubClient();
      const encodedContent = Buffer.from(
        JSON.stringify(pendingData, null, 2),
        "utf-8"
      ).toString("base64");

      await octokit.repos.createOrUpdateFileContents({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: pendingPath,
        message: `[OS4] Test pending created: ${pendingId}`,
        content: encodedContent,
        branch: "main",
      });

      console.log(`[PENDING] test created id=${pendingId}`);
      res.json({ success: true, pendingPath, pendingId });
    } catch (error: any) {
      console.error(`[PENDING] create-test error: ${error.message}`);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Failed to create test pending",
      });
    }
  });

  // ==========================================================
  // POST /api/migrate – Load migration document
  // ==========================================================
  app.post("/api/migrate", async (req, res) => {
    try {
      const parsed = migrateRequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          error: parsed.error.errors.map((e) => e.message).join(", "),
        });
      }

      const { migrationPath, branch } = parsed.data;
      const octokit = await getUncachableGitHubClient();
      const { data } = await octokit.repos.getContent({
        owner: OS4_REPO.owner,
        repo: OS4_REPO.repo,
        path: migrationPath,
        ref: branch,
      });

      if (Array.isArray(data) || data.type !== "file") {
        return res.status(400).json({
          success: false,
          error: "Migrations-Pfad ist keine Datei",
        });
      }

      const rawContent = Buffer.from(data.content, "base64").toString("utf-8");
      const parsedFrontmatter = parseYamlFrontmatter(rawContent);
      if (!parsedFrontmatter) {
        return res.status(422).json({
          success: false,
          rawContent,
          error: "Kein gültiges YAML-Frontmatter gefunden.",
        });
      }

      const documentCandidate = {
        version: parsedFrontmatter.frontmatter.version,
        name: parsedFrontmatter.frontmatter.name,
        description: parsedFrontmatter.frontmatter.description,
        steps: parsedFrontmatter.frontmatter.steps,
        metadata: Object.fromEntries(
          Object.entries(parsedFrontmatter.frontmatter).filter(
            ([k]) => !["version", "name", "description", "steps"].includes(k),
          ),
        ),
      };

      const validation = migrationDocumentSchema.safeParse(documentCandidate);
      if (!validation.success) {
        return res.status(422).json({
          success: false,
          error: "Schema-Validierung fehlgeschlagen.",
          validationErrors: validation.error.errors,
        });
      }

      res.json({
        success: true,
        document: validation.data,
        rawContent,
      });
    } catch (error: any) {
      console.error("Migrate error:", error);
      if (error.status === 401) clearGitHubCache();
      res.status(error.status || 500).json({
        success: false,
        error: error.message || "Fehler beim Laden des Migrationsdokuments",
      });
    }
  });

  return httpServer;
}

