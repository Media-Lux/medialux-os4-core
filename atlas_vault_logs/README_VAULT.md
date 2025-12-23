# OS4 ATLAS CASHFLOW VAULT™  
## Audit Ledger & Governance Documentation

Status: ACTIVE  
Scope: ATLAS Vault (Tenant Zone)  
Governance: OS4 Tresor + Aurelius Core  
Audit Model: Hash-Anchored, Append-Only, Canonical JSON

---

## 🎯 Zweck

Dieses Repository ist das **append-only Audit Ledger** des  
**OS4 ATLAS CASHFLOW VAULT™**.

Es speichert:
- Trades
- Risk-Events
- Governance-Entscheidungen
- Health- & Incident-Events
- Batch-Manifeste (Merkle Roots)

**Wichtig:**  
Dieses Repo enthält **keine Business-Logik**, **keine Strategien**, **keine Secrets**.  
Es dient ausschließlich der **Revisionssicherheit, Nachvollziehbarkeit und Compliance**.

---

## 🔒 Grundprinzipien (nicht verhandelbar)

- Append-only (keine Änderungen, keine Löschungen)
- Canonical JSON (deterministische Hashes)
- Hash-Chains pro Datei (`prev_event_hash`)
- Merkle-Batching über Dateien
- Anchoring auf Core Blockchain (separat)
- Human-in-the-Loop Governance (2-Step Approval)

---

## 📁 Ordnerstruktur

