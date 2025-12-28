---
state: ACTIVE
authority: OS4_SYSTEM
scope: REGISTRY_MAPPING
binding: GOVERNANCE_CLARITY
automation: FORBIDDEN
execution: FORBIDDEN
---

# 🧭 OS4 Registry Mapping
## Single Source of Truth & Mirror Responsibilities

## Zweck

Dieses Dokument legt verbindlich fest,
**welche Registry-Dateien im OS4-System als Wahrheitsquelle dienen**
und welche **nur spiegeln oder referenzieren**.

Ziel:
- Vermeidung von Status-Drift
- Keine doppelten Wahrheiten
- Klarheit für Mensch & KI
- Stabilität über mehrere Chats hinweg

---

## Registry-Rollen (verbindlich)

### 1) Master Registry (Source of Truth)

#### 🧠 OPEN_TOPICS
- **Pfad:** `OS4_SYSTEM/REGISTRY/OPEN_TOPICS.md`
- **Rolle:** Master für Themen / Projekte / Konzepte
- **Enthält:** Status, Risiko, Re-Entry-Regeln, Tags
- **Darf:** Status definieren
- **Darf nicht:** Aktionen auslösen

➡️ **Einzige Quelle** für:
- ACTIVE / PARKED / IN_REVIEW / ARCHIVED von Topics

---

### 2) Agent Registry (Organ-Zustände)

#### 🤖 Agents Registry
- **Pfad:** `agents/registry/agents.json`
- **Rolle:** Master für **Agenten / Organe**
- **Enthält:** active / paused / parked für Agents
- **Abgrenzung:** Agents ≠ Topics

➡️ **Darf nicht** für Projekt-/Themenstatus genutzt werden.

---

### 3) Tag Taxonomy (Klassifikation)

#### 🏷️ Tags
- **Pfad:** `core/taxonomy/tags.yaml`
- **Rolle:** Gemeinsame Klassifikation
- **Verwendung:** Referenziert von Topics & Agents
- **Keine Statuslogik**

➡️ Tags **beschreiben**, sie **entscheiden nicht**.

---

### 4) Relations / Abhängigkeiten

#### 🔗 MetaMatrix Relations
- **Pfad:** `intelligence/metamatrix/relations.json`
- **Rolle:** Verknüpfungen & Abhängigkeiten
- **Verwendung:** Kontext, Blocker, Bezüge
- **Keine Statusmutation**

➡️ Relations erklären **WARUM**, nicht **WAS TUN**.

---

### 5) Planning & Backlog (Human Layer)

#### 🗂️ Planning
- **Pfad:** `core/backlog/PLANNING.md`, `ROADMAP.md`
- **Rolle:** Menschliche Arbeitsplanung
- **Status:** Spiegel / Notizen
- **Keine Wahrheitsquelle**

➡️ Planning ist **optional**, nie bindend.

---

### 6) Archive (Lifecycle-Endpunkt)

#### 📦 Archive
- **Pfad:** `archive/`
- **Rolle:** Historischer Endzustand
- **Status:** Read-only
- **Trigger:** Nur manuell

➡️ ARCHIVED bedeutet **keine Rückkehr ohne explizite Entscheidung**.

---

## No-Gos (verbindlich)

- ❌ Kein automatisches Syncen zwischen Registrys
- ❌ Keine Statusänderung über Tags
- ❌ Keine Planning-Datei als Statusquelle
- ❌ Keine parallelen Registrys für dieselben Entitäten
- ❌ Keine Trigger auf Registry-Inhalte

---

## Leitsatz

> Eine Registry erinnert.
> Governance entscheidet.
> Menschen handeln.

---

© OS4 System · Registry Mapping