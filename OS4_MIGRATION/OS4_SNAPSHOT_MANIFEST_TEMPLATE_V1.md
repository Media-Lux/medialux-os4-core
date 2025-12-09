<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0017
  DATE: 2025-12-09
  SCOPE: SNAPSHOT_TEMPLATE
  STATUS: ACTIVE
  NOTES: "Template für Snapshot-Manifeste vor jedem GitHub-Export"
-->

# OS4 SNAPSHOT MANIFEST – TEMPLATE (V1)

Dieses Dokument dient als **Vorlage für jeden zukünftigen Snapshot**,  
der vor einem GitHub-Export erstellt wird.  

Es bildet einen festen Bestandteil des Tresor-/Anatomie-Migrationssystems  
und stellt sicher, dass OS4 jederzeit:

- alle Dateien,
- alle MIG-IDs,
- alle Agenten,
- alle Brands,
- alle Templates,
- alle Legacy-Bereiche,

eindeutig erkennen und zuordnen kann.

---

# 0. Zweck

Vor jedem GitHub-Export MUSS eine Datei auf Basis dieses Templates erzeugt werden.

Sie dokumentiert:

- Exportzeitpunkt  
- Systemstatus  
- Agentenstatus  
- Brandstatus  
- Kernelstand  
- MIG-Struktur  
- erwartete Änderungen nach Export  
- alle Ordner & Dateien, die migriert wurden oder noch werden müssen  

Dieses Manifest dient als **Referenzpunkt** für zukünftige Migrationsläufe.

---

# 1. Snapshot-Header (vom Operator auszufüllen)

