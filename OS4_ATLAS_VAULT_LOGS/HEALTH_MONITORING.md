---
state: CLASSIFIED
owner: OS4_TRESOR
module: OS4_ATLAS
scope: MONITORING
lifecycle: OPERATE → OBSERVE
---

# 🩺 HEALTH_MONITORING — Observability & Incident Logic
Modul: **OS4_ATLAS_VAULT_LOGS**

Dieses Dokument definiert, **was OS4_ATLAS beobachtet**,  
**wie der Systemzustand interpretiert wird**  
und **wann aus Beobachtung ein Incident wird**.

Es ist bewusst **nicht automatisiert**.
Es schafft Klarheit, bevor Mechanik entsteht.

---

## 1. Ziel

- Frühzeitiges Erkennen von Abweichungen
- Trennung von *Zustand* (Health) und *Problem* (Incident)
- Einheitliche Sprache für Systemgesundheit
- Vorbereitung für spätere Automatisierung

---

## 2. Grundprinzip

**Health ist Beobachtung.  
Incident ist Entscheidung.**

Nicht jede Abweichung ist ein Fehler.
Nicht jeder Fehler ist ein Incident.

---

## 3. Health-Dimensionen

OS4_ATLAS beobachtet folgende Dimensionen:

### 3.1 Governance Health
- Policy-Version konsistent?
- Unautorisierte Änderungen?
- Fehlende Freigaben?

### 3.2 Data Integrity Health
- Event-Chain vollständig?
- `prev_event_hash` korrekt?
- Schema-Verletzungen?

### 3.3 System Rhythm Health
- Regelmäßige HEALTH-Events vorhanden?
- Ungewöhnliche Frequenzsprünge?
- Längere Stille ohne Erklärung?

### 3.4 Dependency Health
- Abhängigkeiten (z. B. Core Pulse) erreichbar?
- Zeitliche Drift zwischen Ereignissen?

---

## 4. Health-Level (verbindlich)

| Level | Bedeutung | Beschreibung |
|-----|----------|-------------|
| 🟢 **OK** | stabil | System im erwarteten Zustand |
| 🟡 **DEGRADED** | auffällig | Abweichung erkannt, aber kontrollierbar |
| 🔴 **UNSTABLE** | kritisch | Risiko für Integrität oder Governance |

---

## 5. Übergang: Health → Incident

Ein **Incident** wird ausgelöst, wenn:

- 🔴 UNSTABLE länger als einen definierten Zeitraum anhält
- Governance-Regeln verletzt werden
- Datenintegrität nicht mehr beweisbar ist
- menschliche Freigaben umgangen wurden

👉 **Incident ist kein technisches Ereignis, sondern ein Governance-Status.**

---

## 6. Incident-Kategorien

| Kategorie | Bedeutung |
|---------|----------|
| **GOV_INCIDENT** | Governance-/Freigabeverstoß |
| **DATA_INCIDENT** | Hash-/Chain-/Schema-Probleme |
| **SYSTEM_INCIDENT** | Rhythmus, Abhängigkeiten |
| **PROCESS_INCIDENT** | Runbook-Verstoß |

---

## 7. Reaktionslogik (nicht automatisiert)

### 7.1 Bei DEGRADED
- HEALTH-Event loggen
- Beobachtung intensivieren
- Kein Eingriff

### 7.2 Bei UNSTABLE
- **INCIDENT-Event erstellen**
- Runbook aktivieren
- Tresor informieren
- Freeze prüfen

---

## 8. Dokumentationspflicht

Jeder Incident MUSS:
- einen klaren Auslöser haben
- zeitlich eingegrenzt sein
- eine Reaktion dokumentieren
- eine Entscheidung enthalten (Freeze / Resume / Monitor)

---

## 9. Verhältnis zu Proof-Layer

- Health- und Incident-Logik ist **Voraussetzung** für Proof
- Proof ohne Health ist wertlos
- Erst wenn Health lebt, darf Proof automatisiert werden

---

## 10. Leitsatz

> **Ein System ist nicht gesund, weil es läuft.  
> Es ist gesund, weil es sich selbst versteht.**

---
