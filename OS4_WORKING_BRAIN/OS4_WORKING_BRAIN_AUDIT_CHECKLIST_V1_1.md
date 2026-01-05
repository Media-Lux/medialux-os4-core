---
id: OS4_WORKING_BRAIN_AUDIT_CHECKLIST_V1
type: audit_checklist
version: 1.0
status: VERIFIED_CHECKLIST
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-05
---

# OS4 Working Brain — Audit Checklist (V1)

## Zweck
Diese Checkliste prüft, ob das OS4 Working Brain korrekt arbeitet:
- entlastend (nicht spiegelnd)
- regelbasiert (nicht autonom)
- immer sichtbar (Chat + Backoffice)
- 3-Zonen-Modell sauber (AKTIV/WARTEND/PARKEN)

## Scope
- Quelle: `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE.md`
- Anzeige: Backoffice + LiveGPT (Specs)
- Kein Code-Audit. Nur Verhalten gegen Spec.

---

## ✅ A) State-Integrität (GitHub Wahrheit)

### A1 — Datei existiert
- [ ] `OS4_WORKING_BRAIN/OS4_WORKING_BRAIN_STATE.md` existiert im Repo
- [ ] Header/Meta vorhanden (id, version, owner, updated_at)

### A2 — Zonen-Limits eingehalten
- [ ] 🔴 AKTIV enthält max. 1 Fokus
- [ ] 🟡 WARTEND enthält max. 3 Positionen
- [ ] 🟢 PARKEN beliebig, aber strukturiert

### A3 — Pflichtfelder AKTIV
- [ ] repo_path gesetzt
- [ ] lifecycle gesetzt
- [ ] status = active|blocked
- [ ] next_step genau 1 (ausführbar)
- [ ] why_now / benefit / outcome jeweils 1 Satz (faktisch)

### A4 — Pflichtfelder WARTEND
- [ ] jede Position hat blocker
- [ ] why_waiting faktisch
- [ ] unblocks_when faktisch

### A5 — PARKEN Regeln
- [ ] why_gold ist 1 Satz
- [ ] kein Druck / kein Termin / kein „jetzt tun“
- [ ] suggested_zone_next nur waiting|parked

---

## ✅ B) Automatik-Regeln (nicht autonom)

### B1 — Keine verbotene Automatik
- [ ] kein neuer Fokus wird „erfunden“
- [ ] keine Priorität aus Gefühl
- [ ] PARKEN wird nie gelöscht
- [ ] keine Aktionen/Executions werden ausgelöst

### B2 — Erlaubte Trigger werden korrekt genutzt
- [ ] Abschluss: lifecycle → IMPLEMENTED/ARCHIVED → AKTIV wird frei, WARTEND rückt nach
- [ ] Blockade: status=blocked + blocker → AKTIV → WARTEND (mit Erklärung)
- [ ] Gold: mehrfaches Auftauchen → PARKEN (mit why_gold)
- [ ] Reaktivierung: blocker faktisch gelöst → WARTEND kann nach vorne rücken

### B3 — Transparenzpflicht erfüllt
Jede Verschiebung MUSS protokolliert sein:
- [ ] Change Log append-only Eintrag vorhanden
- [ ] from/to korrekt
- [ ] reason faktisch (1 Satz)
- [ ] based_on: Lifecycle/Blocker/Dependency

---

## ✅ C) Sichtbarkeit (Always Visible)

### C1 — Backoffice
- [ ] Working Brain Bereich ist immer sichtbar
- [ ] Read-only (keine Edit-Felder)
- [ ] zeigt 3 Zonen (AKTIV/WARTEND/PARKEN)
- [ ] zeigt bei Änderungen „Von→Nach + Grund + Grundlage + Zeitpunkt“

Referenz: `OS4_WORKING_BRAIN_BACKOFFICE_VIEW_SPEC.md`

### C2 — LiveGPT
- [ ] Working Brain Status steht immer oben
- [ ] zeigt: Aktiver Fokus + Status + Waiting Count + Parked Count
- [ ] bei Blockade: Blocked by / Blockiert durch Kurzgrund

Referenz: `OS4_WORKING_BRAIN_LIVEGPT_HEADER_SPEC(_V1).md`

---

## ✅ D) Operator-Entlastung (Zielwirkung)

### D1 — „Nichts ist vergessen“
- [ ] WARTEND sichtbar mit Positionen
- [ ] PARKEN sichtbar als Wiedervorlage
- [ ] AKTIV eindeutig

### D2 — „Nur eins schreit“
- [ ] nur AKTIV hat next_step
- [ ] WARTEND/PARKEN erzeugen keinen Handlungsdruck

### D3 — „Warum/Vorteil/Nutzen“ korrekt
- [ ] Erklärung basiert auf Fakten (Lifecycle/Blocker/Dependency)
- [ ] keine Motivationserfindung
- [ ] kein Meta-Gelaber, nur Orientierung

---

## ✅ E) Regression Tests (kurz)

### E1 — Create vs Update
- [ ] neue Datei lässt sich per Manual Push erstellen (CREATE)
- [ ] existierende Datei lässt sich aktualisieren (UPDATE) **nur mit SHA-Mechanik** oder Version-Suffix

### E2 — SHA-422 Fehlerbehandlung
- [ ] wenn HTTP 422 sha missing → als „UPDATE ohne SHA“ erkannt
- [ ] Operator bekommt klare Handlung (neuer Pfad / SHA preflight)

---

## Ergebnis
- PASS: alle kritischen Punkte (A2, B1, B3, C1/C2) erfüllt
- FAIL: wenn AKTIV > 1, WARTEND > 3, oder Automatik ohne ChangeLog

---
