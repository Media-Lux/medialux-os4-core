---
state: ACTIVE
authority: OS4_TRESOR
scope: OPS
binding: NONE
automation: FORBIDDEN
execution: FORBIDDEN
---

# 🧩 OS4_TRESOR — GitHub Push Policy
## Permanent SHA Handling for pushFile Operations

### Zweck
Diese Policy definiert die verbindlichen Regeln für den Umgang mit dem `sha`-Feld
bei allen Push-Vorgängen über den OS4_TRESOR-Connector zur GitHub-Replit-Schnittstelle.

Sie schützt vor fehlerhaften oder nicht-deterministischen Reposchreibvorgängen
und wahrt die Integrität des Repositories ohne Eingriff in den Kernel.

---

## A) CREATE-Modus (Datei existiert **nicht**)
- `sha`-Feld **wird komplett weggelassen**
- **niemals** `sha: null`
- **niemals** `sha: ""`
- Push erfolgt nur mit:
  - `path`
  - `content`
  - `commitMessage`
  - `branch`

---

## B) UPDATE-Modus (Datei existiert **bereits**)
- Vor dem Push wird per `pullFile` der aktuelle `sha` ermittelt
- Dieser Wert wird als echter String in das Feld `sha` eingetragen
- Nur dann darf der Push ausgeführt werden

---

## C) Fallback / Fehlerbehandlung
Wenn der `sha`-Wert **nicht ermittelt werden kann**:
- Kein Push durchführen
- Kein Retry
- Stattdessen:
  - Vorgang abbrechen
  - Bericht erstellen (`STOP + REPORT`)

---

## D) Grundprinzip
> „Never push without knowing the exact state of the file system.“

Diese Regel gilt verbindlich für alle Tresor-Operationen,
aber **nicht** als Kernel- oder Governance-Regel.

---

© OS4_TRESOR · Operations Layer · GitHub Connector Policy