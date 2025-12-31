# OS4 Pending Approval Flow (V1)
**Status:** BINDING · GOVERNANCE  
**Datum:** 2025-12-30  
**Autorität:** @chef  
**Modus:** READ-ONLY / NON-BOOT (Dokument)  
**Prinzip:** GitHub = Source of Truth · Kein Write ohne Operator

---

## 1) Ziel
OS4 Tresor (LiveGPT) darf **niemals direkt** ins GitHub-Repo schreiben.  
OS4 Tresor darf nur **Pending Vorschläge** erzeugen.

Der Operator im **OS4 Operator Backoffice** muss Pending Vorschläge:
- sehen,
- prüfen,
- und **per Button** in einen echten Push verwandeln können (**Approve & Push**).

---

## 2) Rollen & Verantwortlichkeiten
### OS4 Tresor (LiveGPT)
- darf **nur** `pending/create` auslösen (Proposal)
- darf **niemals** `push` ausführen
- darf keine Secrets sehen

### Operator Backoffice
- zeigt Pending Inbox
- bietet Buttons: Approve & Push / Reject
- erzwingt PIN-Abfrage (Operator)

### Server (OS4 API Layer)
- ist **einziger** Schreibakteur Richtung GitHub
- validiert Keys & PIN
- schreibt Audit append-only

---

## 3) Secrets (Server-only)
**Pflicht**
- `OS4_TRESOR_GITHUB_TOKEN`  (GitHub Write Token, Contents: Read & Write)
- `OS4_TRESOR_PUSH_KEY`     (Tresor Pending Auth)
- `OS4_OPERATOR_PIN`        (Manual Operator Auth)

**Verbote**
- Secrets dürfen niemals im Client sichtbar sein
- Secrets dürfen niemals im Audit-Log stehen

---

## 4) Repo-Pfadstruktur (Source of Truth)
### Pending Dateien
```text
/system/pending/PENDING_<UUID>.json
