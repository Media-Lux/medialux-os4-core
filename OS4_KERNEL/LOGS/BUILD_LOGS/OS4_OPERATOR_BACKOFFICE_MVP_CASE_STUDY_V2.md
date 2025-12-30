---
lifecycle: ARCHIVED
authority: "@chef"
mode: READ-ONLY
non_boot: true
scope: OS4 Operator Backoffice + API Push Pipeline
date: 2025-12-30
---

# OS4 Operator Backoffice MVP — Case Study (V2)

## Ziel
- Operator-Backoffice als Arbeitsplatz (Desktop/Tablet/Mobile)
- Read-only by default
- GitHub Push kontrolliert (Manual PIN / Auto Pending)

## Ergebnis
- /operator live auf published domain
- Manual Kernel Push: Receipt (HTTP, success, SHA, URL)
- Push History im UI
- DE/EN Toggle
- Integrations-Bereich (Replit/Cursor) als Registry-Ansatz (read-only)

## Incident A: 403 Unauthorized operator code
**Symptom:** Manual Push 403, obwohl GitHub connected/healthy  
**Root Cause:** Secret-/Field-Mismatch (operatorPIN/operatorCode + env naming) nach Erweiterungen  
**Fix:** Client sendet operatorPIN+operatorCode; Server akzeptiert beide (fallback)  
**Prevention:** Source-of-truth Kachel: “Write OK” + Ampel + klare Hinweise

## Incident B: 403 Resource not accessible by personal access token
**Symptom:** Push schlägt trotz PIN/valid request fehl  
**Root Cause:** Fine-grained PAT ohne “Contents: Read & write”  
**Fix:** Token Permissions korrigiert  
**Prevention:** Token Permission Checklist + Test Push Playbook

## Test Playbook (minimal)
1) /api/status muss 200 liefern
2) Manual Push: TEST file in OS4_KERNEL/LOGS/TEST/
3) Ergebnis: HTTP 200 + commitUrl + SHA sichtbar

## Offene Punkte (Gold)
- API Console Tile (Status + Write OK + letzter Push + Rot/Grün)
- Auto Push Pending Flow (Tresor schlägt vor, Operator bestätigt)
- i-Tooltips überall (Was/Wozu/Was tun bei Fehler)
- Export/Audit Pack (Push History, Receipts, Errors)

**Ende**
