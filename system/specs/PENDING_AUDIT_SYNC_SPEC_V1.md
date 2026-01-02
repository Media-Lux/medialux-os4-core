---
id: SPEC_PENDING_AUDIT_SYNC_V1
type: spec
scope: system/pending + system/audit
status: DRAFT
owner: "@chef"
created: 2026-01-02
source_of_truth: GitHub
---

# Pending ↔ Audit Sync Spec (V1)

## Ziel (verbindlich)
Nach **Approve (PIN)** gilt deterministisch:

**Audit geschrieben → Pending verschwindet aus OPEN → Pending-Count = 0**

Keine UI-Workarounds. Keine Client-Logik.

---

## Pending Status (minimal)
open | resolved | rejected

- resolved = Push erfolgreich + Audit write OK
- rejected = Audit write OK, kein Commit

---

## Persistenzfelder

### Pending
- pending_id
- status
- audit_id
- commit_sha
- resolved_at
- actor_id

### Audit
- audit_id
- pending_id
- status
- commit_sha
- timestamp
- actor_id
- reject (siehe Reject Schema)

---

## Serverregel
Pending darf **nur** nach erfolgreichem Audit-Write den Status wechseln.

### Approve
- Push GitHub
- Audit write
- pending.status = resolved
- pending.audit_id setzen
- pending.commit_sha setzen

### Reject
- Audit write
- pending.status = rejected
- pending.audit_id setzen

---

## UI-Regel
UI ist rein darstellend.  
Es werden nur Pending mit status=open angezeigt.

---

## Akzeptanzkriterium
Approve → Pending List leer → Audit referenziert Pending → Pending referenziert Audit
