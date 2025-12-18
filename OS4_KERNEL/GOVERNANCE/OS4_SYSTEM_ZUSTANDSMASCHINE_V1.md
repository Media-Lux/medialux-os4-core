# OS4 TRESOR – Systemweite Zustandsmaschine (V1)

**Status:** verbindlich · Governance-Regel · READ-ONLY  
**Geltung:** OS4 TRESOR gesamt (Kernel · CORE-PULSE · Brain2Chain · Intelligence · Agents)  
**Ebene:** Systemlogik & Konsistenz (keine Technik, kein Code)

---

## Zweck
Diese Zustandsmaschine definiert **alle zulässigen Systemzustände**
und deren **kombinatorische Regeln** im OS4 TRESOR.

Sie verhindert:
- widersprüchliche Zustände
- implizite Aktionen
- unklare Verantwortlichkeiten
- inkonsistente Wahrnehmung

---

## Grundprinzip
Der OS4 TRESOR befindet sich **immer** in einem eindeutig bestimmbaren Zustand.
Nicht jeder Zustand ist mit jedem anderen kombinierbar.

> **Klarheit geht vor Flexibilität.**

---

## 1. Zustandsdimensionen (abschließend)

Die Zustandsmaschine besteht aus **fünf Dimensionen**:

1. **Betriebsmodus**
2. **Kognitiver Zustand**
3. **Sicherheitszustand**
4. **Wahrnehmungsmodus**
5. **Handlungsstatus**

Jede Dimension hat genau **einen aktiven Zustand**.

---

## 2. Betriebsmodus

### Zulässige Zustände
- **Live-Betrieb**
- **Shadow-Modus**
- **Präsentationsmodus**

### Regeln
- Präsentationsmodus ⊂ Shadow-Modus
- Live-Betrieb schließt Shadow/Präsentation aus
- Moduswechsel nur durch @chef

---

## 3. Kognitiver Zustand

### Zulässige Zustände
- **Aktiver Ruhezustand**
- **KI-Denken aktiv**
- **Übergabephase**
- **Mensch denkt / entscheidet**

### Regeln
- Nie mehr als ein kognitiver Zustand gleichzeitig
- KI-Denken und Mensch-Denken schließen sich aus
- Übergabephase ist zwingend zwischen KI und Mensch

---

## 4. Sicherheitszustand

### Zulässige Zustände
- **Ruhe**
- **Aufmerksamkeit**
- **Warnung**

### Regeln
- Sicherheitszustand ist unabhängig von Kognition
- Sicherheitszustand beeinflusst Wahrnehmung, nicht Handlung
- Warnung erzwingt keine Aktion

---

## 5. Wahrnehmungsmodus

### Zulässige Zustände
- **Normal**
- **Reduziert**
- **Maximal maskiert**

### Regeln
- Live-Betrieb → Normal oder Reduziert
- Shadow-Modus → Reduziert
- Präsentationsmodus → Maximal maskiert
- Wahrnehmungsmodus ändert keine Systemlogik

---

## 6. Handlungsstatus

### Zulässige Zustände
- **Keine Aktion**
- **Aktion angefragt**
- **Aktion freigegeben**
- **Aktion ausgeführt**

### Regeln
- Aktion freigegeben nur nach Operator-Ritual
- CORE-PULSE kann maximal „Aktion angefragt“ anzeigen
- Handlungsstatus darf nie verborgen sein (intern)

---

## 7. Zulässige Kombinationen (Beispiele)

### Beispiel A – Normalbetrieb
- Betriebsmodus: Live
- Kognition: Aktiver Ruhezustand
- Sicherheit: Ruhe
- Wahrnehmung: Normal
- Handlung: Keine Aktion

### Beispiel B – KI-Analyse
- Betriebsmodus: Live
- Kognition: KI-Denken aktiv
- Sicherheit: Aufmerksamkeit
- Wahrnehmung: Normal
- Handlung: Keine Aktion

### Beispiel C – Entscheidung durch @chef
- Betriebsmodus: Live
- Kognition: Mensch denkt / entscheidet
- Sicherheit: Warnung
- Wahrnehmung: Reduziert
- Handlung: Aktion freigegeben

### Beispiel D – Präsentation
- Betriebsmodus: Präsentation
- Kognition: Aktiver Ruhezustand
- Sicherheit: Ruhe
- Wahrnehmung: Maximal maskiert
- Handlung: Keine Aktion

---

## 8. Unzulässige Kombinationen (verboten)

- Präsentationsmodus + Aktion freigegeben
- KI-Denken aktiv + Aktion ausgeführt
- Mensch denkt + Shadow-Modus mit Normal-Wahrnehmung
- Warnung + automatische Aktion
- Übergabephase + Aktion ausgeführt

---

## 9. Übergangsregeln

- Jeder Zustandswechsel ist **explizit**
- Kein automatischer Übergang zu Handlung
- Übergänge dürfen Wahrnehmung ändern, aber nicht Bedeutung
- Rückkehr in Aktiven Ruhezustand ist immer möglich

---

## 10. Audit-Prinzip
Zu jedem Zeitpunkt muss auditierbar sein:
- Welcher Zustand war aktiv?
- Wer hat den Übergang ausgelöst?
- Welche Regeln galten?

Wenn das nicht beantwortbar ist, ist der Zustand unzulässig.

---

## Leitformel
> Ein System.  
> Ein Zustand pro Dimension.  
> Keine Widersprüche.  
> Keine Abkürzungen.

---

## Abschluss
Diese Zustandsmaschine ist die verbindliche Grundlage
für jede Implementierung, Visualisierung oder Erweiterung des OS4 TRESOR.

**Ende.**
