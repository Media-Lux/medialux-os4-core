# OS4_ATLAS_VAULT_LOGS
Status: ACTIVE  
Zone: Tenant/Product (ATLAS)  
Purpose: Append-only Audit Ledger + Governance Proof (Hybrid: GitHub logs + optional Core anchor)  

## 0) Ziel
Dieses Verzeichnis ist die **einzige** Quelle für ATLAS-Audit-Daten im Repo.
Es enthält:
- Policies (Hardcaps/Guards)
- Schemas (Validierung)
- Vault Logs (JSONL Events)
- Manifeste (Merkle Batch Proof)
- Golden Vectors (Reproduzierbarkeit)
- Tools (Verifier/Batch Builder)

**Keine Trading-Logik. Keine Secrets. Keine PII.**

---

## 1) OS4-Namespace-Regel
Dieses Modul ist OS4-konform benannt:
- ✅ `OS4_*` Prefix
- ❌ Kein `atlas_*` Namespace (wird nicht vom OS4-Systemraster zuverlässig erfasst)

---

## 2) Nicht verhandelbare Regeln
- Append-only: Event-Logs werden **nur erweitert**, niemals editiert/gelöscht.
- Keine Doppelstrukturen:
  - nur `SCHEMAS/` (kein `_SCHEMAS/`)
  - nur `POLICIES/` (kein `params/`)
  - nur `governance/` (kein `gov/`)
- Canonical JSON: deterministische Hashes, keine Floats (Decimals als Strings).
- Minimal Disclosure: Inhalte sind auditierbar, ohne Strategie-Details preiszugeben.
- GitHub Workflows gehören in **Repo-Root**: `.github/workflows/` (nicht hier drin).

---

## 3) Struktur (kanonisch)
