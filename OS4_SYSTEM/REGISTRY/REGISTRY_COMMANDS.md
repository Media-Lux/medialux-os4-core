---
state: ACTIVE
authority: OS4_SYSTEM
scope: REGISTRY_COMMANDS
binding: INTERPRETATION_ONLY
automation: FORBIDDEN
execution: FORBIDDEN
---

# 🧭 OS4 Registry Commands
## Semantik für Status-, Park- und Bewertungsabfragen

## Zweck

Dieses Dokument definiert die **verbindliche Interpretationslogik**
für einfache, menschenlesbare Registry-Kommandos im OS4-System.

Es **führt keine Aktionen aus** und **ändert keine Zustände**.
Es beschreibt ausschließlich, **wie Abfragen zu lesen sind**.

---

## Grundregel

Registry-Kommandos sind **Lesebefehle**.
Sie lösen **keine Statusänderung**, **keine Bewertung** und **keine Aktivierung** aus.

Alle Ausgaben sind **informativ**.

---

## Erlaubte Kommandos

### 1) `Status`

**Bedeutung:**
Zeigt den aktuellen Überblick über alle Topics.

**Quelle:**
- `OS4_SYSTEM/REGISTRY/OPEN_TOPICS.md`

**Ausgabe:**
- Topics mit Status:
  - ACTIVE
  - IN_REVIEW
  - PARKED_*

**Nicht erlaubt:**
- Vorschläge
- Bewertungen
- Aktionen

---

### 2) `Geparkt`

**Bedeutung:**
Listet ausschließlich geparkte Topics.

**Filter:**
- PARKED_EARLY
- PARKED_RISK
- PARKED_DEPENDENCY

**Quelle:**
- `OS4_SYSTEM/REGISTRY/OPEN_TOPICS.md`

**Ausgabe:**
- Topic-ID
- Titel
- Status
- Risiko-Level
- Kurzbegründung

---

### 3) `Bewerten <Topic-ID>`

**Bedeutung:**
Startet **keine Aktivierung**,
sondern **verweist ausschließlich** auf die zugehörige Bewertungsgrundlage.

**Interpretationsregel:**
- `<Topic-ID>` bezieht sich **immer** auf eine ID aus:
  - `OS4_SYSTEM/REGISTRY/OPEN_TOPICS.md`

**Vorgehen:**
1. Identifiziere Topic anhand der ID.
2. Prüfe, ob eine Re-Entry-Checkliste existiert.
3. Referenziere die Checkliste **ohne Ausführung**.

**Beispiel:**
- `Bewerten 001`
  → Referenz:
  `OS4_SYSTEM/CHECKLISTS/PROOF_CREDIT_REENTRY.md`

**Nicht erlaubt:**
- Statusänderung
- Aktivierung
- Planung
- Engineering

---

## Sicherheitsregeln

- Keine Autonomie  
- Keine Trigger  
- Keine impliziten Aktionen  
- Keine Kombination von Kommandos  
- Keine Default-Interpretationen außerhalb dieses Dokuments

---

## Leitsatz

> Kommandos steuern keine Systeme.  
> Sie strukturieren Aufmerksamkeit.

---

© OS4 System · Registry Commands