# OS4 Push Governance Decision (Stand 2025-12-30)

**Autorität:** OS4 Tresor / Operator (@chef)  
**Gültigkeit:** Ab sofort  
**Prinzipien:** GitHub = Source of Truth · Read-only Default · Auditierbarkeit · Operator-Verantwortung

---

## 1. Push History / Audit Trail

**Entscheidung:**  
➡ **Append-only im GitHub-Repository**

**Begründung:**
- GitHub ist revisionssicher (Commit, SHA, Zeit).
- UI-Status oder Server-Memory sind nur Hilfsquellen, niemals Beweis.
- Reale Incident-Erfahrung (403 trotz „healthy“ API) zeigt:
  → Nur GitHub-Write + Commit-SHA sind verlässlich.
- Append-only Logs verhindern Manipulation und erlauben Recovery via Git-History.

**Architektur:**
- Jeder Push erzeugt einen Audit-Eintrag (`.yml` oder `.json`) im Repo.
- Felder: Timestamp, SHA, Operator-ID, Mode (manual/auto), Decision-Token.
- Kein Überschreiben, nur Append.
- Serverseitiger Cache/UI darf existieren, aber nie alleinige Quelle sein.

---

## 2. Auto Push Pending (Dual Authorization)

**Entscheidung:**  
➡ **Dedizierte Endpoints für Pending / Approve / Reject sind zulässig und empfohlen.**

**Begründung:**
- Dual Authorization ist Governance-Kernbestandteil.
- GPT darf vorbereiten, aber nicht ausführen.
- Reine UI-Bestätigung ohne serverseitigen Pending-State ist unzureichend.
- Dedizierte Endpoints ermöglichen:
  - klare Zustandsführung
  - Policy-Prüfung
  - Signatur-Validierung
  - saubere Audit-Spur
- Reduktion von Race-Conditions und Fehlbedienung.

**Minimalarchitektur:**
- `POST /pending` → erzeugt Pending-Eintrag
- `POST /approve` → führt autorisierten Commit aus
- `POST /reject` → archiviert Pending-Eintrag
- Pending-Einträge liegen im Repo (`/system/pending/`) oder in einer Queue,
  aber niemals direkt im Core-Branch.

---

## 3. Source-of-Truth Statusanzeige

**Entscheidung:**  
➡ **Zwingend serverseitig belegbare Statusindikatoren im Operator Backoffice**

| Indikator | Bedeutung | Quelle |
|---|---|---|
| GitHub Write OK | Letzter Push erfolgreich | GitHub API |
| Last Push SHA | Letzte Commit-Referenz | Repo |
| Pending Count | Offene Auto-Push-Anfragen | Repo / Queue |
| Error Class | Letzter Fehler (Auth, Token, API) | Serverlog |
| Auto-Push-Ready | System darf Auto-Push ausführen | Serverflag |

**Begründung:**
- Der Operator muss visuell erkennen können:
  *„Wenn ich jetzt wollte, würde es gehen.“*
- Statusanzeige ist Betriebs- und Sicherheitsinstrument, kein Design-Feature.
- Reduziert Stress, Fehlannahmen und Zeitverlust.

---

## Zusammenfassung – Governance-Kern

| Thema | Entscheidung | Prinzip |
|---|---|---|
| Audit Trail | Append-only im GitHub Repo | Revisionssicherheit |
| Auto Push | Pending + Approve | Human-in-the-Loop |
| Status | Serverseitig belegbar | Vertrauen & Transparenz |

---

**Kernprinzip bleibt unverändert:**

> *GitHub ist das Gehirn.  
> LiveGPT denkt.  
> Der Mensch entscheidet.  
> Schreiben passiert nur nach expliziter Freigabe.*

