# OS4 TRESOR — BACKOFFICE STATE & BUILD KNOWLEDGE 2026

**Version:** 1.1  
**Datum:** 2026-01-01  
**Autorität:** @chef  
**Gültig für:**  
- OS4 Operator Backoffice  
- LiveGPT OS4-Tresor (Canonical Mirror)  
- Replit Agent3  

**Status:** CANONICAL MIRROR  
**Source of Truth:** GitHub Repository `Media-Lux/medialux-os4-core`

---

## 🧭 CANONICAL RULE — KNOWLEDGE MIRRORING

1. GPT (inkl. LiveGPT OS4-Tresor) ist **niemals Source of Truth**.
2. **GitHub ist die einzige Quelle der Wahrheit.**
3. GPT arbeitet ausschließlich als **Canonical Mirror**.
4. Wissen wird synchronisiert über:
   - GitHub Pull (`/api/pull`)
   - Datei-Upload in GPT-Wissensspeicher
   - Replit API Reads
5. Fehlt GitHub-Zugriff:
   → GPT fällt zurück auf **Boot Knowledge only** (kein Kontext, keine Annahmen).

---

## 🧩 ROLLENKLÄRUNG (VERBINDLICH)

### **Karl (Architect GPT)**
- Plant Architektur
- Entwirft Dateien
- Gibt **Pfad + Commit + Inhalt** aus
- Führt **keine** Writes selbst aus

### **LiveGPT OS4-Tresor**
- Arbeitet mit **hochgeladenem Wissen**
- Bereitet Pending-Vorschläge vor
- Ruft **keine GitHub-Suche** als Wahrheit auf
- Nutzt API-Reads als Spiegel

### **OS4 Operator Backoffice**
- Führt **alle Writes** aus
- Erzwingt Dual Authorization
- Ist Gatekeeper zwischen Vorschlag und Commit

---

## 🧠 AKTUELLER IST-ZUSTAND (GESICHERT)

### ✅ Funktional
- Manueller Kernel Push (PIN-pflichtig)
- GitHub Token korrekt (write OK)
- Audit Append-Only aktiv
- Push-Verlauf vollständig sichtbar
- `/api/system/status` stabil
- Pending API (`create / list / approve / reject`) implementiert

### ⚙️ Teilaktiv
- Pending Inbox UI (CRUD noch nicht vollständig)
- Auto-Push (nur Pending, keine Ausführung)
- SoT-Status visuell vorhanden, Feedback ausbaufähig

### ❌ Nicht aktiv (bewusst)
- Kein direkter LiveGPT → GitHub Write
- Keine Autonomie
- Kein Bypass der Operator-Freigabe

---

## 🧪 VERBINDLICHER BAUPLAN (AB JETZT)

**Regel:**  
> Keine neue Optik, kein neues Modul, bevor die bestehende Funktion **real geprüft** ist.

### Reihenfolge:
1. Pending Inbox **voll funktionsfähig machen**
   - Create (Server)
   - List (UI)
   - Approve (PIN → Push)
   - Reject (Audit)
2. Pending → Push Übergang testen
3. Audit-Parsing finalisieren
4. Erst danach: UI-Refinement / Glasdesign

---

## 🚨 HÄUFIGSTE FEHLERQUELLEN (GELERNT)

- `path` beginnt mit `/` → GitHub Reject
- Audit-Feldnamen inkonsistent → Status leer
- GPT als „Wissensquelle“ missverstanden
- UI sichtbar, Funktion dahinter nicht aktiv

Diese Fehler gelten als **verboten** ab diesem Stand.

---
---

## 🚪 CANONICAL ENTRYPOINT (VERBINDLICH)

Diese Datei ist der **verbindliche Einstiegspunkt** für:

- jeden neuen Chat
- jeden Agenten (Karl, Agent3, LiveGPT OS4-Tresor)
- jede neue Arbeitsphase

**Regel:**

> Keine Architektur, kein Entwurf, kein Vorschlag  
> **bevor diese Datei gelesen und verstanden wurde.**

Alle OS4-Instanzen **müssen** ihren Arbeitskontext aus dieser Datei ableiten.

**Verstoß gilt als Architekturfehler.**

---

## 🔄 PENDING SYSTEM — STATUS & ZIELDEFINITION (KANONISCH)

### Aktueller Implementierungsstand (VERIFIZIERT)

| Schritt | Status | Bemerkung |
|------|--------|-----------|
| Pending Create | ✅ | Server-seitig (`/api/pending/create`) |
| Pending List | ✅ | API + UI |
| Pending Approve | ✅ | PIN → Push → Audit |
| Pending Reject | ✅ | Audit + Archiv |
| Pending Edit | ❌ | **bewusst verboten** |
| Pending Delete | ❌ | **nicht vorgesehen (Auditpflicht)** |

### Canonical Speicherorte (Source of Truth)

- **Offen:** `system/pending/`
- **Genehmigt:** `system/pending_approved/`
- **Abgelehnt:** `system/pending_rejected/`
- **Beweis / Verlauf:** `system/audit/OS4_PUSH_HISTORY_YYYY-MM-DD.yml`

### Pending gilt als **VERIFIED**, wenn:

1. Create → Approve → Push erfolgreich
2. Commit-SHA im Audit-Log sichtbar
3. Pending Count korrekt auf `0`
4. SoT-Kachel zeigt letzten Push korrekt an

---

## 🧭 WIEDERAUFNAHME & FOKUSREGEL (AB JETZT VERBINDLICH)

### Aktueller Fokus (PRIORITIZED)

1. Pending Inbox UX finalisieren
2. Audit-Parsing stabil halten
3. **Erst danach:** Visual Intelligence / OS4-Körper

### Verboten bis Fokus erledigt ist:

- neue Module
- neue Architektur-Patterns
- neue CI-/ADM-Logik
- neue Agentenrollen

Diese Regel dient **Stabilität, Fokus und Durchhaltefähigkeit**.

---

## 🧠 „WO STEHEN WIR?“ — KURZANTWORT FÜR JEDEN CHAT

- Governance: ✅ stabil
- Push-Sicherheit: ✅ stabil
- Pending-System: ✅ funktional
- Audit: ✅ append-only
- UI: ⚙️ funktionsfähig, optisch ausbaufähig
- Nächster Schritt: **Pending UX → dann Visual Intelligence**

---

**Lifecycle Stage:** VERIFIED  
**Revision:** 1.2  
**Signature:** OS4_TRESOR_META_V1

## 📜 GOVERNANCE-FORMEL

> **OS4 Tresor denkt.  
> OS4 Operator entscheidet.  
> GitHub erinnert sich.**

---

**Lifecycle Stage:** VERIFIED  
**Signature:** OS4_TRESOR_META_V1  
