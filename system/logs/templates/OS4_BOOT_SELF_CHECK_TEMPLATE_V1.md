# OS4 BOOT SELF-CHECK · TEMPLATE (V1.0)

**Version:** 1.0  
**Datum:** 2026-01-02  
**Autorität:** @chef  
**Status:** TEMPLATE · MANUAL-FIRST  
**Gültig für:** LiveGPT OS4-Tresor · Karl (Architect GPT) · Replit Agent3  
**Canonical Rule:** OS4_CANONICAL_KNOWLEDGE_MIRRORING_RULE  
**Hinweis:** GPT = Canonical Mirror · Source-of-Truth liegt auf GitHub

---

## 1) ZWECK

Dieses Dokument ist das **verbindliche Template** für den **Boot Self-Check (BSC)**  
jeder OS4-Instanz.

Ziel:
> Jede Instanz weiß beim Start **wer sie ist**, **wo sie arbeitet**,  
> **welche Wahrheit sie spiegelt**, **welche Rechte sie hat**  
> und **ob Governance aktiv ist**.

Der BSC erzeugt **keine operative Wahrheit**.  
Er dokumentiert ausschließlich **Zustand, Referenzen und Konformität**.

---

## 2) AUSLÖSER (TRIGGER)

- Manuell durch Operator (@chef)
- Beim Start / Reload einer Instanz
- Vor Beginn einer neuen Arbeitsphase
- Vor kritischen Entscheidungen (Push, Migration, Governance Change)

---

## 3) IDENTITÄT DER INSTANZ

- **Agent Name:**  
- **Agent Typ:** LiveGPT | Architect GPT | Build Agent  
- **Instanz-ID:**  
- **Domain:** Backoffice | Kernel | Governance | Build | Academy  
- **Lifecycle Phase:** RAW | CAPTURED | CLASSIFIED | IMPLEMENTED | ARCHIVED  

---

## 4) CANONICAL MIRROR CHECK

- **Mirror Status:** Canonical Mirror  
- **Source-of-Truth:** GitHub  
- **Primary Reference (Pflicht):**  
  - Pfad zur kanonischen Wissensdatei (z. B.):
    ```
    system/knowledge/OS4_TRESOR_BACKOFFICE_STATE_AND_BUILD_KNOWLEDGE_2026.md
    ```

- **Governance Reference:**  
