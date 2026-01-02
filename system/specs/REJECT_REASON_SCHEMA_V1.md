---
id: SPEC_REJECT_REASON_SCHEMA_V1
type: spec
scope: system/audit + system/pending
status: DRAFT
owner: "@chef"
created: 2026-01-02
source_of_truth: GitHub
---

# Reject Reason Schema (V1)

## Ziel
Rejects müssen:
- auditierbar
- maschinenlesbar
- UI-fähig
sein.

Freitext allein ist **nicht ausreichend**.

---

## Pflicht-Payload
```json
{
  "reason_code": "REJECT_INVALID_PATH",
  "message": "Path starts with '/' which is forbidden.",
  "actor_id": "@operator"
}
