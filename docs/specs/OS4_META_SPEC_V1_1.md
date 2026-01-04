# OS4 META SPEC · Version 1.1
**Integrationsstandard für OS4-ID, YAML-Metadaten und Lifecycle-Tracking**

---

## 1. Zweck

Diese Spezifikation definiert, wie OS4-Dokumente, Commits und Lifecycles
durch eine gemeinsame, maschinenlesbare Meta-Struktur verbunden werden.

Ziel:  
Von der **ID-Erzeugung (JSON)** über den **Lifecycle-Zustand (YAML)**  
bis zur **Commit-Verknüpfung (GitHub)** eine vollständige semantische Spur.

---

## 2. Komponenten

### 2.1 OS4-ID Authority (JSON-Level)
> Quelle: `/OS4_CORE/IDs/OS4_ID_Counters.json`

Verwaltet die nächste verfügbare ID für:
- Produkt
- Dokument
- Kunde

Beispiel:

```json
{
  "next_product_id": "MPR00001",
  "next_document_id": "OS4-ID-MPR00001-C01",
  "next_customer_id": "KN-M-10000"
}
