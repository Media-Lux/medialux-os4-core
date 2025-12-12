<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-11
  ID: OS4-MIG-TRESOR-V2-PREMIG-0001
  DATE: 2025-12-11
  SCOPE: PRE_MIGRATION_POLICY
  STATUS: ACTIVE
  NOTES: "Verbindliche Pre-Migration Policy vor jedem großen MIG-Lauf (Gold, Write-Zonen, Pilot-Scope)"
-->

# OS4 PRE-MIGRATION POLICY (V1)

Diese Policy ist verpflichtend für jeden OS4-Migrationslauf.

## 1) Ziel (von @chef festgelegt)
- Ziel: **Ordnung + Gold-Extraktion** (MIG_B → Transform in neue Dateien), nicht nur Index.

## 2) Schreibrechte während Migration
- Modus: **CONTROLLED WRITE**
- Writes sind erlaubt ausschließlich in:
  - `OS4_MIGRATION/REPORTS/`
  - `SANDBOX/MIG_RUNS/`
- Kernel wird nicht verändert.

## 3) Tabu-Zonen (No-Touch)
Folgende Bereiche dürfen im Rahmen der Migration NICHT verändert werden (Read-Only):
- `OS4_KERNEL/**`
- `OS4_KERNEL/LIVEGPT/**`
- Security-nahe Kernregeln bleiben unverändert; Änderungen nur als neue Version (V3+) nach Freigabe von @chef.

## 4) Ziel-Zonen für Migration-Writes
- `OS4_MIGRATION/REPORTS/` = dauerhafte Protokolle
- `SANDBOX/MIG_RUNS/` = Testläufe/Iteration
- Beide sind erlaubt.

## 5) Klassifizierungsreihenfolge
- Reihenfolge: **MIG_A → MIG_B → MIG_C**
- Erst prüfen, was bereits migriert ist, dann Gold, dann Legacy.

## 6) Gold-Definition (verbindlich)
Gold ist NUR, wenn mindestens eins zutrifft:
- Kernregeln / Sicherheitsregeln / Prozessdefinitionen
- Architektur-Blueprints
- API-Flows / Automationen
- Agent-Regeln / Trainingsmodule / Academy-Material
- Verträge/Business-Dokumente mit Wiederverwendungspotenzial

Nicht-Gold:
- doppelte Notizen
- unfertige Skizzen ohne Nutzen
- UI-Texte ohne Systemwert

## 7) Report-Format
- Format: **Mehrere kleine Reports pro Run**, mindestens:
  - `REPORT_STATUS.md`
  - `REPORT_FINDINGS.md`
  - `REPORT_GOLD.md`
  - `REPORT_NEXT_STEPS.md`

## 8) Pilot-Run (Scope D)
Der erste Pilot-Lauf umfasst ausschließlich:
- `OS4_DOCS/**`
- `OS4_MIGRATION/**`
- **ohne Kernel**

Ziel:
- Klassifizierung testen
- MIG_INDEX initialisieren/validieren
- Gold-Kandidaten markieren
- Reportstruktur etablieren

## 9) Operator-Regel
- @chef (Steven) ist Level 10 und entscheidet final.
- Kein Write außerhalb der definierten Zonen ohne ausdrückliche Freigabe.
