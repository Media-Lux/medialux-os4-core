---
title: "OS4 API Integration Guide — Was wir bauen, wie es integriert wird, und warum"
version: "V1.1.0"
domain: "architecture.integration"
lifecycle: "APPROVED_DRAFT"
authority: "@chef"
mode: "READ-ONLY"
scope: "Integration der neuen Business-API (/v1) in die bestehende OS4 Tresor API Architektur (/api)"
notes:
  - "Dieses Dokument ist eine vollständige Integrationsanleitung (Bauplan + Begründung)."
  - "Es verändert keine bestehenden /api Endpunkte; Erweiterung erfolgt über neue /v1 Domänen."
  - "Web3 wird ausschließlich über OS4_Web3Kernel abgewickelt; keine direkten Node/Contract Calls aus /v1."
---

# OS4 API Integration Guide (V1.1)
## Was wir bauen, wie wir es integrieren, und warum (ohne Risiko für das bestehende System)

## 0) Executive Summary
Wir erweitern die bestehende **OS4 Tresor API Architektur** (Governance/Admin unter `/api/...`) um eine neue **Business-API Ebene** unter `/v1/...`.
Diese Ebene startet mit **Phase A (Company + Ledger)**, weil alle späteren Module (Enablement, Marketplace, Network, Reputation, Ads, Streaming, IoT) auf **Firmenobjekt + buchhalterischer Wahrheit** aufsetzen.

**Nicht verhandelbar:**
- `/api/...` bleibt stabil (READ-ONLY default, Dual Authorization Push, Audit append-only)
- neue Funktionen kommen als neue `/v1/...` Domänen mit Feature Flags
- append-only + approvals + finality gating + idempotency + no-PII

---

## 1) Warum wir das so bauen (Begründung)
### 1.1 Warum /v1 als neue Ebene?
- `/api/...` ist die **Governance-/Operator-/Tresor-Admin-API** (status, system-status, audit, pending, push).
- Business-Funktionen (Firmen, Ledger, Orders, Marketplace) haben andere Anforderungen (Throughput, Domain-Logik, Integrationen).

**Trennung schützt den Kern:**
> Admin/Governance bleibt unangreifbar; Business wächst kontrolliert.

### 1.2 Warum Phase A zuerst?
Alles Spätere braucht:
- CompanyEntity (Firma als stabiler Anker)
- Wallet/Identity Bindings (rotierbar)
- Unified Ledger (ValueTransfer)
- Approvals (Prepare→Approve→Commit)
- Finality (rail-spezifisch)

Ohne Phase A:
- Marketplace hat keine saubere Abrechnung
- Network Marketing hat Compliance-Risiko
- Ads/Avatare monetarisieren außerhalb des Ledgers (Audit-Risiko)
- Proof Anchoring hätte keine stabilen Objekte zum Verankern

---

## 2) Bestehende Architektur (Ist-Zustand) – bleibt unverändert
### 2.1 /api Ebene (Admin/Governance)
- `/api/status` (Health)
- `/api/system/status` (Source-of-Truth Status)
- `/api/audit/history` (Audit-Lesezugriff)
- `/api/push` (Dual Authorization)
- `/api/pending/*` (create/list/approve/reject; Operator entscheidet)

**Diese Ebene wird NICHT um Business-Logik erweitert.**

### 2.2 Execution Layer
- Replit Execution Bridge (Jobs/Builds)
- Agent3 (Executor)

**Regel:** Execution baut Artefakte (PRs, Migrationen), aber schreibt nicht autonom in den Kanon.

### 2.3 Knowledge Layer (GitHub)
- Specs, Roadmaps, Build-Pläne, Policies
- Governance Node (YAML/MD/Audit Logs)

---

## 3) Ziel-Architektur (Soll) – Erweiterung ohne Bruch
### 3.1 Neue /v1 Ebene (Business APIs)
- `/v1/companies`
- `/v1/ledger/*`
- `/v1/receivables/*`
- `/v1/billing/*`
- `/v1/refunds/*`
- später: `/v1/marketplace`, `/v1/network`, `/v1/reputation`, `/v1/social`, `/v1/ads`, `/v1/stream`, `/v1/iot`

### 3.2 Service Map (empfohlen)
- `core-finance` (Phase A) ✅ jetzt bauen
- `rail-adapters` (Phase B)
- `chain-gateway` (Phase B/C)
- `proof-anchoring` (Phase C)
- `enablement` (Phase D)
- `marketplace` (Phase E)
- `network-engine` (Phase F)
- `reputation/social/comms` (Phase G)
- `avatars/ads/analytics` (Phase H)
- `stream/iot` (Phase I)

