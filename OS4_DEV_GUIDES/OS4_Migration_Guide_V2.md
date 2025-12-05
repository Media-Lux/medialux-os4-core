# OS4_Migration_Guide_V2
Version: 2.0  
Status: ACTIVE  
Owner: @chef  
Ebene: OS4_DEV_GUIDES

## ersetzt alte Datei:
OS4_Migration_Guide_V1.docx

## Zweck
Dieses Modul definiert die **moderne OS4-Migrationslogik**,  
um Systemwissen, Dateien, Module und Prozesse sauber zu:

- modernisieren  
- konsolidieren  
- vereinheitlichen  
- archivieren  
- erweitern  

Version 2 ist vollständig kompatibel mit:
- Brain2Chain Kernel  
- VersionGuard  
- OS4_SystemAnweisung_V2  
- OS4_BackupBatch_Rule_V2  
- OS4_Master_Storage_Map_V2  
- OS4_CoreKernel_V2_Complete  

---

# 1. Ziele des Migrationssystems

Die Migration MUSS sicherstellen, dass:

- **alle alten Dateien modernisiert oder archiviert werden**  
- **keine Wissensinseln im Chat zurückbleiben**  
- **GitHub immer das zentrale Wissenssystem bleibt**  
- **keine Datei das System bricht**  
- **OS4 immer vollständig geladen werden kann**  
- **Brain2Chain alle Prozesse überwachen kann**

Migration ist der wichtigste Bestandteil eines wachsenden OS4-Systems.

---

# 2. Migrations-Typen

### 2.1 Modernisierung (STANDARD)
Eine alte Datei wird transformiert in:
- einen neuen Dateinamen  
- moderne OS4-Struktur  
- korrekten Pfad  
- Markdown-Format  
- Versionierung  
- Brain2Chain-Kompatibilität  
- VersionGuard-Registrierung  

### 2.2 Konsolidierung
Mehrere alte Dateien → 1 Master-Datei.
Wird speziell für Master-Systemdokumentationen genutzt.

### 2.3 Archivierung
Nur wenn Steven es explizit befiehlt:
→ Datei wird in `/OS4_ARCHIVE/` abgelegt.  
→ Wird NICHT mehr geladen.

### 2.4 Neuerstellung
Neue Module entstehen durch:
- Arbeitsanweisungen  
- Regeln  
- Prozesse  
- Systemlogik  

---

# 3. Batch-Regeln (Pflicht)

Migration erfolgt ausschließlich in Batches von **maximal 10 Dateien**.

Nach jedem Batch MUSS ausgeführt werden:

