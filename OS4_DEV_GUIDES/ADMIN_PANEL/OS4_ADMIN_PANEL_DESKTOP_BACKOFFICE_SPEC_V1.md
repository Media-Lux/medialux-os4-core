MARKDOWN-INHALT:
# OS4 ADMIN-PANEL – DESKTOP / BACKOFFICE SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Desktop · Backoffice  
**Zweck:** Definiert den zentralen Desktop-Arbeitsplatz (Backoffice) für Planung, Steuerung und Entwicklung des OS4-Ökosystems.

---

## 1) Grundprinzip

Der Desktop-Modus ist der **Hauptarbeitsplatz** des Operators.  
Hier werden komplexe Aufgaben vorbereitet, koordiniert und überprüft – **ohne Zwang zur Umsetzung**.

**Merksatz:**  
> Desktop = Überblick, Tiefe und Kontrolle – nicht Aktionismus.

---

## 2) Abgrenzung zu Tablet & Smartphone

- **Smartphone:** unterwegs, fragmentiert, kurz
- **Tablet:** fokussiert, ein Thema
- **Desktop:** strategisch, mehrere Themen parallel

Der Desktop ist **das Backoffice** von OS4.

---

## 3) Fenster- & Arbeitsraum-Logik (V1)

- Mehrere **Arbeitsfenster gleichzeitig**
- Fenster sind:
  - verschiebbar
  - nebeneinander andockbar
  - schließbar ohne Nebenwirkungen
- Kein Zwang zu festen Layouts

### Typische Fenster
- Dokument / Spec (READ-ONLY)
- Planung / Notizen
- Snapshot-Ansicht
- Oma Hanne (Begleitfenster)
- Externe Tools (eingebettet)

---

## 4) Arbeitsräume (Workspace)

Ein Arbeitsraum ist eine **temporäre Zusammenstellung** aus:
- Fenstern
- Kontexten
- Fokus

**Regeln:**
- Arbeitsräume können gespeichert werden (Favoriten)
- Jeder Arbeitsraum ist:
  - benannt
  - wiederherstellbar
  - gefahrlos löschbar
- Arbeitsräume ändern **keinen Systemzustand**

---

## 5) Integration externer Tools

Externe Systeme werden **eingebettet**, nicht verlassen.

Beispiele:
- GitHub (Repo-Ansicht)
- Replit (Editor / Logs)
- Cursor
- Externer Browser

**Regel:**  
Der Nutzer bleibt **mental in OS4**, auch wenn er externe Tools nutzt.

---

## 6) Copy & Paste / Parallelität

- Mehrere Fenster erlauben paralleles Arbeiten
- Copy & Paste zwischen Fenstern ist Kernfunktion
- Kein automatisches Übernehmen von Inhalten
- Jede Übernahme ist bewusst

---

## 7) Oma Hanne im Desktop-Modus

- Eigenes, andockbares Fenster
- Beobachtet Kontext
- Erklärt, strukturiert, empfiehlt
- Keine Aktionen
- Keine Bestätigungen

**Rolle:**  
Mentale Unterstützung bei komplexen Entscheidungen.

---

## 8) Sicherheits- & UX-Regeln

- Kein Fenster löst Aktionen aus
- Keine versteckten Shortcuts
- Write-Status immer sichtbar
- i-Buttons für Erklärung
- Abbruch jederzeit möglich

---

## 9) Multi-Monitor-Verhalten

### Single Monitor
- Fenster wechseln statt teilen
- Fokus vor Parallelität

### Multi-Monitor
- Arbeitsfläche erweitert sich
- Fenster können auf mehrere Screens verteilt werden
- Favoriten können Monitor-Layouts speichern

---

## 10) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- Erweiterte Layout-Presets
- Automatische Vorschläge für Arbeitsräume
- Tool-Empfehlungen (READ-ONLY)

Nicht erlaubt:
- Automatische Aktionen
- Hintergrund-Synchronisation
- Systemeingriffe ohne Bestätigung

---

## Abschluss

Der Desktop-Backoffice-Modus ist das **strategische Nervenzentrum** von OS4.  
Er verbindet Übersicht, Tiefe und Sicherheit und macht das OS4-Ökosystem **steuerbar, aber nie gefährlich**.
