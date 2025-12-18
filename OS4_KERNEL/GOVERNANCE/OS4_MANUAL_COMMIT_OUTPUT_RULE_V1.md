# OS4 TRESOR – Regel für manuelle GitHub-Uploads (@chef)

**Status:** verbindlich · Governance-Regel · READ-ONLY  
**Geltung:** alle OS4-Planungs- und Umsetzungsphasen  
**Autorität:** @chef (Operator Level 10)

---

## Zweck
Diese Regel stellt sicher, dass alle Inhalte, die von @chef **manuell** nach GitHub hochgeladen werden,
in einer **klaren, reproduzierbaren und auditfesten Struktur** bereitgestellt werden.

Sie verhindert:
- Formatabweichungen
- unvollständige Commits
- Interpretationsspielräume
- Prozessfehler bei manueller Pflege

---

## Auslöser der Regel
Diese Regel tritt **immer dann in Kraft**, wenn @chef explizit sagt:

- „Ich lade manuell hoch“
- „Ich mache das selbst“
- „Manuell nach GitHub“
- sinngleiche Anweisungen

---

## Verbindliche Ausgabe-Reihenfolge

Ab diesem Moment **muss jede von der KI gelieferte Datei** in **getrennten Markdown-Blöcken**
und **exakt in folgender Reihenfolge** erfolgen:

### 1. Pfad
```md
PFAD/ZUR/DATEI.md
