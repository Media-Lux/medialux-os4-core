---
id: OS4_TRESOR_API_V1_2_SPEC_DIRECTORY_LISTING_V1
type: spec
version: 1.0
status: SPEC_ONLY
scope: os4tresor_replit_app__jit_plugin
source_of_truth: GitHub
owner: "@chef"
updated_at: 2026-01-07
---

# OS4-Tresor API v1.2 – Directory Listing & Sync Enhancements (Spec)

Zweck: Rückwärtskompatible Erweiterung der bestehenden os4tresor_replit_app__jit_plugin API (v1.1.0), um Repo-Index/Directory-Listing, gezielte Suche und Multi-Pull zu ermöglichen. Ziel ist ein echter Faktenabgleich ohne manuelle Dateilisten (tree/ls -R). Implementierungsneutral (kein Code), aber sofort umsetzbar durch Replit Agent3.

## 0) Geltungsbereich & No-Go-Zonen
Geltungsbereich: Nur Read-/Index-Funktionen und sichere Update-Vorprüfung. Core-Vertrag der bestehenden Endpunkte bleibt unverändert:
- getStatus() unverändert
- pullFile(path) unverändert
- pushFile(path, ...) unverändert (optional ergänzt um Preflight-Mode)

No-Go:
- Keine Änderung an Auth/PIN/Governance-Logik
- Keine Autonomie
- Kein automatisches Merge

## 1) API Ist-Stand v1.1.0 (Referenz)
Vorhanden:
- getStatus(): Health/Version/Repo
- pullFile({path, branch?}): Read single file
- pushFile({path, content, commitMessage, branch, sha?}): Create/Update file

Fehlt:
- Directory Listing / Repo Index
- Suche
- Multi-Pull
- Automatischer SHA-Preflight im Manual Push (gegen 422)

## 2) Zielzustand v1.2 (Kurz)
Mit v1.2 soll OS4-Tresor:
A) Verzeichnisse/Repo-Struktur listen können (rekursiv, kontrolliert)  
B) Dateien nach Pattern/Keywords finden können (Index-basiert)  
C) Mehrere Dateien in einem Call ziehen können (Batch Read)  
D) Bei Updates automatisch die SHA holen können (Preflight), um 422 zu vermeiden  

## 3) Neuer Endpoint: listFiles()
Name: /listFiles  
Zweck: Liefert einen Index von Dateien unter einem Root-Pfad.

Request (JSON):
- root: string (z. B. "OS4_CORE/")
- branch?: string (default: "main")
- depth?: number (default: 10; max: 50)
- include?: array<string> (glob patterns, optional; z. B. ["**/*.md","**/*.py"])
- exclude?: array<string> (glob patterns, optional)
- maxFiles?: number (default: 2000; hard cap)

Response:
- success: boolean
- branch: string
- root: string
- files: array<{ path: string, type: "file"|"dir", size?: number, sha?: string }>
- truncated: boolean
- error?: string

Regeln:
- Liefert nur Pfade/Metadaten; Content wird nicht übertragen.
- root muss ein Verzeichnis sein (mit / enden erlaubt).
- Absicherung gegen Path Traversal (keine .., keine absoluten Pfade).
- Caps sind Pflicht (maxFiles, depth max).

## 4) Neuer Endpoint: searchFiles()
Name: /searchFiles  
Zweck: Findet Dateien anhand von Keywords oder Regex über Dateinamen (optional: Content-Snippets nur bei expliziter Freigabe).

Request:
- query: string
- roots: array<string> (z. B. ["OS4_CORE/","OS4_SYSTEM/"])
- branch?: string (default: main)
- maxResults?: number (default: 200)

Response:
- success: boolean
- results: array<{ path: string, score?: number }>
- error?: string

Hinweis:
- Content-Suche optional; wenn vorhanden, nur Snippets (z. B. 200 chars) + rate limits.

## 5) Neuer Endpoint: pullMany()
Name: /pullMany  
Zweck: Batch-Read mehrerer Dateien in einem Call (Performance, weniger Roundtrips).

Request:
- paths: array<string> (max 50)
- branch?: string (default: main)

Response:
- success: boolean
- branch: string
- files: array<{ path: string, success: boolean, content?: string, sha?: string, error?: string }>

Regeln:
- Erfolgs-/Fehlerstatus pro Datei.
- Optional Size Cap pro Datei (z. B. 1MB).

## 6) Ergänzung: updatePreflight() oder pushFile(preflight=true)
Problem: Updates bestehender Dateien scheitern ohne SHA (HTTP 422).  
Ziel: Backoffice/Manual Push und Agent3-Workflows sollen SHA automatisch holen können.

Option A (separat): /getFileMeta
- Request: { path, branch? }
- Response: { success, exists: boolean, sha?: string, error?: string }

Option B (integriert): pushFile unterstützt preflight=true
- Wenn preflight=true und sha fehlt:
  1) API prüft, ob Datei existiert
  2) Wenn existiert → holt sha intern und macht Update
  3) Wenn nicht existiert → Create ohne sha

Wichtig:
- Verhalten muss auditierbar bleiben (commitUrl).

## 7) Sicherheits- & Governance-Anforderungen
1) Read-Index darf keine Secrets leaken (nur Pfade/Metadaten).  
2) Rate limits und Caps (maxFiles, maxResults, maxPaths) sind Pflicht.  
3) Branch Default: main; Branch Parameter nur, wenn explizit erlaubt.  
4) Kein Autopush, kein automerge. Writes bleiben manuell/freigegeben.  
5) Optional: Read-Audit für list/search/pullMany (lightweight, ohne Payload-Leak).

## 8) Acceptance Criteria (Definition DONE)
v1.2 gilt als fertig, wenn:
1) Repo-Abgleich ohne manuelle Dateiliste möglich ist (listFiles + pullMany).  
2) Systemrelevante Dateien zuverlässig auffindbar sind (searchFiles oder listFiles+filter).  
3) Updates ohne 422 möglich sind (Preflight).  
4) Caps/Rate limits greifen, kein unkontrollierter Vollscan.  
5) Bestehende v1.1.0 Endpunkte bleiben kompatibel.

## 9) Umsetzungshinweis (Replit Agent3 Workflow)
- Agent3 implementiert Endpoints additiv.
- Push in Branch → PR → Checks → Squash & Merge.
- Core APIs getStatus/pullFile/pushFile nicht ändern, außer explizite Preflight-Extension.
