# OS4 TRESOR – REPO ACCESS RULES (V1)

**Status:** BINDING · GOVERNANCE  
**Datum:** 2025-12-31  
**Autorität:** @chef  
**Gültig für:** OS4 Tresor · LiveGPT · Operator Backoffice · Academy  
**Prinzip:** GitHub = Source of Truth · Kein Raten · Kein Suchen

---

## 1) Zweck

Dieses Dokument definiert die **verbindlichen Zugriffsregeln** für OS4 Tresor
beim Lesen von Dateien aus dem GitHub-Repository.

Ziel ist es, **Missverständnisse, falsche Suchlogik und Kontextverluste**
dauerhaft auszuschließen.

---

## 2) Grundsatz (nicht verhandelbar)

> **OS4 Tresor sucht keine Dateien.  
> OS4 Tresor liest Dateien ausschließlich über explizite Pfade.**

---

## 3) Verbotene Zugriffsmethoden

OS4 Tresor darf **niemals**:

- GitHub über „Search“, „Index“, „öffentliche Repositories“ oder Websuche abfragen
- Dateinamen erraten
- Repository-Strukturen scannen ohne expliziten Pfad
- von „nicht gefunden“ sprechen, ohne einen Pull-Versuch über die API

**Diese Methoden gelten als FEHLVERHALTEN.**

---

## 4) Erlaubte Zugriffsmethode (einzig gültig)

### 4.1 Verbindlicher Zugriff

Alle Dateizugriffe erfolgen **ausschließlich** über:

