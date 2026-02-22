# 🚀 Contract Generation System: Da processo manuale a Codice 📄⚖️

Recentemente, ho sviluppato per **API s.r.l.** un sistema end-to-end per ottimizzare la creazione e l'invio di contratti aziendali tramite e-mail. L'obiettivo era ambizioso: trasformare un'operazione burocratica manuale e ripetitiva in un flusso istantaneo, riducendo quasi a zero il margine di errore.

## 🔍 Panoramica del Progetto
Il sistema gestisce l'intero ciclo di vita del documento. L'architettura del codice è snella: un ciclo ben strutturato che utilizza la variabile **x** per scorrere i dati dei presidi e iniettarli dinamicamente in un modello HTML. 

Il flusso parte dalla comoda compilazione di un **Google Form** da parte dell'operatore, che archivia già in automatico le risposte su un database **Google Sheets** per garantire scalabilità. All'invio del modulo, si innesca un trigger su **Google Apps Script** che:
1. Preleva i dati appena salvati nel database.
2. Compila automaticamente il template HTML del contratto.
3. Genera il documento in formato PDF.
4. Invia una mail preimpostata e personalizzata al cliente con il contratto allegato in tempo reale.

L'unica operazione manuale rimasta è il rapido inserimento dei dati iniziali tramite il form! Questa compilazione è molto più comoda rispetto ad una tramite caselle di testo su un programma tradizionale come Word o PDF.

## ⚙️ Funzionalità Chiave
* **Workflow Automation**: Integrazione fluida tra Google Forms e Google Apps Script per il trasferimento dei dati in tempo reale.
* **Efficienza Operativa**: Generazione automatica di PDF tramite trigger e invio contestuale via e-mail, riducendo drasticamente i tempi di elaborazione.
* **Database Integrato**: Un foglio Google Sheets raccoglie in automatico tutti i dati dei clienti e lo storico dei contratti, garantendo la totale scalabilità del progetto.

## 🛠️ Stack Tecnologico
* **Core Logic**: Google Apps Script (JavaScript-based).
* **UI/Templating**: HTML5 e CSS3 per layout professionali e ottimizzati per la stampa A4.
* **Cloud Integration**: Google Workspace APIs (Forms, Sheets, Drive & Gmail).
* **AI Support**: Utilizzo di modelli LLM per il refactoring del codice, l'adattamento ai servizi Google e l'ottimizzazione del template HTML.

## ⚙️ Installazione e Configurazione
Per rendere operativo il sistema su un nuovo account Google Workspace, segui questi passaggi:

1. **Creazione del Modulo**: Crea un Google Form con i campi necessari (Dati utente, email, lista presidi, ecc.) e collegalo a un nuovo Google Sheet.
2. **Accesso all'Editor**: Dal Google Sheet, clicca su `Estensioni` > `Apps Script` per aprire l'ambiente di sviluppo.
3. **Inserimento File**:
   * Rinomina il file predefinito `Codice.gs` in `trigger.gs` e incolla il codice presente in questo repository.
   * Crea un nuovo file HTML chiamandolo esattamente `modello.html` e incolla il codice del template sviluppato.
4. **Configurazione delle Variabili**: All'interno di `trigger.gs`, assicurati che gli indici delle colonne corrispondano a quelli del tuo foglio di calcolo.
5. **Impostazione del Trigger**:
   * Nell'editor di Apps Script, clicca sull'icona **Attivatori** (l'icona della sveglia a sinistra).
   * Clicca su **Aggiungi attivatore**.
   * Seleziona la funzione principale, imposta "Sorgente dell'evento" su **Dal modulo** e "Tipo di evento" su **All'invio del modulo**.
6. **Autorizzazione**: Esegui manualmente una funzione qualsiasi dallo script per la prima volta per fornire i permessi necessari a Google Workspace (Gmail, Drive, Sheets).

> **Nota Tecnica**: Durante la configurazione del template HTML, ricorda che la logica di iterazione per la lista dei presidi è impostata per utilizzare la variabile **x** nel ciclo `for`. Se il numero massimo di righe dovesse cambiare, aggiorna il limite della variabile `totaleRighe` all'interno del file `modello.html`.

## 🏗️ Ingegneria e Crescita
In questo progetto, l'Intelligenza Artificiale ha avuto un ruolo chiave come vero e proprio strumento di studio, aiutandomi tantissimo nel definire il codice esatto per il perfezionamento del modello HTML. Partendo da problemi reali, sto applicando le mie conoscenze teoriche, supportato dall'AI per estendere le mie capacità verso sfide che, per ora, sono più grandi di me.

Attualmente mi sto focalizzando sulla comprensione della logica generale per poi analizzare i dettagli più ostici del codice. Nel prossimo futuro, conto di migliorare le mie competenze tecniche partendo da progetti meno complessi, riducendo significativamente l'approccio AI-assisted.

Mentre approfondisco lo studio delle architetture Full Stack al Politecnico di Bari, poter testare sul campo come la programmazione risolva problemi aziendali concreti è una soddisfazione enorme.