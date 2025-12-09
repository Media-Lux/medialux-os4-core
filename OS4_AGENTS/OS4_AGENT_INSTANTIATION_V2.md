<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0028
  DATE: 2025-12-09
  SCOPE: AGENT_INSTANTIATION
  STATUS: ACTIVE
  NOTES: "OS4 Agent Instantiation V2 – Regeln & Ablauf für Agent-Templates, Instanzen & Brand-Bindung"
-->

# OS4 AGENT INSTANTIATION (V2)

Dieses Dokument definiert, **wie Agents im OS4-Tresor-System erzeugt werden**:

- aus Templates  
- als Instanz  
- an Brands (Tenants) gebunden  
- mit MIG-ID & Agent-ID  
- GitHub-synchron  
- White-Label-fähig  
- strikt kapselgebunden (max. 20 Dateien)

Es ist die **offizielle Anleitung**, wie dein „Organ-Körper“ (Agents) im Tresor lebt und skaliert.

---

# 0. Grundprinzip

1. **Es gibt immer zuerst ein Template.**  
2. **Jede Agent-Instanz basiert auf einem Template.**  
3. **Instanzen werden immer einem Brand (oder „global“) zugeordnet.**  
4. **Jede Instanz wird in GitHub gespeichert und mit IDs versehen.**  
5. **Keine Instanz existiert nur im Chat – alles landet auf GitHub.**

---

# 1. Begriffe

- **Template** = Basis-Definition eines Agents (z. B. `AureliusCore_Template_V1.md`).  
- **Instanz** = konkrete Ausprägung für ein Projekt/Brand (z. B. `AureliusCore_BioTECH`).  
- **Brand/Tenant** = Projekt/Firma (BioTECH, Brand2Chain, TSP, FVO, medialux_OS etc.).  
- **Kapsel** = Agentenordner mit max. 20 Wissensmodulen.

---

# 2. Template-Regel

Alle Templates liegen in:

- `OS4_AGENTS/<AgentName>/<AgentName>_Template_Vx.md`

Beispiele:

- `OS4_AGENTS/AureliusCore/AureliusCore_Template_V1.md`  
- `OS4_AGENTS/Jura_PRO/Jura_PRO_Template_V1.md`  
- `OS4_AGENTS/FinanceCore/FinanceCore_Template_V1.md`  
- `OS4_AGENTS/DevCore/DevCore_Template_V1.md`  
- `OS4_AGENTS/SalesCore/SalesCore_Template_V1.md`  
- `OS4_AGENTS/StrategyCore/StrategyCore_Template_V1.md`  
- `OS4_AGENTS/BrandCore/BrandCore_Template_V1.md`  

**Templates:**

- werden NIE überschrieben  
- werden nur versioniert (`_V2`, `_V3`, …)  
- sind Grundlage aller Instanzen

---

# 3. Instanz-Erzeugung – Ablauf

Ein neuer Agent für Brand X wird immer nach diesem Muster erzeugt:

1. Template wählen  
2. Instanz-Namen definieren  
3. Ordner anlegen  
4. Module anlegen (oder kopieren)  
5. MIG-IDs vergeben  
6. Agent-ID & Instanz-ID setzen  
7. Brand-Mapping eintragen  
8. GitHub-Commit

---

## 3.1 Schritt 1 – Template wählen

Beispiel:  
Du willst einen AureliusCore für BioTECH:

- Template: `AureliusCore_Template_V1`  
- BrandKey: `BioTECH`  

---

## 3.2 Schritt 2 – Instanz-Namen definieren

Konvention:

