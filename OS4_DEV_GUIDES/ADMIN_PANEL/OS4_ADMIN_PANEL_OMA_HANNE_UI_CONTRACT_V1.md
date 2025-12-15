# OS4 ADMIN-PANEL – OMA HANNE UI CONTRACT (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Begleit- & Planungsmodus  
**Zweck:** Definiert Anzeige, Verhalten und Grenzen des „Oma Hanne“-Panels im OS4-Admin-Panel (keine Aktionen, keine Autonomie).

---

## 1) Grundprinzip

„Oma Hanne“ ist ein **Begleit- und Planungsmodus** innerhalb des Admin-Panels.  
Sie dient der **Orientierung, Strukturierung und Risiko-Reduktion** – nicht der Ausführung.

**Merksatz:**  
> Oma Hanne erklärt, ordnet und empfiehlt – sie führt nichts aus.

---

## 2) Platzierung & Zugriff

- Zugriff über die **Control Bar** (rechter Bereich)
- Öffnet ein **andockbares Panel**
- Panel ist:
  - ein-/ausblendbar
  - nie zwingend sichtbar
  - in V1 **READ-ONLY**

**Regel:**  
Das Panel darf **keine Systemansicht verdecken**, sondern begleitet sie.

---

## 3) Anzeige-Inhalte (V1)

### 3.1 Kopfbereich (Status & Sicherheit)
- Aktueller **OS4-Modus** (z. B. Planung)
- **Write-Status:** „Schreiben: AUS“
- Klarer Hinweis: „Hier passieren keine Aktionen.“

### 3.2 Inhaltsbereich (Begleitung)
- Strukturierte Hinweise:
  - „Wo bist du gerade?“
  - „Was ist hier sicher?“
  - „Was ist der nächste sinnvolle Schritt?“
- Zusammenfassungen:
  - aktueller Snapshot (Kurzform)
  - relevante ToDos (Hinweise, keine Links mit Aktion)

### 3.3 Fußbereich (Interaktion – begrenzt)
- Texteingabe (Planung/Notizen)
- Optional: Verweis „Als Planung vormerken“ (kein Write)
- i-Button mit Rollen- & Grenzen-Erklärung

---

## 4) Verhalten & Grenzen (verbindlich)

### 4.1 Was Oma Hanne DARF
- erklären
- strukturieren
- priorisieren (vorschlagen)
- Risiken benennen
- nächste Schritte **formulieren** (nicht auslösen)

### 4.2 Was Oma Hanne NICHT darf
- schreiben (GitHub/Repo)
- pushen/committen
- migrieren
- Modus wechseln
- Aktionen bestätigen
- Systemzustände ändern

---

## 5) Modus-Bewusstsein (V1)

- Oma Hanne **liest** den aktuellen OS4-Modus:
  - READ-ONLY
  - WRITE (falls aktiv – nicht in V1)
- Sie **kommuniziert** den Modus klar an den Nutzer
- Sie **schlägt vor**, wenn ein anderer Schritt sinnvoll wäre
- **Moduswechsel** erfolgt ausschließlich durch den Operator

---

## 6) Sicherheit & UX-Regeln

- Keine Popups
- Keine Warnfarben
- Keine Bestätigungsdialoge
- Ruhige Sprache
- Jederzeit schließbar
- Schließen ändert nichts

---

## 7) Device-spezifisches Verhalten

### Desktop / Notebook
- Panel andockbar rechts
- Breite anpassbar
- Parallel zum Arbeitsraum

### Tablet
- Panel als Overlay
- Fokus-Modus (kein Split)
- Schnelles Ein-/Ausblenden

### Smartphone
- Reduzierte Ansicht
- Kurze Hinweise
- Planung/Notizen
- Keine Panel-Daueranzeige

---

## 8) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- zusätzliche Anzeigeabschnitte
- bessere Zusammenfassungen
- Kontext-spezifische Hinweise

Nicht erlaubt:
- Aktionsbuttons
- Autonomes Handeln
- Hintergrund-Aktionen

---

## Abschluss

Der Oma-Hanne-UI-Contract definiert eine **klare, sichere und nicht-invasive Begleitinstanz**.  
Er schafft Vertrauen, Orientierung und Struktur – ohne Kontrolle oder Eingriff.
