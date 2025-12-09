<!--
OS4_MIGRATION_HEADER_V2
  BATCH: OS4-MIG-TRESOR-V2-2025-12-09
  ID: OS4-MIG-TRESOR-V2-0003
  DATE: 2025-12-09
  SCOPE: MIGRATION
  STATUS: ACTIVE
  NOTES: "Plan für automatische Klassifizierung (MIG_A/B/C) im Tresor-V2-Rollout"
-->

# OS4 MIG-Scanner – Klassifizierungs-Plan (V2)

Der MIG-Scanner stuft sämtliche Dateien aus einem GitHub-Export automatisch in die Kategorien  
**MIG_A**, **MIG_B** und **MIG_C** ein und sortiert sie anschließend in die  
**Tresor-V2-Zielstruktur** ein.

Kein Wissen geht verloren. Jede Datei bekommt eine klare Rolle.

---

## 0. Zielsetzung

Der MIG-Scanner soll folgende Hauptaufgaben erfüllen:

1. **Erkennen**, ob eine Datei bereits migriert wurde (MIG_A).
2. **Identifizieren**, ob eine Datei Gold ist (MIG_B).
3. **Abgrenzen**, ob eine Datei zur Historie gehört (MIG_C).
4. **Einordnen**, wohin die Datei in der neuen Tresor-Struktur gehört.
5. **Erstellen** neuer MIG-IDs für alle nicht-klassifizierten Dateien.

Ergebnis:  
➡️ Jede Datei besitzt eine MIG-ID  
➡️ Kein doppeltes Wissen  
➡️ Vollständige, geordnete Tresor-V2-Struktur

---

## 1. Klassifizierungs-Regeln

### 1.1 MIG_A – Bereits migriert (besitzt MIG-ID)

**Kriterien:**
- Datei enthält irgendwo (Header oder Text):  
  - `OS4-MIG-`  
  - ODER `MIG_ID:`  

**Aktionen:**
- MIG-ID bleibt **bestehen**.  
- Header wird erweitert um:  
  - `ADOPTED_IN_TRESOR_V2: true`  
- Datei wird in passende Zielstruktur eingegliedert:  
  `/OS4_KERNEL/`, `/OS4_AGENTS/`, `/OS4_BRANDS/` etc.  
- Keine Strukturänderung, nur Einordnung.

---

### 1.2 MIG_B – Gold / wichtig, aber noch ohne MIG-ID

**Kriterien:**
- Datei hat **keine** MIG-ID.  
- Inhalt ist fachlich oder strategisch wertvoll:
  - Architektur
  - Blueprint
  - Agent-Design
  - Jura/Aurelius/Finance/Dev-Konzepte
  - Roadmaps
  - Systeminformationen
  - Chat-Exporte mit wichtigen Regeln

**Aktionen:**
- Neue MIG-ID vergeben:  
  `OS4-MIG-TRESOR-V2-XXXX`  
- OS4_MIGRATION_HEADER_V2 ergänzen  
- Datei in passende Struktur verschieben:
  - z. B. `/OS4_AGENTS/AureliusCore/`  
  - oder `/OS4_KERNEL/`  
  - oder `/OS4_BRANDS/<Brandname>/`

Dies ist der wichtigste Migrationsbereich.

---

### 1.3 MIG_C – Legacy / Archiv

**Kriterien:**
- Datei ist alt, experimentell, unstrukturiert oder veraltet.
- Testdateien, frühe Ideen, Rohversionen.

**Aktionen:**
- Header ergänzen: `STATUS: LEGACY_ONLY`
- Datei nach `/OS4_LEGACY/Archiv/` verschieben  
- Nicht löschen!

---

## 2. Zielpfad-Mapping

Der MIG-Scanner entscheidet anhand des Inhalts:

| Inhaltstyp | Zielpfad |
|-----------|-----------|
| Kernel / Start / Systemregeln | `/OS4_KERNEL/` |
| Agent-bezogen (Aurelius, Jura_PRO, Finance, Dev…) | `/OS4_AGENTS/<Agentname>/` |
| Brand-/Tenant-Dateien | `/OS4_BRANDS/<Brandname>/` |
| unrelevante, aber historische Dateien | `/OS4_LEGACY/Archiv/` |

Der Scanner arbeitet über Schlüsselwörter, MIG-Header, Inhaltsanalyse und Dateinamen.

---

## 3. Ergebnis der Migration (Sollzustand)

Nach erfolgreicher Tresor-V2-Migration:

1. **Jede Datei hat eine MIG-ID.**  
2. **Zielstruktur ist vollständig aufgebaut.**  
3. **Gold-Wissen wurde korrekt extrahiert und produktiv eingeordnet.**  
4. **Legacy bleibt sicher archiviert.**  
5. **Keine Datei wird überschrieben oder gelöscht.**  
6. **Systemstart bleibt unverändert:**  
   `OS4 Evolution – Phase 2 geladen.`

---

## 4. Status

Dieser Scanner-Plan ist Grundlage für:

- manuelle Klassifizierung beim Upload der Export-Daten  
- spätere Automatisierung des Migrationsprozesses  
- saubere, risikoarme Integration des Tresor-/Anatomie-Systems in OS4

