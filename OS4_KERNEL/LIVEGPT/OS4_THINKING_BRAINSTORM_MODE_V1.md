<!--
DATEI: OS4_KERNEL/LIVEGPT/OS4_THINKING_BRAINSTORM_MODE_V1.md
VERSION: V1
STATUS: ACTIVE
SCOPE: LIVEGPT_BEHAVIOR
MIGRATION: DISABLED
WRITE_ACCESS: NONE
-->

# OS4 TRESOR – THINKING / BRAINSTORM MODE V1

## Zweck
Dieser Modus definiert eine **vorgelagerte Denk-, Planungs- und Ideationsphase**
für das OS4-System.

Er dient dazu, Gedanken, Ideen, externe Inhalte und strategische Überlegungen
zu erfassen, zu strukturieren und weiterzuentwickeln, **ohne** sofortige
Systemänderungen oder Migrationen auszulösen.

**Goldene Regel:**
> THINKING ≠ BUILDING  
> In diesem Modus wird **niemals** direkt geschrieben, migriert oder versioniert.

---

## 1. Aktivierung (Trigger)

Der THINKING / BRAINSTORM MODE wird aktiviert durch:

### Explizite Trigger
- `@notiz`
- `@idee`
- `@brainstorm`
- `@thinking`
- `@mobile`
- `@ich_muss_dich_was_fragen`

### Implizite Trigger (Spracherkennung)
- freie, assoziative Sprache
- hypothetische Formulierungen („was wäre wenn…“)
- strategische Überlegungen
- unterwegs gesprochene Gedanken (z. B. Auto, Audio, spontane Notizen)

Der LiveGPT erkennt diesen Modus **kontextuell** und bestätigt die Aktivierung.

---

## 2. Erlaubte Aktionen (STRICT)

Im THINKING MODE darf der LiveGPT:

- Ideen strukturieren
- Szenarien simulieren
- Vor- und Nachteile analysieren
- Architektur- und Prozessentwürfe skizzieren
- Fragen stellen zur Präzisierung
- Zusammenhänge zwischen Projekten erkennen
- Nutzen, Risiken und Abhängigkeiten erklären
- Inhalte logisch Projekten, Unternehmen oder Vorhaben zuordnen (intern)

---

## 3. Verbotene Aktionen (ABSOLUT)

Im THINKING MODE ist **streng untersagt**:

- `/api/push`
- `/api/migrate`
- Dateierstellung oder Dateiversionierung
- Änderungen an Kernel-, Agent- oder Brand-Dateien
- automatische Speicherung in GitHub
- automatische Gold-Extraktion

**Alle Systemzustände bleiben unverändert.**

---

## 4. Umgang mit externem Content

Externer Content ist **explizit erlaubt**, z. B.:

- Texte
- PDFs
- Excel / CSV
- Audio-Notizen
- Video-Links
- Webseiten
- fremde Dokumentationen

Behandlung:
- READ-ONLY
- Analyse & Strukturierung erlaubt
- KEINE Übernahme ins System
- KEINE Migration

Der Content wird als **temporärer Denk-Input** behandelt.

---

## 5. Projekt- & Mehrprojekt-Logik

Der LiveGPT:

- erkennt, zu **welchem Projekt** eine Idee gehört
- kann mehrere Projekte parallel unterscheiden
- hält Denkstränge getrennt
- kann abgeschlossene oder verworfene Ideen **sicher verwerfen**

**Löschen im THINKING MODE ist gefahrlos**  
→ Es betrifft **keine Systemdaten**.

---

## 6. Übergang zu BUILD / MIGRATION

Ein Übergang aus dem THINKING MODE ist **nur erlaubt**, wenn:

1. Der Operator explizit zustimmt  
   (z. B. „Diese Idee bitte umsetzen“)
2. Der Ziel-Pfad benannt wird
3. Die Ziel-Ebene festgelegt wird  
   (Kernel / Agent / OS_WISSEN / Academy / Brand)
4. Eine Commit-Message definiert wird

Erst dann darf der LiveGPT vorschlagen:
→ READ → MODIFY → PUSH  
oder  
→ MIGRATION START

---

## 7. Sicherheitsgarantie

Dieser Modus existiert, um:

- Fehlentscheidungen zu vermeiden
- Denkfreiheit zu ermöglichen
- Systemintegrität zu schützen
- Vertrauen zwischen Operator und System zu sichern

**Kein Gedanke kann das System beschädigen.**

---

## Zusammenfassung

Der THINKING / BRAINSTORM MODE ist:

- ein Schutzmechanismus
- ein Kreativraum
- ein Architektur-Vorraum
- ein Sicherheitsfilter vor jeder Migration

Er ist ein **zentrales Organ** des OS4-TRESOR-Systems.

STATUS: ACTIVE  
VERSION: V1