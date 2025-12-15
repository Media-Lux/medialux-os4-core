MARKDOWN-INHALT:
# OS4 ADMIN-PANEL – TABLET MODE SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Tablet · Fokus-Arbeitsmodus  
**Zweck:** Definiert den fokussierten Tablet-Arbeitsmodus zwischen Smartphone (unterwegs) und Desktop (voller Arbeitsplatz).

---

## 1) Grundprinzip

Der Tablet-Modus ist ein **Fokus-Arbeitsmodus**.  
Er erlaubt produktives Arbeiten mit mehr Raum als Smartphone, aber **ohne Komplexität** eines Desktops.

**Merksatz:**  
> Tablet = Fokus statt Parallelität.

---

## 2) Abgrenzung zu anderen Geräten

- **Smartphone:** kurz, unterbrochen, ein Gedanke
- **Tablet:** konzentriert, ein Thema
- **Desktop:** komplex, mehrere Themen

Der Tablet-Modus ist **kein halber Desktop**.

---

## 3) Layout-Logik (V1)

- **Ein Hauptbereich**
- **Ein Overlay-Bereich**
- Kein permanentes Split-Screen
- Kein Multi-Fenster

### Hauptbereich
- Aktueller Arbeitskontext:
  - Notiz
  - Brainstorm
  - Planung
  - Dokument-Ansicht (READ-ONLY)

### Overlay-Bereich
- Temporär einblendbar:
  - Oma Hanne
  - Suche
  - Fast-Switch
  - Snapshot-Info

**Regel:**  
Overlay schließt sich vollständig – kein Restzustand.

---

## 4) Erlaubte Funktionen (V1)

- Schreiben / Denken (Text & Sprache)
- Strukturieren eines Themas
- Anzeigen von Snapshots & Specs
- Kontextwechsel (geführt)

**Nicht erlaubt:**
- Push / Commit
- Migration
- Multi-Arbeitsräume
- Layout-Anpassung

---

## 5) Interaktionsregeln

- Fokus bleibt immer auf **einem Thema**
- Kontextwechsel nur bewusst
- Kein automatisches Öffnen weiterer Inhalte
- Jeder Wechsel ist erklärbar

---

## 6) Oma Hanne im Tablet-Modus

- Als Overlay verfügbar
- Fokus-unterstützend
- Kurz, präzise Hinweise
- Keine langen Ausgaben
- Kein dominantes Verhalten

---

## 7) UX- & Sicherheitsregeln

- Ruhige Farben
- Klare Texte
- Keine Warnfarben
- i-Buttons zur Erklärung
- Abbruch jederzeit möglich
- Keine versteckten Aktionen

---

## 8) Device-Orientierung

### Portrait
- Maximale Konzentration
- Overlay von unten oder rechts

### Landscape
- Mehr Breite
- Gleiche Logik, kein Split

---

## 9) Wiedereinstieg & Übergabe

- Zeitstempel für Arbeitsstände
- Rückkehr ohne Kontextverlust
- Übergabe an Desktop möglich
- Kein automatischer Statuswechsel

---

## 10) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- Zwei-Zonen-Modus (experimentell)
- Pencil-/Stift-Unterstützung
- Offline-Arbeiten

Nicht erlaubt:
- Hintergrund-Aktionen
- Auto-Sync mit Systemzustand
- Unkontrollierte Parallelität

---

## Abschluss

Der Tablet-Modus ist der **ruhige Denkraum** von OS4.  
Er erlaubt Tiefe ohne Überforderung und schließt die Lücke zwischen Mobilität und Arbeitsplatz.
