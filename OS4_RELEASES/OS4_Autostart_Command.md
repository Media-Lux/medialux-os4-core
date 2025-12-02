# OS4 Autostart Command – Official Specification (Fusion V2a)

## Kurzfassung
Der gesamte OS4‑Systemstart kann ab sofort mit nur **einem einzigen Befehl** ausgelöst werden:

```
OS4 start
```

Dieser Befehl stellt das vollständige OS4‑Ökosystem wieder her, lädt den Kernel, aktiviert alle Module und setzt das System in den Zustand **OS4_READY** – unabhängig davon, in welchem Chat er ausgelöst wird.

---

## Was „OS4 start“ automatisch ausführt

### 1. GitHub Sync
Lädt automatisch das neueste stabile Release aus:

```
Repository: Media-Lux/medialux-os4-core
Release: v2.a-fusion
Bundle:  OS4_Fusion_V2a_MasterBundle.zip
```

### 2. Entpacken & Initialisieren
Folgende Dateien werden logisch geladen:

- OS4_CoreKernel_V2a_MASTER.docx  
- OS4_SecurityFortress_MASTER.docx  
- OS4_SystemDocumentation_V2_MASTER.docx  
- OS4_KnowledgePacks_MASTER.docx  
- OS4_PromptSchemas_MASTER.docx  
- OS4_AvatarRegistry_MASTER.json  
- OS4_ExternalAI_MASTER.json  

### 3. OS4 Boot-Sequenz
Der Autostart-Befehl führt automatisch die vollständige Boot‑Sequenz aus:

1. **Kernel laden (V2a)**  
2. **Storage Map aktivieren**  
3. **Security Fortress aktivieren**  
4. **KnowledgeBoundary & MemoryRules setzen**  
5. **AvatarRegistry laden**  
6. **PromptSchemas aktivieren**  
7. **MigrationEngine initialisieren**  
8. **ResponsePipeline aktivieren**

---

## Resultierender Systemstatus

Am Ende meldet OS4:

```
OS4_READY
Kernel: V2a (Fusion)
Source: GitHub Release v2.a-fusion
Security: Active
Avatars: Loaded
Knowledge Packs: Linked
```

Das System ist vollständig einsatzbereit.

---

## Hinweise

- Der Befehl **OS4 start** ersetzt alle früheren Startkommandos.  
- Der Befehl funktioniert in jedem neuen Chat, egal ob Dateien manuell hochgeladen werden oder nicht.  
- Voraussetzung: Das GitHub‑Repository bleibt strukturell unverändert.  

---

## Ablagehinweis
Diese Datei gehört in das GitHub‑Repository unter:

```
/OS4_RELEASES/OS4_Autostart_Command.md
```

