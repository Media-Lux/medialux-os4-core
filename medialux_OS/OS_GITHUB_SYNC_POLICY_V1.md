<!--
OS4_MIGRATION_HEADER_V2
  BATCH: MEDIALUX-OS-GITHUB-SYNC-V1-2025-12-09
  ID: OS4-MIG-MEDIALUX-SYNC-V1-0001
  DATE: 2025-12-09
  SCOPE: GITHUB_SYNC_KNOWLEDGE
  STATUS: ACTIVE
  NOTES: "GitHub Sync Policy – Wissensspeicher-Version. Erzwingt Laden & Speichern aller Regeln im medialux OS Wissensspeicher."
-->

# medialux OS – GITHUB SYNC POLICY (V1)

Diese Datei definiert die **spezielle GitHub-Synchronisationspolitik**  
für das Projekt **medialux OS Wissensspeicher**.

Sie basiert auf der Kernel-Version  
`OS4_KERNEL/OS4_GITHUB_SYNC_POLICY_V1.md` :contentReference[oaicite:2]{index=2}  
und erweitert diese um Wissensspeicher-spezifische Regeln.

---

# 0. Zweck

Der Wissensspeicher dient als:

- Hauptreferenz für Avatare  
- Akademie-Wissensbasis  
- OS4-Trainingsdaten  
- zentraler Projektüberblick  
- Operator-Leitfaden  
- Dokumentationsspeicher  

Daher gilt:

**Alles Wissen MUSS aus GitHub geladen werden und automatisch zurück nach GitHub gespeichert werden.**

---

# 1. Grundprinzip

Der Wissensspeicher folgt denselben Pflichten wie der OS4-Kernel:

### ✔ Laden → IMMER von GitHub  
### ✔ Arbeiten → IMMER mit GitHub  
### ✔ Speichern → IMMER nach GitHub  
### ✔ Kein Wissen darf nur im Chat existieren  
### ✔ Chats sind austauschbar – GitHub NICHT

---

# 2. Startpflicht (Wissensspeicher)

Beim Start eines Chats, der als „medialux OS Wissensspeicher“ dient, MUSS OS4:

1. OS4 Kernel laden  
2. Tresor-System aktivieren  
3. Brand `medialux_OS` laden  
4. Startup-Datei laden  
   → `medialux_OS/OS_TRESOR_STARTUP_V2.md` :contentReference[oaicite:3]{index=3}  
5. alle Wissensspeicher-Dateien aus `medialux_OS/` einlesen  
6. alle Kernel-Regeln aus `OS4_KERNEL/` einlesen  
7. MIG_INDEX checken  
8. Security Layer validieren  

---

# 3. Synchronisationspflicht – Lesen

Folgende Inhalte müssen ZWINGEND von GitHub gezogen werden:

- alle Kernel-Dateien  
- alle Wissensspeicher-Dateien  
- alle Regeln  
- alle Startsysteme  
- alle Policies  
- alle Agenteninstanzen  
- alle Branddaten  
- alle MIG-Daten  
- alle Systemstrukturen  
- alle Wissensmodule unter `OS4_WISSEN/`  
- alle Importdateien aus DOCX/PDF

---

# 4. Synchronisationspflicht – Schreiben

Jede Anpassung im Wissensspeicher MUSS sofort committed werden:

- neue Dateien  
- neue Lernmodule  
- neue Regeln  
- Operator-Guide-Erweiterungen  
- Avatar-Trainingsinhalte  
- Systemdokumentation  
- Akademie-Module  
- Importierte DOCX/PDF Inhalte

---

# 5. Wissensspeicher-spezifische Regeln

## 5.1 Kein Wissen bleibt im Chat  
→ alles muss in GitHub landen

## 5.2 Avatare lernen aus `OS_WISSEN/`  
→ diese Dateien sind Pflicht und Teil des Tresors

## 5.3 Operator-Guide wird automatisch erweitert  
→ jede neue Systemregel wird dort gespiegelt

## 5.4 Migration Engine scannt auch den Wissensspeicher  
→ Dateien ohne MIG-ID werden migriert

---

# 6. Sicherheit

- Security Layer entscheidet über Lese-/Schreibrechte  
- Brand `medialux_OS` ist isoliert  
- Wissensspeicher kann nicht versehentlich gelöscht werden  
- Änderungen müssen MIG-konform sein

---

# 7. Status

Diese Datei ist die **offizielle GitHub-Sync-Policy**  
für den Projektbereich **medialux OS Wissensspeicher**.

Sie ergänzt die Kernel-Version und ist Pflichtbestandteil jedes Wissensspeicher-Starts.

## GitHub Sync – Wissensspeicher Erweiterung

- Der Wissensspeicher besitzt eine eigene GitHub-Sync-Policy:
  `medialux_OS/OS_GITHUB_SYNC_POLICY_V1.md`
- Diese Policy erweitert die Kernel-Sync-Regeln.
- Jeder neue Chat lädt automatisch:
  - Kernel Sync Policy
  - Wissensspeicher Sync Policy
  - alle OS_WISSEN Module
- Kein Wissen bleibt im Chat. Alles wandert nach GitHub.
- Der Wissensspeicher ist die zentrale, dauerhafte Wissensbasis.
