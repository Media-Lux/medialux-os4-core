# OS4 Kernel Task Plan — Controlled Execution

**Status:** BINDING · INTERNAL  
**Datum:** 2025-12-31  
**Autorität:** @chef  
**Modus:** CONTROLLED EXECUTION · OPERATOR-TRIGGERED · NON-AUTONOMOUS  

**Prinzip:**  
Der Kernel führt ausschließlich **vorab genehmigte, dokumentierte Aufgaben** aus.  
Keine Autonomie. Keine zeitgesteuerten Entscheidungen.  
Kein Write ohne explizite Governance-Referenz.

---

## 1) Ziel

Der Kernel unterstützt Pending-, Audit- und Source-of-Truth-Prozesse  
durch **Prüfen, Klassifizieren und Aggregieren** —  
nicht durch Entscheiden oder autonomes Ausführen.

---

## 2) Aufgabenbereiche

### A) Pending Processing (nicht-autonom)

- liest `/system/pending/`
- identifiziert offene Pending-Einträge
- klassifiziert Pendings:
  - `approval_required: true`
  - `approval_required: undefined`
- **KEINE automatische Freigabe**
- markiert Pendings als:
  - `ready_for_operator_review`
- Operator entscheidet ausschließlich im Backoffice-UI
- Genehmigte Pendings werden archiviert unter:
  `/system/pending_approved/`
- Abgelehnte Pendings werden archiviert unter:
  `/system/pending_rejected/`
- Kernel erstellt **nur Logs**, keine Commits.

---

### B) Audit Aggregation

- liest `/system/audit/OS4_PUSH_HISTORY_*.yml`
- zählt `success` und `error_class` nach Typ
- klassifiziert Audit-Daten für:
  - `auth_failures`
  - `token_invalid`
  - `io_errors`
  - `policy_violations`
- erzeugt tägliche Zusammenfassung (intern, nicht public)
- Ergebnis wird im Operator-Dashboard angezeigt:
  - Audit Summary Panel (Read-only)

---

### C) Source-of-Truth Monitoring

- überprüft `/api/system/status`
- vergleicht:
  - Pending Count
  - Letzter Push SHA
  - Error Class
- keine selbstständigen Aktionen bei Fehlern
- bei Abweichung: setzt Kernel-Flag `operator_attention_required: true`

---

## 3) Sicherheits- und Kontrollregeln

| Regel | Beschreibung |
|--------|---------------|
| R1 | Kein Write ohne Governance-Referenz |
| R2 | Kein autonomer Task ohne Operator-Trigger |
| R3 | Kein Audit-Update ohne bestätigtes Commit |
| R4 | Kein Zugriff auf Secrets |
| R5 | Keine Selbstprüfung ohne externe Bestätigung |
| R6 | Kein Speichern außerhalb `/system/` |

---

## 4) Operator-Trigger-Prozess

1. Operator klickt im Backoffice:  
   **„Run Kernel Task Cycle“**
2. Kernel liest aktuelle Statuswerte
3. Kernel erstellt:
   - Pending Summary
   - Audit Summary
   - SoT Summary
4. Ergebnisse werden ins Dashboard geladen  
   → Keine Schreibvorgänge nach GitHub
5. Optionaler manuell genehmigter Push = erlaubt (über `Approve & Push`)

---

## 5) Governance-Verknüpfung

Dieser Plan verweist verbindlich auf:  
- `/system/governance/OS4_PENDING_APPROVAL_FLOW_V1.md`  
- `/system/governance/OS4_TRESOR_MASTER_KNOWLEDGE_SNAPSHOT_2025-12-30.md`

**Keine Abweichung oder Erweiterung ohne neue Version.**

---

## 6) Zielzustand

> Der Kernel ist ein Beobachter, kein Entscheider.  
> Er darf prüfen, aber niemals handeln.  
> Entscheidungen liegen ausschließlich beim Operator.  
> Jede automatisierte Ausführung ist ein Regelverstoß.

---

**Ende des Dokuments**  
`system/kernel/OS4_KERNEL_TASK_PLAN_CONTROLLED_EXECUTION_2025-12-31.md`
