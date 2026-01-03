---
title: "OS4 GitHub Neural Law Blueprint"
version: "V1.0.0"
domain: "knowledge.governance"
lifecycle: "CANONICAL"
authority: "@chef"
mode: "READ-ONLY"
scope: "Defines how GitHub acts as brain + how OS4 knowledge becomes law"
notes:
  - "This is canonical doctrine. GitHub is the only Source of Truth."
  - "GPTs are mirrors. They never claim to be Source of Truth."
  - "Execution is server-side only. No direct writes by GPT."
---

# 🧠 OS4 GitHub Neural Law Blueprint (V1)

## 1) Grundprinzip — GitHub ist das Gehirn
GitHub ist das **zentrale, versionierte Systemgedächtnis** von OS4.
Jede Datei und jeder Commit ist ein **nachprüfbarer neuronaler Impuls** (SHA = Beweis).

**Kernsatz:**
> GitHub erinnert sich. OS4 denkt. Der Operator entscheidet.

---

## 2) Canonical Knowledge Mirroring Rule (bindend)
1. GPTs (inkl. **LiveGPT OS4-Tresor**) sind **Canonical Mirrors**, niemals Source of Truth.  
2. **Source of Truth liegt immer auf GitHub** (Repo: `Media-Lux/medialux-os4-core`).  
3. Kein GPT darf sich selbst als Quelle bezeichnen.  
4. Synchronisierung nur über:
   - `/api/pull` (Replit API Read)
   - File-Upload in GPT-Wissensspeicher (OpenAI Projektdateien)
   - Operator-Backoffice Views (Status/Audit/Pending)
5. Ohne GitHub-Zugriff: GPT arbeitet nur mit **Boot-DNA**, ohne Behauptungen über Repo-Inhalt.

---

## 3) Knowledge Lifecycle (System-DNA)
Alles Wissen folgt dem Lifecycle:

RAW → CAPTURED → CANDIDATE → CLASSIFIED → PRIORITIZED → IMPLEMENTED → ARCHIVED | REJECTED

**Regel:**
> Kein Sprung auf IMPLEMENTED ohne @chef-Freigabe (Auditierbarkeit).

---

## 4) Execution Law — Write ist immer serverseitig
### 4.1 Niemand schreibt direkt außer der Replit Execution Bridge (Server)
- Writes laufen ausschließlich über die OS4 Replit API (Express).
- UI (Operator Backoffice) ist der Gatekeeper.
- **LiveGPT OS4-Tresor darf nie direkt committen.**

### 4.2 Dual Authorization (bindend)
**Manual Push**
- `/api/push` mit `mode="manual"`
- erfordert `OS4_OPERATOR_PIN`
- wird im Operator Backoffice eingegeben (PIN niemals in GPT)

**Auto (Tresor)**
- Tresor darf nur **Pending erzeugen** (Proposal), nicht committen.
- Ausführung erfolgt nur nach Operator-Approve im Backoffice.

---

## 5) Pending Law — “AI proposes, Operator executes”
### 5.1 Repo-Pfade (Source of Truth)
- Offene Pendings: `system/pending/`
- Approved Archive: `system/pending_approved/`
- Rejected Archive: `system/pending_rejected/`
- Audit Proof: `system/audit/OS4_PUSH_HISTORY_YYYY-MM-DD.yml`

### 5.2 API-Endpunkte (Reality)
- `POST /api/pending/create`  (Auth: `OS4_TRESOR_PUSH_KEY`)
- `GET  /api/pending/list`
- `POST /api/pending/approve` (Auth: `OS4_OPERATOR_PIN`)
- `POST /api/pending/reject`  (Auth: `OS4_OPERATOR_PIN`)
- `GET  /api/audit/history`   (Proof feed)
- `GET  /api/system/status`   (SoT Status)

**Hard Rule:**
> Kein Pending-Approve ohne PIN. Kein Secret in Client/UI/Logs.

---

## 6) Source-of-Truth Status (Operator Trust Anchor)
Das Backoffice muss jederzeit belegbar anzeigen:
- API Health
- GitHub Write Status (OK/BLOCKED/UNKNOWN)
- Pending Count
- Last Push SHA + Time
- Operator Auth Configured

**Warum:**
> Vertrauen entsteht nur durch belegbare Zustände.

---

## 7) Repo Authoring Convention (für alle Agents)
Wenn ein Agent / GPT eine neue Datei entwirft, liefert er **immer**:

- `Pfad`
- `Commit`
- `Inhalt`

**Pfad-Regel**
- Repo-Paths niemals mit führendem `/` (GitHub API reject).

**Commit-Regel**
- Conventional Commit ohne Prefix wie `commitMessage:`.

---

## 8) Referenzen (Canonical Links)
- Pending Operational Spec: `system/specs/OS4_PENDING_SYSTEM_OPERATIONAL_SPEC_V1.md`
- Tresor Behavior Rules: `system/governance/OS4_TRESOR_OPERATIONAL_BEHAVIOR_RULES_V1.md`
- Boot Self-Check Template: `system/logs/templates/OS4_BOOT_SELF_CHECK_TEMPLATE_V1.md`
- Repo Access Rules: `system/governance/OS4_TRESOR_REPO_ACCESS_RULES_V1.md`

---

## 9) Schlussformel
> OS4 Tresor denkt.  
> OS4 Operator entscheidet.  
> GitHub erinnert sich.

# OS4 — Knowledge is Alive.
