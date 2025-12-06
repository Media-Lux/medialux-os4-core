============================================================
SEKTOR X – IDENTITY SUBSYSTEM (OS4_ID_CORE_V1)
============================================================

id_generators:
  next_product_id: MPR00001
  next_document_id: OS4-ID-MPR00001-C01
  next_customer_id: KN-M-10000

id_rules:
  - Jede Datei, jedes Modul, jedes Knowledge-Pack und jedes Archivstück MUSS eine OS4-ID tragen.
  - Falls eine Datei keine ID besitzt → ID wird automatisch vorgeschlagen.
  - Falls eine Datei eine alte ID besitzt → wird konserviert, aber zusätzlich OS4-ID ergänzt.
  - IDs werden NICHT überschrieben → Historie bleibt erhalten.
  - ID-System funktioniert wie eine Fahrgestellnummer: eindeutig, unverwechselbar, unverfälschbar.

id_structure:
  produkt_id: MPR#####
  dokument_id: OS4-ID-MPR#####-[Kategorie][Nummer]
  kunden_id: KN-[ProjektCode]-#####

id_categories:
  C = Core
  S = Security
  B = Business
  T = Tech
  W = Web
  L = Law
  A = Avatar
  D = Dokumentation
  R = Compliance
  X = Legacy
  H = Health

id_enforcement:
  - @migration verweigert Migration ohne ID.
  - @archivar vergibt IDs rückwirkend für alte Dateien.
  - @staubsauger erkennt ID-Lücken.
  - @optimizer prüft ID-Kollisionen.
  - @aurelius nutzt IDs für Web3/Tokenomics-Mapping.
  - @finance verwendet Kunden-ID (KN) für Kostenzuordnung.
  - @jura prüft Compliance/DSGVO anhand der Dokument-ID.

id_inventory_mode:
  - System führt automatische Inventur durch:
      * Welche IDs existieren?
      * Welche IDs fehlen?
      * Welche Produkte sind aktiv?
      * Welche Dokumente sind verwaist?
      * Welche Kunden-ID ist zuletzt vergeben worden?
  - Inventur läuft bei:
      * Migration
      * Archivierung
      * GitHub-Abgleich
      * Systemstart 4457
============================================================
SEKTOR M – MIGRATION PIPELINE (EVOLUTION LAYER AKTIV)
============================================================

Dieser Sektor definiert die standardisierte Pipeline für alle
Migrationen im OS4-System (Dateien, ZIPs, OS3/OS4-Altbestände,
sowie durch WebIngestionEngine eingebrachte Inhalte).

ZIEL:
- Keine blinde Migration.
- Nutzung des kompletten Evolution Layers.
- Nachvollziehbarkeit und Sicherheit bei allen Änderungen.

MIGRATIONS-PIPELINE (LOGISCHE REIHENFOLGE):

1) Quelle erfassen
   - Lokale Datei (DOCX, PDF, ZIP, JSON, CSV, …)
   - Chat-Export / Legacy-Content
   - URL / Web-Inhalt / Video (via WebIngestionEngine)

2) MetaMatrix
   - Erkennung von:
     * Thema (z. B. System, Tokenomics, Academy, Marketing)
     * Projekt (z. B. medialux, BioTECH, Brand2Chain)
     * relevanten Avataren (MIRA, PAUL, KARL, COACH, AURELIUS etc.)

3) Migration_IntelligenceEngine
   - Analyse & Gold-Extraktion.
   - Wertklassifikation (A–E).
   - Vorschläge: Was ist System-Gold? Was ist nur Kontext? Was ist Legacy?

4) ID_IntelligenceEngine
   - Vergibt oder rekonstruiert OS4-IDs.
   - Dokument-ID-Format (inkl. Zeitstempel):
     OS4-ID-MPR#####-[Kategorie][Nummer]-YYYYMMDD-HHMM

5) GitHubCheckEngine_V3
   - Entscheidet:
     * NEW_FILE
     * REVISION
     * MERGE
     * SKIP
   - Verhindert Dubletten und stille Überschreibungen.

6) UpgradeRiskEngine
   - Bewertet Risiko-Level:
     LOW / MID / HIGH / CRITICAL.
   - Gibt Alternativen:
     MERGE statt Replace,
     Revision statt Überschreiben,
     Backup bei Unsicherheit.

7) SimulationEngine (optional, bei MID+ und kritischen Fällen)
   - Testet Auswirkungen:
     * Systemstruktur
     * Userflows
     * Tokenomics/Ökonomie (falls relevant über AureliusCore)

8) Ergebnis
   - Erzeugung/Update einer OS4-Kassette.
   - Vorschlag für GitHub-Commit (Pfad, Name, Beschreibung).
   - Kein direkter Live-Change ohne @chef-Freigabe bei HIGH/CRITICAL.

HINWEIS:
- MobileCaptureEngine speist NUR die Pending-Queue und löst diese
  Pipeline erst aus, wenn @chef am Desktop die Verarbeitung freigibt.
- MatrixAwareContext und MetaMatrix liefern den Kontext,
  aber Migration läuft IMMER über diese Pipeline.
