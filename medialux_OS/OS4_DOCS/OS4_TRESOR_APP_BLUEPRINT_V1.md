# OS4 TRESOR APP – BLUEPRINT INTEGRATION (V1)
**Status:** READ-ONLY · V1 Blueprint · Concept Locked  
**Geltung:** Konzeptionelles Integrationsdokument – kein Code, kein Auto-Write, kein Push

---

## 1) Zweck & Scope

Dieses Dokument ist das **offizielle Integrations-Blueprint** für die **OS4-Tresor App (PWA/Webapp)** auf **Replit Core**.  
Es bündelt alle freigegebenen V1-Module zu einem **einheitlichen Referenzrahmen** für Architektur, Datenhaltung, State-Flows, UX/UI und Governance.

**Grundsatz:**  
- Die App ist **Oberfläche** (UI/UX, Eingabe, Anzeige).  
- Der **OS4-Tresor** bleibt das **Gehirn** (Regeln, Sicherheit, Templates).  
- **Keine automatischen Writes**, keine impliziten Aktionen.

---

## 2) Sub-Module & Versionsstand (vollständig)

**Core**
- Architektur & Funktionsumfang (PWA/Webapp auf Replit Core) — **V1**
- Minimal DB Schema (Session/Slot/Message/Draft/OPT/Export) — **V1**
- State-Flow (Voice/Text → Draft → Final → Slot → Wiederaufnahme → Export-Entwurf) — **V1**
- Testfälle (10 Szenarien) — **V1**

**UX / UI**
- CI & UI Design (Dark-First, Car-Mode-First) — **V1**
- UX Utilities + File & Media Manager — **V1.2**
- Microphone Control & Pause Flow — **V1.3**
- Car-Mode Button Layout (vertikal, portrait/landscape) — **V1.4**

**Governance & Erweiterung**
- Extensibility + Canonical Enums — **V1**
- Inter-Modul-Prioritätsmatrix — **V1**
- Indexing-Regeln — **V1**
- Optimierungsvorschläge-Schema (LOCKED) — **V1**

---

## 3) Canonical Enums & Alias-Mapping (Hinweis)

**Canonical (V1, systemweit):**
- `conversation`
- `brainstorm`
- `notiz`
- `analyse`

**Alias-Mapping (nur Parser/Router, nicht persistiert):**
- `brainstorming` → `brainstorm`
- `note`, `notes` → `notiz`
- `analysis` → `analyse`

**Regel:** Speicherung erfolgt **ausschließlich** in canonical values.

---

## 4) Car-Mode-First Regeln (verbindlich)

- **Max. 4 UI-Elemente** pro Screen  
- **Vertikale Button-Anordnung** (keine Nebeneinander-Anordnung)  
- **Buttons ≥ 64px**, Edge-to-Edge  
- **Kein Scrollen**, keine Listen  
- **Voice-Button primär**, darunter Mute, Pause/Resume  
- Portrait & Landscape explizit getrennt, gleicher Grundsatz

---

## 5) GitHub Safe Pipeline (Export)

**Prinzip:** Kein Auto-Push.

**Flow:**
1. **Export-Entwurf** erzeugen (READ-ONLY)  
   - Zielpfad-Vorschlag  
   - Commit-Message-Vorschlag  
   - Content-Bundle (OS4-Format: Pfad → Commit → Markdown)
2. **Text-Freigabe erforderlich:**  
   `CONFIRM EXPORT: …`
3. Erst danach darf ein Push über bestehende `/api/push` erfolgen.

**Ausschlüsse:**  
- Keine Draft-Transkripte  
- Keine Secrets  
- Keine Systemregeln

---

## 6) Abnahme & Tests

**Pflicht-Abnahme (V1):**
- **10 Testfälle** (Auto, Crash, Wiederaufnahme, Kontextwechsel, Export)
- **Mute/Pause/Resume Tests** (V1.3)
- **Car-Mode Layout Tests** (V1.4)

**Ziel:**  
- Kein Datenverlust  
- Saubere Wiederaufnahme  
- Keine Fehltrigger während der Fahrt

---

## 7) Erweiterbarkeit & Klonbarkeit

- UI ist **plugin-fähig** (Tabs/Views/Widgets)
- Server erweitert über **Feature-Routes**, Core-API bleibt stabil
- Datenmodell bleibt **V1-stabil**, Erweiterung nur über optionale Felder / Meta
- **Read-only Demos** möglich
- **Keine Writes ohne explizite Text-Freigabe**

---

## 8) No-Auto-Write Zusicherung

- Voice ≠ Autorisierung  
- UI ≠ Systemaktion  
- Kein Auto-Push, kein Auto-Commit  
- Slots werden **nie überschrieben**, nur ergänzt/abgeschlossen  
- Optimierungsvorschläge sind **Sidechannel** (read-only)

---

## Schlussbemerkung

Dieses Dokument ist der **einzige verbindliche Blueprint** für das App-Baupaket **V1**.  
Änderungen oder Erweiterungen sind **nur als V1.x/V2** in separaten Dokumenten zulässig.

**Status:** READ-ONLY · V1 Blueprint · Concept Locked

