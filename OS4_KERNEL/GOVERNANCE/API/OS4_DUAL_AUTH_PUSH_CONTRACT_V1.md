---
authority: "@chef"
mode: READ-ONLY
non_boot: true
scope: API Push Authorization
---

# OS4 Dual Authorization Push Contract (V1)

## Manual Push (Operator Backoffice)
- Requires: operatorPIN matches OS4_OPERATOR_PIN
- Writes: allowed
- Receipt: httpStatus + success + sha + commitUrl

## Auto Push (OS4 Tresor)
- Requires: tresorKey matches OS4_TRESOR_PUSH_KEY
- Requires: manualConfirm === true (operator UI confirmation)
- No direct write from GPT context

## Governance
- No secrets in chat.
- All writes are server-executed and logged.
- Read-only default.

**Ende**
