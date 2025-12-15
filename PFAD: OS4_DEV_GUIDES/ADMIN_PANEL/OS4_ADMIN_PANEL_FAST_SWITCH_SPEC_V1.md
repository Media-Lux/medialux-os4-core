MARKDOWN-INHALT:
# OS4 ADMIN-PANEL – FAST SWITCH SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Navigation · Kontext  
**Zweck:** Definiert einen schnellen, sicheren Kontextwechsel zwischen zuletzt genutzten Arbeitsräumen – ohne Zustandsänderung.

---

## 1) Grundprinzip

Fast-Switch ermöglicht das **sofortige Zurückkehren** zu kürzlich genutzten Kontexten.  
Es ist ein **Gedächtnis für Orte**, kein Auslöser für Aktionen.

**Merksatz:**  
> Fast-Switch erinnert, wo ich war – nicht, was ich getan habe.

---

## 2) Funktionsumfang (V1)

- Anzeige der **letzten 3–5 Kontexte**
- Jeder Eintrag ist:
  - READ-ONLY
  - benannt (Arbeitsraumname)
  - zeitlich sortiert (zuletzt genutzt oben)
- Ein Klick öffnet den Kontext **in einem neuen Arbeitsraum**

**Nicht enthalten:**
- keine Aktionen
- keine Workflow-Trigger
- keine Systemänderungen
- kein Überschreiben bestehender Arbeitsräume

---

## 3) Was ein Fast-Switch-Eintrag enthält

- Arbeitsraum-Name
- Zeitpunkt der letzten Nutzung
- optionale Kurzbeschreibung
- Referenz auf Favorit (falls vorhanden)

**Nicht gespeichert:**
- keine Formulareingaben
- keine Drafts
- keine Systemzustände
- keine Schreibrechte

---

## 4) UX-Regeln (angstfrei)

- Immer sichtbar über Control Bar (🔁)
- Öffnet Overlay/Panel
- i-Button erklärt: „Öffnet Ansicht – keine Aktion“
- Jeder Eintrag klar als **Ansicht** gekennzeichnet

---

## 5) Device-Verhalten

### Desktop / Notebook
- Panel/Overlay
- Tastenkürzel optional (V1.x)
- Öffnet parallel zum aktuellen Arbeitsraum

### Tablet
- Overlay im Fokus-Modus
- Ein Kontext gleichzeitig

### Smartphone
- Reduzierte Liste (max. 3)
- Tippen öffnet Ansicht
- Kein Multitasking

---

## 6) Sicherheitsregeln (verbindlich)

- Fast-Switch löst **keine Aktionen** aus
- Kein Push
- Kein Commit
- Kein Mode-Switch
- Kein automatisches Speichern

---

## 7) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- Pinning einzelner Kontexte
- Gruppierung (z. B. „heute“, „diese Woche“)
- Vorschläge (READ-ONLY)

Nicht erlaubt:
- automatische Kontextwechsel
- Hintergrund-Aktionen
- Systemtrigger

---

## Abschluss

Fast-Switch ist das **mentale Rückgrat** für flüssiges Arbeiten im OS4-Admin-Panel.  
Es reduziert Suchaufwand, vermeidet Frustration und hält den Nutzer sicher im Kontext – ohne Risiko.
