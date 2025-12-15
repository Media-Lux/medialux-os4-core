MARKDOWN-INHALT:
# OS4 ADMIN-PANEL – SEARCH & TAGS SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Navigation · Orientierung  
**Zweck:** Definiert eine globale, sichere Such- und Tag-Logik zur schnellen Orientierung im gesamten OS4-Arbeitsplatz.

---

## 1) Grundprinzip

Die Suche ist ein **Orientierungswerkzeug**, kein Aktionsauslöser.  
Sie hilft Nutzern, Inhalte, Module und Kontexte **zu finden**, nicht zu verändern.

**Merksatz:**  
> Suche zeigt, *wo etwas ist* – nicht, *was passiert*.

---

## 2) Globale Suche (V1)

### Eigenschaften
- Global verfügbar (Control Bar)
- Immer READ-ONLY
- Öffnet ein Such-Overlay
- Verändert keinen Zustand

### Durchsuchbare Inhalte (V1)
- Admin-Panel Specs (DEV_GUIDES)
- Projekte / Module (Metadaten)
- Favoriten
- Arbeitsräume (Namen)
- Dokumente & Blueprints (Titel, Beschreibung)

**Nicht durchsuchbar:**
- interne Logs
- Draft-Eingaben
- Systemzustände
- Secrets / Tokens

---

## 3) Suchverhalten

- Ergebnisliste gruppiert nach Kategorie
- Treffer sind **Links zur Ansicht**, keine Aktionen
- Klick öffnet Ziel in neuem Arbeitsraum oder Overlay
- Kein automatischer Fokuswechsel

---

## 4) Tagsystem (V1)

### Zweck
Tags dienen der **zusätzlichen Strukturierung** und **Filterung**.

### Arten von Tags
- **System-Tags** (vordefiniert, stabil)
  - z. B. `admin`, `ui`, `planung`, `read-only`
- **Nutzer-Tags** (frei, lokal)
  - z. B. `wichtig`, `später`, `review`

### Regeln
- Tags sind rein beschreibend
- Tags lösen keine Aktionen aus
- Tags sind optional

---

## 5) Nutzung von Tags

- Tags können an:
  - Favoriten
  - Arbeitsräume
  - Dokumente
- Tags werden in der Suche als Filter angeboten
- Mehrere Tags kombinierbar

---

## 6) UX- & Sicherheitsregeln

- i-Button erklärt Suche & Tags („nur Anzeige“)
- Keine Warnfarben
- Keine Popups
- Suche kann jederzeit geschlossen werden
- Schließen = kein Seiteneffekt

---

## 7) Device-spezifisches Verhalten

### Desktop / Notebook
- Vollständiges Such-Overlay
- Kategorien + Filter sichtbar

### Tablet
- Such-Overlay im Fokus-Modus
- Reduzierte Filter

### Smartphone
- Vereinfachte Suche
- Listenansicht
- Keine komplexen Filter

---

## 8) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- erweiterte Filter
- gespeicherte Suchansichten
- Team-Tags

Nicht erlaubt:
- Suchaktionen mit Systemwirkung
- automatische Tag-Zuweisung ohne Bestätigung

---

## Abschluss

Die globale Suche und das Tagsystem sind die **Navigationsader des OS4-Arbeitsplatzes**.  
Sie ermöglichen schnelles Auffinden ohne Risiko, ohne Angst und ohne unbeabsichtigte Aktionen.
