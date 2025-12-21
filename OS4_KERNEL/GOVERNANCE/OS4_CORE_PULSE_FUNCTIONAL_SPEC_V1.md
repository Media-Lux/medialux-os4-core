# OS4 TRESOR – CORE-PULSE OS4 Functional Specification (V1)

**Status:** VERBINDLICH · Functional Spec · READ-ONLY  
**Geltung:** CORE-PULSE OS4 Web App  
**Ziel:** Bau-fähige Spezifikation ohne Interpretationsspielraum  
**Autorität:** @chef (Operator Level 10)

---

## 1. Zweck & Zielbild

CORE-PULSE OS4 ist das **visuelle Wahrnehmungs- und Kontrollzentrum** des OS4 TRESOR.

Es zeigt:
- Systemzustände
- Wachstum auf Bedeutungsebene
- Sicherheits- und Wachsamkeitslage
- Denk- und Zuständigkeitszustände (Brain2Chain)

CORE-PULSE **handelt nicht**, **steuert nicht** und **schreibt nicht**.

> **CORE-PULSE ist Interface – kein Admin-Tool.**

---

## 2. Scope (Was ist enthalten)

CORE-PULSE umfasst:

- Zentrale Hauptansicht (Globus + Security + Brain2Chain)
- Detailansichten für:
  - Wachstum (Globus)
  - Sicherheit
  - Kognition (Brain2Chain)
- Präsentationsmodus mit Explain-Mode (textuell, manuell)
- Read-only Wahrnehmung aus bestehenden Systemzuständen

---

## 3. Nicht-Ziele (explizit ausgeschlossen)

CORE-PULSE ist **nicht**:

- kein Admin-Panel
- kein DevTool
- kein Monitoring-System mit Metriken
- kein Log- oder Ticket-Viewer
- kein Deployment- oder Migrations-Interface
- kein Analytics-Dashboard
- kein „KI entscheidet“-System

---

## 4. Kern-Views (Informationsarchitektur)

### View 1 – CORE-PULSE Main (Default)
- **Zentrum:** Weltkugel (Wachstum)
- **Darunter:** Sicherheitsringe (Wachsamkeit)
- **Overlay:** Brain2Chain Dual-Brain
- **Rand:** Operator-Status (nur Anzeige)

---

### View 2 – Globe Detail
- Exploration von Regionen
- Anzeige von:
  - relativer Dichte
  - Trend (steigend / stabil / rückläufig)
- Keine Zahlen, keine Koordinaten

---

### View 3 – Security Detail
- Darstellung der Sicherheitszustände:
  - Ruhe
  - Aufmerksamkeit
  - Warnung
- Erklärung der Bedeutung, nicht der Mechanik

---

### View 4 – Cognition Detail (Brain2Chain)
- Darstellung der Denkzustände:
  - Aktiver Ruhezustand
  - KI denkt
  - Übergabephase
  - Mensch denkt / entscheidet
- Keine Inhalte, keine Logik, keine Modelle

---

## 5. Brain2Chain – Wahrnehmungsschicht

### Rolle
Brain2Chain ist eine **visuelle & erklärende Wahrnehmungsschicht**.

Sie macht sichtbar:
- **wer** denkt (KI oder Mensch)
- **wann** übergeben wird

Sie zeigt **nicht**:
- wie gedacht wird
- Inhalte
- Entscheidungen

---

### Explain-Mode (nur Präsentation)

- Nur im Präsentationsmodus verfügbar
- Manuell triggerbar
- Textuell, ruhig, kurz
- Erklärt:
  - Zweck der Ansicht
  - Bedeutung der Elemente
- Erklärt **nicht**:
  - Technik
  - APIs
  - Live-Zustände
  - Roadmaps

---

## 6. Zustände & Übergänge

### Zustände (bindend)
- Z0: Aktiver Ruhezustand
- Z1: KI denkt
- Z2: Übergabephase
- Z3: Mensch denkt / entscheidet
- Z4: Präsentationsmodus (Simulation)

### Regeln
- Kein direkter Übergang von Z1 → Z3 (immer Z2)
- Explain-Mode nur in Z4
- Zustandswechsel ändern keine Daten

---

