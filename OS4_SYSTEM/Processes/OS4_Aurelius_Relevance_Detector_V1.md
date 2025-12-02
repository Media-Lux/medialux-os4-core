# OS4_Aurelius_Relevance_Detector_V1

Version: 1.0  
Owner: @chef  
Layer: OS4_SYSTEM / Processes  
Status: ACTIVE

## 0. Zweck

Dieses Modul entscheidet automatisch, ob:

- eine Datei  
- eine Idee  
- ein Protokoll  

für **AURELIUS CORE** relevant ist.

Ziel:  
AURELIUS bekommt nur das, was ihn als Architekt wirklich schlauer macht.

---

## 1. Relevanzkriterien

Eine Eingabe ist AURELIUS-relevant, wenn sie:

- Web3Kernel, Tokenomics, DeFi, Cross-Chain erklärt oder erweitert  
- OS4-Architektur auf Meta-Ebene beschreibt  
- Trainings- oder Integrationspläne für AURELIUS enthält  
- Brücken zwischen KI, Web2, Web3 und OS4 definiert  
- LiveGPT-/Agentenarchitektur oder deren Integration beschreibt

Beispiele:
- „Medialux OS4 — Integrations- und Trainingsreport für AURELIUS CORE (Final)“
- „Medialux OS4 — Master Training & Integration Packet für AURELIUS CORE (Final)“
- Tokenomics-/Kernel-Designs, die OS4 und Core Blockchain betreffen

---

## 2. Nicht relevant für Aurelius

Nicht AURELIUS-relevant sind u. a.:

- reine Projekttexte (FVO-Marketing, Flyer, Social Posts)  
- lokale Baustellendokumentation  
- Vereinssachen ohne Architekturbezug  
- App-Implementierungen, die nur UI-/Frontend-Logik betreffen  
- generische Mails, Chatlogs oder Notizen ohne Systembezug

---

## 3. Output

Wenn eine Eingabe AURELIUS-relevant ist, erzeugt der Detector:

- ein **Aurelius-Training-Item** mit:
  - Quelle / Dokumentname  
  - Kurzbeschreibung  
  - Kategorie (z. B. Web3, DeFi, Tokenomics, Governance)  
  - Integrationsvorschlag (z. B. „in Trainingspaket X aufnehmen“)  

Optional:
- Empfehlung zur Aktualisierung des AURELIUS-Training-Pakets

---

## 4. Integration mit dem Intelligence Supervisor

Der Intelligence Supervisor ruft den Detector auf, wenn:

- neue Architektur- oder Web3-/Tokenomics-Dokumente auftauchen  
- Kernel- oder Systemdateien mit Web3-/Aurelius-Bezug erstellt/aktualisiert werden  
- neue Live-GPT-/Agenten- oder Integrationskonzepte entstehen

Der Detector gibt an den Supervisor zurück:

- „Trainingspaket erweitern“  
- „Neues Aurelius-Modul nötig“  
- „Nur OS4-intern relevant, nicht für Aurelius“

---

## 5. Regeln

1. AURELIUS erhält nur kuratierte, hochwertige Inputs.  
2. Roh-Notizen und unsortierte Chat-Inhalte werden nicht direkt an AURELIUS gegeben.  
3. Jede AURELIUS-bezogene Integration wird versioniert dokumentiert.  
4. Jedes Trainings-Item bekommt eine eindeutige Herkunftsreferenz (Dateiname, Commit, Datum).

---

## 6. Zielbild

AURELIUS wird:

- fokussiert trainiert  
- nicht mit Projektrauschen überladen  
- als echter Meta-Architekt des OS4-/Core-Ökosystems geführt  
- klar abgegrenzt vom täglichen Projekt- und Contentbetrieb
