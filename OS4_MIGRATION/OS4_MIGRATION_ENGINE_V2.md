<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0022
  DATE: 2025-12-09
  SCOPE: MIGRATION_ENGINE
  STATUS: ACTIVE
  NOTES: "Migration Engine V2 – vollautomatische Tresor-/Anatomie-Migration für OS4"
-->

# OS4 MIGRATION ENGINE (V2)

Die OS4 Migration Engine V2 ist das **vollständige automatische Migrationssystem** des Tresor-/Anatomie-Frameworks.  
Sie wandelt alte Dateien, Konzepte, Prompts, Notizen und Strukturen in ein sauberes, geordnetes und regelkonformes V2-System um.

Die Engine besteht aus einem **Pipeline-System**, in dem jeder Schritt eine klar definierte Aufgabe hat.

---

# 0. Zweck & Aufgaben

Die Migration Engine:

- analysiert alle Dateien im Repo oder im Upload  
- erkennt MIG_A / MIG_B / MIG_C  
- vergibt neue MIG-IDs  
- überführt Dateien ins Tresor-V2-Format  
- erzeugt Zielpfade  
- validiert Struktur & Sicherheit  
- verhindert Datenverlust  
- extrahiert Gold-Wissen  
- aktualisiert den MIG_INDEX  
- protokolliert jeden Schritt  
- ist vollständig wiederholbar & deterministisch  

Kurz:  
**Sie macht aus Chaos ein System.**

---

# 1. Gesamtarchitektur der Migration Engine

Die Migration Engine besteht aus folgenden Komponenten:

