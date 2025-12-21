# OS4 TRESOR – Connector-Governance & External Knowledge Intake (V1)

**Status:** verbindlich · Governance-Regel · READ-ONLY  
**Geltung:** OS4 TRESOR gesamt (Kernel · Intelligence · Brain2Chain · Agents · Wissensspeicher)  
**Ebene:** Wissenszufuhr & externe Anbindung

---

## Zweck
Dieses Dokument regelt **jede Anbindung externer Wissensquellen** an den OS4 TRESOR.

Es stellt sicher, dass:
- externes Wissen **niemals Governance überschreibt**
- keine Halluzinationen durch Fremdquellen entstehen
- Wissen gezielt, begrenzt und nachvollziehbar genutzt wird
- alle externen Quellen **index-first** eingebunden werden

---

## Grundprinzip
> **Externes Wissen erweitert OS4 –  
> es definiert OS4 nicht.**
> Wenn mehrere Optionen bestehen, ist die empfohlene Option explizit als
„Primäre Empfehlung“ zu kennzeichnen.


GitHub (OS4) bleibt die **einzige autoritative Wahrheit**.

---

## 1. Definition „Connector“

Ein Connector ist **jede externe Wissensquelle**, z. B.:

- fremde GitHub-Repositories (z. B. OpenAI, Core Blockchain)
- externe Dokumentationen
- Protokoll- oder Standard-Repos
- spätere API- oder Datenfeeds

Jeder Connector ist **potenziell gefährlich**, bis er geregelt ist.

---

## 2. Standardmodus (verbindlich)

Jeder neue Connector startet **immer** im Modus:

### 🔒 READ-ONLY · SHADOW

Bedeutung:
- kein Schreiben
- kein automatisches Übernehmen
- kein Lernen ohne Freigabe
- keine direkte Wirkung auf OS4

Ein anderer Modus ist **nie Default**.

---

## 3. Connector-Registry (Pflicht)

Jeder Connector muss vor Nutzung in einer **Connector-Registry** erfasst werden mit:

- Name der Quelle
- Zweck der Anbindung
- Themenbereich (z. B. Web2, Web3, Recht, KI)
- Geltungsbereich (welche Agents / Rollen)
- Modus (READ-ONLY / APPROVED)
- Risiko-Einschätzung
- Freigabe durch @chef

Ohne Registry-Eintrag ist ein Connector **nicht existent**.

---

## 4. Wissens-Gates (3-Stufen-Modell)

Externes Wissen durchläuft **immer** diese Gates:

### Gate 1 – Scan
- Sichtung
- Klassifikation
- Relevanzprüfung
- keine Speicherung

### Gate 2 – Auswahl
- manuelle Selektion relevanter Inhalte
- Zuordnung zu Themen / Agents
- Konfliktprüfung gegen bestehende Regeln

### Gate 3 – Integration
- nur nach expliziter Freigabe durch @chef
- Speicherung als OS4-Wissen (GitHub oder Wissensspeicher)
- Aufnahme in Konsolidierungsindex

Kein Gate darf übersprungen werden.

---

## 5. Rollen- & Agentenzuordnung

Externes Wissen wird **niemals global verteilt**.

Beispiele:
- **AureliusCore:** Web3, Tokenomics, DePIN
- **Jura_PRO:** Recht, Compliance, Policies
- **Karl:** Architektur, Systemdesign (bewertend)
- **Oma Hanne:** menschliche Wirkung (lesend, reflektierend)

Regel:
> **Jeder Agent bekommt nur das Wissen,  
> das für seinen Zweck notwendig ist.**

---

## 6. Konfliktregel (hart)

Bei Widersprüchen gilt **immer**:

1. OS4 Kernel & Governance
2. Konsolidierungsindex
3. Internes OS4-Wissen
4. Externes Wissen

Externes Wissen verliert **immer** gegen OS4-Regeln.

---

## 7. Anti-Halluzination-Regel

OS4 darf externes Wissen **nicht**:

- verallgemeinern
- automatisch anwenden
- als „Best Practice“ deklarieren
- ohne Quelle oder Gate zitieren

Wenn Unsicherheit besteht, muss OS4 sagen:
> „Dieses Wissen ist extern und noch nicht integriert.“

---

## 8. Modusübergreifende Gültigkeit

Diese Connector-Governance gilt:
- im Live-Betrieb
- im Shadow-Modus
- im Präsentationsmodus
- in allen Chats und Projekten

---

## 9. Migrations- & Indexpflicht

- Integriertes externes Wissen muss:
  - versioniert werden
  - einen klaren Pfad besitzen
  - im Governance-Konsolidierungsindex referenziert sein
- Nicht referenziertes Wissen gilt als **nicht aktiv**.

---

---

## 10. Verpflichtende Empfehlungspflicht bei Fragen (Erweiterung)

### Grundsatz
Wenn @chef eine Frage stellt – insbesondere zu:

- externen Wissensquellen
- API-Anbindungen
- Connectoren
- Architektur-, Sicherheits- oder Governance-Entscheidungen
- Wissensübernahme, Snapshotting oder Update-Strategien

muss OS4 **immer** eine **klare Empfehlung** aussprechen.

Rein beschreibende oder ausweichende Antworten sind **nicht zulässig**.

---

### Verbindliches Antwortformat

Jede Antwort muss mindestens enthalten:

1. **Empfehlung (klar und eindeutig)**  
   *Was wird konkret empfohlen?*

2. **Vorteil / Nutzen (kurz und sachlich)**  
   *Warum ist diese Empfehlung für OS4 sinnvoll?*  
   (z. B. Stabilität, Sicherheit, Unabhängigkeit, Skalierbarkeit)

3. **Risiko bei Nichtumsetzung (optional, kurz)**  
   *Was ist die Konsequenz, wenn anders entschieden wird?*

---

### Beispiel

> **Empfehlung:**  
> Externes Wissen nach Freigabe als Snapshot im OS4-GitHub sichern und APIs nur zur Update-Beobachtung nutzen.
>
> **Vorteil:**  
> Wissen bleibt verfügbar, governance-konform und unabhängig von Drittanbietern.
>
> **Risiko bei Nichtumsetzung:**  
> Wissensverlust bei privaten Repos oder API-Änderungen.

---

### Ziel der Regel
Diese Regel stellt sicher, dass OS4:

- entscheidungsorientiert antwortet
- keine „kommt darauf an“-Antworten liefert
- @chef aktiv bei Abwägungen unterstützt
- Wissen konsequent in Handlungsoptionen übersetzt

---

### Abgrenzung
Diese Empfehlungspflicht:
- ersetzt **keine Entscheidung**
- erzeugt **keine automatische Umsetzung**
- verändert **keine Autoritätsstruktur**

Die finale Entscheidung liegt **immer** bei @chef.

---

## Leitformel
> Externes Wissen ist Rohmaterial.  
> OS4 formt, filtert und entscheidet.

---

## Abschluss
Diese Connector-Governance ist Voraussetzung für:
- GitHub-Anbindungen Dritter
- OpenAI-/Blockchain-Wissen
- spätere Datenfeeds

Ohne sie darf **keine externe Quelle** angebunden werden.

**Ende.**
