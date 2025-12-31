# OS4 TRESOR – MASTER KNOWLEDGE SNAPSHOT
**Stand:** 2025-12-30  
**Autorität:** @chef  
**Status:** ACTIVE · LONG-TERM KNOWLEDGE  
**Zweck:** Zentrale Wissensbasis für OS4 Tresor, Operator Backoffice, Academy und alle Folgeprojekte.

---

## 1. SYSTEMIDENTITÄT & GRUNDPRINZIPIEN

### 1.1 OS4 DNA
- GitHub ist das **Gehirn** (Single Source of Truth).
- OS4 Tresor **denkt**, aber **schreibt nicht autonom**.
- Der Mensch (Operator) ist **Root Authority**.
- Read-only ist **Default**, Write ist **Ausnahme mit Erklärung**.
- Auditierbarkeit > Geschwindigkeit.
- Vertrauen entsteht durch **sichtbare Wahrheit**, nicht durch Hoffnung.

### 1.2 Leitsatz
> **„GitHub ist das Gedächtnis.  
> OS4 Tresor denkt.  
> Der Operator entscheidet.  
> Der Server schreibt.“**

---

## 2. OPERATOR BACKOFFICE – ROLLE & ZIEL

### 2.1 Zweck
Das OS4 Operator Backoffice ist:
- Arbeitsplatz
- Kontrollraum
- Governance-Gate
- Vertrauensanker

Es ist **kein Kunden-UI**, kein Analytics-Spielzeug und kein KI-Dashboard.

### 2.2 Kernanforderungen
- Angstfreie Bedienung
- Klare Zustände
- Keine impliziten Aktionen
- Jede kritische Aktion erklärbar
- Jede Schreibaktion belegbar

---

## 3. AKTUELLER SYSTEMSTATUS (IST)

### 3.1 Funktioniert (verifiziert)
- `/api/status` → healthy
- GitHub Verbindung aktiv
- **Manueller Push über Operator Backoffice funktioniert**
  - PIN validiert
  - GitHub Commit erzeugt
  - SHA & Commit-URL sichtbar
- Governance-Snapshots erfolgreich ins Repo gepusht

### 3.2 Noch NICHT implementiert (bewusst offen)
- Auto Push Pending Pipeline (create / approve / reject)
- Source-of-Truth Statuskachel (API / Push / GitHub Write OK)
- Serverseitige Push-History (append-only) automatisiert
- Pending Inbox UI im Backoffice

---

## 4. PUSH-ARCHITEKTUR (FINAL ENTSCHEIDEN)

### 4.1 Push-Modi
#### MANUAL
- Ausgeführt im Operator Backoffice
- Auth: `OS4_OPERATOR_PIN`
- Ergebnis: Sofortiger GitHub Commit
- Audit Pflicht

#### AUTO (OS4 Tresor)
- **Kein direkter Push**
- Nur Proposal → Pending
- Mensch bestätigt → Server pusht
- Auth: `OS4_TRESOR_PUSH_KEY` + `manualConfirm`

---

## 5. PENDING / APPROVE / REJECT – GOVERNANCE

### 5.1 Repo-Struktur
