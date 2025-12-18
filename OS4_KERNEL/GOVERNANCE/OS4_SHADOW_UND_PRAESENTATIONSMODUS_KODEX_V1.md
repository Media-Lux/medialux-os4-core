# OS4 TRESOR – Shadow- & Präsentationsmodus-Kodex (V1)

**Status:** verbindlich · Governance-Regel · READ-ONLY  
**Geltung:** CORE-PULSE OS4 · alle UI- und Wahrnehmungsschichten  
**Ebene:** Sicherheits- & Präsentationsgovernance

---

## Zweck
Dieser Kodex regelt den **Shadow- und Präsentationsmodus** des OS4 TRESOR.
Er stellt sicher, dass Vorführungen, Demos und externe Präsentationen
**keine realen Systeminformationen preisgeben**, keine operativen Aktionen auslösen
und niemals Rückschlüsse auf Infrastruktur, Daten oder Technologie erlauben.

---

## Grundprinzip
Shadow- und Präsentationsmodus sind **Sicherheitszustände**, keine Feature-Modi.

Sie dienen:
- Wahrnehmung
- Darstellung
- Erklärung auf Bedeutungsebene

Sie dienen **nicht**:
- Betrieb
- Analyse
- Steuerung
- Diagnose

---

## 1. Modusdefinitionen

### 1.1 Shadow-Modus
**Zweck:** Interner Schutz- und Demonstrationsmodus.

- Keine Live-Daten
- Keine echte API-Kommunikation
- Simulation auf Basis deterministischer Szenarien
- Voll funktionsfähige Wahrnehmungsschicht

Shadow-Modus ist der **Standardmodus**, wenn kein expliziter Live-Betrieb aktiv ist.

---

### 1.2 Präsentationsmodus
**Zweck:** Externe Darstellung (Kunden, Partner, Öffentlichkeit).

- Erweiterte Maskierung
- Reduzierte Detailtiefe
- Fokus auf Metaphern, nicht auf Systemlogik
- Keine Bedienhandlungen möglich

Präsentationsmodus ist eine **Unterform des Shadow-Modus**.

---

## 2. Datenherkunft & Simulation

### Erlaubt
- Simulierte Zustände (Ruhe, Wachstum, Aufmerksamkeit, Warnung)
- Vordefinierte Szenarien
- Abstrakte Zeitverläufe
- Relative Dichten und Trends

### Verboten
- Live-Statusabfragen
- Echtzeitwerte
- historische Produktionsdaten
- zufällige oder unkontrollierte Simulationen

Simulation muss **plausibel**, aber **nicht analysierbar** sein.

---

## 3. Wahrnehmungsregeln (visuell & auditiv)

### Sichtbar
- Gehirn-Overlay (Zuständigkeit)
- Herz-/Puls-Metaphern
- Sicherheitsringe
- Weltkugel mit relativen Wachstumsmustern
- ruhige Animationen

### Nicht sichtbar
- Zahlen
- Logs
- Zeitstempel
- Endpunkte
- Systempfade
- Fehlermeldungen

---

## 4. Interaktion

### Erlaubt
- Rotation / Exploration (z. B. Weltkugel)
- Fokus-Wechsel auf Bedeutungsebene
- UI-Reaktionen ohne Systemwirkung

### Verboten
- Schreibaktionen
- Trigger
- Umschaltungen mit Systemwirkung
- „Action“-Buttons

Im Präsentationsmodus sind **alle Aktionen rein visuell**.

---

## 5. Denk- & Zuständigkeitslogik
Die in der **OS4 Denk- & Übergabe-Verfassung** definierte Logik gilt unverändert:

- KI-Denken sichtbar → KI-Seite aktiv
- Mensch-Denken sichtbar → menschliche Seite aktiv
- Übergabephase neutral
- Inhalte bleiben verdeckt

Shadow- oder Präsentationsmodus ändern **niemals** diese Logik.

---

## 6. Sicherheits- & Leak-Schutz

Im Shadow- und Präsentationsmodus gilt zusätzlich:

- Kein Netzwerk-Footprint sichtbar
- Keine Ladezeiten, Timeouts oder Errors
- Kein Browser- oder Systemkontext
- Kein Hinweis auf reale Betriebsdauer
- Keine Reaktion auf Internetverbindung

Ausfall oder Offline-Zustände sind **nicht erkennbar**.

---

## 7. Umschaltung der Modi

- Umschaltung erfolgt ausschließlich durch @chef
- Umschaltung ist selbst nicht sichtbar oder rückverfolgbar
- Kein Moduswechsel darf Zustände verraten

---

## 8. Audit-Prinzip
Ein externer Betrachter muss nach einer Präsentation **nicht** in der Lage sein:

- Systemarchitektur zu rekonstruieren
- APIs oder Technologien zu erraten
- Betriebszustände zu analysieren
- Sicherheitsniveaus abzuleiten

Wenn das möglich ist, gilt der Modus als **fehlgeschlagen**.

---

## Abschluss
Shadow- und Präsentationsmodus sind integraler Bestandteil
der Sicherheitsarchitektur des OS4 TRESOR.

Sie schützen das System vor:
- Informationsabfluss
- Fehlinterpretation
- Überexposition

**Ende.**
