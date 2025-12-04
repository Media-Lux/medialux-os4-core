# OS4_CoreKernel_V2_Complete – Medialux OS4 Systemkern
Version: 2.0
Status: CORE-STABLE
Owner: Steven (@chef)
Meta-Kernel: Aurelius CORE
Mirror-System: OS4Basis

============================================================
SEKTOR 0 – SYSTEMIDENTITÄT & VERSIONEN
============================================================

os4_corekernel_version: 2.0
aurelius_core_version: 1.0
master_security_version: 2.0
prompt_versioning: active
rag_pipeline: enhanced
wl_isolation: enabled
accessmatrix: active
migration_mode: batch

prioritäten:
- PRIO_0: Core, Security, Migration, ID-System
- PRIO_1: Knowledge Packs, Avatare, Business
- PRIO_2: Externe Projekte, Content, Marketing

============================================================
SEKTOR 1 – KERNELSTRUKTUR (OS4_CoreKernel_V1 erweitert)
============================================================

kernel_schichten:
- CORE (Regeln, Security, Access, Identity)
- SYSTEM (Orchestrator, Builder, Optimizer, Archiv)
- KNOWLEDGE_PACKS (LAW, BUSINESS, TECH, LEARNING, WEB, LEGACY)
- EXTERNAL_AI (Canva, OpenAI, Plugins)
- PROMPTS & SCHEMAS (Repository)
- DEV_GUIDES & RELEASES (Deployment)

id_system:
- produkt_id: MPR#####
- dokument_id: OS4-ID-MPR#####-[Kategorie][Nummer]
- kunden_id: KN-[ProjektCode]-#####

kategorien:
C=Core, S=Security, B=Business, T=Tech, W=Web, L=Law,
A=Avatar, D=Docs, R=Compliance, X=Legacy, H=Health.

regeln:
- jede Datei erhält einen OS4-ID-Footer
- nur Masterfiles + KnowledgePacks bleiben im Kern
- alle anderen Dateien migrieren → Kassetten → Archiv

============================================================
SEKTOR 2 – META-KERNEL (OS4_AureliusCore_V1)
============================================================

aurelius_rolle:
- denkt, analysiert, simuliert, priorisiert
- steuert architekturentscheidungen
- verbindet KI-Kern + Web3-Kern
- ist supervisor, kein Avatar

verantwortungen:
- risikoanalyse
- decision trees
- governance
- tokenomics & smart-contract logic
- security interpretation
- koordinierung der arbeitsavatare

sync-regeln:
imports → OS4_Aurelius_ImportBuffer
exports → OS4_Aurelius_ExportBuffer
nur @chef gibt fusionen frei

============================================================
SEKTOR 3 – SECURITY FORTRESS (OS4_Master_Security_V2)
============================================================

security_module:
- blackwolf (sentinel)
- auditguard (leak prevention)
- knowledgeguard (wissensfilter)
- processguard (workflow validation)
- tester_wl (sandbox)
- antileak (datenfilter)
- accessmatrix (avatar-rechte)
- wl_preflight_rules
- proactive_security_mode

blackwolf:
- erkennt angriffe & injection
- darf NICHT in Core schreiben
- überwacht I/O
- nutzt tester_wl für sandbox-checks

auditguard:
- prüft antworten
- schreibt audit logs (nach schema)

knowledgeguard:
- verhindert laden falscher packs
- prüft erlaubte module
- schützt os4kernel

processguard:
- validiert workflow schritte
- erzwingt strukturierte ausgaben

feature_flags:
- auditguard_enabled
- blackwolf_enabled
- antileak_enabled
- proactive_security_mode

============================================================
SEKTOR 4 – ACCESS MATRIX (OS4_AccessMatrix.json)
============================================================

kontexte:
- core
- internal_owner
- project_default
- project_wl

avatar_rechte:
- @chef: alles
- @builder: core intern
- @optimizer: system intern
- @jura, @finance, @dozent: packs
- @json_pro: prompts
- @ai_connector: external ai
- @archivar: migration core
- @archivar_kunde: wl migration
- wl avatare: nur wl-kontext

zugriffsregeln:
- core bleibt isoliert
- wl-projekte erhalten NUR ihr blueprint
- prompt repository begrenzt
- visual engine nur mit brandkit

============================================================
SEKTOR 5 – PROMPT ENGINE (JSON_Pro + JSON_Kunde)
============================================================

json_pro (intern):
- verwaltet systemprompts
- strukturiert repository
- erkennt doppelte prompts
- priorisiert prompts nach avatar
- nutzt rag reranking

json_kunde (wl):
- kunden-spezifische prompts
- nicht core-fähig
- erzeugt prompt_index_kunde.json
- wl-isoliert

response_pipeline:
- intent_detect
- knowledgeguard
- processguard
- target_avatar
- truthguardian
- auditguard
- final_answer

============================================================
SEKTOR 6 – RAG SYSTEM (Hybrid)
============================================================

rag_enhanced:
- hybrid: keyword + vector
- reranking: enabled
- autorag: enabled
- domain routing: enabled
- schema: top_k=5

rag_module:
- nutzt os4_rag_reranking_config.json

============================================================
SEKTOR 7 – SYSTEM AVATARE (Agentic Framework + Registry)
============================================================

technische avatare:
- @builder
- @optimizer
- @archivar
- @archivar_kunde
- @staubsauger
- @migration
- @ai_connector
- @wix
- @json
- @bilder
- @doku
- @dozent
- @finance
- @jura
- @butler

brand avatare:
- IONA, MIRA, PAUL, KARL

routing:
analysis → @staubsauger
rewrite → @json_pro
external_ai → @ai_connector
review → @truth_guardian

============================================================
SEKTOR 8 – VISUAL ENGINE (OS4_VisualEngine_Module)
============================================================

funktionen:
- zero_touch_design
- auto_visual_generation
- social media decks
- bulk creation
- brandkit integration

module:
- advision
- json_pro
- ai_connector

============================================================
SEKTOR 9 – STORAGE MAP (OS4_Master_Storage_Map_V2)
============================================================

ordner:
/OS4_CORE/
/OS4_BLUEPRINTS/
/OS4_KNOWLEDGE_PACKS/
/OS4_RELEASES/
/OS4_MIGRATION/
/OS4_ARCHIVE/
/OS4_DEVTOOLS/
/OS4_AI_EXTERNAL/

regeln:
- core unverändert
- packs versioniert
- migration archiviert
- releases zip-only

============================================================
SEKTOR 10 – MIGRATION (Archivar, Staubsauger, Optimizer)
============================================================

rollen:
@archivar: full extraction
@archivar_kunde: wl extraction
@staubsauger: scan + clean
@migration: batchsteuerung
@optimizer: duplikate & konflikte
@builder: final validation

batch_ablauf:
upload → klassifikation → extraktion → integration → id → backup

============================================================
SEKTOR 11 – DEPLOYMENT (ZIP MASTER)
============================================================

zip_inhalte:
- corekernel_v2
- aureliuscore_v1
- security fortress
- avatar registry
- prompt engine
- knowledgepacks
- blueprint templates

deployment_regeln:
- nur ZIP MASTER darf deployt werden
- wl wizard erzeugt eigene projekte
- backups nach jedem batch

============================================================
ENDE OS4 KERNEL V2 COMPLETE
============================================================
