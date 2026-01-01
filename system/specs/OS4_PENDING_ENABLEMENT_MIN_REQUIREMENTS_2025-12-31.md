# OS4 Pending Enablement — Minimum Requirements (Operator Backoffice)

**Status:** BINDING · INTERNAL  
**Version:** V1.1 (Refinement)  
**Datum:** 2025-12-31  
**Autorität:** @chef  
**Scope:** Operator Backoffice Pending Flow  
**Prinzip:** GitHub = Source of Truth · Read-only Default · Keine Autonomie · Operator bestätigt Writes

---

## 0) Klarstellung (kritisch, nicht verhandelbar)

- ChatGPT / LiveGPT kann **keine direkten HTTP-Requests** an Replit oder andere APIs ausführen.
- LiveGPT kann **keine Pending selbst erzeugen**, sondern nur **Vorschläge formulieren**.
- Pending-Erstellung erfolgt **ausschließlich serverseitig** (Express API).
- Auslöser für Pending können sein:
  - internes Tool / Bridge (z. B. später OS4 Tresor Service)
  - Operator Backoffice Test-Button (**empfohlen für Validierung**)
  - externe Systeme mit HTTP-Fähigkeit
- Operator-PIN darf **niemals** an GPT gehen.
- Approve / Reject passiert **nur im Operator Backoffice**.

**Wichtig:**  
Fehlannahmen über „GPT pusht selbst“ gelten als **Architekturfehler**.

---

## 1) GitHub Source-of-Truth Struktur

### 1.1 Pending Store (Repo)
Pfad:
```text
/system/pending/
