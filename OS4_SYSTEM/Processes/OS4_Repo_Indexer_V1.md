# OS4_Repo_Indexer_V1 – Systemweiter Indexer für Brain2Chain (@Brain)
Version: 1.0  
Owner: @chef (Steven Wagner)  
Layer: OS4_SYSTEM / Processes  
Status: CORE-REQUIRED

## 0. Zweck
Der OS4 Repo Indexer erstellt einen vollständigen, maschinenlesbaren Index ALLER OS4-Systemdateien, Avatare, Kernmodule, Master-Files, Security-Komponenten und Knowledge Packs.  

Er ist die Grundlage für:
- Brain2Chain (@Brain)
- Delegation Engine
- Integrity Guard
- API Hub
- Migration Engine V2
- Academy Extractor

Der Indexer wird bei jedem OS4 Start ausgeführt.

---

# 1. Quellen (verbindliche Systemdateien)

Der Indexer liest (nicht editierend) alle folgenden Dokumente ein:

### 1.1 CoreKernel V1 & V2
Referenzen:
- OS4_CoreKernel_V1.docx :contentReference[oaicite:0]{index=0}  
- OS4_CoreKernel_V2_Complete.md :contentReference[oaicite:1]{index=1}  
- MASTERFILE V1.4 (CoreKernel_V2 integriert) :contentReference[oaicite:2]{index=2}  

Ausgelesene Datenpunkte:
- Kernel-Schichten  
- Security-Komponenten  
- Routing-Logik  
- Avatar-Liste  
- ID-System  
- Migrationslogik  
- Storage Map Grundstruktur  

### 1.2 Security Fortress V2
Quelle:
- OS4_Master_Security_V2.docx :contentReference[oaicite:3]{index=3}  

Datenpunkte:
- Blackwolf  
- AuditGuard  
- KnowledgeGuard  
- ProcessGuard  
- AntiLeak  
- AccessMatrix  
- Tester_WL  
- Security Hooks  
- WL Regeln  

### 1.3 ID-System
Quelle:
- OS4_ID_System_V1.docx :contentReference[oaicite:4]{index=4}  
- OS4_ID_MasterRegistry.json :contentReference[oaicite:5]{index=5}  

Datenpunkte:
- Produkt-ID  
- Dokument-ID  
- Kunden-ID  
- Kategorien  
- nächste freie IDs  

### 1.4 Storage Map
Quelle:
- OS4_Master_Storage_Map_V2_Complete.docx :contentReference[oaicite:6]{index=6}  

Datenpunkte:
- Ordnerstruktur  
- Ablageregeln  
- Master-Files  
- Knowledge Packs  
- External AI Provider  
- Release-Struktur  

### 1.5 Migrations-Regeln
Quelle:
- OS4_Command_BackupBatch_Rule_V1.docx :contentReference[oaicite:7]{index=7}  
- OS4_Migration_Guide_V1.docx :contentReference[oaicite:8]{index=8}  

Datenpunkte:
- Batch-Größe = 10  
- ZIP-Pflicht nach jedem Batch  
- Klassifikation / Extraktion  
- Legacy-Zuordnung  
- Integrationslogik  
- Safety-Prüfungen  

### 1.6 Knowledge Boundary
Quelle:
- OS4_KnowledgeBoundary_Guide_V1.docx :contentReference[oaicite:9]{index=9}  
- OS4_Assistant_KnowledgeMemory_Rules_V1.docx :contentReference[oaicite:10]{index=10}  

Datenpunkte:
- Was darf ins Memory?  
- Was gehört in Packs?  
- Was ist verboten?  
- Minimierungsregeln  

### 1.7 Prompt Schemas
Quelle:
- OS4_PromptSchemas_Master.docx :contentReference[oaicite:11]{index=11}  

Datenpunkte:
- TASK_LIST_V2  
- Visual Templates  
- Sicherheits-Testprompts  
- Trainingsdatenformat  

### 1.8 Avatar Registry
Quelle:
- OS4_AvatarRegistry_Master.json :contentReference[oaicite:12]{index=12}  

Datenpunkte:
- Rollen  
- Rechte  
- Layer  
- Security Flags  
- Mandantenzugehörigkeit  
- Routing Matrix  

### 1.9 KnowledgePack Master
Quelle:
- OS4_KP_Master_V1.md :contentReference[oaicite:13]{index=13}  

Datenpunkte:
- aktive Packs  
- Pack-Versionen  
- Pack-Regeln  
- Pack-Inhalte  

---

# 2. Aufgaben des Indexers

## 2.1 Dateiscanner
Der Indexer durchsucht alle OS4-Verzeichnisse nach Dateien:

- /OS4_CORE/
- /OS4_SYSTEM/
- /OS4_KNOWLEDGE_PACKS/
- /OS4_EXTERNAL_AI/
- /OS4_PROMPTS/
- /OS4_DEV_GUIDES/
- /OS4_RELEASE/
- /OS4_ARCHIVE/

Datenpunkte:
- Dateiname  
- Format (.md, .json, .docx)  
- Version  
- Kategorie (C/S/B/T/W/L/A/D/H/R/X)  
- Ablageort  
- Letzter Commit  

## 2.2 Modul-Zuordnung
Der Indexer ordnet jede Datei einem der OS4-Bereiche zu:
- CORE  
- SYSTEM  
- AVATARS  
- MIGRATION  
- SECURITY  
- PROMPTS  
- KNOWLEDGE PACK  
- EXTERNAL AI  
- DEV GUIDES  
- AURELIUS  
- RELEASE / ARCHIVE  

## 2.3 Abhängigkeitsanalyse
Erstellt eine Abhängigkeitsmatrix:
- Kernel → Security → Avatare → Prozesse  
- Migration → Master-Files → Storage Map  
- PromptSchemas → AvatarRouting  
- AURELIUS → KnowledgePacks  
- ID-System → Registry  

## 2.4 Master-File Erkennung
Der Indexer erkennt automatisch:
- ob alle Master-Files existieren  
- ob Versionen korrekt sind  
- ob Dateien fehlen oder überflüssig sind  

## 2.5 Integrity Scan
Der Indexer meldet:
- fehlende Dateien  
- veraltete Dateien  
- doppelte Dateien  
- falsche Ablageorte  
- Regelverletzungen  

(Arbeitet später direkt mit dem Integrity Guard zusammen.)

---

# 3. Output (strukturierte Index-Datei)

Der Indexer erzeugt:

