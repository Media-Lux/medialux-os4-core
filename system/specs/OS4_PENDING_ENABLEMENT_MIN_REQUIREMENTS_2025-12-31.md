# OS4 Pending Enablement — Minimum Requirements (Operator Backoffice)

**Status:** BINDING · INTERNAL  
**Datum:** 2025-12-31  
**Autorität:** @chef  
**Scope:** Operator Backoffice Pending Flow  
**Prinzip:** GitHub = Source of Truth · Read-only Default · Keine Autonomie · Operator bestätigt Writes

---

## 0) Klarstellung (wichtig)

- ChatGPT / LiveGPT kann **keine direkten HTTP-Requests** an Replit ausführen.
- Pending-Erstellung muss **serverseitig** erfolgen (Express API), ausgelöst durch:
  - internes Tool / LiveGPT-Bridge (falls vorhanden)
  - Backoffice Test-Button (empfohlen)
  - ein anderes System, das HTTP kann
- Operator-PIN darf **nie** an GPT gehen. Approve/Reject passiert **nur im Backoffice**.

---

## 1) GitHub Source-of-Truth Struktur

### 1.1 Pending Store (Repo)
Pfad:
- `/system/pending/`

Dateiformat:
- `PENDING_<UUID>.json`

Minimalfelder:
- `id` (UUID)
- `created_at` (ISO)
- `created_by` (string; z.B. "livegpt" / "operator-test")
- `target_path` (repo path, ohne führendes "/")
- `proposed_content` (string)
- `commit_message` (string)
- `approval_required` (boolean, immer true in OS4)
- `governance_ref` (string; Pfad zur Governance-Decision)
- `status` ("pending")

Wichtig:
- **Keine Auto-Approve Logik.**
- Pending ist **nur Vorbereitung**.

### 1.2 Approved/Rejected Archiv (Repo)
- `/system/pending_approved/APPROVED_<UUID>.json`
- `/system/pending_rejected/REJECTED_<UUID>.json`

---

## 2) API Endpunkte (Express) — Required

### 2.1 Create Pending (serverseitig)
`POST /api/pending/create`

Auth:
- Header oder body: `tresorKey`
- Server prüft: `tresorKey === process.env.OS4_TRESOR_PUSH_KEY`

Body:
- Pending Payload (siehe 1.1)

Server Verhalten:
- Validierung:
  - `target_path` darf **nicht** mit `/` beginnen (Bugklasse: "path cannot start with /")
  - `governance_ref` muss gesetzt sein
  - `approval_required` muss `true` sein
- Persistenz:
  - Pending wird als Datei in GitHub geschrieben: `/system/pending/PENDING_<UUID>.json`

Response:
- `success`, `pending_id`, `path`

### 2.2 List Pending (Backoffice UI)
`GET /api/pending/list`

Response:
- Liste aus `/system/pending/` (max 50)
- Minimal: `id`, `created_at`, `created_by`, `target_path`, `commit_message`

### 2.3 Approve Pending (Operator-only)
`POST /api/pending/approve`

Auth:
- Operator PIN Pflicht: `operatorPIN === process.env.OS4_OPERATOR_PIN`

Body:
- `pending_id`

Server Verhalten:
- lädt Pending aus `/system/pending/`
- führt Commit auf `target_path` mit `proposed_content` aus
- schreibt Audit Receipt (append-only) gemäß Governance
- verschiebt Pending nach `/system/pending_approved/`
- entfernt Original aus `/system/pending/`

### 2.4 Reject Pending (Operator-only)
`POST /api/pending/reject`

Auth:
- Operator PIN Pflicht

Body:
- `pending_id`, optional `reason`

Server Verhalten:
- verschiebt Pending nach `/system/pending_rejected/`
- optional append Audit "rejected" (ohne commit_sha, aber mit pending_id)

---

## 3) Backoffice UI — Required

### 3.1 Pending Panel
- zeigt `pending_count`
- listet Pendings (id, target_path, created_at, created_by, commit_message)
- Buttons:
  - Approve (PIN prompt)
  - Reject (PIN prompt)

### 3.2 Source-of-Truth Anzeige
- Pending Count aus `/system/pending/` (via API list)
- Last Push (SHA/Zeit) aus Audit/Repo
- Fehlerklasse differenziert anzeigen (AUTH vs TOKEN vs IO vs POLICY)

---

## 4) Häufigster Grund, warum Pending nicht funktioniert
1) Endpoint existiert nicht (`/api/pending/create` nie implementiert)
2) Auth-Prüfung falsch (tresorKey env fehlt/anders)
3) Repo-Pfadfehler: `target_path` beginnt mit `/`
4) LiveGPT kann keine Requests senden → falsche Erwartung

---

## 5) Minimum Test (ohne LiveGPT)
Empfohlen:
- Backoffice Button: "Create Test Pending"
- erzeugt Pending via `POST /api/pending/create` mit `created_by: operator-test`
- danach muss Pending im Panel erscheinen
- Approve per PIN → Commit + Audit + Move in approved

---
