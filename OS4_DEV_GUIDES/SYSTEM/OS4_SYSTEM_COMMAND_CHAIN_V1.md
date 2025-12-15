Text:
# OS4 SYSTEM COMMAND CHAIN (V1)

**Status:** READ-ONLY · Final  
**Version:** V1  
**Scope:** OS4 Tresor · Bedienlogik · Mensch–System-Schnittstelle  
**Zweck:** Definiert die offizielle, menschenlesbare Steuer- und Befehlskette zur sicheren Bedienung von OS4 Tresor.

---

## 1) Ziel dieses Dokuments

Dieses Dokument beantwortet jederzeit folgende Fragen:

- Was kann ich **jetzt** mit OS4 tun?
- Was passiert, wenn ich einen Befehl nutze?
- Was ist **sicher**, was **vorbereitet**, was **gesperrt**?
- Wie arbeite ich mit Planung, Snapshots und Umsetzung?

**Merksatz:**  
> Dieses Dokument ist die „Bedienlogik“ von OS4 – kein Code, keine Technik.

---

## 2) Systemebenen (mentales Modell)

OS4 arbeitet immer auf genau **einer** dieser Ebenen:

| Ebene | Bedeutung |
|-----|-----------|
| 🧭 Orientierung | Überblick, Status, Einordnung |
| 🧠 Planung | Denken, Strukturieren, Vorbereiten |
| 🧪 Simulation | Gedankliches Testen (keine Aktionen) |
| 🔒 Umsetzung | Schreiben, Push, Migration (bewusst) |

**Standard:**  
OS4 startet immer in **Orientierung + Planung**.

---

## 3) Menschliche Steuerbefehle (V1)

Diese Befehle sind die **offizielle Steuerkette** für Operatoren.

---

### 🧭 ORIENTIERUNG

#### **STATUS**
**Was passiert:**
- OS4 erklärt:
  - aktuellen Modus
  - aktive Etappe
  - verfügbare Module
  - gesperrte Funktionen

**Was nicht passiert:**
- keine Änderung
- kein Schreiben

**Sicherheitsstufe:** READ-ONLY

---

#### **HILFE**
**Was passiert:**
- OS4 zeigt:
  - was du jetzt tun kannst
  - was bewusst nicht möglich ist
  - warum

**Sicherheitsstufe:** READ-ONLY

---

### 🧠 PLANUNG

#### **PLANEN**
**Was passiert:**
- OS4 arbeitet im Planungsmodus
- Vorschläge, Struktur, Blueprints
- Zusammenarbeit mit Oma Hanne

**Was nicht passiert:**
- kein Push
- keine Migration

**Sicherheitsstufe:** Vorbereitung

---

#### **DRAFT ERSTELLEN**
**Was passiert:**
- OS4 erzeugt:
  - Pfad
  - Commit-Text
  - Markdown-Inhalt

**Was nicht passiert:**
- kein Upload
- keine Repo-Änderung

**Sicherheitsstufe:** Vorbereitung

---

### 📦 SICHERUNG & WISSEN

#### **SNAPSHOT ERZEUGEN**
**Was passiert:**
- OS4 erstellt einen **System Capability Snapshot**
- Enthält:
  - gültige Specs
  - aktive Etappe
  - Regeln
  - relevante Repo-Pfade

**Zweck:**
- Übergabe an Oma Hanne
- Wiedereinstieg
- Dokumentation

**Sicherheitsstufe:** Vorbereitung

---

#### **GOLD IDENTIFIZIEREN**
**Was passiert:**
- OS4 markiert wertvolles Wissen
- schlägt Speicherung vor

**Was nicht passiert:**
- keine automatische Sicherung

**Sicherheitsstufe:** Vorbereitung

---

### 🔒 UMSETZUNG (bewusst & selten)

#### **UMSETZUNG VORBEREITEN**
**Was passiert:**
- OS4 erklärt:
  - was geschrieben würde
  - wohin
  - mit welchen Auswirkungen

**Was nicht passiert:**
- kein Push

**Sicherheitsstufe:** Vorbereitung

---

#### **UMSETZUNG BESTÄTIGEN**
**Was passiert:**
- erst jetzt:
  - Push
  - Commit
  - Migration

**Regel:**
- nur durch @chef
- doppelte Bestätigung erforderlich

**Sicherheitsstufe:** Umsetzung

---

## 4) Objektlogik (V1)

OS4 unterscheidet folgende Objektarten:

| Objekt | Bedeutung |
|------|-----------|
| Projekt | Zeitlich begrenzte Roadmap / Etappe |
| Firma / Kunde | Mandant mit eigener CI |
| Thema | Wissens- oder Technologiebereich |
| Dienstleistung | Externe Agent- oder Brand-Leistung |

Diese Objekte werden über **Tags** organisiert.

---

## 5) Rolle von Oma Hanne

Oma Hanne ist eine **externe, synchronisierte Arbeitsinstanz**.

Sie:
- arbeitet **nur** auf freigegebenen Snapshots
- erklärt Systemlogik
- hilft bei Planung
- erinnert an Regeln

Sie:
- pusht nicht
- entscheidet nicht
- ändert nichts

---

## 6) Governance-Regeln (fix)

- GitHub ist Source of Truth
- Nie überschreiben, nur erweitern
- Keine Aktion ohne @chef
- READ-ONLY ist Standard
- Sicherheit vor Geschwindigkeit

---

## 7) Wann dieses Dokument genutzt wird

- Wenn du den Überblick verlierst
- Wenn du neu einsteigst
- Wenn Oma Hanne synchronisiert wird
- Wenn neue Funktionen hinzukommen

---

## Abschluss

Dieses Dokument ist die **offizielle Bedienlogik von OS4 Tresor**.  
Es verhindert Blindflug, reduziert Komplexität und macht das System dauerhaft beherrschbar.

**OS4 denkt strukturiert – du entscheidest bewusst.**
