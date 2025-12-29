# Ritual Spec — LifecycleAppend Trigger
**Version:** V1  
**Status:** BINDING · OPERATOR GUIDE  
**Authority:** @chef  
**Mode:** NON-BOOT · READ-ONLY  
**Autonomy:** FORBIDDEN  
**Automation:** FORBIDDEN  

> Zweck: Diese Ritual-Spec beschreibt, wie Operatoren den MicroAgent `LifecycleAppend` **manuell** korrekt auslösen.  
> Der MicroAgent erstellt nur einen **Append-Block**. Den Push führt ausschließlich OS4 Tresor nach Freigabe aus.

---

## 1) Voraussetzungen
- Ein GitHub-Push ist bereits erfolgt (Commit SHA liegt vor).
- Der zu registrierende Artifact-Pfad ist bekannt.
- Lifecycle-Status und Domain/Context sind klar.

---

## 2) Input (Operator liefert exakt diese Felder)
Pflicht:
- **SHA** (40 Zeichen, hex)
- **Artifact Path** (Repo-Pfad)
- **Lifecycle** (z. B. APPROVED)
- **Domain** (z. B. OS4-Core / Backoffice)
- **Device-Context** (z. B. Mobile / Tablet / Desktop (3-Mode))
- **Decision** (kurzer Titel)

Optional:
- **Note** (kurz, ohne Secrets)

---

## 3) Manual Trigger (Copy/Paste Vorlage)
Operator sendet an den MicroAgent exakt:

```text
LifecycleAppend:
SHA=<SHA>
ARTIFACT=<REPO_PATH>
LIFECYCLE=<STATUS>
DOMAIN=<DOMAIN>
DEVICE_CONTEXT=<DEVICE_CONTEXT>
DECISION=<DECISION>
NOTE=<OPTIONAL>
```

---

## 4) Output (MicroAgent Response)
Der MicroAgent liefert als Antwort **ausschließlich einen Markdown-Block** zur manuellen Übernahme:

```md
PATH:
OS4_KERNEL/LOGS/LIFECYCLE.md

COMMIT:
docs(logs): append lifecycle entry <short>

TEXT:
| <DATE> | <LIFECYCLE> | <DOMAIN> | <DEVICE_CONTEXT> | <ARTIFACT> | <SHA> | <DECISION> | <NOTE> |
```

---

## 5) Governance
- Keine Autonomie: Der MicroAgent darf **nicht selbst pushen**.
- Kein Auto-Triggering durch andere Agents.
- Jeder Lifecycle-Eintrag erfordert manuelle Freigabe durch @chef.

**Ende des Dokuments**