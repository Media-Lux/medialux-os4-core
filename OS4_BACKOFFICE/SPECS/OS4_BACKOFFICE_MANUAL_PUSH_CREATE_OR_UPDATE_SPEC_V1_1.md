---
id: OS4_BACKOFFICE_MANUAL_PUSH_CREATE_OR_UPDATE_SPEC_V1
type: spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Backoffice — Manual Kernel Push (Create-or-Update) Spec (V1)

## Problem
Der Manual Kernel Push scheitert bei bestehenden Dateien mit GitHub HTTP 422:
`"sha wasn't supplied"`.
Ursache: GitHub verlangt bei Updates die aktuelle Datei-SHA.

## Ziel
Manual Kernel Push muss:
- Datei **anlegen**, wenn sie nicht existiert (CREATE)
- Datei **aktualisieren**, wenn sie existiert (UPDATE mit SHA)
- dabei weiterhin:
  - PIN/Operator-Gate
  - Audit append-only
  - keine Autonomie

---

## Ablauf (verbindlich)

### 1) Preflight: Existenz prüfen
Backoffice führt vor dem Push aus:

- Request:
  - `GET /repos/{owner}/{repo}/contents/{path}?ref=main`

- Erwartete Antworten:
  - `200 OK` → Datei existiert → SHA aus Response übernehmen
  - `404 Not Found` → Datei existiert nicht → Create-Flow
  - `401/403` → Auth/Token Problem → klarer Fehler
  - sonst → Fehlermeldung + Abbruch

### 2) Push: Create oder Update
Backoffice ruft danach auf:

- `PUT /repos/{owner}/{repo}/contents/{path}`

#### 2a) Create-Flow (Datei existiert nicht)
Payload MUSS enthalten:
- message
- content (base64)
- branch (z. B. main)

Payload DARF NICHT enthalten:
- sha

#### 2b) Update-Flow (Datei existiert)
Payload MUSS enthalten:
- message
- content (base64)
- branch
- sha (aus Preflight 200 Response)

---

## UI/UX Verhalten (minimal, aber verbindlich)

### Felder (wie bisher)
- Pfad
- Inhalt (Markdown)
- Commit Message
- Operator PIN

### Zusatz (automatisch, read-only)
- Mode: `CREATE` oder `UPDATE`
- SHA: (nur im Update-Mode anzeigen, read-only)
- Preflight Status: OK / 404 / Auth Error

---

## Fehlermeldungen (DE/EN)

### Fall: Update ohne SHA (422)
**DE:** „Update blockiert: Datei existiert, aber SHA fehlt. Bitte Preflight erneut ausführen.“
**EN:** “Update blocked: file exists but SHA is missing. Please rerun preflight.”

### Fall: Datei existiert nicht (404 Preflight)
**DE:** „Datei nicht gefunden. Push wird als CREATE ausgeführt.“
**EN:** “File not found. Push will run as CREATE.”

### Fall: Auth/Token (401/403)
**DE:** „Keine Berechtigung. Token/Operator-Rechte prüfen.“
**EN:** “Unauthorized. Check token/operator permissions.”

### Fall: Rate Limit
**DE:** „GitHub Rate Limit erreicht. Bitte später erneut.“
**EN:** “GitHub rate limit reached. Try again later.”

---

## Audit (Pflicht)
Nach erfolgreichem Push muss geloggt werden:
- timestamp
- operator
- path
- mode (CREATE/UPDATE)
- commit_sha (vom GitHub Response)
- commit_message
- success true/false
- error (wenn false)

---

## Acceptance Criteria (Definition DONE)
1) Create neuer Datei funktioniert ohne SHA
2) Update bestehender Datei funktioniert mit automatisch geholter SHA
3) Kein 422 durch fehlende SHA mehr im Normalbetrieb
4) Modus (CREATE/UPDATE) ist im UI sichtbar
5) Audit enthält mode + commit_sha
