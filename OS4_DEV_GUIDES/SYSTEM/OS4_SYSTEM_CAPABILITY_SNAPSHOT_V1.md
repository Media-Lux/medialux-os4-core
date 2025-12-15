Text:
# OS4 SYSTEM CAPABILITY SNAPSHOT (V1)

**Status:** READ-ONLY · Final  
**Version:** V1  
**Scope:** OS4 Tresor · Governance · Wissensübergabe  
**Zweck:** Definiert die kontrollierte Übergabe von Systemwissen aus OS4 Tresor an externe Arbeitsinstanzen (z. B. Oma Hanne).

---

## 1) Grundprinzip

Ein **System Capability Snapshot** ist die **einzige erlaubte Form**, Systemwissen aus OS4 Tresor
für externe Nutzung bereitzustellen.

Er:
- wird **aktiv** von OS4 erzeugt
- ist **explizit freigegeben**
- ist **zeitlich fixiert**
- ist **inhaltlich begrenzt**

**Merksatz:**  
> OS4 entscheidet, *was* bekannt ist – nicht, *wer* es wissen will.

---

## 2) Zweck des Snapshots

Der Snapshot dient dazu:

- externes Arbeiten zu ermöglichen (Planung, Erklärung, Strukturierung)
- den aktuellen Systemzustand **verständlich** zu machen
- Blindflug zu verhindern
- OS4 sicher zu halten

Er dient **nicht**:
- zur automatischen Steuerung
- zur Umsetzung
- zum Lernen ohne Kontrolle

---

## 3) Inhalt eines Capability Snapshots (Pflicht)

Ein Snapshot MUSS folgende Bereiche enthalten:

### 3.1 Systemstatus
- OS4 Version
- Aktiver Modus
- Aktuelle Etappe
- Gesperrte Modi

### 3.2 Aktive Befehle
- Gültige Systembefehle (Command Chain V1)
- Sicherheitsstufe je Befehl
- Erlaubt / gesperrt

### 3.3 Objektlogik
- Definition von:
  - Projekten
  - Firmen / Kunden
  - Themen
  - Dienstleistungen
- Aktive Tag-Struktur

### 3.4 Freigegebene Repo-Pfade
- DEV_GUIDES
- relevante Kernel-Referenzen (READ-ONLY)
- explizit ausgeschlossene Pfade

### 3.5 Gültige Regeln
- READ-ONLY-Standard
- Entscheidungsrechte
- Überschreibungsverbote
- Security-Level

---

## 4) Was explizit NICHT enthalten ist

- keine Tokens
- keine Secrets
- keine internen Logs
- keine Drafts
- keine nicht freigegebenen Dateien
- keine historischen Versionen

---

## 5) Lebenszyklus eines Snapshots

1. **Erzeugung**  
   - durch OS4 Tresor
   - auf Befehl `SNAPSHOT ERZEUGEN`

2. **Freigabe**
   - durch @chef
   - explizit

3. **Nutzung**
   - durch externe Instanz (z. B. Oma Hanne)
   - ausschließlich READ-ONLY

4. **Ablauf**
   - Snapshot ist **nicht automatisch aktuell**
   - neuer Snapshot ersetzt alten

---

## 6) Bindung an Oma Hanne

Oma Hanne:
- arbeitet **nur** auf Basis eines aktiven Snapshots
- kennt **nur** die darin enthaltenen Informationen
- erklärt, strukturiert, plant
- entscheidet nichts

**Regel:**  
Ohne aktiven Snapshot → Oma Hanne arbeitet nicht systemisch.

---

## 7) Sicherheits- & Governance-Regeln

- GitHub bleibt Source of Truth
- Snapshots verändern nichts
- Snapshots überschreiben nichts
- Snapshots sind überprüfbar
- Snapshots sind widerrufbar

---

## 8) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- mehrere Snapshot-Typen (System / Projekt / Kunde)
- Snapshot-Vergleiche
- Archivierung

Nicht erlaubt:
- automatische Snapshots
- Hintergrund-Synchronisation
- Selbstlernen externer Instanzen

---

## Abschluss

Der System Capability Snapshot ist das **Bindeglied zwischen OS4 Tresor und externer Arbeit**.  
Er ermöglicht produktive Planung und Erklärung, ohne Kontrolle oder Sicherheit zu verlieren.

**Ohne Snapshot kein Wissenstransfer. Ohne Wissenstransfer keine Oma Hanne.**
