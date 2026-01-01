# OS4 TRESOR — Secure API Routes (Spec)
**Version:** 1.1.0  
**Author:** @chef (Operator Level 10)  
**Verified by:** @blackwolf  
**Audited by:** @jura  
**Status:** BINDING · INTERNAL  
**Scope:** Operator Backoffice / Tresor API (Express)

---

## 1) Zweck
Diese Datei dokumentiert die **verbindliche API-Routen- und Security-Logik** des OS4 Tresor Servers.
GitHub ist Source of Truth. Read-only Default. Writes nur via Dual Authorization.

---

## 2) Routenübersicht (verbindlich)

### Health / Status
- `GET /api/status`
  - Zweck: Health + GitHub connected + Repo Info + Version

- `GET /api/system/status`
  - Zweck: “Source-of-Truth”-Status für Backoffice UI
  - Enthält: apiHealth, githubWrite, manualPushReady, autoPushReady, pendingCount, lastPushSha, lastPushTime, errorClass

### GitHub Read/Write
- `GET /api/pull`
  - Zweck: Datei aus Repo lesen
  - Validierung: `path` required, `branch` default "main"

- `POST /api/push`
  - Zweck: Datei ins Repo schreiben (Commit)
  - Mode:
    - `manual`: Operator PIN erforderlich
    - `auto`: `tresorKey + manualConfirm === true` erforderlich

### Pending (Dual Authorization Workflow)
- `POST /api/pending/create`
  - Auth: `tresorKey` (Body oder Header `X-OS4-TRESOR-KEY`)
  - Persistenz: schreibt `system/pending/PENDING_<...>.json` ins Repo

- `GET /api/pending/list`
  - Listet Pending JSONs aus `system/pending`

- `POST /api/pending/approve`
  - Auth: Operator PIN erforderlich
  - Führt den eigentlichen Push auf `pending.target.path` aus
  - Archiv: `system/pending_approved/APPROVED_<...>.json`
  - Entfernt Original Pending aus `system/pending`
  - Append Audit: `system/audit/OS4_PUSH_HISTORY_<YYYY-MM-DD>.yml`

- `POST /api/pending/reject`
  - Auth: Operator PIN erforderlich
  - Archiv: `system/pending_rejected/REJECTED_<...>.json`
  - Entfernt Original Pending aus `system/pending`
  - Append Audit (rejected)

### Migration
- `POST /api/migrate`
  - Lädt Migration-Dokument (YAML Frontmatter)
  - Validiert gegen `migrationDocumentSchema`

---

## 3) Security Rules (verbindlich)
- **R1:** Kein Write ohne Auth (PIN oder tresorKey+manualConfirm)
- **R2:** Secrets niemals in Logs oder Responses
- **R3:** Pending Approve/Reject nur Operator (PIN)
- **R4:** Pfade sind Repo-Paths ohne führendes `/`
- **R5:** Audit Append-only, kein Überschreiben

---

## 4) Observations / Risiken (muss behoben oder bewusst akzeptiert werden)

### O1 — `/api/system/status` “githubWrite” ist aktuell nur Token-Presence
Aktuell:
- `githubWrite: hasGitHubToken && connected`
Das ist **nicht** “Write OK”, sondern nur “Token vorhanden”.
Empfehlung:
- `githubWrite` als **zustandsbasiert** definieren:
  - OK = letzter Write erfolgreich (aus Audit/Receipt)
  - BLOCKED = letzter Write scheiterte mit TOKEN/AUTH
  - UNKNOWN = noch nie geschrieben / keine Daten

### O2 — Audit Feldnamen inkonsistent (kritisch)
Audit Append schreibt:
- `commit_sha`
- `timestamp`
- `approvedAt` wird **nicht** geschrieben

`/api/system/status` versucht jedoch zu parsen:
- `commitSha:` (camelCase)  
- `approvedAt:` (nicht vorhanden)

➡️ Ergebnis: `lastPushSha/lastPushTime` bleiben oft `null`.

**Fix-Option A (empfohlen):** system/status auf `commit_sha:` und `timestamp:` umstellen.  
**Fix-Option B:** Audit-Append auf camelCase ändern (weniger sauber, aber möglich).

### O3 — Pending Create erlaubt ggf. falsche target.path
In `pending/create` gibt es **keinen Schutz**, dass `target.path` nicht mit `/` beginnt.
Ihr hattet bereits den Fehler: `path cannot start with /`.
➡️ Fix: `if (target.path.startsWith("/")) return 400`.

### O4 — Operator Identity im Audit ist aktuell “operator_pin_auth”
Das ist ok als Minimum, aber nicht ideal.
Empfehlung:
- `operator_id` aus Backoffice (z.B. ausgewählter Operator/Device) mitschicken,
  aber weiterhin PIN als harte Auth.

---

#
