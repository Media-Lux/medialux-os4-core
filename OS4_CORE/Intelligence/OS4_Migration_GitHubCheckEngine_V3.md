# OS4_Migration_GitHubCheckEngine_V3
Version: 3.0  
Status: ACTIVE  
Owner: @chef  
Engine: Migration Intelligence + Brain2Chain

============================================================
ZWECK
============================================================

Diese Engine definiert die GitHub-Prüflogik für alle OS4-Migrationen.

Sie sorgt dafür, dass:
- keine Dubletten entstehen
- keine stillen Überschreibungen stattfinden
- jede Änderung bewusst als NEU, REVISION oder MERGE behandelt wird
- Migration nicht „dump“ Dateien in GitHub kippt, sondern kontrolliert arbeitet

Sie arbeitet zusammen mit:
- OS4_Migration_IntelligenceEngine_V1
- Brain2Chain
- VersionGuard
- @builder, @archivar, @staubsauger, @optimizer

============================================================
GRUNDPRINZIPIEN
============================================================

1. GitHub ist die Quelle der Wahrheit, nicht die Ablage für Zufallsdateien.
2. Jede Migration ist ein bewusster Akt: NEU, REVISION oder MERGE.
3. Kein Dateiname mit unterschiedlichem Inhalt.
4. Kein „Kernel-V2-Klon“ ohne klare Revision.
5. Keine Migration ohne GitHub-Check.

============================================================
GITHUB-CHECK PIPELINE
============================================================

Die Engine denkt in drei Stufen:

1) EXISTS-CHECK (logisch)
   - Frage: „Gibt es bereits eine Datei mit gleichem oder sehr ähnlichem Namen/Zweck im Repo?“
   - Beispiele:
     - OS4_CoreKernel_V2_Complete.md
     - OS4_Master_Security_V2.docx
     - OS4_AvatarRegistry_Master.json

2) DIFF-CHECK (semantisch)
   - Wenn „vermutlich existent“:
     - ist der Inhalt identisch?
     - oder erweitert?
     - oder widersprüchlich?
   - Ergebnis:
     - IDENTISCH → Migration für diese Datei überspringen
     - ERWEITERT → REVISION oder MERGE vorschlagen
     - WIDERSPRUCH → Chef-Entscheidung einholen

3) ENTSCHEIDUNGS-MODUS
   - Die Engine schlägt EINEN der folgenden Wege vor:
     - NEW_FILE        → neue Datei (z. B. neues Modul)
     - REVISION        → z. B. V2a, V3, _Revision1
     - MERGE           → Inhalte werden zusammengeführt in bestehende Kassette
     - SKIP            → nichts tun, nur zur Kenntnis nehmen

============================================================
KLASSIFIKATION: NEW / REVISION / MERGE / SKIP
============================================================

NEW_FILE:
- Thema existiert noch nicht im Repo oder ist völlig neu.
- Beispiel: neue Engine, neues Pack, neues Projekt.
- Engine markiert als: `action: "NEW_FILE"`.

REVISION:
- Thema existiert, Inhalt ist aber klar eine Weiterentwicklung.
- Beispiele:
  - neue Kernel-Version
  - erweiterte Security-Regeln
  - neue Migrationslogik
- Engine markiert als: `action: "REVISION"` und schlägt neuen Namen vor:
  - OS4_CoreKernel_V2a.md
  - OS4_Master_Security_V2_Revision1.md

MERGE:
- Thema existiert, neue Datei enthält Gold + Redundanz.
- Engine extrahiert Gold → schlägt Merge in bestehende Kassette vor.
- Engine markiert als: `action: "MERGE"`.

SKIP:
- Datei bringt keinen Mehrwert:
  - Dublette
  - veraltete OS3-Variante
  - komplett abgedeckt durch Masterfiles
- Engine markiert als: `action: "SKIP"`.

============================================================
INTERAKTION MIT @chef
============================================================

Die Engine DARF keine finale Entscheidung erzwingen.

Sie MUSS @chef informieren, wenn:
- eine bestehende Systemdatei betroffen ist (Core, Security, Kernel, Packs)
- eine REVISION oder ein MERGE empfohlen wird
- ein Widerspruch zum aktuellen System entsteht

Meldung (Beispiele):

- „Hinweis: Diese Datei sieht aus wie eine Revision von OS4_CoreKernel_V2_Complete. Empfehlung: OS4_CoreKernel_V2a.md statt neuer Datei.“
- „Hinweis: Inhalt überschneidet sich mit OS4_Master_Security_V2. Vorschlag: MERGE statt NEW_FILE.“
- „Hinweis: Datei wirkt wie Dublette. Empfehlung: SKIP.“

Ohne Zustimmung von @chef wird:
- kein Merge als final angesehen
- keine bestehende Kassette gedanklich überschrieben
- keine neue Kassette als „Master“ eingestuft

============================================================
INTEGRATION IN DIE MIGRATIONS-PIPELINE
============================================================

Diese Engine hängt sich zwischen IntelligenceEngine und finaler GitHub-Phase:

1. Datei kommt rein → IntelligenceEngine analysiert (Wert, Gold, Risiko).
2. Wenn wertvoll:
   - IntelligenceEngine baut Kandidat (Wissensblock, Regel, Architekturvorschlag).
3. DANN:
   - GitHubCheckEngine V3 bewertet:
     - NEW_FILE?
     - REVISION?
     - MERGE?
     - SK
