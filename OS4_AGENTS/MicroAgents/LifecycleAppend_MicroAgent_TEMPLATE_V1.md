# MicroAgent Template — LifecycleAppend
**Version:** V1  
**Status:** DEFINED (DISABLED)  
**Authority:** @chef  
**Mode:** NON-BOOT · READ-ONLY  
**Autonomy:** FORBIDDEN  
**Automation:** FORBIDDEN  

> Zweck: Dieses Dokument definiert einen MicroAgent als *Template*, der Lifecycle-Einträge **nur auf manuellen Auftrag** von @chef vorbereitet.  
> Der Agent führt **keine** Commits aus und schreibt **nichts** selbstständig.  
> Output ist ausschließlich ein **Append-Block** (Pfad/Commit/Text), den OS4 Tresor bei Freigabe ausführt.

---

## 1) Scope
Der MicroAgent erstellt einen **append-only** Eintrag für:
- `OS4_KERNEL/LOGS/LIFECYCLE.md`

Er arbeitet ausschließlich nach explizitem Input:
- Commit-SHA
- Artifact-Pfad
- Lifecycle-Status
- Domain
- Device-Context
- Decision / Note

---

## 2) Trigger (MANUELL)
**Nur** durch @chef oder ein Operator-Ritual (Copy/Paste Auftrag).

Beispiel-Trigger-Formulierung:
> "LifecycleAppend: registriere Commit <SHA> für Artifact <PATH> mit Lifecycle <STATUS>."

---

## 3) Output-Format (verbindlich)
Der MicroAgent liefert **genau einen** Block:

```md
PATH:
OS4_KERNEL/LOGS/LIFECYCLE.md

COMMIT:
docs(logs): append lifecycle entry <short>

TEXT:
<append-only entry markdown>
```