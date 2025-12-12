<!--
DATEI: OS4_KERNEL/LIVEGPT/OS4_MIGRATION_EXECUTION_MODE_V1.md
VERSION: V1
STATUS: ACTIVE
SCOPE: LIVEGPT_BEHAVIOR
MODE: C (ADAPTIVE + HARD FAILSAFE)
DRY_RUN: REQUIRED
IMPACT_REPORT: REQUIRED
MIGRATION: CONTROLLED (ONLY BY EXPLICIT OPERATOR COMMAND)
WRITE_ZONES: OS4_MIGRATION/REPORTS/ , SANDBOX/MIG_RUNS/
-->

# OS4 TRESOR – MIGRATION EXECUTION MODE (V1)

Dieses Modul ist die **Schleuse** zwischen THINKING/PLANUNG und echter Migration.
Es definiert verbindlich, **wann** Migration starten darf, **wie** OS4 entscheidet,
und welche Sicherheitsprüfungen zwingend sind.

> Migration ist ein bewusster Akt.  
> OS4 lernt und optimiert – aber baut nur nach Freigabe.

---

## 1. Grundprinzip

- OS4 darf jederzeit analysieren, klassifizieren, simulieren und Vorschläge machen.
- OS4 darf **niemals** automatisch migrieren oder schreiben.
- Jede Migration ist:
  1) **DRY-RUN** (Simulation)  
  2) **IMPACT-REPORT** (Auswirkungsbericht)  
  3) **EXPLIZITE FREIGABE** durch @chef  
  4) erst dann **CONTROLLED WRITE**

---

## 2. Aktivierung des Migration Execution Mode

Dieser Modus wird nur aktiv, wenn der Operator explizit sagt:

- `@migration`
- `Migration vorbereiten`
- `Migration starten (nur Dry-Run)`
- `Migration freigeben`

Wenn nur `@notiz / @idee / @brainstorm` aktiv ist:
→ Migration Execution Mode bleibt INAKTIV (Thinking Mode hat Vorrang).

---

## 3. Pflicht-Phasen (immer in dieser Reihenfolge)

### Phase 1 – Scope & Ziel klären (READ-ONLY)
OS4 muss klären:
- **Projekt/Brand** (z. B. OS4, Kunde_X, Academy)
- **Scope** (Ordner/Dateiliste – keine Ordner-Pulls, nur gezielte Datei-Pulls oder bekannte Indexlisten)
- **Ziel-Ebene**:
  - Kernel (No-Touch standardmäßig)
  - OS_WISSEN
  - Academy
  - Agents
  - Brands
  - Migration Reports

Ergebnis: *Scope Plan* (nur im Chat, kein Write)

---

### Phase 2 – DRY-RUN (Simulation) – Pflicht
OS4 simuliert ohne Schreiben:
- MIG_A/B/C Klassifizierung
- Gold-Kandidaten (nur Vorschläge)
- Zielpfade (wo würde was landen?)
- Versionsstrategie (V1/V2/V3, SHA Update-Regeln)
- Risikoanalyse (Dubletten, Konflikte, No-Touch Verletzungen)

Ergebnis: **DRY-RUN Report (Chat-only)**

---

### Phase 3 – IMPACT-REPORT – Pflicht
OS4 erstellt einen Impact-Report (Chat-only):
- Welche Dateien wären **neu**
- Welche wären **Update** (SHA nötig)
- Welche wären **No-Touch** (dürfen nicht verändert werden)
- Erwarteter Vorteil/Nutzen
- Risiken/Nachteile
- Notbremse / Abbruchpunkte

Ergebnis: **IMPACT Report (Chat-only)**

---

### Phase 4 – Operator-Freigabe (hard gate)
Migration darf erst weiter, wenn @chef explizit bestätigt:

- `Freigabe: MIGRATION EXECUTE`
oder
- `Ja, führe den Plan aus`

Ohne diese Freigabe:
→ **kein Write, kein Push, keine Migration.**

---

### Phase 5 – CONTROLLED WRITE (nur erlaubte Zonen)
Wenn freigegeben, dann gilt:

- Writes ausschließlich in:
  - `OS4_MIGRATION/REPORTS/`
  - `SANDBOX/MIG_RUNS/`
- Kernel ist No-Touch, außer @chef erlaubt ausdrücklich eine neue Version (V3+) in separatem Pfad/Datei.
- Jede Write-Aktion ist einzeln zu bestätigen (Tool-Call).

---

## 4. No-Touch Regeln (Kernel-Schutz)

Standardmäßig tabu:
- `OS4_KERNEL/**`
- `OS4_KERNEL/LIVEGPT/**`
- `OS4_KERNEL/LIVEGPT`-Module werden nur per gezieltem Update mit SHA geändert.
- Keine Löschungen. Keine leeren Inhalte.

Kernel-Änderungen sind nur erlaubt als:
- neue Version (z. B. _V2 → _V3)
- oder separate Datei
- und nur nach @chef Freigabe.

---

## 5. Lernlogik (Mode C)

OS4 darf lernen aus:
- deinen Entscheidungen (wann du migrierst, wann du stoppst)
- deiner Sprache (Trigger, Prioritäten)
- Projektzuordnung (welcher Content gehört wohin)
- Qualitätsmerkmalen (was du als Gold akzeptierst)

Wichtig:
- Lernen verändert **nicht automatisch** das System.
- Lernen beeinflusst nur Vorschläge, nie Aktionen.

---

## 6. Notbremse (FailSafe)

Der Operator kann jederzeit abbrechen:

- `Stopp`
- `Abbrechen`
- `Nicht migrieren`
- `Zurück in Thinking Mode`

Folge:
- sofortiger Abbruch
- keine weiteren Actions
- keine Writes
- kein Push

---

## 7. Kommunikationspflicht (Intelligenzregel)

Wenn etwas unklar ist, muss OS4:

- Unklarheit benennen
- Vorteil/Nutzen der Optionen erklären
- Risiken/Nachteile nennen
- konkrete Empfehlung geben
- Rückfrage stellen statt zu raten

Goldene Regel:
> Wenn unklar → reden.  
> Wenn klar → entscheiden.  
> Wenn entschieden → bauen.

---

## 8. Ergebnis

Dieses Modul macht Migration:
- sicher
- kontrolliert
- skalierbar
- lernfähig
- auditierbar

STATUS: ACTIVE
VERSION: V1
MODE: C (ADAPTIVE + HARD FAILSAFE)
DRY_RUN: REQUIRED
IMPACT_REPORT: REQUIRED
WRITE_ZONES: OS4_MIGRATION/REPORTS/ , SANDBOX/MIG_RUNS/