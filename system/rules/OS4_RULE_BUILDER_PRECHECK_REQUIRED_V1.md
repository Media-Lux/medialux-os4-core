---
id: OS4_RULE_BUILDER_PRECHECK_REQUIRED_V1
type: governance_rule
version: 1.0
status: ACTIVE
scope: Replit Agent3 / Builder
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Rule — Builder Precheck Required (V1)

## Warum
Replit Agent3 sieht Code, aber nicht automatisch:
- welche Backoffice-Funktionen produktiv laufen
- welche APIs Vertragsbestandteil sind
- welche Workarounds bewusst so gebaut sind
Ohne Precheck entsteht Regression-Risiko.

## Regel (verbindlich)
Kein Build, kein Code-Eingriff und keine Erweiterung durch Replit Agent3
darf erfolgen, **ohne vorherigen OS4-Tresor-Precheck** über:
1) stabile Core APIs
2) kritische Module (Audit/Pending/Manual Push/Auth)
3) erlaubte Erweiterungspunkte (Read-only Views/Panels)
4) bekannte Workarounds (nicht optimieren)

## Unveränderbar (Core APIs)
Folgende Funktionen sind produktiv stabil und dürfen NICHT geändert werden:
- getStatus()
- pullFile(path, branch)
- pushFile(path, content, commitMessage, branch, sha)

Verboten:
- refactor/rename/replace
- Änderung der Parameterstruktur
- Änderung der Response-Felder (success, sha, commit, commitUrl)

## Kritische Bereiche (No-Go)
- Audit System (nur Anzeige, keine Logik)
- Pending Queue (kein Auto-Clear, kein Überschreiben)
- Manual Push (muss manuell bleiben)
- Auth / PIN / Governance (absolut tabu)

## Safe to extend (nur Read/Display)
Erlaubt sind ausschließlich Erweiterungen in:
- Read-only Views / Panels
- Snapshot Reader (über pullFile)
- Log Extensions (Filter, Pagination, Export-Views)
Verboten ist jede Änderung an Write-/Freigabe-/Audit-Logik.

## Prozess (Pflichtablauf)
1) OS4-Tresor-Precheck ausführen und Ergebnis dokumentieren
2) Agent3-Prompt MUSS die No-Go-Bereiche explizit ausschließen
3) Agent3 liefert nur Diffs/Dateien (keine autonomen Commits)
4) Push ausschließlich über Operator Backoffice (PIN + Audit)

## Leitsatz
> Agent3 darf lesen und anzeigen —  
> aber niemals Kernlogik oder Freigabe-Pipeline anfassen.
