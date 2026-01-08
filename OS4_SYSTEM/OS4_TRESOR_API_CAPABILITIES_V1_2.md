---
id: OS4_TRESOR_API_CAPABILITIES_V1_2
type: api_capabilities
status: CANONICAL
version: 1.2.0
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-08
---

# OS4-Tresor API – IST-Stand & Fähigkeiten (v1.2.0)

## Zweck
Diese Datei beschreibt den real existierenden Stand der OS4-Tresor-API.
Sie verhindert Annahmen, Fehlplanung und das Überschreiben bestehender Mechaniken.

---

## 1. Grundlagen

- API ist stateless
- GitHub ist Source of Truth
- Kein Directory-Scan ohne API-Support
- Alle Writes sind kontrolliert und auditiert

---

## 2. READ-Funktionen (stabil)

- GET /api/status
- GET /api/system/status
- GET /api/context/snapshot
- GET /api/listFiles
- GET /api/searchFiles
- POST /api/pullMany
- GET /api/getFileMeta
- GET /api/audit/history
- GET /api/pending/list

Diese Endpunkte sind freigegeben für Analyse und BO-Anzeige.

---

## 3. WRITE-Funktionen (stark geregelt)

### 3.1 Manual Push

- POST /api/push
- Operator PIN erforderlich
- SHA-Prüfung
- Vollständiger Dateiinhalt Pflicht
- Jeder Push wird auditiert

---

### 3.2 Pending-Mechanik (Standard)

- POST /api/pending/create
- POST /api/pending/approve
- POST /api/pending/reject

Eigenschaften:
- Pending ist immer im BO sichtbar
- Genehmigung nur mit PIN
- Audit wird automatisch geschrieben

---

## 4. Entfernte / verbotene Funktionen

- branch-push ist **entfernt**
- Kein direkter Push auf Branches durch Agenten

Grund:
- Schutz der Pending- & Manual-Governance

Tresor darf branch-push nicht vorschlagen oder erwarten.

---

## 5. Replit-Integration

- Replit hostet API, BO und Agent-Ausführung
- Keine autonome Live-Ausführung
- Republish ist immer ein expliziter Schritt

---

## 6. Pflichtregel für OS4-Tresor

Wenn Tresor unsicher ist, ob:
- ein Endpoint existiert
- eine Funktion erlaubt ist
- eine Datei bereits vorhanden ist

Dann:
- **keine Annahmen**
- **Prompt zur Rückfrage erzeugen**
- **Abgleich mit @chef oder GitHub**

---

## 7. Zusammenfassung

- API v1.2.0: lesestark, schreibkontrolliert
- Pending & Manual Push bleiben Kern
- BO ist die einzige Steueroberfläche
- Tresor arbeitet ausschließlich innerhalb dieser Grenzen
