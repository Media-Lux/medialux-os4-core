import { useState, useEffect, useCallback } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { Brain, RefreshCw, AlertCircle, Clock, Pause, Loader2 } from "lucide-react";
import InfoTooltip from "./InfoTooltip";

interface WorkingBrainState {
  title: string;
  status: "active" | "blocked" | "unknown";
  blocker?: string;
  waitingCount: number;
  parkedCount: number;
  updatedAt: string | null;
}

const defaultState: WorkingBrainState = {
  title: "unknown",
  status: "unknown",
  waitingCount: 0,
  parkedCount: 0,
  updatedAt: null,
};

function parseWorkingBrainMarkdown(content: string): WorkingBrainState {
  const state: WorkingBrainState = { ...defaultState };

  try {
    const lines = content.split("\n");
    let inActiveSection = false;
    let inWartendSection = false;
    let inParkenSection = false;
    let waitingIds: Set<string> = new Set();
    let parkedIds: Set<string> = new Set();

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith("updated_at:")) {
        state.updatedAt = trimmed.replace("updated_at:", "").trim().replace(/['"]/g, "");
      }

      if (trimmed.includes("AKTIV") && (trimmed.startsWith("##") || trimmed.startsWith("#"))) {
        inActiveSection = true;
        inWartendSection = false;
        inParkenSection = false;
        continue;
      }
      if (trimmed.includes("WARTEND") && (trimmed.startsWith("##") || trimmed.startsWith("#"))) {
        inActiveSection = false;
        inWartendSection = true;
        inParkenSection = false;
        continue;
      }
      if (trimmed.includes("PARKEN") && (trimmed.startsWith("##") || trimmed.startsWith("#"))) {
        inActiveSection = false;
        inWartendSection = false;
        inParkenSection = true;
        continue;
      }
      if (trimmed.startsWith("---")) {
        inActiveSection = false;
        inWartendSection = false;
        inParkenSection = false;
        continue;
      }
      if (trimmed.startsWith("## ") || trimmed.startsWith("# ")) {
        if (!trimmed.includes("AKTIV") && !trimmed.includes("WARTEND") && !trimmed.includes("PARKEN")) {
          inActiveSection = false;
          inWartendSection = false;
          inParkenSection = false;
        }
        continue;
      }

      if (inActiveSection) {
        if (trimmed.startsWith("title:")) {
          state.title = trimmed.replace("title:", "").trim().replace(/['"]/g, "");
        }
        if (trimmed.startsWith("status:")) {
          const rawStatus = trimmed.replace("status:", "").trim().toLowerCase();
          if (rawStatus === "active" || rawStatus === "aktiv") {
            state.status = "active";
          } else if (rawStatus === "blocked" || rawStatus === "blockiert") {
            state.status = "blocked";
          } else {
            state.status = "unknown";
          }
        }
        if (trimmed.startsWith("blocker:")) {
          state.blocker = trimmed.replace("blocker:", "").trim().replace(/['"]/g, "");
        }
      }

      if (inWartendSection) {
        const idMatch = trimmed.match(/id:\s*["']?(WB-WAIT-\d+|[^"'\s,]+)["']?/);
        if (idMatch) {
          waitingIds.add(idMatch[1]);
        }
      }

      if (inParkenSection) {
        const idMatch = trimmed.match(/id:\s*["']?(WB-PARK-\d+|[^"'\s,]+)["']?/);
        if (idMatch) {
          parkedIds.add(idMatch[1]);
        }
        if ((trimmed.startsWith("- ") || trimmed.match(/^\d+\./)) && !trimmed.includes("id:")) {
          parkedIds.add(trimmed);
        }
      }
    }

    state.waitingCount = waitingIds.size;
    state.parkedCount = parkedIds.size;
  } catch (err) {
    console.error("[WorkingBrainPanel] Parse error:", err);
  }

  return state;
}

export default function WorkingBrainPanel() {
  const { lang } = useI18n();
  const [state, setState] = useState<WorkingBrainState>(defaultState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrainState = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/pull?path=OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE_CURRENT_V1.md&branch=main");
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      if (data.success && data.content) {
        const parsed = parseWorkingBrainMarkdown(data.content);
        setState(parsed);
      } else {
        throw new Error(data.error || "No content");
      }
    } catch (err: any) {
      console.error("[WorkingBrainPanel] Fetch error:", err);
      setError(lang === "de" ? "Working Brain Status nicht lesbar" : "Working Brain status not readable");
      setState(defaultState);
    }
    setLoading(false);
  }, [lang]);

  useEffect(() => {
    fetchBrainState();
    const interval = setInterval(fetchBrainState, 60000);
    return () => clearInterval(interval);
  }, [fetchBrainState]);

  const statusConfig = {
    active: {
      color: "text-green-400",
      bg: "bg-green-500/20 border-green-500/30",
      label: lang === "de" ? "aktiv" : "active",
      icon: Brain,
    },
    blocked: {
      color: "text-red-400",
      bg: "bg-red-500/20 border-red-500/30",
      label: lang === "de" ? "blockiert" : "blocked",
      icon: AlertCircle,
    },
    unknown: {
      color: "text-slate-400",
      bg: "bg-slate-500/20 border-slate-500/30",
      label: "unknown",
      icon: Brain,
    },
  };

  const config = statusConfig[state.status];

  return (
    <div
      className="rounded-xl border border-slate-500/20 p-4"
      style={{
        background: "linear-gradient(135deg, rgba(71,85,105,0.1) 0%, rgba(51,65,85,0.08) 100%)",
        backdropFilter: "blur(8px)",
      }}
      data-testid="panel-working-brain"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 opacity-70" />
          <span className="text-sm font-medium text-slate-300">Working Brain</span>
          <InfoTooltip
            content={
              lang === "de"
                ? "Zeigt den aktuellen Fokus und Status des OS4 Working Brain (Read-Only)"
                : "Shows the current focus and status of OS4 Working Brain (Read-Only)"
            }
          />
        </div>
        <button
          onClick={fetchBrainState}
          disabled={loading}
          className="p-1 rounded hover:bg-white/10 transition-colors disabled:opacity-50"
          title={lang === "de" ? "Aktualisieren" : "Refresh"}
          data-testid="button-refresh-brain"
        >
          <RefreshCw className={`w-3.5 h-3.5 opacity-50 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {loading && !state.title ? (
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Loader2 className="w-3 h-3 animate-spin" />
          <span>{lang === "de" ? "Lade..." : "Loading..."}</span>
        </div>
      ) : error ? (
        <div className="text-xs text-red-400 flex items-center gap-2">
          <AlertCircle className="w-3 h-3" />
          {error}
        </div>
      ) : (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
            <div className="text-slate-500 mb-1">{lang === "de" ? "Aktiver Fokus" : "Active Focus"}</div>
            <div className="text-slate-300 font-medium truncate" title={state.title}>
              {state.title}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
            <div className="text-slate-500 mb-1">Status</div>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs ${config.bg} ${config.color}`}>
                <config.icon className="w-3 h-3" />
                {config.label}
              </span>
            </div>
          </div>

          {state.status === "blocked" && state.blocker && (
            <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20">
              <div className="text-red-400/70 mb-1">{lang === "de" ? "Blockiert durch" : "Blocked by"}</div>
              <div className="text-red-400 font-medium">{state.blocker}</div>
            </div>
          )}

          <div className="flex gap-2">
            <div className="flex-1 p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
              <div className="flex items-center gap-1 text-slate-500 mb-1">
                <Clock className="w-3 h-3" />
                <span>{lang === "de" ? "Wartend" : "Waiting"}</span>
              </div>
              <div className="text-slate-300 font-medium text-lg">{state.waitingCount}</div>
            </div>
            <div className="flex-1 p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
              <div className="flex items-center gap-1 text-slate-500 mb-1">
                <Pause className="w-3 h-3" />
                <span>{lang === "de" ? "Parken" : "Parked"}</span>
              </div>
              <div className="text-slate-300 font-medium text-lg">{state.parkedCount}</div>
            </div>
          </div>

          {state.updatedAt && (
            <div className="text-[10px] text-slate-500 text-center mt-2">
              {lang === "de" ? "Stand" : "Updated"}: {state.updatedAt}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
