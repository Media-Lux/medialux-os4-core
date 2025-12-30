---
lifecycle: ACTIVE
authority: "@chef"
mode: READ-ONLY
non_boot: true
scope: Operator Workplace
---

# OS4 GOLD BACKLOG (V1)

## P0 – Angstkiller / Source-of-Truth
1. API Console Tile: /api/status + Write OK + last push receipt + red/green lamp
2. Push History: server-validated status (200/403/500), copy SHA, open commit URL
3. Clear error language: “Wenn X, dann Y; Lösung: Z” (kein Expertensprech)

## P1 – Auto Push Pending (Tresor → Operator)
4. Auto Push Request (pending list) + confirm/reject + audit trail
5. Rate limit / cooldown + operator role tags

## P1 – UX Pflicht
6. i-Icons überall (kurz, ruhig): Zweck, Risiko, was prüfen, was tun
7. Tablet: keine hässlichen Scrollbars (layout fix)
8. Icons vor Text wieder konsistent (Icon-first, text-first in Listen)

## P2 – Integrations Registry
9. Replit/Cursor/AI Tools: “connected / not configured” + copy links/paths
10. Multiple GitHub accounts: registry + switch + read-only inspection

## P2 – Audit & Export
11. Export Pack: Push Receipts + History + API Health Snapshot (PDF/MD)
12. Evidence capture: “Nicht unser Fehler” Nachweis (logs, timestamps, commit URLs)

**Ende**
