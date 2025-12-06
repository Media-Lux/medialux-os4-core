# OS4_MobileCapture_Usage_V1
Version: 1.0  
Status: ACTIVE  
Owner: @chef  

============================================================
ZWECK
============================================================

Dieses Dokument beschreibt, wie @chef OS4 unterwegs
(Smartphone, Tablet, Auto mit Spracheingabe) nutzen kann,
ohne das System zu überladen.

MobileCaptureEngine_V1 arbeitet immer im PENDING-Modus.

============================================================
GRUNDPRINZIP
============================================================

Unterwegs:
- nur Ideen, Gedanken, Beobachtungen, Links, grobe Konzepte erfassen.
- KEINE direkten Systemanweisungen, KEINE strukturellen Änderungen.

Am Desktop:
- OS4 verarbeitet die Pending-Einträge automatisch über den
  Evolution Layer (MetaMatrix, Migration, ID, GitHubCheck, RiskEngine).

============================================================
MOBILE NUTZUNG – REGELN FÜR @chef
============================================================

1) Ideen kennzeichnen:
   - Beginne deine mobilen Eingaben mit einem Tag:
     * [IDEA_SYSTEM]
     * [IDEA_BUSINESS]
     * [IDEA_MARKETING]
     * [IDEA_TOKENOMICS]
     * [IDEA_TECH]
     * [IDEA_ACADEMY]

2) Quellen speichern:
   - Wenn du Links hast:
     * einfach URL + kurzer Kommentar:
       Beispiel:
       [IDEA_TOKENOMICS] https://... → gutes Beispiel für Pool-Mechanik.

3) Kein Live-Commit:
   - Mobile-Captures erzeugen NIE direkt GitHub-Änderungen.
   - Alles landet in der Pending-Queue.

============================================================
DESKTOP – WIE OS4 PENDING VERARBEITET
============================================================

Wenn @chef am Desktop ist:

1. OS4 meldet:
   "Es liegen X mobile Notizen vor. Verarbeiten?"

2. Verarbeitung:
   - MetaMatrix → erkennt Thema & Projekt
   - Migration_IntelligenceEngine → extrahiert Gold
   - ID_IntelligenceEngine → vergibt IDs (mit Zeitstempel)
   - GitHubCheckEngine_V3 → NEW/REVISION/MERGE/SKIP
   - UpgradeRiskEngine → prüft Risiken
   - (optional) SimulationEngine → testet Auswirkungen

3. Ergebnis:
   - Erzeugung von Kassetten, Blueprints, Vorschlägen
   - Optional: direkte GitHub-Blöcke für @chef (Pfad, Inhalt, Commit-Text)

============================================================
BEST PRACTICE FÜR @chef
============================================================

- Unterwegs:
  - Schnell, roh, ehrlich denken.
  - Tags setzen, nicht strukturieren.

- Am Desktop:
  - Dinge freigeben, die OS4 zu Modulen machen darf.
  - Kritische Sachen (Kernel, Tokenomics, Governance) immer mit Bedacht.

============================================================
ENDE – OS4_MobileCapture_Usage_V1
============================================================
