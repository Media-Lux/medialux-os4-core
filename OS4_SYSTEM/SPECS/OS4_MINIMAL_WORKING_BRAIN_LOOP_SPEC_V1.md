---
id: OS4_MINIMAL_WORKING_BRAIN_LOOP_SPEC_V1
type: spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-07
---

# OS4 Minimal Working Brain Loop – Spec (V1)

## Ziel
Erster „lebender“ Kreislauf ohne Autonomie:

Lifecycle → Event Hub → Router (dispatch-only) → Decision Memory (append-only)

## Komponenten
1) `OS4_CORE/LIFECYCLE/LIFECYCLE_EVENT_HUB.py`
- erzeugt Events bei Lifecycle-Übergängen (Trigger Map)
- routet Events (dispatch-only)
- loggt queued/routed/failed (lokal/konzeptionell)

2) `OS4_WORKING_BRAIN/DECISION_MEMORY_APPEND.py`
- persistiert Dispatch-Events append-only als JSONL
- keine Löschungen, nur Append

## Trigger-Quelle (Phase 1)
Ein Lifecycle-State-Change muss real passieren.
Phase 1 erlaubt manuelle Auslösung (dev test run) und spätere Integration in echte State-Updates.

## Done-Kriterien
- Ein Lifecycle-Übergang (CLASSIFIED → PRIORITIZED) erzeugt ein OS4Event.
- Event wird geroutet (dispatch-only).
- Ein JSONL-Eintrag wird append-only geschrieben.
- Keine Autonomie, kein Agent-Execution, keine GitHub-Writes aus der Engine.

## No-Go
- Keine automatische Agenten-Aktivierung
- Kein Autopush
- Keine Kernel/Boot-DNA Änderungen
