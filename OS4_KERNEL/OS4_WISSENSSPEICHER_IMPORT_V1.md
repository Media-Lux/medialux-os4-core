<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0034
  DATE: 2025-12-09
  SCOPE: WISSENSSPEICHER_IMPORT
  STATUS: ACTIVE
  NOTES: "Import-Regeln für externe Wissensdokumente (DOCX/PDF) in das OS4 Tresor-/V2-System"
-->

# OS4 Wissensspeicher – Importregel V1

Diese Datei definiert den **Pflichtprozess**, wie externe Wissensdokumente  
(z. B. DOCX, PDF, TXT, HTML, Exportdateien, alte OS4-Chats) in das  
OS4-Tresor-/V2-System übernommen werden.

Ziel:
- Kein Wissen geht verloren
- Alles wird GitHub-konform gespeichert
- Jeder neue Chat kann darauf zugreifen
- Operator-Guide wird automatisch erweitert
- Agents können Wissensspeicher nutzen
- Migration Engine kann Inhalte verarbeiten

---

# 0. Unterstützte Formate

Der OS4 Wissensspeicher unterstützt als Eingang:

- .docx  
- .pdf  
- .txt  
- .md  
- .json (geparst)  
- Chat-Exporte (.txt/.md)  
- Systembeschreibungen  
- Roadmaps  
- Inhalte aus Prompts  
- technische Diagramme (in Markdown übersetzt)

---

# 1. Import-Pipeline

Jedes externe Wissensdokument wird durch folgende Schritte geführt:

