# OS4 ADMIN-PANEL – WORKSPACE SAFE DEFAULT SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Arbeitsplatz · Startzustand  
**Zweck:** Definiert den sicheren Standard-Arbeitsraum beim Start des Admin-Panels (kein leerer Screen).

---

## 1) Grundprinzip

Der Workspace Safe Default ist der **erste sichtbare Arbeitszustand** nach dem Öffnen des Admin-Panels.

Er:
- verhindert einen leeren Bildschirm
- gibt sofort Orientierung
- ermöglicht produktives Arbeiten ohne Risiko
- löst **keine Aktionen** aus

**Merksatz:**  
> Der Nutzer sieht *wo er ist*, *was sicher ist* und *wie er anfangen kann* – ohne etwas kaputt zu machen.

---

## 2) Zeitpunkt & Auslösung

- Wird **automatisch** beim Start geladen
- Gilt für:
  - Desktop
  - Tablet
- Smartphone:
  - reduzierte Ansicht (kein vollständiger Workspace)

**Regel:**  
Der Safe Default wird **nicht gespeichert** und **nicht überschrieben**.  
Er ist jederzeit **wiederherstellbar**.

---

## 3) Standard-Layout (V1)

### 3.1 Hauptbereich (Mitte)

**Modul: Knowledge Snapshot (Anzeige)**
- Zeigt den aktuellsten OS4-/Projekt-Snapshot
- READ-ONLY
- Keine Interaktion
- Dient der schnellen Einordnung

---

### 3.2 Sekundärbereich (links oder unten)

**Modul: Projekt-/Modul-Übersicht (kompakt)**
- Listet aktive Projekte/Module
- Status-Anzeige (Planned / In Progress / Paused / Completed)
- Öffnen zeigt Details (READ-ONLY)

---

### 3.3 Begleitbereich (rechts, einblendbar)

**Modul: Begleit-Panel**
- Öffnen/Schließen möglich
- READ-ONLY im V1
- Dient Planung, Strukturierung, Fragen

**Regel:**  
Das Panel ist **nie zwingend sichtbar**, aber **immer erreichbar**.

---

## 4) Sicherheit & Verhalten

- Kein Modul im Safe Default:
  - schreibt
  - pusht
  - migriert
  - ändert Systemzustände
- Alle Inhalte sind Anzeige- oder Planungsorientiert
- Abbruch jederzeit möglich

---

## 5) Interaktion im Safe Default

Erlaubt:
- Module ein-/ausblenden
- In andere Ansichten wechseln
- Arbeitsraum als Favorit speichern

Nicht erlaubt:
- direkte Umsetzungsaktionen
- Workflow-Trigger
- Mode-Switch

---

## 6) Favoriten & Rückkehr

- Der Safe Default kann **als Favorit gespeichert** werden
- Ein „Zurück zum Safe Default“-Befehl ist jederzeit verfügbar
- Safe Default ist **der Ruhepol** des Systems

---

## 7) Device-spezifisches Verhalten

### Desktop / Notebook
- Vollständiger Workspace
- Module nebeneinander (Docking)

### Tablet
- Fokus-Modus
- Wechseln statt Split
- Panels über Overlays

### Smartphone
- Kein Workspace Safe Default
- Weiterleitung in:
  - Überblick
  - Notiz-/Brainstorm-Modus

---

## 8) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- zusätzliche Anzeige-Module
- konfigurierbare Reihenfolge
- mehrere Safe Defaults pro Rolle

Nicht erlaubt:
- automatisches Ersetzen des Defaults
- stille Änderungen am Startzustand

---

## Abschluss

Der Workspace Safe Default ist der **Startpunkt für angstfreies Arbeiten** im OS4-Admin-Panel.  
Er sorgt für Orientierung, Ruhe und Sicherheit und bildet die Grundlage für alle weiteren Arbeitsräume.
