---
id: OS4_WORKING_BRAIN_RENDER_HOOKS_SPEC_V1
type: hook_spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Working Brain — Render Hooks Spec (V1)

## Zweck
Definiert **WANN** der Working-Brain-Bereich im OS4 Operator Backoffice
neu gerendert wird. **Read-only. State-getrieben.**

## Quelle
- `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE.md` (einzige Quelle)

---

## 🔔 Render-Trigger (zulässig)

### 1) State-Change
**Auslöser:**
- Commit an `OS4_WORKING_BRAIN_STATE.md`

**Aktion:**
- Backoffice rendert Working-Brain-Bereich neu

---

### 2) Lifecycle-Übergang (indirekt)
**Auslöser:**
- Lifecycle eines referenzierten Items wechselt
  (z. B. CAPTURED → IMPLEMENTED)

**Bedingung:**
- Item ist in AKTIV oder WARTEND referenziert

**Aktion:**
- Hinweis anzeigen („Lifecycle geändert“)
- Working-Brain-Bereich neu rendern

---

### 3) Blocker-Status geändert
**Auslöser:**
- Blocker-Feld in AKTIV/WARTEND geändert

**Aktion:**
- Status-Badge aktualisieren
- Erklärung anzeigen (Warum/Grundlage)

---

### 4) Automatische Verschiebung
**Auslöser:**
- Regelbasierte Verschiebung (Abschluss/Blockade/Gold/Reaktivierung)

**Aktion:**
- Bewegungs-Transparenz anzeigen
- Neu rendern

---

## 🚫 Keine Trigger
- UI-Interaktion
- Scrollen
- Filter
- Zeitbasierte Polls (optional nur, wenn State-Change erkannt)

---

## 🔎 Anzeige-Anforderungen
- Immer sichtbar
- Keine Edit-Felder
- Jede Änderung mit:
  - Von → Nach
  - Grund (faktisch)
  - Grundlage (Lifecycle/Blocker/Dependency)
  - Zeitpunkt

---

## 🔐 Sicherheit
- Kein Write
- Keine Priorisierung
- Keine Sortierung außerhalb der Spec

---

## Abhängigkeiten
- Backoffice liest **nur** den State
- Keine weitere Datenquelle erlaubt
