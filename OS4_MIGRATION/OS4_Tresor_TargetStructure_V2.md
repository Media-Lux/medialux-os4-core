<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0002
  DATE: 2025-12-09
  SCOPE: MIGRATION
  STATUS: ACTIVE
  NOTES: "Ziel-Ordnerstruktur für OS4 Tresor-/Anatomie-System V2"
-->

# OS4 – Ziel-Ordnerstruktur (Tresor-/Anatomie-System, V2)

Diese Datei definiert die **Zielstruktur**, die nach der Tresor-/Anatomie-Migration (V2) in `medialux-os4-core` verwendet wird.  
Alle bestehenden Dateien werden in diese Struktur eingeordnet, jedoch **nicht gelöscht**.

---

## 1. Zielverzeichnisbaum

```text
/
├── OS4_KERNEL/
│   ├── OS4_START_SYSTEM_Evolution_Phase2_V1.md
│   ├── OS4_Handover_EvolutionPhase_V1.md
│   ├── OS4_Tresor_CoreBlueprint_MinV1.md
│   ├── OS4_Tresor_MasterBlueprint_V1.md
│   └── OS4_ID_SYSTEM/
│
├── OS4_AGENTS/
│   ├── OS4_AgentTeam_V1.md
│
│   ├── AureliusCore/
│   │   ├── AC_Module_01.md
│   │   ├── AC_Module_02.md
│   │   └── ... (max. 20 Dateien)
│
│   ├── Jura_PRO/
│   │   ├── JP_Module_01.md
│   │   ├── JP_Module_02.md
│   │   └── ... (bis JP_Module_41.md)
│
│   ├── FinanceCore/
│   ├── DevCore/
│   ├── SalesCore/
│   ├── StrategyCore/
│
│   └── MicroAgents/
│       ├── GoldScanner.md
│       ├── Refiner.md
│       ├── IndexBuilder.md
│       └── Validator.md
│
├── OS4_BRANDS/
│   ├── Brand_Template_V1.md
│   ├── BioTECH/
│   ├── Brand2Chain/
│   ├── Brain2Chain/
│   ├── TSP/
│   └── FVO/
│
├── OS4_MIGRATION/
│   ├── OS4_MIGRATION_PLAN_TRESOR_V2.md
│   ├── OS4_SNAPSHOT_MANIFEST_2025-12-XX.md
│   ├── OS4_Tresor_TargetStructure_V2.md
│   └── MIG_INDEX.md
│
├── OS4_LEGACY/
│   ├── unverändert_alt/
│   ├── V1_Dokumente/
│   ├── alte_Blueprints/
│   └── Archiv/
│
└── README.md
