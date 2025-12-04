# OS4_Project_Handshake_V1
Version: 1.0
Status: ACTIVE
Owner: @chef (Steven Wagner)
Scope: alle OS4-Projekte (BioTECH, Brain2Chain, Brand2Chain, Health, TSP, Scanner etc.)

Zweck:
Dieses Dokument definiert den offiziellen Handshake zwischen
1) dem globalen OS4-Betriebssystem (`OS4 start`)
und
2) einem einzelnen Projekt-Tenant (`load [PROJECT]`, z. B. `load Brain2Chain`).

Ziel:
- Klare Trennung: OS4 (System) vs. Projekt (Tenant)
- Saubere Zusammenarbeit: keine widersprüchlichen Startlogiken
- Einheitlicher Ablauf für alle Projekte

OS4-ID: OS4-ID-MPR00001-C01   <!-- Vorschlag -->
Ablage: /OS4_SYSTEM/Processes/OS4_Project_Handshake_V1.md

---

## 1. Begriffe

- **OS4 Core**  
  Kernel, Security Fortress, Storage Map, ID-System, Boundary-Regeln, Migration Engine.

- **Projekt / Tenant**  
  Konkretes System wie z. B. Brain2Chain, BioTECH, Brand2Chain, Health usw.

- **Handshake**  
  Der definierte Ablauf, wie ein Projekt sich bei OS4 „meldet“ und welche OS4-Dienste es nutzen darf/muss.

---

## 2. Befehle: `OS4 start` vs. `load [PROJECT]`

### 2.1 `OS4 start` – globaler System-Boot

Dieser Befehl bedeutet:

- OS4-Core wird geladen (Kernel V2, Masterfile V1.4 etc.)
- Security Fortress wird aktiviert (Blackwolf, AuditGuard, KnowledgeGuard, ProcessGuard, AntiLeak, AccessMatrix)
- Storage Map V2 wird geladen
- ID-System wird aktiviert
- Migration Engine (Batch + ZIP-Regel) wird vorbereitet
- Snapshot-Engine (Handover Protocol) wird aktiv

WICHTIG:
`OS4 start` lädt **kein** Projekt.  
Es setzt nur den globalen Systemzustand auf „READY“.

---

### 2.2 `load [PROJECT]` – Projekt-Boot

Beispiele:
- `load Brain2Chain`
- `load BioTECH`
- `load Brand2Chain`

Dieser Befehl bedeutet:

- Tenant-Kontext wird erstellt: `[PROJECT]`
- Projektrelevante Knowledge Packs werden geladen (BUSINESS/WEB/HEALTH/etc.)
- Avatare für dieses Projekt werden aktiviert (z. B. @builder, @optimizer, @wix, @ai_connector)
- Projekt-Routing, Rollen und Projektregeln werden initialisiert

WICHTIG:
`load [PROJECT]` setzt voraus, dass **OS4 bereits gestartet** ist.

---

## 3. Offizieller Handshake-Ablauf

Der Handshake besteht aus 3 Phasen:

### Phase 1 – OS4 Boot

Voraussetzung für alle Projekte:

```text
Command: OS4 start
