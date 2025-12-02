# OS4_Redundancy_Detector_V1 – Dubletten- & Müll-Scanner

Version: 1.0  
Owner: @chef  
Layer: OS4_SYSTEM / Processes  
Status: ACTIVE

## 0. Zweck

Der Redundancy Detector verhindert, dass OS4 von:

- doppelten Dateien  
- alten Ständen  
- unnötigen Notizen

zugemüllt wird.

Ziel:  
OS4 bleibt schlank, übersichtlich, < 40 Kern-Dateien.

---

## 1. Inputs

- Liste aller OS4-Systemdateien (CORE, SYSTEM, DEV_GUIDES, PROMPTS, FEIERABEND, AURELIUS, etc.).
- Neue hochgeladene Dateien (MD, DOCX, TXT, JSON).
- Klassifikation vom Intelligence Supervisor (Systemrelevant vs. Projekt vs. Legacy).

---

## 2. Prüfungen

Der Detector prüft:

1. **Inhaltliche Redundanz:**  
   - sehr ähnliche Titel & Inhalte  
   - identische Abschnitte (z. B. doppelte Spezifikation des Feierabendmodus).

2. **Funktionale Redundanz:**  
   - zwei Dateien beschreiben denselben Flow, nur leicht anders.

3. **Veraltete Stände:**  
   - existiert bereits eine neuere Version (V2/V3)?  
   - ist die alte Datei im Archiv/Release schon referenziert?

4. **Notiz- vs. System-Level:**  
   - reine Idee/Notiz vs. sauber ausgearbeitete Systemdatei.

---

## 3. Output

Der Detector gibt klare Empfehlungen:

- **„System behalten, alte Version archivieren.“**  
- **„Diese Notiz ist überflüssig, Idee steckt bereits in Modul X.“**  
- **„Diese Datei ist nur Training – nicht als Systemdokument führen.“**

Optional:  
- Erzeugt eine „Cleanup-Liste“, die @chef zum Aufräumen bekommt.

---

## 4. Integration

Der Detector wird vom Intelligence Supervisor aufgerufen:

- nach jeder größeren Migrationsphase  
- nach Integration neuer Systemmodule  
- bei Upload von „Sammelpaketen“ (z. B. alten Notizen / Dumps).

---

## 5. Regeln

1. Detector löscht nichts selbst – er macht Vorschläge.  
2. Systemrelevante Master-Dateien werden nie gelöscht, nur versioniert.  
3. Notizen können als „verwertet“ markiert werden, wenn ihre Inhalte in Systemmodulen stecken.

---

## 6. Zielbild

Langfristig:

- Jede Systemfunktion hat EIN Master-Dokument.  
- Keine „dreifachen Feierabend-Dokus“ mehr.  
- Historisches wird nach `/OS4_ARCHIVE/` verschoben, nicht parallel im Kern gehalten.
