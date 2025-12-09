<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0029
  DATE: 2025-12-09
  SCOPE: AGENT_INSTANTIATION_CHECKLIST
  STATUS: ACTIVE
  NOTES: "Einfache 10-Schritte-Checkliste zur Erstellung neuer Agent-Instanzen pro Brand"
-->

# OS4 Agent Instantiation – Checkliste (V1)

Diese Checkliste fasst **Datei 28 – OS4_AGENT_INSTANTIATION_V2.md**  
in **konkrete Operator-Schritte** zusammen.

Ziel:  
In wenigen Minuten eine neue Agent-Instanz für einen Brand anlegen – **ohne nachdenken, nur abarbeiten.**

---

## 0. Voraussetzungen

- Template für den Agenten existiert  
  (z. B. `AureliusCore_Template_V1`, `Jura_PRO_Template_V1`, …)
- Brand existiert
  (z. B. `BioTECH`, `Brand2Chain`, `TSP`, `medialux_OS`, …)
- GitHub-Repo `medialux-os4-core` ist lokal oder über Web editierbar
- Workflow `.github/workflows/os4_sync.yml` ist aktiv

---

## ✅ Schritt 1 – Agent-Template wählen

1. Entscheide, welchen Agenten du instanzieren willst:
   - `AureliusCore`
   - `Jura_PRO`
   - `FinanceCore`
   - `DevCore`
   - `SalesCore`
   - `StrategyCore`
   - `BrandCore`
2. Öffne das Template:
   - `OS4_AGENTS/<AgentName>/<AgentName>_Template_V1.md`

---

## ✅ Schritt 2 – Brandnamen festlegen

1. Wähle den Brand/Tenant:
   - z. B. `BioTECH`, `Brand2Chain`, `TSP`, `FVO`, `medialux_OS`
2. Notiere:
   - `AgentName`  
   - `BrandName`

---

## ✅ Schritt 3 – Instanz-Namen definieren

Konvention:

```text
<AgentName>_<BrandName>
