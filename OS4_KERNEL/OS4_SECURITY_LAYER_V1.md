<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0019
  DATE: 2025-12-09
  SCOPE: SECURITY_LAYER
  STATUS: ACTIVE
  NOTES: "OS4 Security Layer – Tresor- und Zugriffssystem für Kernel, Agents, Brands und Migration"
-->

# OS4 SECURITY LAYER (V1)

Der OS4 Security Layer ist das vollständige Sicherheits- und Zugriffssystem des Tresor-/Anatomiesystems.

Er definiert:

- Rollen  
- Zugriffsebenen  
- Isolation  
- Datenintegrität  
- MIG-Schutz  
- API-Sicherheit  
- Agentenrechte  
- Brand-Zuordnung  
- Systemgrenzen  
- Schutz vor Änderungen  
- Notfall-/Recovery-Mechanismen  

Dieses Dokument ist unverzichtbar für den stabilen und sicheren Betrieb von OS4.

---

# 0. Grundprinzipien

1. **Nichts überschreibt Kernel**  
2. **Keine Datei ohne MIG-ID**  
3. **Keine Agentenkommunikation ohne Brain2Chain**  
4. **Brand-Daten niemals mischen**  
5. **Jedes Wissen hat einen klaren Speicherort**  
6. **Wissen wird erweitert, nie gelöscht**  
7. **Agents dürfen nur in ihrem Kapselbereich arbeiten**  
8. **DevCore führt niemals autonome Änderungen aus**  
9. **Security-Level bestimmen alles**  
10. **Jede API ist geschützt und kontextsensitiv**  

---

# 1. Tresor-Sicherheitszonen

Der OS4-Tresor hat 5 Sicherheitszonen:

