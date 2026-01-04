---
title: "OS4 Pending Command Routing"
version: "V1.0"
domain: "governance.pending"
lifecycle: "SPEC"
authority: "@chef"
mode: "READ-ONLY"
scope: "Command/Intent routing for Pending (no direct writes by GPT)"
notes:
  - "Defines how human/agent intent becomes API actions."
  - "No chat keyword triggers anything by itself."
  - "Only HTTP-capable executors can call the API."
---

# OS4 Pending Command Routing (V1)

## 0) Hard Truth (non-negotiable)
- ChatGPT / LiveGPT cannot execute HTTP requests from chat.
- The word "pending" in chat triggers **nothing** by itself.
- Pending is **only real** if created via `POST /api/pending/create`.
- Operator Backoffice is the final gate for execution (`approve/reject`) and requires PIN.

## 1) Canonical Flow
Intent → API Action → Repo Artifact → Operator Decision → GitHub Commit → Audit

### 1.1 Create
- Endpoint: `POST /api/pending/create`
- Auth: `tresorKey` (header `X-OS4-TRESOR-KEY` or body field)
- Result: writes `system/pending/PENDING_<id>.json` in GitHub

### 1.2 Approve (executes real push)
- Endpoint: `POST /api/pending/approve`
- Auth: `operatorPIN` (or operatorCode fallback)
- Result:
  - commits target file (real push)
  - moves pending → `system/pending_approved/APPROVED_<id>.json`
  - appends audit → `system/audit/OS4_PUSH_HISTORY_YYYY-MM-DD.yml`

### 1.3 Reject (no push)
- Endpoint: `POST /api/pending/reject`
- Auth: `operatorPIN`
- Result:
  - moves pending → `system/pending_rejected/REJECTED_<id>.json`
  - appends audit (rejected)

## 2) Intent Mapping (strict)
This is the only allowed mapping:

| Intent (human/agent) | Executor (must be HTTP-capable) | API |
|---|---|---|
| "Create Pending" | Backoffice Button / Agent3 / CLI | POST /api/pending/create |
| "Approve Pending" | Operator Backoffice (PIN) | POST /api/pending/approve |
| "Reject Pending" | Operator Backoffice (PIN) | POST /api/pending/reject |
| "View Pending" | Backoffice | GET /api/pending/list |
| "View Audit" | Backoffice | GET /api/audit/history |

## 3) Where to look in GitHub (Source of Truth)
- Open pendings: `system/pending/`
- Approved archive: `system/pending_approved/`
- Rejected archive: `system/pending_rejected/`
- Proof / SoT: `system/audit/OS4_PUSH_HISTORY_YYYY-MM-DD.yml`

## 4) Minimal QA (Definition of Done)
✅ Create pending via API produces file in `system/pending/`  
✅ Backoffice shows pending count > 0  
✅ Approve commits target + produces audit entry + moves JSON to approved  
✅ Reject moves JSON to rejected + produces audit entry  
✅ No secrets ever logged or returned to UI  
✅ Paths must never start with "/" (server validation)

## 5) Operator Rule
> OS4 Tresor thinks. Operator decides. GitHub remembers.