### 3.3 Web3Kernel Boundary (ab Phase B)
Ab **Phase B** werden **alle Web3-Interaktionen ausschließlich über den OS4_Web3Kernel** abgewickelt  
(IdentityConnector, PaymentConnector, SettlementConnector, NodeConnector, TokenomicsHook).

**Business-Services (`/v1`) rufen niemals direkt Blockchain-Nodes oder Smart Contracts auf.**  
Direkte RPC-Aufrufe, SDK-Shortcuts oder Shadow-Integrationen sind nicht erlaubt.

Vor jeder Web3-Transaktion prüft der **TokenomicsHook** verbindlich Fees, Burns, Staking-Requirements und Governance-Limits, bevor eine Ausführung freigegeben wird.

---

## 4) Integrations-Bauplan: Wie /v1 sicher auf /api aufsetzt
### 4.1 Hard Boundaries
- `/api/...` = Governance & Admin (Operator/Tresor Pending/Push, Audit, SoT)
- `/v1/...` = Business Domain APIs (kein Write auf GitHub, keine Kernel-Mutationen)
- PR/Artefakte → Operator bestätigt → Push (Dual Authorization)

### 4.2 Auth & Headers (Prinzip)
- `/api/...`: Operator PIN / TresorKey + manualConfirm (wie vorhanden)
- `/v1/...`: Business Auth (JWT/API Key) + ABAC Hooks (später CorePass Flags)

**Wichtig:** `/v1` darf `/api/push` nicht aufrufen. Push bleibt Operator-only.

### 4.3 Feature Flags / Progressive Rollout
Jedes /v1 Modul hat Flags:
- `finance_enabled`
- `corepay_enabled`
- `settlement_enabled`
- `chain_gateway_enabled`
- `proof_anchoring_enabled`
- usw.

Flags laufen über Governance (auditierbar), nicht unprotokolliert in Runtime.

---

## 5) Truth Separation (verbindlich)
- **GitHub** ist Source of Truth für Spezifikationen, Pläne und Governance.
- **Runtime-Wahrheit** liegt in Ledgers und Registries.
- **Proof-Wahrheit** liegt in Hashes und On-Chain-Anchors.

Diese Ebenen sind strikt getrennt und dürfen nicht vermischt werden.

---

## 6) Phase A – Was wir konkret bauen (Bauplan)
### 6.1 Domain-Objekte
- `CompanyEntity`
- `Ownership` (append-only; effective_from/to; 2-phase transfer)
- `IdentityBinding` (CorePass subject_ref hash; rotierbar)
- `WalletBinding` (asset/purpose; rotierbar; treasury/deposit/payout)
- `PolicySnapshot`
- `ApprovalChain` + `Approvals`
- `ValueTransfer` (Unified Ledger)
- optional `Balances` (materialized, rebuildable)
- `PaymentReference`, `DepositAddress`, `IncomingPayment`
- `Invoice`, `PaymentOrder`
- Refund/Reversal flows

### 6.2 Endpunkte (MVP)
**Company**
- `POST /v1/companies`
- `GET  /v1/companies/{company_id}`
- `GET  /v1/companies/{company_id}/ownership/history`

**Ownership Transfer (Prepare→Approve→Commit)**
- `POST /v1/companies/{company_id}/ownership/transfer/prepare`
- `POST /v1/companies/{company_id}/ownership/transfer/{transfer_id}/approve`
- `POST /v1/companies/{company_id}/ownership/transfer/{transfer_id}/commit`

**Bindings**
- `POST /v1/companies/{company_id}/bindings/identity`
- `POST /v1/companies/{company_id}/bindings/wallet`
- `POST /v1/companies/{company_id}/bindings/wallet/{wallet_binding_id}/deprecate`
- `GET  /v1/companies/{company_id}/bindings`

**Receivables**
- `POST /v1/receivables/references`
- `POST /v1/receivables/references/{payment_reference_id}/deposit-address`
- `GET  /v1/ledger/incoming?company_id=...`

**Billing**
- `POST /v1/billing/invoices`
- `GET  /v1/billing/invoices/{invoice_id}`
- `POST /v1/billing/payments/prepare`
- `POST /v1/billing/payments/{payment_order_id}/approve`
- `POST /v1/billing/payments/{payment_order_id}/commit`
- `GET  /v1/billing/payments/{payment_order_id}`

