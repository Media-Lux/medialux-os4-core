<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0018
  DATE: 2025-12-09
  SCOPE: ID_SYSTEM
  STATUS: ACTIVE
  NOTES: "OS4 Identity System – MIG-IDs, Agent-IDs, BrandKeys, Versionierung und Security-Level"
-->

# OS4 ID SYSTEM (V1)

Das OS4 ID-System definiert sämtliche Identitätsmechanismen des Tresor-/Anatomiesystems:

- MIG-IDs  
- Agent-IDs  
- Brand-Keys  
- Template-IDs  
- Version-Codes  
- Security-Level  
- Rollenlogik  
- Instanz-IDs  
- API-Tokens (interne Struktur, keine echten Keys)

Dieses Dokument ist unverzichtbar für die Migration, Skalierung, Sicherheit & Wiederherstellbarkeit von OS4.

---

# 0. Ziel

Das ID-System stellt sicher:

- Eindeutigkeit  
- Konsistenz  
- Wiederauffindbarkeit  
- Kontrolle  
- Revisionssicherheit  
- White-Label-Skalierung  
- Cross-Brand-Ordnung  
- Versionierung  
- Systemintegrität  

Es ist die **DNA** deines OS4-Körpers.

---

# 1. MIG-ID System (Migration Identity)

MIG-IDs folgen folgendem Format:

