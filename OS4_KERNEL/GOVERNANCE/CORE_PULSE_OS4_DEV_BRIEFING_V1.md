# CORE-PULSE OS4 – Developer Briefing (V1)

**Zielgruppe:** Externe Entwickler & KI-Builder  
**Autorität:** @chef  
**Quelle:** CORE-PULSE OS4 Functional Spec V1  
**Wichtig:** Dieses Dokument ist verbindlich.

---

## Ziel
Baue eine **read-only Web App** namens **CORE-PULSE OS4**,  
die Systemzustände **wahrnehmbar darstellt**, aber **niemals steuert**.

---

## Was gebaut wird (kurz)
- Eine visuelle Web App
- 4 Hauptansichten
- Exploration-only
- Keine Schreibaktionen
- Keine Admin-Funktionen

---

## Hauptansichten
1. **Main View**
   - Globus (Wachstum)
   - Security-Ringe
   - Brain2Chain Dual-Brain Overlay

2. **Globe Detail**
   - Regionale Trends (qualitativ)
   - Keine Zahlen

3. **Security Detail**
   - Ruhe / Aufmerksamkeit / Warnung
   - Bedeutung erklären, keine Mechanik

4. **Cognition Detail**
   - Denkzustände (Z0–Z4)
   - Keine Inhalte, keine Logs

---

## Modi
- **Live:** read-only Wahrnehmung
- **Shadow:** read-only Simulation
- **Präsentation:** Simulation + Explain-Mode

Explain-Mode:
- nur Präsentation
- manuell
- textuell
- erklärt Zweck, nicht Technik

---

## Harte Verbote
Die App darf **niemals**:
- schreiben
- Aktionen auslösen
- Endpunkte anzeigen
- Logs / Zahlen / Zeitstempel anzeigen
- Admin-Buttons haben
- Entscheidungen suggerieren

---

## Erlaubte Reads (abstrakt)
- Systemzustand (Enum)
- Sicherheitsstufe (Enum)
- Kognitiver Zustand (Enum)
- Präsentations-Simulation

---

## Trennung
- CORE-PULSE ≠ Backoffice
- CORE-PULSE zeigt keine Push-Erfolge
- Backoffice ist separat

---

## Abnahme
Bestanden, wenn:
- App komplett read-only
- Keine Aktionen möglich
- Brain2Chain korrekt sichtbar
- Explain-Mode nur in Präsentation
- Keine Leaks

**Ende**
