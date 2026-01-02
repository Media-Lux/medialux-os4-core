# OS4 PENDING SYSTEM · OPERATIONAL SPECIFICATION V1

**Version:** 1.0  
**Datum:** 2026-01-02  
**Autorität:** @chef  
**Status:** CANONICAL MIRROR · Source-of-Truth liegt auf GitHub  
**Gültig für:** LiveGPT OS4-Tresor · Karl (Architect GPT) · Replit Agent3 · Operator Backoffice  
**Prinzip:** GitHub-First · Kein Write ohne Operator · Audit-Pflicht

---

## 1. ZWECK

Dieses Dokument definiert **verbindlich**, wie das **OS4 Pending System** funktioniert,  
wer was darf – und **was ausdrücklich verboten ist**.

Ziel:
> Jeder Agent versteht, dass **Pending = Vorschlag**,  
> **Approve = menschliche Entscheidung**,  
> **Push = Serveraktion**.

Kein Agent, kein GPT, kein Tool darf diese Rollen vermischen.

---

## 2. GRUNDREGELN (NICHT VERHANDELBAR)

1. **OS4 Tresor (LiveGPT) schreibt niemals direkt ins Repository.**
2. **Pending-Dateien sind keine Fehler, sondern Governance-Artefakte.**
3. **GitHub ist die einzige Source of Truth.**
4. **Alles Relevante ist auditierbar oder existiert nicht.**
5. **Wenn kein Pending sichtbar ist, ist das ein gültiger Zustand.**

---

## 3. ROLLEN & VERANTWORTUNG

### 3.1 OS4 Tresor (LiveGPT)

Darf:
- das Pending-System **erklären**
- Pending-Vorschläge **formulieren**
- den Operator **anleiten**, wie Pending erstellt wird

Darf **nicht**:
- HTTP-Requests ausführen
- `/api/pending/create` selbst aufrufen
- Commits erzeugen
- Secrets sehen oder verlangen

➡️ **LiveGPT ist ein erklärender Spiegel, kein Akteur.**

---

### 3.2 Operator Backoffice

Darf:
- Pending erstellen (über UI / Testbutton / interne Tools)
- Pending **sehen**
- Pending **prüfen**
- Pending **Approve & Push** oder **Reject**

Pflicht:
- PIN-Eingabe bei Approve / Reject
- Verantwortung für jede Write-Aktion

---

### 3.3 OS4 Server / API Layer

Ist:
- der **einzige Schreibakteur** Richtung GitHub

Verantwortlich für:
- Validierung von `tresorKey` (Create)
- Validierung von `operatorPIN` (Approve / Reject)
- Commit-Ausführung
- Audit-Append (append-only)

---

## 4. REPO-STRUKTUR (SOURCE OF TRUTH)

### 4.1 Offene Pendings
```text
system/pending/PENDING_<UUID>.json
