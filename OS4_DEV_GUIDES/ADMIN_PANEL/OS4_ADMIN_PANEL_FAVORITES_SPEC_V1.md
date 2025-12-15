# OS4 ADMIN-PANEL – FAVORITES SPEC (V1)

**Status:** READ-ONLY · Draft  
**Version:** V1  
**Scope:** Admin-Panel · Arbeitsplatz · Produktivität  
**Zweck:** Definiert Favoriten als sichere Arbeitsraum-Vorlagen (keine Live-Verknüpfungen, keine Aktionen).

---

## 1) Grundprinzip

Favoriten sind **Vorlagen** für Arbeitsräume (Workspace Presets).  
Sie dienen der schnellen Wiederherstellung von Layout + Modulen, ohne dass Nutzer alles neu einstellen müssen.

**Merksatz:**  
> Favoriten laden Arbeitsräume – sie ändern niemals das System.

---

## 2) Was ein Favorit speichert (V1)

Ein Favorit speichert ausschließlich:
- Workspace-Name (Display)
- Layout-Typ (Fokus-Modus / Docking-Layout)
- Liste der Module im Arbeitsraum (z. B. Snapshot, Projektübersicht, Begleitpanel)
- Reihenfolge / Position (nur UI)
- Optional: Tags (z. B. „Entwicklung“, „Planung“)

**Nicht gespeichert:**
- keine Systemzustände
- keine Tokens/Secrets
- keine Schreibrechte
- keine Aktionen/Workflows
- keine „live“ Links, die automatisch etwas ausführen

---

## 3) Favoriten-Operationen (V1)

Erlaubt:
- Favorit anlegen („Als Favorit speichern“)
- Favorit umbenennen
- Favorit duplizieren
- Favorit löschen (ohne Seiteneffekt)
- Favorit laden (öffnet neuen Arbeitsraum)

Regeln:
- Laden erzeugt **immer** einen Arbeitsraum-Klon.
- Favorit überschreibt keinen bestehenden Arbeitsraum.
- Löschen entfernt nur die Vorlage, nicht Inhalte.

---

## 4) UX-Regeln (angstfrei)

- i-Button vorhanden (Erklärung: „Vorlage, keine Aktion“)
- Keine Popups, keine Warnfarben
- Jede Aktion ist reversibel
- Klarer Hinweis beim Laden:
  - „Arbeitsraum aus Favorit geladen – keine Systemänderung“

---

## 5) Platzierung im Admin-Panel

Favoriten sind erreichbar über:
- Control Bar ⭐ Favoriten (Overlay/Panel)
- Arbeitsraum-Header („Als Favorit speichern“)

V1 Minimal:
- Favoritenliste (max. 10 sichtbar, Rest scrollbar)
- Suchfeld innerhalb der Favoritenliste optional (V1.x)

---

## 6) Device-Verhalten

Desktop/Notebook:
- Favoriten als Panel/Overlay
- Laden ohne Seitenwechsel

Tablet:
- Favoriten als Overlay (Fokus-Modus)
- Nach Auswahl zurück in Arbeitsraum

Smartphone:
- Favoriten reduziert (nur Liste + Laden)
- Keine Layout-Konfiguration

---

## 7) Erweiterbarkeit (V1.x / V2)

Erlaubt:
- Rollenbasierte Favoriten (z. B. Entwickler/Operator)
- Team-Favoriten (später)
- Vorschlagsfavoriten (später, nie automatisch aktiv)

Nicht erlaubt:
- automatische Umgestaltung ohne Nutzerentscheidung
- Favoriten als Ausführungs-Makros

---

## Abschluss

Favoriten sind ein Produktivitäts-Werkzeug, das Angst reduziert und Routine ermöglicht.  
Sie sind Vorlagen für Arbeitsräume – ohne Systemwirkung, ohne automatische Aktionen.
