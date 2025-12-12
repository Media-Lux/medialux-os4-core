# OS4 MIG Scanner Plan – TRESOR V2

<!--
STATUS: ACTIVE
VERSION: V2
SCOPE: TRESOR
ROLE: MIGRATION SCANNER PLAN
-->

## Zweck
Diese Datei definiert den offiziellen Scan-Ablauf der OS4 Migration Engine
für den TRESOR-Scope.

## Scan-Reihenfolge
1. MIG_INDEX lesen
2. MIG_HEADER validieren
3. Dateien klassifizieren (MIG_A / MIG_B / MIG_C)
4. Gold-Kandidaten markieren
5. Report erzeugen (READ-ONLY)

## Sicherheitsregeln
- Kein Write
- Kein Rename
- Kein Delete
- Audit-Mode only

## Ergebnis
Strukturierte Entscheidungsgrundlage für kontrollierte Migration.