**Refunds**
- `POST /v1/refunds/prepare`
- `POST /v1/refunds/{refund_id}/approve`
- `POST /v1/refunds/{refund_id}/commit`

### 6.3 Phase A DB & Migrations
- Basis-DDL + Multi-Migration-Patchset (CHECKs, uniqueness, monetary integrity, idempotency, updated_at trigger).
- Append-only Regeln enforced via partial unique indexes.
- No PII: `subject_ref` only; sensible payloads verschlüsselt/extern.

---

## 7) Phase B – Settlement & Rails (wenn echtes Money fließt)
- Rails Adapter + Webhooks + Finality Worker + Reconciliation
- Fiat-Settlement erfolgt über den Core Settlement Layer mit **ICAN-Adressen** und ist **ISO-20022-kompatibel**.  
  Dies gilt als feste Invariante für alle Bank- und BaaS-Integrationen.

---

## 8) Sicherheits- und Stabilitätsregeln (Controller Invariants)
### 8.1 Append-only
- Ownership: nie überschreiben, nur schließen + neue Zeile
- Bindings: rotate über status + grace_until

### 8.2 Prepare → Approve → Commit
- Ownership transfers
- Outgoing payments
- Refunds

### 8.3 Finality gating
- rails/chain/settlement haben unterschiedliche final Kriterien
- Phase A simuliert, Phase B echte Worker/Webhooks

### 8.4 Ledger truth
- `ValueTransfer` ist canonical financial truth
- `Balances` ist materialisiert (rebuildable), nie canonical

### 8.5 Idempotency
- `idempotency_key` Pflicht auf mutierenden Calls
- DB uniques verhindern Doppelbuchungen

---

## 9) Definition of Done (Integration erfolgreich, ohne Risiko)
- `/api` bleibt unverändert und governance-sicher
- `/v1` läuft als neue Domain-Ebene mit Feature Flags
- Phase A APIs funktionieren lokal + staging
- Migrations applied; invalid states werden blockiert
- No PII leakage; logs metadata_only
- Artefakte laufen über Operator Push (Dual Authorization)

---

## 10) Operative Rollen (wer macht was)
- **Agent3/Replit**: implementiert Phase A Service + migrations + tests + OpenAPI stub + runbook
- **Operator Backoffice**: bestätigt Pushes, verwaltet Pending, prüft SoT
- **Tresor (LiveGPT)**: schreibt nicht; liefert Pläne/Specs/Pending-Proposals (ohne Secrets)
- **Kernel/@chef**: finale Autorität

---

## 11) Optimierungen (V1.1) — integriert
### 11.1 Diagramm-Versionierung (Architecture Visuals)
Alle Architektur-Visuals werden versioniert abgelegt (kein “random png” ohne Kontext).

**Pfad (Empfehlung):**
- `system/visuals/architecture/OS4_API_INTEGRATION_V1_1.png`
- mit Referenz im jeweiligen Dokument (Hash + Datum)

**Regel:** Visuals sind Kontext, nicht Implementationsbefehl.

### 11.2 Glossar (kurz, auditfreundlich)
- **SoT (Source of Truth):** GitHub für Specs/Pläne/Governance; Runtime in Ledger/Registries; Proof in Hash/On-chain.
- **Append-only:** Keine mutierenden Overwrites; nur neue Events/Rows.
- **Finality:** Zeitpunkt, ab dem ein Transfer nicht mehr reversibel ist (rail-spezifisch).
- **Approval Chain:** Prepare→Approve→Commit Prozess zur Kontrolle riskanter Writes.
- **Feature Flag:** Governance-gesteuerte Freischaltung (auditierbar), nicht “hidden toggle”.

### 11.3 Controller Checklist (Gate vor Phase-Wechsel)
**Phase A → Phase B Gate**
- Ledger-Invariants grün (checks + uniques)
- Idempotency flächendeckend aktiv
- Audit-Log vollständig (approved/rejected/commit sha)
- Settlement Invariant definiert (ICAN/ISO-20022)
- Web3Kernel boundary bestätigt (keine direkten calls)

---

## 12) Schlussfazit
✅ Ja: Wir können die Business-API **architektonisch auf der vorhandenen OS4 Tresor API** aufbauen, ohne Risiken zu erzeugen.  
Der Schlüssel ist die strikte Trennung:
- `/api` = Governance/Admin (stabil)
- `/v1` = Business APIs (erweiterbar)
plus: append-only, approvals, finality gating, idempotency, feature flags, Web3Kernel boundary.

# OS4 – Knowledge is Alive.
