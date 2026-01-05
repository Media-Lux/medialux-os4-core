---
id: OS4_WORKING_BRAIN_SNAPSHOT_READ_SPEC_V1
type: spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Working Brain — Snapshot Read Spec (V1)

## Zweck
Definiert, wie Backoffice und LiveGPT den **gleichen** Working-Brain-Status
konsistent lesen und anzeigen.

## Quelle (single source)
- **Current State File**
  - `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE_CURRENT_V1.md`

## Konsumenten
1) OS4 Operator Backoffice (Working Brain Panel)
2) LiveGPT OS4-Tresor (Header)

## Read Rules (verbindlich)
- Read-only
- Keine Transformation, die Inhalte verändert
- Wenn Parsing fehlschlägt:
  - Fallback: Counts = 0, Active = "unknown"
  - Fehlermeldung intern loggen (Audit), UI zeigt „State unreadable“

## Minimal Output (für Anzeige)
Backoffice und LiveGPT dürfen exakt diese Felder anzeigen:

- Active.title
- Active.status
- Active.blocker (nur wenn blocked)
- waiting_count (Anzahl Positionen mit id)
- parked_count (Anzahl Items)
- meta.updated_at
- meta.schema_ref

## Aktualisierung
- Backoffice: bei jedem Commit/State-Change (Render Hooks Spec)
- LiveGPT: bei Start + bei jedem Pull/Refresh

## Fehlertexte (DE/EN)
DE:
- „Working Brain Status nicht lesbar (State unreadable).“
- „Working Brain geladen: <Active>“

EN:
- “Working Brain status unreadable.”
- “Working Brain loaded: <Active>”
