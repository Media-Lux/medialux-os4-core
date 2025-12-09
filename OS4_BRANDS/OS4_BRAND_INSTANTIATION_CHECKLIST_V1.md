<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0030
  DATE: 2025-12-09
  SCOPE: BRAND_INSTANTIATION_CHECKLIST
  STATUS: ACTIVE
  NOTES: "Einfache 10-Schritte-Checkliste zur Erstellung neuer Brands/Tenants im OS4 Tresor-System"
-->

# OS4 Brand Instantiation – Checkliste (V1)

Diese Checkliste fasst **OS4_BRAND_Template_V1.md** in einen klaren  
10-Schritte-Ablauf, um einen neuen Brand/Tenant sauber im Tresor-V2-System anzulegen.

Ziel:  
Neuer Brand (z. B. Kunde/Firma/Projekt) in wenigen Minuten, ohne Nachdenken.

---

## 0. Voraussetzungen

- OS4 Tresor V2 ist aktiv (Kernel, Security, Migration etc.).
- `OS4_BRAND_Template_V1.md` ist im Repo.
- Du weißt, wie der neue Brand heißen soll (z. B. `ImpactNode`, `Kunde_X`).
- GitHub-Repo `medialux-os4-core` ist editierbar, Workflow läuft.

---

## ✅ Schritt 1 – BrandName & BrandKey festlegen

1. Wähle **BrandName** (klarer, technischer Name, ohne Leerzeichen):
   - z. B. `BioTECH`, `Brand2Chain`, `TSP`, `FVO`, `medialux_OS`, `ImpactNode`.
2. BrandKey = BrandName (Standard).
3. Notiere:

```md
BrandKey: <BrandName>
BrandID: <später UUID>
BrandVersion: 1
BrandStatus: ACTIVE
