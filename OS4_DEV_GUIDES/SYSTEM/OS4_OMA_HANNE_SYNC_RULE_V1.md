Text:
# OS4 OMA HANNE SYNC RULE (V1)

**Status:** READ-ONLY · Final  
**Version:** V1  
**Scope:** OS4 Tresor · Governance · Externe Arbeitsinstanz  
**Zweck:** Definiert, **wann**, **wie** und **mit welchem Wissensstand** Oma Hanne mit OS4 Tresor synchronisiert wird.

---

## 1) Grundprinzip

Oma Hanne ist eine **externe Arbeits- und Erklärinstanz**.  
Sie arbeitet **ausschließlich** auf Basis eines **freigegebenen System Capability Snapshots**.

**Merksatz:**  
> Ohne aktiven Snapshot arbeitet Oma Hanne nicht systemisch.

---

## 2) Synchronisations-Auslöser (V1)

Eine Synchronisation darf **nur** ausgelöst werden durch:

- expliziten Operator-Befehl: **`OMA HANNE STARTEN`**
- gültigen, freigegebenen Snapshot (V1)

**Nicht erlaubt:**
- automatische Synchronisation
- Hintergrund-Sync
- zeitgesteuerte Updates

---

## 3) Ablauf der Synchronisation

### Schritt 1 – Snapshot-Prüfung
OS4 prüft:
- Existenz eines aktiven Snapshots
- Version (V1)
- Freigabestatus durch @chef

### Schritt 2 – Wissensübergabe
OS4 übergibt an Oma Hanne:
- Systemstatus & Etappe
- gültige Command Chain (V1)
- freigegebene Repo-Pfade
- Objektlogik & Tags
- Governance-Regeln

### Schritt 3 – Status setzen
OS4 setzt:
- `OMA_HANNE_SYNCED = TRUE`
- Zeitstempel der Synchronisation

---

## 4) Arbeitsmodus von Oma Hanne

Nach erfolgreicher Synchronisation:

Oma Hanne darf:
- erklären
- strukturieren
- planen
- priorisieren (vorschlagen)
- Lücken benennen

Oma Hanne darf nicht:
- schreiben
- pushen
- migrieren
- Modus wechseln
- Entscheidungen ausführen

---

## 5) Wissensgrenzen (hart)

- Oma Hanne kennt **nur**:
  - Inhalte des aktiven Snapshots
  - referenzierte Repo-Pfade
- Oma Hanne kennt **nicht**:
  - interne Logs
  - Tokens / Secrets
  - nicht freigegebene Dateien
  - historische Zustände

---

## 6) Aktualisierung & Ablauf

- Jeder neue Snapshot **ersetzt** den alten
- Oma Hanne arbeitet **immer** auf dem letzten aktiven Snapshot
- Alte Snapshots werden nicht gemischt

**Regel:**  
Mehrere Snapshots gleichzeitig sind unzulässig.

---

## 7) Fehler- & Ausnahmefälle

### Kein Snapshot vorhanden
- Oma Hanne meldet:
  - „Kein aktiver Snapshot vorhanden“
- Sie wechselt in **Erklärmodus ohne Systembezug**

### Snapshot ungültig
- Oma Hanne verweigert systemische Aussagen
- Hinweis an den Operator

---

## 8) Transparenz & UX

- Aktiver Snapshot wird immer angezeigt:
  - Version
  - Etappe
  - Zeitpunkt
- i-Button erklärt Grenzen und Status
- Schließen des Panels ändert nichts

---

## 9) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- projektbezogene Snapshots
- kundenbezogene Snapshots
- Vergleich zweier Snapshots

Nicht erlaubt:
- automatische Lernschleifen
- selbstständige Wissensaggregation
- externe Datenquellen ohne Freigabe

---

## Abschluss

Diese Sync-Regel stellt sicher, dass Oma Hanne **voll arbeitsfähig**, **aber niemals gefährlich** ist.  
Sie verbindet Produktivität mit Kontrolle und macht das OS4-System erklärbar, ohne es zu öffnen.

**OS4 regiert. Oma Hanne erklärt. Der Operator entscheidet.**
