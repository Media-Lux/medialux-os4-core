# OS4 TRESOR — Secure API Routes (Spec)

**Version:** 1.2.0  
**Author:** @chef (Operator Level 10)  
**Verified by:** @blackwolf  
**Audited by:** @jura  
**Status:** BINDING · INTERNAL  
**Scope:** Operator Backoffice / Tresor API (Express)

---

## 1) Zweck
Diese Datei definiert die **verbindliche API-Routen-, Sicherheits- und Governance-Logik**
des OS4 Tresor Servers.

**Grundsatz:**
- GitHub ist **Source of Truth**
- Read-only ist **Default**
- Writes erfolgen **nur** über Dual Authorization
- Pending ist **Vorschlag**, kein Commit

---

## 2) Routenübersicht (kanonisch & live)

### 2.1 Health / Status

#### `GET /api/status`
- Zweck: Server Health, GitHub-Verbindung, Repo, Version

#### `GET /api/system/status`
- Zweck: **Source-of-Truth Status** für Operator Backoffice
- Liefert ausschließlich **serverseitig belegbare Werte**

Pflichtfelder:
- `apiHealth`
- `githubWrite`
- `manualPushReady`
- `autoPushReady`
- `pendingCount`
- `lastPushSha`
- `lastPushTime`
- `errorClass`

---

### 2.2 GitHub Read / Write

#### `GET /api/pull`
- Zweck: Datei **gezielt** aus Repo lesen
- Regeln:
  - `path` **ohne führendes /** (z. B. `system/specs/file.md`)
  - `branch` default: `main`
- Keine Suche, kein Index, kein Raten

#### `POST /api/push`
- Zweck: Datei ins Repo schreiben (Commit)
- Modi:
  - **manual**
    - Auth: `operatorPIN` **oder** `operatorCode`
  - **auto**
    - Auth: `tresorKey`
    - Pflicht: `manualConfirm === true`
- Kein Write ohne explizite Auth

---

## 3) Pending – Dual Authorization Workflow (verbindlich)

### 3.1 Create Pending
`POST /api/pending/create`

Auth:
- `tresorKey === process.env.OS4_TRESOR_PUSH_KEY`

Validierung (Pflicht):
- `target.path` darf **nicht** mit `/` beginnen
- `target.commitMessage` vorhanden
- `target.content` vorhanden

Persistenz:
- schreibt **nur**:
```text
/system/pending/PENDING_<UUID>.json
