---
title: "OS4 Export Retention Rules"
version: "V1.0"
domain: "delivery.governance"
lifecycle: "SPEC"
authority: "@chef"
mode: "READ-ONLY"
scope: "Retention, rotation, and compliance for delivery artifacts"
---

# OS4 Export Retention Rules (V1)

## 1) Grundsatz
Exports sind **Darstellungen**, keine Wahrheit.
GitHub speichert **Manifests & Receipts**, nicht die Binärdaten.

---

## 2) Retention-Klassen

| Scope       | Retention | Regel |
|------------|-----------|-------|
| Audit      | ≥ 10 Jahre | Unveränderlich, append-only |
| Specs      | ≥ 5 Jahre  | Versioniert, referenzierbar |
| Academy    | ≥ 3 Jahre  | Reproduzierbar |
| Release    | ≥ 5 Jahre  | Kunden-/Partnernachweis |
| Ops        | ≥ 12 Monate| Debug & Betrieb |

---

## 3) Rotation & Archivierung
- Binärdateien dürfen extern rotiert werden
- **Manifest + Receipt bleiben immer**
- `ARCHIVED` ersetzt niemals Löschung

---

## 4) Compliance-Regeln
- Default: `pii_policy = metadata_only`
- PII niemals in GitHub
- Jeder Export benötigt:
  - Manifest
  - Receipt (VERIFIED)

---

## 5) Zugriff & Autorität
- Erstellung: Agent3 / Operator
- Freigabe: @chef
- Konsum: Read-only

---

## 6) Audit-Invariante
> Kein Export gilt als gültig ohne VERIFIED Receipt.

---

## 7) Schlussformel
GitHub denkt.  
Delivery zeigt.  
Governance entscheidet.

Powered by medialuxAI
