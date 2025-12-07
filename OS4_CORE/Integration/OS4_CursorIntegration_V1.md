# OS4_CursorIntegration_V1
Version: 1.0  
Status: ACTIVE  
Owner: @chef  

============================================================
0. ZWECK
============================================================

Dieses Dokument definiert, wie das OS4-System mit Cursor zusammenarbeitet.

Ziel:
- Cursor als "Entwicklungs- und Ausführungsumgebung" für OS4 nutzen.
- Sicherstellen, dass Cursor:
  * ALLE relevanten OS4-Dateien kennt
  * KEINE fertigen Module blind überschreibt
  * die Migrationslogik respektiert
  * GitHub und OS4-Struktur 1:1 abbildet

Cursor ersetzt NICHT OS4, sondern dient als:
- KI-IDE
- Repo-Begleiter
- Struktur- und Refactor-Assistent
- Migrationshelfer

============================================================
1. SYSTEMROLLEN
============================================================

OS4:
- definiert Regeln, Kernel, Evolution Layer, Migrationslogik, Tokenomics, Content, Academy.

GitHub:
- ist die Quelle der Wahrheit für OS4-Dateien (MD, JSON, CODE, DOCX als Referenz).

Cursor:
- ist die Arbeitsumgebung, in der:
  * Dateien gelesen, bearbeitet, erweitert werden
  * OS4-Module implementiert werden
  * Migrationen auf File-Ebene stattfinden
  * kein Session-Verlust auftritt

============================================================
2. GRUNDPRINZIPIEN FÜR CURSOR + OS4
============================================================

1. Cursor arbeitet IMMER auf Basis des GitHub-Repos:
   - `medialux-os4-core` (Beispiel)
   - niemals nur auf Chat-Text

2. OS4-Module (z. B. OS4_*_V1.md) sind führend.
   - Cursor darf nur ergänzen, nicht löschen, was als "ACTIVE" markiert ist.

3. Migration:
   - Cursor setzt die von OS4 definierte Migrationslogik um:
     * KEIN globales Überschreiben
     * Nur neue Dateien anlegen oder MERGE/REVISION nach Vorgabe

4. Verhalten:
   - Cursor soll OS4-Dateien ernst nehmen wie "Code" eines Betriebssystems,
     nicht wie „vage Vorschläge“.

============================================================
3. NICHT ÜBERSCHREIBBARE BEREICHE
============================================================

Folgende Dateien gelten als stabil / nicht blind überschreibbar:

- OS4_CoreKernel_V2_Complete.md
- OS4_Handover_EvolutionPhase_V1.md
- OS4_START_SYSTEM_Evolution_Phase2_V1.docx
- OS4_BOOTLOADER (wenn später als MD angelegt)
- OS4_MEMORYANCHOR (wenn später als MD angelegt)

Änderungen nur:
- über MERGE/Revision-Logik
- nach Prüfung durch UpgradeRiskEngine/Simulation (konzeptionell)

============================================================
4. CURSOR-AUFGABEN IM MIGRATIONSKONTEXT
============================================================

Cursor soll helfen bei:

- Implementierung neuer OS4_*.md Dateien
- Strukturbereinigung des Repos
- Einhalten von Pfaden und Namenskonventionen
- Refaktorieren von verteiltem Wissen in Master-Kassetten
- "Dry Runs" von Migrations-Blueprints

NICHT Aufgabe von Cursor:
- neue OS4-Logik erfinden, die nicht als Modul definiert ist
- spontan Kernel-Regeln ändern, ohne vorherige Spezifikation

============================================================
5. VORTEIL & NUTZEN
============================================================

Vorteil:
- OS4 verliert bei Chat-Wechsel nicht mehr seine Logik,
  weil Cursor direkt mit Dateien arbeitet.

Nutzen:
- Historie bleibt vollständig erhalten
- Migration & Entwicklung laufen stabil
- Du musst deine Regeln nicht in jedem Chat neu erklären

============================================================
ENDE – OS4_CursorIntegration_V1
============================================================
