<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0031
  DATE: 2025-12-09
  SCOPE: MIGRATION_BACKLOG
  STATUS: ACTIVE
  NOTES: "Backlog aller noch ausstehenden Migrationen vor GitHub-Import"
-->

# OS4 Migration Backlog – V1

Dieses Dokument listet **alle Aufgaben, Dateien, Bereiche und Strukturen**,  
die im Tresor-/Migration-V2-System migriert werden müssen, sobald der  
komplette GitHub-Export aus deinen Repositories eingespielt wird.

Der Backlog wird später von der Migration Engine V2 verarbeitet.

---

# 0. Zweck

- Vorbereitung der finalen Tresor-V2-Migration  
- Übersicht aller Dateien ohne MIG-ID  
- Übersicht aller Legacy-Bereiche  
- Übersicht der fehlenden Agent-Instanzen  
- Übersicht der fehlenden Brand-Module  
- Struktur-Fehlererkennung  
- Planung für vollständige Integration aller GitHub-Daten  

---

# 1. Zu migrierende Bereiche (MIG_B)

Folgende Bereiche enthalten **vermutlich** Dateien ohne MIG-ID (werden nach Upload exakt bestimmt):

- `/OS4_LEGACY/`
- `/OS4_AGENTS/*/<AgentName>_old/`
- `/OS4_BRANDS/*/deprecated/`
- `/Doku/`
- `/concepts/`
- `/ideas/`
- `/chat_exports/`
- `/notizen/`
- `/docs/old/`
- `/backup_imports/`

Diese Bereiche werden durchlaufen von:

- **GoldScanner**  
- **Refiner**  
- **StructureAssembler**  
- **MIG_ID_Assigner**  
- **IntegrityValidator**

---

# 2. Fehlende MIG-Header – bekannte Risikozonen

Nach bisherigen OS4-V1 und OS4-V2 Arbeiten sind voraussichtlich betroffen:

- alte Architektur-Skizzen  
- nicht migrierte PDF-Zusammenfassungen  
- Chat-Export-Dateien  
- alte Agent-Notizen  
- frühere OS4-Startprompts  
- mehrere vorbereitende Konzepte (Pre-Tresor)

Diese werden automatisch klassifiziert als:

