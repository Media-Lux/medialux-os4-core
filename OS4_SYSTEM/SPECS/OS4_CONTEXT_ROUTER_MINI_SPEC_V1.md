---
id: OS4_CONTEXT_ROUTER_MINI_SPEC_V1
type: spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 ContextRouter — Mini Spec (V1)

## Zweck
Der ContextRouter ist das **Rückenmark**, das den OS4 Working Brain Kontext
konsistent zwischen:
- LiveGPT OS4-Tresor
- OS4 Operator Backoffice
- (später) Agents / Brain2Chain
transportiert.

Er ermöglicht: **"Wo stehen wir?"** ohne dass der Operator alles merken muss.

---

## Quelle der Wahrheit
- Schema: `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE.md`
- Current State: `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE_CURRENT_V1.md`

Der ContextRouter schreibt **nicht** autonom nach GitHub.
Er liest und liefert Kontext als **read-only** an Views.

---

## Minimal Responsibilities (V1)
1) **Read State**
- Kann `STATE_CURRENT` laden (read-only)

2) **Expose Context Snapshot**
- Liefert kompakten Snapshot für:
  - LiveGPT Header
  - Backoffice Working Brain Panel

3) **Resolve Mode**
- Liefert konsistente Runtime-Angabe:
  - active focus title
  - active status
  - waiting count
  - parked count
  - optional blocked-by

---

## Verboten (V1)
- keine Writes
- keine Priorisierung
- keine automatische Umordnung
- keine Ableitung neuer Tasks
- keine Hidden State Machine

---

## Update Trigger (V1)
ContextRouter aktualisiert Snapshot, wenn:
- `STATE_CURRENT` sich ändert (Commit oder Pull)
- Change Log neue Einträge enthält

Keine Zeit-Polls als Pflicht (optional später).

---

## Output Format (Snapshot)
```yaml
active:
  id: ...
  title: ...
  status: active|blocked
  blocked_by: ""   # optional
counts:
  waiting: 0
  parked: 0
meta:
  state_ref: OS4_WORKING_BRAIN_STATE_CURRENT_V1
  updated_at: ...
