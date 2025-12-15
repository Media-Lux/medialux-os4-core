Text:
# OS4 ADMIN-PANEL – SMARTPHONE MODE SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Smartphone · Unterwegs  
**Zweck:** Definiert den sicheren, unterbrechungsfesten Smartphone-Modus für Notizen, Brainstorming und Planung unterwegs.

---

## 1) Grundprinzip

Der Smartphone-Modus ist für **Bewegung, Ablenkung und kurze Aufmerksamkeitsspannen** konzipiert.

Er:
- verhindert Datenverlust
- respektiert Unterbrechungen
- erzwingt keine komplexen Interaktionen
- ist jederzeit pausierbar

**Merksatz:**  
> Unterwegs wird gedacht – nicht verwaltet.

---

## 2) Erlaubte Funktionen (V1)

- Notizen (Text / Sprache)
- Brainstorming
- Anzeigen von Snapshots (READ-ONLY)
- Kurze Planungseinträge
- Wiedereinstieg nach Unterbrechung

**Nicht erlaubt:**
- Push / Commit
- Migration
- Systemsteuerung
- Layout-Konfiguration
- Multi-Fenster

---

## 3) Ein-Bildschirm-Logik (Pflicht)

- **Genau ein aktiver Screen**
- Keine Splits
- Keine parallelen Panels
- Wechsel erfolgt über klare Modus-Toggles

**Modi (V1):**
- 📝 Notiz
- 💡 Brainstorm
- 👀 Überblick

---

## 4) Unterbrechungs-Handling (kritisch)

### 4.1 Externe Unterbrechungen
Beispiele:
- eingehender Anruf
- Navigationsansage
- Push-Benachrichtigung
- App-Wechsel

**Verhalten:**
- Aufnahme wird automatisch **pausiert**
- aktueller Stand wird **zwischengespeichert**
- kein Auto-Finalisieren
- kein Datenverlust

---

### 4.2 Rückkehr nach Unterbrechung

Beim Zurückkehren:
- Hinweis: „Unterbrochen – möchtest du fortsetzen?“
- Optionen:
  - Fortsetzen
  - Verwerfen
  - Als Notiz sichern (READ-ONLY)

---

## 5) Sprachaufnahme & Sicherheit

- Mikrofonstatus immer sichtbar
- Zustände:
  - Aktiv
  - Pausiert
  - Stumm
- Bei Navi-Sprachausgabe:
  - Aufnahme automatisch pausiert
- Nutzer muss **aktiv** wieder starten

---

## 6) UX-Regeln (angstfrei)

- Große Buttons
- Klare Texte
- Kein Rot (außer echte Systemblockade – nicht in V1)
- i-Button mit Erklärung („Hier passiert nichts Gefährliches“)
- Jede Aktion reversibel

---

## 7) Wiedereinstieg & Synchronisation

- Jeder Eintrag erhält Zeitstempel
- Unterbrechungen werden markiert
- Wiedereinstieg jederzeit möglich
- Übergabe an Desktop/Tablet ohne Bruch

---

## 8) Device-spezifische Einschränkungen

- Keine Multi-Monitor-Logik
- Keine Drag & Drop
- Keine Favoriten-Verwaltung
- Reduzierte Suche

---

## 9) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- Offline-Puffer
- Automatische Spracherkennung
- Kontextvorschläge

Nicht erlaubt:
- Hintergrund-Aktionen
- Auto-Push
- Stille Systemänderungen

---

## Abschluss

Der Smartphone-Modus schützt Gedanken, nicht Systeme.  
Er ist bewusst einfach, sicher und unterbrechungsfest – damit unterwegs nichts verloren geht.
