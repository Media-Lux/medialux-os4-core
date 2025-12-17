# OS4 REPO INDEX – V1

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** System · DEV_GUIDES · Orientierung  
**Zweck:** Zentrale Auffindbarkeits- und Referenzdatei für DEV_GUIDES-Inhalte im OS4-Tresor-System.

---

## 1) Zweck dieses Index

Dieser Index stellt sicher, dass **DEV_GUIDES-Dateien**:
- vom OS4 Tresor **auffindbar** sind,
- über `index_files` und `pull_file` **eindeutig referenziert** werden können,
- von Companion-Instanzen (z. B. Oma Hanne) **erklärt und eingeordnet** werden können.

**Wichtig:**  
Dieser Index enthält **keine Logik**, **keine Aktionen** und **keine Kernel-Regeln**.  
Er dient ausschließlich der **Orientierung und Synchronisation**.

---

## 2) Admin-Panel V1 – Referenzierte Dateien

### Admin-Panel Paket (Etappe 1 · READ-ONLY)

| Datei | Pfad | Status | Etappe | Zweck |
|------|------|--------|--------|-------|
| Control Bar Spec V1 | `OS4_DEV_GUIDES/ADMIN_PANEL/OS4_ADMIN_PANEL_CONTROL_BAR_SPEC_V1.md` | READ-ONLY · Draft | 1 | Permanenter Orientierungsanker (keine Aktionen) |
| Workspace Safe Default Spec V1 | `OS4_DEV_GUIDES/ADMIN_PANEL/OS4_ADMIN_PANEL_WORKSPACE_SAFE_DEFAULT_SPEC_V1.md` | READ-ONLY · Draft | 1 | Sicherer Startzustand ohne leeren Screen |
| Oma Hanne UI Contract V1 | `OS4_DEV_GUIDES/ADMIN_PANEL/OS4_ADMIN_PANEL_OMA_HANNE_UI_CONTRACT_V1.md` | READ-ONLY · Draft | 1 | Begleit- & Planungsmodus ohne Autonomie |

---

## 3) Gültigkeit & Regeln

- DEV_GUIDES-Dateien sind **nicht automatisch Teil der Startkassette**.
- Diese Index-Datei ist die **Brücke** zwischen GitHub-Repo und LiveGPT-Tresor.
- Änderungen an referenzierten Dateien erfolgen **nur versioniert** (V1 → V1.x → V2).
- Migration in Kernel-Pfade erfolgt **frühestens ab Etappe 2**.

---

## 4) Nutzung im Betrieb

- OS4 Tresor nutzt diesen Index zur **Navigation & Erklärung**.
- Companion-Instanzen (z. B. Oma Hanne) nutzen ihn zur **Kontextbildung**.
- Operatoren behalten Überblick über **gültige DEV_GUIDES-Artefakte**.

---

## 5) Erweiterung (V1.x / V2)

Erlaubt:
- Hinzufügen weiterer DEV_GUIDES-Referenzen
- Ergänzen von Status/Etappen

Nicht erlaubt:
- Ablegen von Logik
- Aktivieren von Aktionen
- Kernel-Referenzen ohne Etappenfreigabe

---

## Abschluss

Dieser Index schafft **Struktur, Auffindbarkeit und Synchronität** zwischen  
GitHub · OS4 Tresor · Companion.

Er ist die **offizielle Referenz** für DEV_GUIDES im OS4-System.

**Stabilität vor Aktion.**
