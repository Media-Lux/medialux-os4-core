---
cassette: SECURITY_REGULATOR_CASSETTE
version: 1.0
author: "@chef (Operator Level 10)"
linked_to_manifest: true
description: >
  Dynamischer Sicherheits-Regler (SR-1) für OS4 TRESOR.
  Misst den System-Spannungs-Index (STI) und passt die Sicherheitsintensität
  an Aktivitäts- und Lastwerte an.
---

## 1. Aufgabe
Steuert Sicherheitsintensität (0–100 %) je nach Systembelastung.

## 2. Eingaben
- Nutzeraktivität (Sessions/min)
- CPU/RAM-Last (%)
- API-Frequenz (Calls/s)
- Fehlerrate (%)
- Hash-Abweichung (%)

## 3. Formel
