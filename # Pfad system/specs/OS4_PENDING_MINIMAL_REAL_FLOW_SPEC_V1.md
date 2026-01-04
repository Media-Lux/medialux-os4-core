# Inhalt
---
title: "OS4 Pending — Minimal Real Flow Spec (API + Backoffice UX)"
version: "V1.0.0"
domain: "governance.pending"
lifecycle: "APPROVED_DRAFT"
authority: "@chef"
mode: "READ-ONLY"
scope: "Make Pending real (persisted + visible + operator-executable), no simulations"
notes:
  - "This is the minimal spec to turn Pending into a real workflow."
  - "Pending exists only if it is persisted and visible in Operator Backoffice."
  - "No direct GPT writes. Operator remains final authority."
---

# OS4 Pending — Minimal Real Flow (V1)

## 0) Definition (Non-Negotiable)
**A Pending exists only if it is stored server-side and appears in Operator Backoffice.**  
Text blocks, chat confirmations, “sealed” messages, or JSON in chat are **not** Pendings.

**Roles**
- **LiveGPT OS4-Tresor:** creates *proposal payload* only (text/JSON), never writes, never approves.
- **Replit Server (OS4 API Layer):** the only component that persists pending objects + executes commits.
- **Operator Backoffice:** the only component that can approve/reject via PIN.

---

## 1) Target Architecture (Minimal, Real, No Overbuild)

**Create Pending (server) → Persist → Show in Backoffice → Approve/Reject (PIN) → Audit append-only**

Repo structure (Source of Truth):
- `system/pending/PENDING_<id>.json` (open items)
- `system/pending_approved/APPROVED_<id>.json` (archive + receipt)
- `system/pending_rejected/REJECTED_<id>.json` (archive + reason)
- `system/audit/OS4_PUSH_HISTORY_YYYY-MM-DD.yml` (append-only proof)

---

## 2) API (Minimal Required Endpoints)

### 2.1 POST /api/pending/create  (server-only persistence)
**Auth:** `tresorKey` (body OR `X-OS4-TRESOR-KEY` header) must match `OS4_TRESOR_PUSH_KEY`  
**NO operator PIN here.**  

**Request body**
```json
{
  "requestedBy": "LIVEGPT_OS4_TRESOR",
  "target": {
    "path": "OS4_STUDIES/OS4_SYSTEM_CONSCIOUSNESS_STUDY_REPORT_V1.md",
    "branch": "main",
    "commitMessage": "docs(study): add hybrid consciousness study report (research x governance)",
    "content": "# ... markdown ..."
  },
  "meta": {
    "domain": "OS4_STUDIES",
    "lifecycle": "CANDIDATE",
    "governanceRef": "system/specs/OS4_PENDING_SYSTEM_OPERATIONAL_SPEC_V1.md"
  }
}
