---
state: CLASSIFIED
owner: OS4_TRESOR
module: OS4_ATLAS
scope: OPERATIONS
lifecycle: IMPLEMENTED → OPERATE
---

# 🧭 RUNBOOK_ATLAS — Operating Rules & Governance
Modul: **OS4_ATLAS_VAULT_LOGS**

Dieses Runbook definiert **Betriebsregeln, Zuständigkeiten, Incident-Logik** und
**Freeze/Resume-Prozesse** für OS4_ATLAS.  
Es ist **verbindlich** und steht **über** operativen Änderungen.

---

## 1. Zweck
- Sicherer Betrieb ohne Aktionismus
- Klare Zuständigkeiten (Human-in-the-Loop)
- Reproduzierbare Reaktionen auf Abweichungen
- Vorbereitung für Monitoring & späteren Proof-Layer

---

## 2. Rollen & Zuständigkeiten

| Rolle | Verantwortung |
|---|---|
| **OS4_TRESOR** | Governance, Freigaben, Stop/Resume |
| **Core Pulse OS4** | Systemrhythmus, Vitalparameter |
| **Operators** | Betrieb, Beobachtung, Meldung |
| **Auditor (intern)** | Nachvollziehbarkeit, Review |
| **ProofAgent (später)** | Beweis/Anchoring (deaktiviert) |

**Grundsatz:** Kritische Aktionen erfordern **Human-in-the-Loop**.

---

## 3. Event-Klassifikation (verbindlich)

### 3.1 Kategorien
- **RISK**: Risiken, Grenzverletzungen, Guards
- **HEALTH**: Systemzustand, Heartbeats
- **GOV**: Entscheidungen, Freigaben, Policies
- **INCIDENT**: Störungen, Abweichungen, Notfälle
- **APPROVAL**: formale Zustimmungen

### 3.2 Schweregrade
- **INFO**: Beobachtung
- **WARN**: Aufmerksamkeit erforderlich
- **CRIT**: Sofortmaßnahme

---

## 4. Incident-Definition

Ein **Incident** liegt vor, wenn mindestens eine Bedingung erfüllt ist:
- Leverage > Hardcap
- Cash-Reserve < Floor
- Depeg > Crit-Band
- Funding-Divergence > Crit
- Inkonsistenter Health-Status
- Unautorisierte Aktion / Regelbruch

---

## 5. Reaktionsmatrix (Kurz)

| Severity | Aktion |
|---|---|
| INFO | Loggen, beobachten |
| WARN | Risiko reduzieren, melden |
| CRIT | **Freeze**, Incident-Log, Tresor informieren |

---

## 6. Freeze / Resume (verbindlich)

### 6.1 Freeze
**Auslöser:** CRIT-Incident  
**Aktionen:**
1. Operative Aktionen stoppen
2. **INCIDENT**-Event schreiben
3. Tresor informieren
4. Zustand sichern

### 6.2 Resume
**Voraussetzungen:**
- Ursache verstanden
- Maßnahmen dokumentiert
- **Tresor-Freigabe**

**Aktionen:**
1. **GOV**-Event (Freigabe)
2. Betrieb schrittweise aufnehmen
3. HEALTH überwachen

---

## 7. Governance-Regeln

- Policies sind **bindend**
- Änderungen nur via **GOV**-Event
- Keine stillen Anpassungen
- Jede Entscheidung ist dokumentiert

---

## 8. Monitoring (Vorbereitung)
- Regelmäßige **HEALTH**-Events
- Trend-Beobachtung (WARN → CRIT)
- Keine Automatisierung ohne Runbook-Abdeckung

---

## 9. Proof-Layer (bewusst später)
- PM-Manifeste & Merkle erst aktivieren,
  **wenn** Governance & Monitoring stabil sind.
- Proof ist **Konsequenz**, kein Startpunkt.

---

## 10. Abschluss
Dieses Runbook macht OS4_ATLAS **betriebsfähig**, ohne es zu überautomatisieren.
Es schützt vor Schnellschüssen und hält den Tresor handlungsfähig.

> **Ordnung vor Geschwindigkeit.  
> Verantwortung vor Automatisierung.**

---
