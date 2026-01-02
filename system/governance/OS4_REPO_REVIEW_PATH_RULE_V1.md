# OS4 REPO RULE · REVIEW PATH & AUTHORING (V1)

**Version:** 1.0  
**Datum:** 2026-01-02  
**Autorität:** @chef  
**Status:** CANONICAL RULE  
**Scope:** GitHub Repo `Media-Lux/medialux-os4-core`  
**Prinzip:** Canonical Mirror · Source-of-Truth liegt auf GitHub

---

## 1) Zweck

Diese Regel stellt sicher, dass **Reviews / Prüfberichte / Controller-Verdicts**
im Repo **auffindbar, konsistent, auditierbar** und **OS4-konform** abgelegt werden.

Sie verhindert:
- Drift-Pfade wie `tresor/...`
- nicht auffindbare Dokumente
- fehlende MetaHeader
- falsche Commit-Typen

---

## 2) Canonical Review Location (Pflicht)

Alle Reviews gehören **ausschließlich** nach:

```text
system/reviews/<SCOPE>/
