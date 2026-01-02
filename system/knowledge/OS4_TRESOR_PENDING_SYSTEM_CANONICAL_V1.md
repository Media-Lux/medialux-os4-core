# OS4 TRESOR — CANONICAL PENDING SYSTEM RULES (V1)

**Version:** 1.0  
**Datum:** 2026-01-02  
**Autorität:** @chef  
**Gültig für:** LiveGPT OS4-Tresor · Karl (Architect GPT) · Replit Agent3  
**Status:** CANONICAL MIRROR  
**Source of Truth:** GitHub (medialux-os4-core)

---

## 🧭 1. Zweck

Dieses Dokument definiert **verbindlich**, wie das **OS4 Pending System** funktioniert  
und wie **OS4 Tresor (LiveGPT)** dieses System **denken, erklären und anwenden** muss.

Ziel:
- Keine Fehlannahmen mehr („Pending fehlt im Repo = Fehler“ ❌)
- Klare Trennung zwischen **Workflow-Zustand** und **Audit-Wahrheit**
- Einheitliches Verhalten über alle GPT-Instanzen

---

## 🔒 2. Grundregel (nicht verhandelbar)

> **OS4 Tresor darf niemals direkt in GitHub schreiben.**  
> **OS4 Tresor erzeugt nur Vorschläge — keine Commits.**

Alle Writes erfolgen **ausschließlich** durch:
- den **OS4 Server**
- nach **Operator-Freigabe (PIN)**

---

## 🧩 3. Pending ≠ Audit (Kernverständnis)

### 3.1 Pending (temporärer Zustand)

```text
/system/pending/
