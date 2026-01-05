---
id: OS4_BACKOFFICE_LAST_PUSH_STATUS_SEMANTICS_SPEC_V1
type: spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
scope: OS4 Operator Backoffice (UI/Read-Side only)
---

# OS4 Backoffice — Last Push Status Semantics Spec (V1)

## Problem
Im Dashboard erscheinen widersprüchliche Signale:
- System/SoT wirkt nominal (GitHub ok, Republish ok, Working Brain aktiv)
- Gleichzeitig zeigt das Backoffice „Letzter Push: fehlgeschlagen“

Ursache: UI mischt historische Fehlversuche (z. B. SHA-422) mit aktuellem Systemzustand.

## Ziel
Die Backoffice-Anzeige muss klar trennen zwischen:
1) **Letzter erfolgreicher Push** (canonical, relevant)
2) **Letzter fehlgeschlagener Versuch** (historisch, nur Hinweis)
3) **Systemzustand / Source of Truth** (current)

Keine Backend-Logik anfassen. Nur UI-Semantik + Darstellung.

---

## Begriffe (verbindlich)

### A) LastSuccessfulPush (LSP)
- Definition: der letzte Push, der mit `success:true` abgeschlossen wurde.
- Daten: sha, timestamp, path, commitUrl.

### B) LastFailedAttempt (LFA)
- Definition: der letzte fehlgeschlagene Versuch (z. B. 422 sha missing).
- Daten: timestamp, errorCode, errorMessage, path (optional), attemptType (manual/pending).
- Wichtig: LFA ist **nicht** gleich „System kaputt“. Es ist ein historischer Hinweis.

### C) SoT Status (Truth Snapshot)
- Definition: aktueller Zustand aus den bekannten stabilen Quellen (GitHub, API health, Operator Auth).
- Muss nicht identisch mit LFA sein.

---

## UI-Regeln (verbindlich)

### 1) Dashboard-Kachel „Letzter Push“
Diese Kachel zeigt **standardmäßig nur LSP**.
- Status: ✅ Verifiziert (wenn LSP vorhanden)
- Zeigt: sha, zeit, path (optional)

### 2) Historische Fehlversuche (LFA) werden separat angezeigt
Unterhalb / als kleiner Hinweis, z. B.:
- „Letzter Fehlversuch (historisch): <timestamp> — <Kurzgrund>“

**Kein roter Hauptstatus**, solange LSP erfolgreich und SoT nominal ist.

### 3) Ampellogik (einfach, operatorfreundlich)
- 🟢 Grün: LSP vorhanden + SoT nominal
- 🟡 Gelb: LSP alt (z. B. > X Stunden) ODER SoT unklar
- 🔴 Rot: SoT kritisch (API down, Auth fail, Repo unreachable)
  → Rot darf NICHT durch LFA allein ausgelöst werden.

### 4) Stale Error Handling (wichtig)
Wenn nach einem LFA ein LSP folgt:
- LFA bleibt als Hinweis sichtbar
- aber UI darf nicht mehr „fehlgeschlagen“ als Hauptstatus zeigen.

---

## Labels (DE/EN)

### DE
- „Letzter erfolgreicher Push“
- „Letzter Fehlversuch (historisch)“
- „Systemzustand“

### EN
- “Last successful push”
- “Last failed attempt (historic)”
- “System status”

---

## Datenquellen (nur Read-Side)
- bestehende Push-Verlauf/Audit-Ansichten
- bestehende Response-Felder: `success`, `sha`, `commitUrl`, `error`
- keine neue API, kein Umbau der Core APIs

---

## Acceptance Criteria (DONE)
1) Dashboard zeigt **nicht mehr rot**, wenn der letzte erfolgreiche Push existiert.
2) Fehlversuche erscheinen **als separater Hinweis**, nicht als Hauptstatus.
3) SoT-Kachel bleibt unabhängig und zeigt current health/auth/repo korrekt.
4) Keine Änderung an `getStatus/pullFile/pushFile` und an Audit/Pending/Auth Logik.
