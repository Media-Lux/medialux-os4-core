---
id: OS4_WORKING_BRAIN_BACKOFFICE_VIEW_SPEC_V1
type: view_spec
version: 1.0
status: SPEC_ONLY
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Working Brain — Backoffice View Spec (V1)

## Zweck
Definiert **WAS** das OS4 Operator Backoffice aus dem
`OS4_WORKING_BRAIN_STATE.md` **anzeigen muss**.
Keine UI-Implementierung. **Nur Felder & Texte.**

## Sichtbarkeit
- **Immer sichtbar** (Dashboard-Sidepanel oder eigener Bereich)
- **Read-only**
- Aktualisierung bei jedem State-Change

---

## Anzeige-Zonen (fix)

### 🔴 AKTIV (max. 1)
**DE**
- Titel
- Status (aktiv | blockiert)
- Warum jetzt
- Vorteil
- Nutzen (Ergebnis)
- Nächster Schritt
- Blocker (falls vorhanden)
- Letzte Berührung

**EN**
- Title
- Status (active | blocked)
- Why now
- Benefit
- Outcome
- Next step
- Blocker (if any)
- Last touched

---

### 🟡 WARTEND (max. 3, mit Position)
**DE**
- Position
- Titel
- Blockadegrund
- Wann es wieder aktiv wird
- Letzte Berührung

**EN**
- Position
- Title
- Blocker reason
- Unblocks when
- Last touched

---

### 🟢 PARKEN (unbegrenzt)
**DE**
- Titel
- Warum Gold
- Bezug (zu aktiv/wartend)
- Letzte Sichtung

**EN**
- Title
- Why it’s gold
- Related to (active/waiting)
- Last seen

---

## Bewegungs-Transparenz
Bei jeder automatischen Verschiebung anzeigen:
- Von → Nach
- Grund (faktisch)
- Grundlage (Lifecycle/Blocker/Dependency)
- Zeitpunkt

---

## Interaktion (bewusst eingeschränkt)
- ❌ Keine Bearbeitung
- ❌ Kein Priorisieren
- ❌ Kein Löschen
- ✅ Optional: „Details anzeigen“ (Read-only)

---

## Internationalisierung
- Default: **DE**
- Umschaltbar: **EN**
- Texte sind **Labels**, keine Logik

---

## Abhängigkeit
- Quelle: `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE.md`
- Keine weitere Datenquelle erlaubt
