# OS4_GitHub_Deployment_Rules_V1
Version: 1.0  
Status: ACTIVE  
Owner: @chef

Zweck:
Dieses Dokument definiert, wie OS4-Systemdateien auf GitHub angelegt und aktualisiert werden.
Ziel: Kein Chaos, keine Dubletten, keine stillen Überschreibungen, klare Pfade, klare Commits.

Grundregeln:
1. Jede Datei bekommt:
   - exakten Pfad ab Repo-Root
   - eindeutigen Dateinamen
   - klaren Zweck (Kurzbeschreibung)
   - saubere Commit-Message

2. Kein direktes Hochladen ohne:
   - Prüfung durch IntelligenceEngine
   - GitHubCheckEngine (NEW/REVISION/MERGE/SKIP)
   - OS4-ID-Prüfung (ID-Subsystem)

3. @chef muss NIE im Chat suchen.
   Alle relevanten Blöcke (Pfad, Inhalt, Commit-Text) werden fertig geliefert.

Standard-Vorgehen:
1. Repo öffnen: `medialux-os4-core`
2. `Add file` → `Create new file`
3. Pfad + Dateiname nach Vorgabe eintragen (z. B. `OS4_CORE/Intelligence/OS4_Migration_IntelligenceEngine_V1.md`)
4. Inhalt aus OS4-Assistent (Chat) 1:1 einfügen
5. Commit-Message aus OS4-Assistent übernehmen
6. `Commit new file`

Updates an bestehenden Dateien:
1. Datei in GitHub öffnen
2. `Edit this file`
3. Neuen Block einfügen oder Kassette komplett ersetzen (ALT RAUS – NEU REIN)
4. Commit-Message mit klarem Zweck setzen (z. B. „Extend … with …“)
5. ============================================================
REGEL: DATEI EXISTIERT BEREITS (GITHUB-FEHLERMELDUNG)
============================================================

Wenn GitHub beim Speichern meldet:
„Eine Datei mit demselben Namen existiert bereits“,

gilt verbindlich:

1. Diese Datei wird als **REVISION** behandelt, nicht als neue Datei.
2. Es wird KEINE zweite Datei mit anderem Pfad/Namen angelegt, nur um die Meldung zu umgehen.
3. Vorgehen:
   - Fehlermeldung schließen.
   - Zur vorhandenen Datei mit diesem Namen navigieren.
   - Datei bearbeiten und nach Kassettensystem aktualisieren (ALT RAUS – NEU REIN).
4. Nur in seltenen Sonderfällen (bewusste Parallelversion) wird ein neuer Name vergeben
   (z. B. `_V2a`, `_Revision1`) – und nur nach Entscheidung von @chef.
5. Ziel:
   - Keine Dubletten.
   - Klare Historie über Git-Versionierung.
   - Jede Datei = genau eine gültige Kassette pro Funktion.


Pflichtmodule:
- OS4_CoreKernel_V2_Complete
- OS4_Migration_IntelligenceEngine_V1
- OS4_Migration_GitHubCheckEngine_V3
- OS4_ID_IntelligenceEngine_V1
- OS4_ID_Counters.json

Diese Datei dient als Referenz für alle zukünftigen OS4-Deploys.
