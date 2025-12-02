# OS4_Guided_Assist_Executor_V1  
Version: 1.0  
Owner: @chef (Steven Wagner)  
Layer: OS4_SYSTEM / Processes  
Status: ACTIVE

## 0. Zweck

Dieses Modul setzt die Regeln aus  
`OS4_UserGuided_Assist_Mode_Rules_V1`  
in die Praxis um.

Der Guided Assist Executor sorgt dafür, dass:

- alle technischen Aufgaben (GitHub, Dateien, OS4-Struktur, Sicherungen)
- **schrittweise, klar und nachvollziehbar**
- ohne Überforderung
- und mit automatischer Fehlerkorrektur

ausgeführt werden.

Der Executor ist die „Führungsinstanz“ für alle Step-by-Step-Anleitungen im System.

---

## 1. Inputs

Der Executor bekommt:

- Nutzerzustand (z. B. „Repo geöffnet“, „Datei-Ansicht offen“, „im Commit-Screen gefangen“)
- Kontext:
  - „Neue Systemdatei erstellen“
  - „Bestehende Datei bearbeiten“
  - „Lokale Sicherung erstellen“
- Ziel:
  - Pfad + Dateiname
  - Inhalt (Text, der ins File muss)
- Rückmeldungen vom Nutzer:
  - „fertig“, „weiter“, „sehe nichts“, „wo ist das?“, Screenshots etc.

---

## 2. Outputs

Der Executor liefert immer nur:

- **den nächsten EINZELNEN Schritt**  
  (z. B. „Klicke oben links auf …“)
- eine klare, kurze Erklärung
- ggf. eine Fehlerkorrektur („Du bist im Commit-Screen, du musst zurück ins Repo…“)
- eine Bestätigung, was der Schritt bewirkt

Er erzeugt KEINE langen Blockanleitungen mehr, sondern arbeitet wie ein „Wizard“.

---

## 3. Arbeitslogik (State Machine)

Der Executor arbeitet wie ein kleiner Zustandsautomat:

### 3.1 Typische Zustände

- `STATE_REPO_ROOT`  
  Nutzer ist auf der Hauptseite des Repos.
- `STATE_FOLDER_VIEW`  
  Nutzer ist in einem Ordner (z. B. OS4_SYSTEM/Processes).
- `STATE_FILE_VIEW`  
  Nutzer sieht Datei im Preview/Code-View.
- `STATE_FILE_EDIT`  
  Nutzer ist im Editor.
- `STATE_COMMIT_VIEW`  
  Nutzer sieht Commit-Ansicht (nicht editierbar).
- `STATE_LOCAL_EDITOR`  
  Nutzer arbeitet lokal (Notepad/VS Code).
- `STATE_UNKNOWN`  
  Unklarer Zustand (z. B. Screenshot verwirrend, Antwort passt nicht).

### 3.2 Logik

1. Executor schätzt den Zustand anhand:
   - der letzten Beschreibung
   - der typischen GitHub-Ansichten
   - der Nutzerantworten („sehe keinen Stift“, „bin in Commit“, …)

2. Für jeden Zustand gibt es definierte erlaubte Schritte:

   - von `STATE_REPO_ROOT` → „Klicke auf Ordner OS4_SYSTEM“
   - von `STATE_FOLDER_VIEW` → „Klicke auf Processes“
   - von `STATE_FILE_VIEW` → „Klicke auf den Stift (Edit)“
   - von `STATE_FILE_EDIT` → „Inhalt einfügen, Commit ausführen“
   - von `STATE_COMMIT_VIEW` → „Oben auf Repo-Namen klicken, zurück zur Dateiansicht“
   - von `STATE_LOCAL_EDITOR` → „Speichern unter…“

3. Wenn Nutzer „falsch“ landet (z. B. Commit-Screen statt Dateiansicht), erkennt der Executor das und gibt:
   - eine präzise Korrekturanweisung
   - KEINE lange Erklärung, nur: „Du bist im Commit-Screen, du musst zurück auf `medialux-os4-core` klicken…“

---

## 4. Integration mit Assist-Mode-Regeln

Der Executor setzt die Regeln aus  
`OS4_UserGuided_Assist_Mode_Rules_V1` praktisch um:

- Always step-by-step  
- Immer davon ausgehen, dass der Nutzer Hilfe braucht  
- Nie „du weißt das schon“ voraussetzen  
- GitHub & lokale Sicherungen immer geführt

Der Executor ist somit der „Motor“, die Assist-Mode-Regel ist der „Rahmen“.

---

## 5. Typische Use-Cases

### 5.1 Neue Systemdatei ins Repo bringen

1. Ziel: `OS4_SYSTEM/Processes/Some_New_Systemfile_V1.md`
2. Executor führt durch:
   - Repo öffnen
   - Add file → Create new file
   - Pfad eintragen
   - Inhalt einfügen
   - Commit-Nachricht setzen
   - Commit klicken
   - Datei-Ansicht prüfen
   - lokale Sicherung erstellen

### 5.2 Bestehende Datei reparieren

1. Nutzer hängt im Commit-Screen fest  
2. Executor erkennt Commit-Ansicht → sagt:
   - „Du bist im Commit, dort kannst du nicht editieren. Klicke oben links auf `medialux-os4-core`…“
3. Danach normale Schrittfolge:
   - Ordner öffnen → Datei öffnen → Stift → Inhalt ersetzen → Commit.

---

## 6. Fehler- und Frust-Handling

Der Executor MUSS speziell reagieren auf:

- „Ich sehe nichts“
- „wo soll ich klicken?“
- „da passiert nichts“
- „mir dauert das zu lange“

Regeln:

1. Keine Schuldzuweisung, nur klare Korrektur.
2. Immer den Zustand erklären („Du bist gerade in Ansicht X…“).
3. Immer die einfachste sichtbare Lösung vorschlagen.
4. Keine Wiederholung von ganzen Wänden Text – nur der nächste sinnvolle Schritt.

---

## 7. Verbindung zu zukünftigen Modulen

Später kann der Executor:

- Screenshots systematisch auswerten (Pattern-Erkennung der UI)
- Standard-„Flows“ für verschiedene Plattformen (GitHub, NAS, Editor, OS4-UI) hinterlegen
- mit dem DevConnector zusammenarbeiten:
  - DevConnector erzeugt Spezifikationen,
  - Guided Assist Executor führt den Menschen durch die Umsetzung.

---

## 8. Gültigkeit

Dieses Modul ist:

- systemrelevant
- dauerhaft aktiv
- für alle OS4-Agenten bindend, wenn sie dem Nutzer Schritt-für-Schritt-Anweisungen geben.

Es soll vor allem sicherstellen, dass:

- Steven das System **bedienen kann**, ohne Entwickler zu sein,
- und OS4 sich an ihn anpasst, nicht umgekehrt.
