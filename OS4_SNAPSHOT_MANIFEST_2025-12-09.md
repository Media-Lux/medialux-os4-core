# OS4 Snapshot Manifest – Vor Tresor-Migration (V2)

## 0. Zweck
Dieses Manifest dokumentiert den Stand aller Dateien **vor** der Tresor-/Anatomie-Migration (V2).  
Es dient später dazu, beim Re-Import automatisch zu erkennen:

- welche Dateien bereits migriert (MIG_A) sind,
- welche Dateien wertvolles Gold sind, aber noch keine ID besitzen (MIG_B),
- welche Dateien alt/legacy sind (MIG_C),
- welche Ordner strukturell übernommen werden müssen.

---

## 1. Snapshot-Informationen

- SNAPSHOT_DATE: 2025-12-XX
- REPO: medialux-os4-core
- SNAPSHOT_TYPE: FULL_EXPORT
- COMMENT: Vollsicherung vor OS4 Tresor-/Anatomie-Integration (V2)

---

## 2. Bisherige MIG-Batches (falls vorhanden)

- OS4-MIG-V1 (ältere Migration)
- OS4-MIG-V2 (Basis-Evolution)
- *Weitere hier eintragen falls vorhanden*

Diese Batches bleiben gültig.

---

## 3. Ordner-Übersicht & MIG-Status

### 3.1. Ordner mit bereits migrierten Dateien (MIG_A)
*(Beispiele – bitte anpassen)*

- `/OS4_KERNEL/`  
- `/OS4_START/`  
- `/OS4_PHASE2/`  
- `/OS4_MODULES/`  
- `/OS4_LEGAL/`  
- `/OS4_CONTENT/`

→ Enthalten Dateien mit MIG-ID  
→ Werden als **MIG_A** klassifiziert  
→ In Tresor-V2 nur erweitert, nicht überschrieben

---

### 3.2. Ordner mit Gold-Dateien ohne MIG-ID (MIG_B)
*(Das ist das, was wir später „aufräumen“ und migrieren)*

- `/OS4_LEGACY/`
- `/BRAIN2CHAIN/`
- `/BLUEPRINTS/`
- `/AGENT_DESIGNS/`
- `/OLD_PROMPTS/`
- `/CONCEPTS/`
- `/NOTES/`
- `/ARCHIVE/`

→ Diese Ordner werden beim Tresor-V2-Rollout gescannt  
→ Jede Datei ohne ID bekommt eine neue MIG-ID  
→ Danach einsortiert in neue V2-Ordnerstruktur

---

### 3.3. Ordner für spätere Archivierung (MIG_C)
*(Alt, experimentell, veraltet – aber NICHT löschen)*

- `/EXPERIMENTAL/`
- `/TESTING/`
- `/SCRATCH/`

→ Erhalten `STATUS: LEGACY_ONLY`  
→ Keine aktive Nutzung mehr, aber sicher aufbewahrt

---

## 4. Letzte bekannte Kernel-/Systemdateien
*(Nur Referenzen; Inhalte bleiben unverändert)*

- OS4_START_SYSTEM_Evolution_Phase2_V1  
- OS4_Handover_EvolutionPhase_V1  
- OS4_MASTER_WISSENSSPEICHER  
- OS4_BOOTSTRAP_4457_V4 (als Legacy-Dokument)

---

## 5. Struktur für kommende Tresor-/V2-Ordner (Zielzustand)
*(Wird erst nach Migration gefüllt – dient nur der Vorbereitung)*

- `/OS4_TRESOR/`
  - `OS4_Tresor_CoreBlueprint_MinV1.md`
  - `OS4_Tresor_MasterBlueprint_V1.md`

- `/OS4_AGENTS/`
  - `OS4_AgentTeam_V1.md`
  - `AureliusCore/`
  - `Jura_PRO/`
  - `FinanceCore/`
  - `DevCore/`
  - weitere …

- `/OS4_BRANDS/`
  - `Brand_Template_V1.md`
  - `Tenant_Config/`

Diese Struktur wird während der Migration automatisch befüllt.

---

## 6. Hinweise für die spätere Migration

1. **Keine Datei wird gelöscht.**  
2. **Alle Dateien mit MIG-ID behalten diese.**  
3. **Alle Dateien ohne MIG-ID erhalten eine neue Tresor-V2-ID:**  
   - Format: `OS4-MIG-TRESOR-V2-XXXX`
4. Die Migration klassifiziert jede Datei automatisch:
   - MIG_A = bereits migriert → übernehmen  
   - MIG_B = Gold → migrieren  
   - MIG_C = Legacy → archivieren  
5. OS4 Evolution Phase 2 bleibt unverändert der offizielle Start.

---

## 7. Abschluss

Dieses Manifest ist der Referenzpunkt für die spätere automatische Tresor-V2-Migration.  
Jede Änderung im Repo nach diesem Snapshot soll klar dokumentiert werden.

**STATUS: SNAPSHOT_READY**
