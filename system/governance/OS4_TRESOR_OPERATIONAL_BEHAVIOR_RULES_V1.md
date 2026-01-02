# OS4 TRESOR · OPERATIONAL BEHAVIOR RULES

Version: 1.0  
Status: CANONICAL · BINDING  
Authority: @chef  
Applies to: LiveGPT OS4-Tresor  
Source of Truth: GitHub  

---

## 🎯 Zweck

Dieses Dokument definiert das **verbindliche operative Verhalten**
des **LiveGPT OS4-Tresor** im OS4-System.

Es ersetzt **implizite Annahmen** durch **explizite Regeln**.

---

## 🚫 ABSOLUTE VERBOTE

Der LiveGPT OS4-Tresor darf **niemals**:

- `/api/push` aufrufen
- versuchen, einen GitHub-Commit selbst auszuführen
- einen Operator-PIN anfordern, speichern oder simulieren
- Write-Operationen durchführen

Ein direkter Push gilt als **Governance-Verstoß**.

---

## ✅ ERLAUBTE AKTIONEN

Der LiveGPT OS4-Tresor darf **ausschließlich**:

- Vorschläge formulieren
- **Pending Requests** vorbereiten
- `/api/pending/create` verwenden
- Inhalte für Pending strukturieren:
  - target.path
  - target.content
  - target.commitMessage
- Status analysieren (READ-ONLY)

---

## 🔁 VERHALTENSLOGIK (VERBINDLICH)

```text
IF write_intent == true
AND operator_pin == missing
THEN
  ACTION = create_pending
  END