## 7. Interaktion & Navigation

### Interaktionen
- Drehen / Zoomen → nur Exploration
- Hover → Bedeutung erklären
- Klick → Narrativ wechseln

### Verboten
- Aktionen
- Trigger
- State-Änderungen
- Filter mit Wirkung

---

## 8. Datenquellen & API-Read-Map

### Erlaubt (read-only, aggregiert)
- Systemzustand
- Sicherheitsstufe
- Kognitiver Zustand
- Präsentations-Simulation

### Verboten
- Schreibendpunkte
- Push/Migrate/Duplicate/Lock
- Logs, IDs, Zeitstempel
- URLs, Ports, Tokens

---

## 9. Präsentationsmodus

- Keine Live-Daten
- Keine externen Abfragen
- Nur Simulation
- Explain-Mode verfügbar

---

## 10. Backoffice-Trennung (verbindlich)

### CORE-PULSE
- Wahrnehmung
- Exploration
- Explain (Präsi)

### Operator Backoffice (separat)
- Operator-Ritual
- Freigaben
- Action-Receipts:
  - angefragt
  - freigegeben
  - ausgeführt
  - erfolgreich / fehlgeschlagen
- Anzeige nur auf Bedeutungsebene (keine Logs)

CORE-PULSE darf Backoffice **nicht ersetzen**.

---

## 11. Info-Icons („i“)

- Erlaubt im Backoffice / Admin-Kontext
- Erklären:
  - Zweck
  - Bedeutung
- Erklären **nicht**:
  - Technik
  - Infrastruktur
  - Zahlen

---

## 12. Harte Verbote (global)

CORE-PULSE zeigt **niemals**:
- URLs / Endpunkte
- Tokens / Secrets
- Logs / Stacktraces
- Zeitstempel / Uptime
- exakte Zahlen im Präsi-/Shadow-Modus
- Tech-Stack-Hinweise
- Aktionsbuttons

---

## 13. Abnahme-Kriterien

CORE-PULSE gilt als korrekt gebaut, wenn:

- Read-only durchgehend
- Keine Aktionen auslösbar
- Brain2Chain korrekt Z0–Z4 darstellt
- Explain-Mode nur in Präsentation
- Keine Leaks sichtbar
- Backoffice sauber getrennt

---

---

## 14. Device-Policy (V1 – verbindlich)

### Grundsatz
CORE-PULSE OS4 ist in Version 1 **bewusst Desktop-first** konzipiert.

Diese Entscheidung ist **architektonisch gewollt** und kein technisches Defizit.

---

### Unterstützte Geräte (V1)

- **Desktop / Large Screen:** ✅ voll unterstützt  
  - Primäre Zielplattform
  - Präsentation, Analyse, Wahrnehmung

- **Tablet (Landscape):** ⚠️ eingeschränkt unterstützt  
  - Read-only
  - Präsentations- und Beobachtungsmodus
  - Keine Interaktions- oder Fokus-Details

- **Smartphone:** ❌ kein Zielgerät für CORE-PULSE OS4 V1  
  - Keine Optimierung
  - Keine Interaktionslogik
  - Keine Pflicht zur Responsive-UX

---

### Begründung
CORE-PULSE:
- ist visuell komplex (Globus, Brain2Chain, Security-Ringe)
- benötigt Ruhe, Raum und Übersicht
- verliert auf kleinen Displays seine Bedeutung

---

### Ausblick
- Mobile-/Tablet-Konzepte sind **bewusst** auf eine spätere Version (V2/V3) verschoben
- Denkbar: Mini-Status-View, **kein** CORE-PULSE-Clone

---

### Vorgabe für Entwickler & KI-Builder
> Do **not** optimize CORE-PULSE OS4 V1 for smartphone usage.  
> Desktop and large screens only.

---

## Leitformel

> CORE-PULSE zeigt.  
> Brain2Chain erklärt.  
> Der Mensch entscheidet.  
> Das System handelt nie selbst.

---

## Abschluss

Dieses Functional Spec ist die **allein gültige Baugrundlage**  
für die CORE-PULSE OS4 Web App.

Abweichungen sind nur nach expliziter Freigabe durch **@chef** zulässig.

**Ende.**
