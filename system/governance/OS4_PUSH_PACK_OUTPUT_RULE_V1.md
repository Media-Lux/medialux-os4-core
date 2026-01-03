# OS4 PUSH PACK OUTPUT RULE (V1)
**Status:** BINDING · INTERNAL  
**Datum:** 2026-01-03  
**Autorität:** @chef  
**Gültig für:** LiveGPT OS4-Tresor, Karl, Replit Agent3  
**Prinzip:** GitHub = Source of Truth · GPT = Canonical Mirror · Operator executes writes

---

## 1) Zweck
Diese Regel verhindert Output-Drift:  
Jede Datei, die ins Repo soll, muss als **Manual Push Pack** oder **Pending Pack** geliefert werden – strikt im Copy-Paste-Format.

---

## 2) Pflichtformat: Manual Push Pack (immer!)
Wenn @chef sagt „push das“, MUSS die Instanz exakt so liefern:

### Pfad
```md
<repo-relative-path-ohne-fuehrenden-slash>
