# OS4 Manual Push Format Rule (V1)

**Version:** 1.0  
**Date:** 2026-01-03  
**Authority:** @chef  
**Status:** BINDING · GOVERNANCE  
**Scope:** OS4 Operator Backoffice · Manual Kernel Push  
**Principle:** Human copy/paste must be UI-safe. No API syntax in UI fields.

---

## 1) Purpose

This rule prevents format drift between:
- **Manual Kernel Push (UI)** in OS4 Operator Backoffice
- **API Push (JSON)** via `/api/push`

Manual pushes must be **operator copy/paste friendly** and **never** include API property wrappers.

---

## 2) Definitions

### Manual Kernel Push (UI)
Operator enters:
- Path
- Commit message
- Markdown content
- Operator PIN

### API Push (Programmatic)
System sends JSON body to `/api/push` with fields like:
- `commitMessage`, `path`, `content`, etc.

**These two formats must never be mixed.**

---

## 3) Canonical Manual Push Pack (Required Output Format)

Every manual-push-ready delivery must contain exactly 3 blocks:

### A) Path
```md
<repo-relative-path-without-leading-slash>

