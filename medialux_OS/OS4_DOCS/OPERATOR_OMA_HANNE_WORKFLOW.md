# OPERATOR WORKFLOW – „OMA HANNE“
**Status:** READ-ONLY · Verfahren (kein Systemeingriff)

## Zweck
Der Befehl `oma hanne` synchronisiert den externen Arbeitsassistenten **„Oma Hanne“**
mit dem **aktuellen Ist-Zustand von OS4**, ohne OS4 zu verändern.

---

## Rollen (klar getrennt)

### OS4 TRESOR
- System, Governance, Kernel
- API & GitHub-Integration
- Kennt seinen Zustand selbst
- Führt **keine** externen Synchronisationen automatisch aus

### OMA HANNE
- Externer Arbeits- & Planungsassistent
- Strategie, UX, Architektur, Kommunikation
- Kennt OS4 **nur** über explizite Snapshots

> **OMA HANNE ist kein Teil von OS4.**

---

## Wann verwenden?
Nutze `oma hanne`, wenn:
- ein **neuer Chat** startet
- größere **Planungs-/Architekturarbeit** beginnt
- Unklarheit über den aktuellen OS4-Stand besteht
- OS4 intern geändert wurde, der externe Kontext aber alt ist

---

## Wie verwenden?

**Eingabe im OS4 Tresor:**
