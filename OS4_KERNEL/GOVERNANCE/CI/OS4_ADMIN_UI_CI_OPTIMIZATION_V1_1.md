# OS4 ADMIN UI · CI & VISUAL OPTIMIZATION GUIDELINES
## Ergänzender Leitfaden (bindend, nicht ersetzend)

**Version:** V1.1  
**Status:** Erweiterung · Bindend  
**Gültig für:** OS4 Tresor · OS4 Core Pulse · OS4 Operator · API Web App  

> This document is a binding CI and UI governance addendum.  
> It complements existing medialux CI and OS4 architecture documents.  
> No existing rules are replaced.

---

## 1. Grundsatz: Keine Neuentwicklung
Diese Leitlinie ergänzt bestehende Architektur um **optische, semantische und bedienlogische Präzisierungen**.
Sie verändert **keine Module, Reihenfolgen oder Zuständigkeiten**.

---

## 2. Admin-First & Angstfreie Bedienung
- Ausschließlich Admin-/Operator-Ansichten  
- Read-only als Standard  
- Keine irreversiblen Aktionen im Hauptscreen  
- Stillstand = Zustand, kein Fehler

---

## 3. Icon-First Interaction (verbindlich)
- **Icon = Funktion**
- **Farbe = Status**
- **Text = Erklärung**

**Ausnahme (bindend):**
- In **Kernlisten** (Tables, zentrale Übersichten):  
  **Text zuerst**, Icon sekundär

---

## 4. Status- & Farbsemantik
- Grün → stabil / aktiv  
- Grau → neutral / offen  
- Blau → sekundär  
- Rot → ausschließlich Recording oder echte Blockade  

**Paused ist kein Fehlerzustand.**

---

## 5. Status vs. Fortschritt (Präzisierung)
- **Status** beschreibt den aktuellen Systemzustand  
- **Fortschritt** beschreibt den Entwicklungsstand  
- Beide dürfen **nicht visuell vermischt** werden

---

## 6. Fortschritt & Metriken
**Gilt für Admin-/Backoffice-Ansichten:**
- Prozentwert
- Kreisdiagramm (Ring)
- Balkenanzeige  
ruhig, sekundär, nicht KPI-dominant

**Gilt nicht für CORE-PULSE**  
(rein wahrnehmungsbasiertes Interface).

---

## 7. System Overview Panel (Pflicht)
Jede Admin-Ansicht enthält:
- Current Focus  
- Last Update (Zeit / Nutzer)  
- Next Milestone  

---

## 8. 3-Modi-Architektur
- **Mobile:** Präsenz & sicherer Zugriff  
- **Tablet:** Präsentation & Erklärung  
- **Desktop:** Operator-Werkbank (Tresorbrücke)  

Der aktive Modus ist **immer sichtbar**.

---

## 9. Desktop-Struktur: Tresorbrücke
**Ebene 1 – Tresorraum (Hintergrund):**
- Raumtiefe, Dunkelheit
- Symbolischer Systemstatus
- medialux AI System-Stamp (8–12 % Opacity)
- Keine Interaktion

**Ebene 2 – Brücke/Werkbank (Vordergrund):**
- Links: Navigation  
- Mitte: Arbeit  
- Rechts: Kontext/Details (Drawer)

---

## 10. Wasserzeichen & Herkunft
- Keine Fremd-KI-Wasserzeichen  
- Pflicht: **medialux AI System-Stamp**  
- Herkunft ≠ Werbung

---

## 11. Sicherheit
- Sichtbarer Hinweis: `READ-ONLY ACTIVE`
- Kritische Aktionen nur in separaten Bereichen
- Keine Push-/Commit-Aktionen im Hauptdashboard

---

## 12. Gültigkeit
Dieses Dokument ergänzt CI V1 als **V1.1-Addendum**  
und ist ab sofort **verbindlich** für alle OS4-Admin-Oberflächen.

**Ende des Dokuments**

SYSTEM-ANNOTATION:
Lifecycle: APPROVED
Domain: UI Governance / OS4-Core / Backoffice
Device-Context: Mobile / Tablet / Desktop (3-Mode)
Decision: UI Governance Addendum Approved
GitHub-Sync: EXECUTE PUSH NOW