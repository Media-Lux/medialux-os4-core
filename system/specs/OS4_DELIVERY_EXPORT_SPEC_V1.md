---
title: "OS4 Delivery & Export Specification"
version: "V1.0"
domain: "delivery.export"
lifecycle: "SPEC"
authority: "@chef"
mode: "READ-ONLY"
scope: "Defines output artifacts (PDF/DOCX/ZIP) without contaminating GitHub Source-of-Truth"
notes:
  - "GitHub remains Source of Truth for knowledge, specs, governance, audit."
  - "Delivery artifacts are outputs with manifests; never treated as truth."
  - "No changes to existing /api endpoints required by this spec."
---

# OS4 Delivery & Export Spec (V1)

## 0) Zweck (warum das jetzt Pflicht ist)
OS4 ist auditierbar und governance-stabil. Was fehlt, ist die **Ausgabe-Ebene**:
PDF/DOCX/ZIP/Exports sind **für Menschen/Clients**, aber dürfen **nicht** die Source-of-Truth (GitHub) ersetzen.

**Kernsatz:**
> GitHub ist Gehirn (Truth). Delivery ist Output (Representation).

---

## 1) Trennung der Wahrheiten (3-Wahrheiten-Modell)
1) **Knowledge Truth (GitHub / Canonical)**
- specs, governance, audit, plans, decisions
- versioniert, nachvollziehbar, append-only

2) **Runtime Truth (Ledger/Registries)**
- operative Zustände in Systemdatenbanken/Registries
- nicht in GitHub, aber über Logs/Proof referenzierbar

3) **Proof Truth (Hashes/Anchors)**
- Merkle roots / On-chain anchors / signierte Hashes
- beweisbar, unveränderlich

**Delivery** gehört zu keiner dieser Wahrheiten → es ist **Output**.

---

## 2) Delivery-Objekte (Definition)
Ein Delivery-Objekt ist ein **Export-Artefakt**, das aus GitHub-Quellen erzeugt wird:
- PDF Report (Audit/Validation/Academy)
- DOCX Handout
- ZIP Bundle (Specs + Manifests + Proofs)
- JSON Export (für Integrationen)

**Regel:**
> Jeder Export muss einen Manifest-Eintrag haben, der exakt referenziert, was exportiert wurde.

---

## 3) Canonical Delivery Struktur (GitHub)
Delivery wird im Repo nur als **Manifest + optionaler Pointer** gespeichert, nicht als große Binary-Datei.

### 3.1 Pfade
```text
system/delivery/manifests/EXPORT_MANIFEST_<YYYY-MM-DD>_<EXPORT_ID>.yml
system/delivery/receipts/EXPORT_RECEIPT_<YYYY-MM-DD>_<EXPORT_ID>.yml
system/delivery/templates/   (optional: Templates für Export-Formate)
