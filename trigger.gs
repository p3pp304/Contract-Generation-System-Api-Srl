function inviaContratto(e) {
  const OGGETTO_MAIL = "Contratto Manutenzione - API s.r.l.";
  
  try {
    var risposte = e.namedValues;
    var getDato = function(nome) { return risposte[nome] ? risposte[nome][0] : ""; };

    // --- 1. GESTIONE CALCOLI ---
    var importoInput = getDato("Importo"); 
    var importoClean = importoInput.replace('€', '').replace(',', '.').trim();
    var importoNum = parseFloat(importoClean);
    if (isNaN(importoNum)) { importoNum = 0; }

    var ivaNum = importoNum * 0.22;
    var totaleNum = importoNum + ivaNum;

    var formattaEuro = function(n) {
      return n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    // --- 3. PREPARA IL MODELLO HTML ---
    var htmlTemplate = HtmlService.createTemplateFromFile('Modello');

    // Mappatura Dati
    htmlTemplate.nome = getDato("Utente");
    htmlTemplate.iva_cliente = getDato("Partita IVA");
    htmlTemplate.telefono = getDato("Telefono");
    htmlTemplate.via = getDato("Indirizzo"); 
    htmlTemplate.cap = getDato("Cap");
    htmlTemplate.citta = getDato("Città");
    htmlTemplate.email = getDato("Email Utente"); // Mail scritta nel contratto
    htmlTemplate.anni = getDato("Anni");
    htmlTemplate.contratto = getDato("Codice Contratto");
    
    htmlTemplate.importo = formattaEuro(importoNum);
    htmlTemplate.calcolo_iva = formattaEuro(ivaNum);
    htmlTemplate.totale = formattaEuro(totaleNum);

    var dataOggi = Utilities.formatDate(new Date(), "Europe/Rome", "dd/MM/yyyy");
    htmlTemplate.data_corrente = dataOggi;       
    htmlTemplate.luogo_corrente = "Trani, Italia"; 

    var presidiRaw = getDato("Tipo e numero dei presidi");
    htmlTemplate.lista_presidi = presidiRaw.split(/\r?\n/);

    // --- 4. GENERAZIONE FILE ---
    var htmlCompilato = htmlTemplate.evaluate().getContent();
    
    // Genera SEMPRE il PDF
    var blobPDF = Utilities.newBlob(htmlCompilato, MimeType.HTML).getAs(MimeType.PDF);
    blobPDF.setName("Contratto_" + getDato("Utente") + ".pdf");

    // Prepara la lista degli allegati
    var listaAllegati = [blobPDF];
    var testoMail = "Gentile cliente,\n\nin allegato trovi il contratto in formato PDF.";

    // --- 5. INVIO MAIL ---
    var emailDest = getDato("Email Destinatario"); // Mail a cui spedire
    if (emailDest && emailDest.includes("@")) {
      MailApp.sendEmail({
        to: emailDest,
        subject: OGGETTO_MAIL,
        body: testoMail,
        attachments: listaAllegati
      });
    }

  } catch (error) {
    console.log("Errore Generale: " + error.toString());
  }
}

// TEST MANUALE (Aggiornato per provare l'opzione)
function testManuale() {
  var e = {
    namedValues: {
      "Utente": ["Mario Rossi Test"],
      "Email Utente": ["cliente@esempio.com"],
      "Email Destinatario": ["fuzio.giuseppe2014@gmail.com"], // TUA MAIL
      "Partita IVA": ["12345678901"],
      "Telefono": ["3331234567"],
      "Indirizzo": ["Via Test, 10"],
      "Città": ["Andria"],
      "Cap": ["76123"],
      "Anni": ["1"],
      "Codice Contratto": ["TEST-SWITCH"],
      "Importo": ["100,00"],
      "Tipo e numero dei presidi": ["1 - Estintore"]
    }
  };
  inviaContratto(e);
}

