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
