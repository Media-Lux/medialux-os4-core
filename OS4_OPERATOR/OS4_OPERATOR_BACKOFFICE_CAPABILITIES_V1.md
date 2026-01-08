---
id: OS4_OPERATOR_BACKOFFICE_CAPABILITIES_V1
type: system_capabilities
status: CANONICAL
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-08
---

# OS4 Operator Backoffice (BO) – Fähigkeiten & Rolle

## Zweck
Diese Datei definiert verbindlich, was das OS4 Operator Backoffice (BO) kann, darf und nicht darf.
Sie ist die operative Referenz für OS4-Tresor, Agenten und alle Automatisierungen.

---

## 1. Grundrolle des BO

Das OS4 Operator Backoffice ist die zentrale Steuer- und Sichtbarkeitsinstanz des Systems.

- BO ist **kein Agent**
- BO ist **keine KI**
- BO ist **kein autonomes System**

BO ist das **Cockpit**, in dem:
- Systemzustände sichtbar sind
- Entscheidungen vorbereitet werden
- Aktionen explizit freigegeben werden

@chef bleibt immer die letzte Instanz.

---

## 2. Was das BO kann

### 2.1 Anzeigen (Read-Only, verlässlich)

Das BO zeigt über die API:

- Systemstatus (API, GitHub, Auth)
- Working Brain:
  - aktiver Fokus
  - wartende Themen
  - geparkte Themen
- Pending-Einträge (offen / genehmigt / abgelehnt)
- Audit-Verlauf (Push-Historie)
- Letzter Republish (Zeitpunkt + Commit)
- Repository-Infos (Branch, letzter Commit)

---

### 2.2 Auslösen (kontrolliert)

Das BO darf:

- Pending anzeigen
- Pending genehmigen (PIN-geschützt)
- Pending ablehnen (PIN-geschützt)
- Manual Push vorbereiten
- Republish manuell auslösen (nach Merge)

Jede Aktion ist sichtbar, bestätigt und auditierbar.

---

### 2.3 Agent3-Steuerung

- Agent3 darf **nur über das BO** gestartet werden
- BO zeigt:
  - Agent3 arbeitet
  - Agent3 fertig
  - Agent3 wartet auf Freigabe
- Agent3 führt **keine Live-Aktionen autonom** aus

---

## 3. Was das BO nicht darf (No-Go)

Das BO darf niemals:

- direkt in main pushen
- Lifecycle-Zustände eigenständig ändern
- Decision Memory überschreiben
- Agenten ohne Freigabe ausführen
- Governance umgehen

---

## 4. Verhältnis BO ↔ OS4-Tresor

- Tresor analysiert, plant und erklärt
- BO zeigt, bündelt und genehmigt
- Tresor darf keine Aktionen vorschlagen, die BO nicht abbilden kann

---

## 5. Zusammenfassung

- BO = Single Source of Operational Control
- Agent3 nur über BO
- Pending & Manual Push bleiben Kernmechaniken
- @chef bleibt letzte Instanz
