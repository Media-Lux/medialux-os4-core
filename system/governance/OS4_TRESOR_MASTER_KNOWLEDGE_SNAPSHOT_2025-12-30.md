# OS4 Tresor Master Knowledge Snapshot (2025-12-30)
**Status:** BINDING · GOVERNANCE  
**Datum:** 2025-12-30  
**Autorität:** @chef  
**Modus:** READ-ONLY / NON-BOOT  
**Prinzip:** GitHub = Source of Truth · Kein Write ohne Operator

---

## 1. Ziel
Der OS4 Tresor definiert die Regeln für Denken, Handeln und Nachvollziehbarkeit.  
Jede Aktion des Systems muss dokumentiert, signiert und reproduzierbar sein.

**Leitsatz:**  
> Kein Commit ohne Zustimmung, kein Push ohne Log.

---

## 2. Dual Authorization Architektur
**Rollen:**
- **Tresor (AI / GPT)** → darf nur Pending-Vorschläge erzeugen.  
- **Operator** → prüft, bestätigt oder verwirft.  
- **Kernel / Server** → ist der einzige Schreibakteur Richtung GitHub.

---

## 3. Sicherheitsprinzipien
- Keine Secrets im Client.  
- Kein Token in Logs.  
- Kein Write ohne Operator-PIN und Tresor-Key.  
- Append-only Audit-Log als einzige Wahrheit.

---

## 4. Verzeichnisstruktur
```text
/system/pending/
  ├── PENDING_<UUID>.json
  ├── APPROVED_<UUID>.json
  └── REJECTED_<UUID>.json
/system/audit/
  └── OS4_PUSH_HISTORY_<YYYY-MM-DD>.yml
