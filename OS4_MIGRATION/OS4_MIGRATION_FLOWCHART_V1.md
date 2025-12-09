<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0032
  DATE: 2025-12-09
  SCOPE: MIGRATION_FLOWCHART
  STATUS: ACTIVE
  NOTES: "Grafische/strukturelle Übersicht der kompletten Tresor-V2-Migrationspipeline"
-->

# OS4 Migration Flowchart – V1

Dieses Dokument visualisiert die **komplette Tresor-V2-Migrationspipeline**  
als Text-Flowchart – auf Basis von:

- `OS4_MIGRATION_ENGINE_V2.md`
- `OS4_MIG_Scanner_Plan_Tresor_V2.md`
- `OS4_Tresor_TargetStructure_V2.md`
- `MIG_INDEX.md`
- `OS4_TODO_MIGRATION_BACKLOG_V1.md`

Ziel:  
Du siehst auf einen Blick, **wie die Migration läuft**, von GitHub-Export → Tresor-Struktur.

---

## 0. High-Level Überblick

```text
GitHub-Export
   ↓
FileCollector
   ↓
MIG_Classifier (A/B/C)
   ↓
GoldExtractor (für MIG_B)
   ↓
RefinementPipeline
   ↓
MIG_ID_Assigner
   ↓
TargetMapper
   ↓
StructureAssembler
   ↓
IntegrityValidator
   ↓
SecurityGate
   ↓
MIG_INDEX Update
   ↓
FERTIG (Tresor-V2-Struktur aktiv)
