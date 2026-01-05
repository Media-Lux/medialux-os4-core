---
id: OS4_WORKING_BRAIN_STATE_V1
type: working_brain_state
version: 1.0
status: CANONICAL_STATE
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Working Brain — State (V1)

## Zweck
Diese Datei ist der **persistente Kontextanker** des OS4-Systems.

- GitHub = **Wahrheitsschicht** (verbindlich)
- Chat / Backoffice = **Anzeige & Erklärung** (nicht verbindlich)

## Regeln (nicht verhandelbar)
1) **3-Zonen-Modell**
- 🔴 AKTIV: max. 1 Fokus (JETZT)
- 🟡 WARTEND: max. 3 Foki (bewusst pausiert)
- 🟢 PARKEN: unbegrenzt (Gold / Wiedervorlage, ohne Druck)

2) **Automatik ist erlaubt, aber nicht autonom**
- Verschiebungen sind nur regelbasiert erlaubt (siehe „Automatikregeln“).
- Jede Verschiebung MUSS erklärt werden (Warum / Grundlage).

3) **Keine Ausführung, keine Entscheidungen**
- Working Brain führt NICHT aus.
- Working Brain entscheidet NICHT.
- Working Brain bewertet NICHT strategisch.
- Working Brain erklärt nur „Warum / Vorteil / Nutzen“ basierend auf vorhandenen Fakten (Lifecycle, Blocker, Abhängigkeiten).

4) **Immer sichtbar**
- Dieser Status soll im Chat und im OS4 Operator Backoffice jederzeit sichtbar sein.

---

## 🔴 AKTIV (max 1)
> Genau ein Fokus, an dem aktuell gearbeitet wird.

- id:
- title:
- repo_path:
- lifecycle: RAW | CAPTURED | CANDIDATE | CLASSIFIED | PRIORITIZED | IMPLEMENTED | ARCHIVED | REJECTED
- status: active | blocked
- blocker: (falls blocked)
- why_now: (1 Satz, faktisch)
- benefit: (1 Satz)
- outcome: (1 Satz)
- next_step: (genau 1 Schritt, ausführbar)
- last_touched_at:
- tags: []

---

## 🟡 WARTEND (max 3)
> Wichtige Foki, die bewusst pausieren, sichtbar aber ruhig.

### Position 1
- id:
- title:
- repo_path:
- lifecycle:
- blocker:
- why_waiting: (1 Satz, faktisch)
- unblocks_when: (was muss passieren, faktisch)
- last_touched_at:
- tags: []

### Position 2
- id:
- title:
- repo_path:
- lifecycle:
- blocker:
- why_waiting:
- unblocks_when:
- last_touched_at:
- tags: []

### Position 3
- id:
- title:
- repo_path:
- lifecycle:
- blocker:
- why_waiting:
- unblocks_when:
- last_touched_at:
- tags: []

---

## 🟢 PARKEN (Wiedervorlage / Gold)
> Ideen, Muster, Gold, strukturelle Hinweise. Keine Deadline, kein Druck.

- id:
- title:
- repo_path: (optional)
- why_gold: (1 Satz)
- relates_to: (AKTIV/WARTEND id oder Themenblock)
- suggested_zone_next: waiting | parked
- last_seen_at:
- tags: []

---

## 🔄 Automatikregeln (zulässig)
Automatische Verschiebungen sind erlaubt NUR bei:

A) **Abschluss**
- lifecycle → IMPLEMENTED oder ARCHIVED
→ AKTIV wird freigegeben, WARTEND rückt nach.

B) **Blockade erkannt**
- status = blocked UND blocker ist benannt
→ AKTIV → WARTEND (mit Erklärung)

C) **Gold-Erkennung**
- wiederholtes Auftauchen / Mehrfachreferenz
→ Thema → PARKEN (mit why_gold)

D) **Reaktivierung**
- blocker ist faktisch gelöst (Service/Handler existiert, Entscheidung erteilt)
→ WARTEND Position kann nach vorne rücken

## 🚫 Automatik verboten
- neue Foki erfinden
- Prioritäten „aus Gefühl“ ändern
- PARKEN löschen
- Strategien ableiten
- Aktionen ausführen

---

## 🧾 Change Log (append-only)
> Jede automatische Verschiebung muss hier protokolliert werden.

- at:
  action: moved
  from: active|waiting|parked
  to: active|waiting|parked
  item_id:
  reason: (faktisch, 1 Satz)
  based_on: (Lifecycle/Blocker/Dependency)
