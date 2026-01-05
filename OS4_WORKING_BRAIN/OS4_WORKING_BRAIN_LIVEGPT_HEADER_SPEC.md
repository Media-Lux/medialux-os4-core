---
id: OS4_WORKING_BRAIN_LIVEGPT_HEADER_SPEC_V1
type: view_spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Working Brain — LiveGPT Header Spec (V1)

## Zweck
Definiert **WAS** LiveGPT OS4-Tresor **immer oben** anzeigen muss,
damit der Operator jederzeit weiß:
- Wo stehen wir?
- Was ist aktiv?
- Was wartet?
- Was ist geparkt?

Read-only. Kein UI-Design. Nur Inhalt & Reihenfolge.

---

## Position
- **Fixiert im Header**
- Sichtbar **vor** jeder Antwort
- Kompakt (1–3 Zeilen)

---

## Inhalt (Pflicht)

### 🧠 Working Brain Status
**DE**
- Aktiver Fokus (Titel)
- Status (aktiv | blockiert)
- Wartend: Anzahl
- Parken: Anzahl

**EN**
- Active focus (title)
- Status (active | blocked)
- Waiting: count
- Parked: count

---

## Zusatz (optional, nur bei Blockade)
**DE**
- Blockiert durch: <Kurzgrund>

**EN**
- Blocked by: <short reason>

---

## Regeln
- Quelle: `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE.md`
- Kein Schreiben
- Keine Interaktion
- Keine Priorisierung
- Keine Navigation

---

## Aktualisierung
- Bei jedem State-Change
- Bei automatischer Verschiebung
- Bei Lifecycle-Änderung referenzierter Items

---

## Zielwirkung
- Permanente Orientierung
- Reduktion kognitiver Last
- Vertrauen: „Nichts ist vergessen“

