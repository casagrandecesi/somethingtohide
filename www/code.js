playSound("assets/Intro.mp3", true);
var count = 74;
var visible = true;
var timeout = null;
var sms = 0;
var funzione_a = null;
var funzione_b = null;
var immagini = [
  "assets/YouWin.png", "assets/Background.png", "Intro.png", "assets/Loading.png", "assets/Base.png",
  "assets/YouLost.png", "assets/Credits.png", "assets/Titolo.png", "assets/Qualche-tempo-dopo.png",
  "assets/Ending1.png", "assets/Base-hint.png", "assets/stalker-01.jpg", "assets/polpost-15.jpg",
  "assets/hacker-15.jpg", "assets/hacker-19.jpg", "assets/stalker-05.jpg", "assets/hacker-10.jpg",
  "assets/hacker-24.jpg", "assets/polpost-02.jpg", "assets/polpost-06.jpg", "assets/hacker-03.jpg",
  "assets/hacker-32.jpg", "assets/hacker-01.jpg", "assets/stalker-09.jpg", "assets/polpost-08.jpg",
  "assets/hacker-29.jpg", "assets/hacker-18.jpg", "assets/hacker-05.jpg", "assets/hacker-14.jpg",
  "assets/hacker-25.jpg", "assets/stalker-07.jpg", "assets/hacker-07.jpg", "assets/polpost-17.jpg",
  "assets/polpost-20.jpg", "assets/hacker-11.jpg", "assets/polpost-04.jpg", "assets/hacker-09.jpg",
  "assets/hacker-28.jpg", "assets/polpost-14.jpg", "assets/hacker-27.jpg", "assets/hacker-26.jpg",
  "assets/stalker-02.jpg", "assets/stalker-08.jpg", "assets/polpost-05.jpg", "assets/polpost-13.jpg",
  "assets/hacker-16.jpg", "assets/hacker-30.jpg", "assets/hacker-08.jpg", "assets/stalker-10.jpg",
  "assets/polpost-10.jpg", "assets/hacker-02.jpg", "assets/polpost-09.jpg", "assets/stalker-03.jpg",
  "assets/hacker-06.jpg", "assets/hacker-13.jpg", "assets/polpost-07.jpg", "assets/polpost-01.jpg",
  "assets/polpost-18.jpg", "assets/hacker-31.jpg", "assets/hacker-22.jpg", "assets/stalker-06.jpg",
  "assets/polpost-19.jpg", "assets/hacker-33.jpg", "assets/hacker-21.jpg", "assets/hacker-17.jpg",
  "assets/stalker-04.jpg", "assets/polpost-12.jpg", "assets/hacker-23.jpg", "assets/polpost-11.jpg",
  "assets/hacker-04.jpg", "assets/polpost-16.jpg", "assets/hacker-12.jpg", "assets/polpost-03.jpg",
  "assets/hacker-20.jpg"
];
hideElement("button_restart");
timedLoop(250, function () {
  if (visible) {
    showElement("image_loading");
  } else {
    hideElement("image_loading");
  }
  visible = !visible;
  count = count - 1;
  // Prova a caricare tutte le immagini, così da evitare il loro
  // scaricamento al momento dell'uso (cache)
  if (count < immagini.length) {
    setProperty("image_cache", "image", immagini[count]);
  }
  if (count === 50) {
    setProperty("screen_title", "image", "assets/Citazioni.png");
  }
  if (count === 0) {
    stopTimedLoop();
    stopSound("");
    menu();
  }
});
function menu() {
  setScreen("screen_menu");
}
function approfondisci() {
  setScreen("screen_approfondisci");
}
function apri_approfondimento(titolo, testo) {
  return function () {
    playSound("assets/Click.mp3");
    setProperty("label_titolo", "text", titolo);
    setProperty("text_area", "text", testo);
    setScreen("screen_testo");
  }
}
// Menu principale
onEvent("button_gioca", "click", function () { playSound("assets/Click.mp3"); start_game(); });
onEvent("button_approfondisci", "click", function () { playSound("assets/Click.mp3"); approfondisci(); });
onEvent("button_about", "click", function () { playSound("assets/Click.mp3"); ending(); });
// Approfondimenti
onEvent("button_tornamenu", "click", function () { playSound("assets/Click.mp3"); menu(); });
onEvent("button_tornaapprofondimenti", "click", function () { playSound("assets/Click.mp3"); approfondisci(); });

onEvent("button_estate", "click", apri_approfondimento("Estate in privacy", "Durante una bella vacanza estiva la tentazione di inondare i propri social con selfie e video di località esotiche, magari taggando anche i propri compagni di viaggio? In realtà dovresti pensarci bene, prima di postare questo materiale e fare una \"quasi diretta\" delle tue vacanze.\n\nInfatti spesso potrebbe non essere desiderabile mostrare dove e con chi siamo durante le ferie estive: innanzitutto accertatevi se i vostri compagni di viaggio, conoscenti del posto o perfino passanti occasionali desiderino essere ripresi. Specialmente se poi li taggate (etichettate, marcate) con il loro nome e cognome! In particolare, poi, evitate che minori (vostri o altrui figli) siano presenti o riconoscibili nelle foto: potete sempre nascondere i loro volti con i pixel (i \"quadratoni\") o con gli emoticon (le \"faccine\")\n\nAnche per quanto riguarda voi stessi, fate molta attenzione: postando sui social network informazioni sulle proprie vacanze in corso si potrebbero informare inavvertitamente dei malintenzionati che la nostra casa in quel momento è vuota! Ancora peggio, inoltre, se scriviamo anche per quanto tempo saremo ancora lontani... Per alleviare questo problema assicurati preventivamente che i tuoi post siano condivisi soltanto con i tuoi amici e di non avere persone sconosciute nelle cerchie dei tuoi social. Ricordati però che una foto può essere condivisa, ricondivisa, ecc..."));
onEvent("button_droni", "click", apri_approfondimento("Privacy e droni", "Il drone è un aeromobile privo di pilota. Quando si usa un drone bisogna sempre rispettare la privacy altrui, informandosi sulle regole in proposito.\n\nAd esempio quando si fa volare un drone munito di fotocamera in un luogo pubblico (che rientri tra le zone autorizzate da ENAC, l\'Ente nazionale per l\'aviazione civile) non è possibile effettuare riprese che permettano di riconoscere specifici individui, salvo aver ottenuto la loro autorizzazione preventiva. Fare altrimenti potrebbe perfino violare norme penali.\n\nInoltre la presenza di un drone nei paraggi può comunque mettere soggezione e dare l\'impressione di essere controllati: a prescindere dalla normativa specifica è comunque sempre bene usare del tatto ed essere discreti. Sempre per rispetto nei confronti degli altri è opportuno che l\'operatore del drone sia sempre visibile, mai nascosto.\n\nIn base al Regolamento UE 2016/679 (la GDPR) i droni, come qualsiasi dispositivo elettronico, deve rispettare i principi di \"privacy by design\" e \"privacy by default\", ovvero devono essere progettati per catturare meno dati possibile con la configurazione di fabbrica.\n\nNel caso in cui si creda che la propria privacy sia stata violata mediante un drone è possibile rivolgersi al Garante della privacy o all\'Autorità giudiziaria."));
onEvent("button_immagini", "click", apri_approfondimento("Immagini online", "Postare immagini online è un'attività ormai comunissima, eppure spesso viene fatta senza pensare troppo alle sue possibili implicazioni.\n\nInnanzitutto è indispensabile ottenere il consenso delle persone presenti nelle immagini, prima di pubblicarle: non tutti si sentono a proprio agio o vogliono essere esposti online. Idem per i tag: prima di taggare (etichettare, inserire un riferimento con nome e cognome o pseudonimo) una persona in un'immagine è sempre necessario accertarsi che l'interessato sia d'accordo.\n\nÈ sempre bene fare queste considerazioni PRIMA di postare, dopo potrebbe non essere più possibile cancellare l'immagine definitivamente: basta che qualcuno abbia copiato l'immagine prima della sua cancellazione, anche semplicemente facendo uno screenshot (catturando una schermata) o una foto allo schermo. Sono operazioni alla portata di chiunque.\n\nE per quanto riguarda la sicurezza delle tue immagini? Innanzitutto controlla le impostazioni dei tuoi social e verifica chi può vedere o meno le immagini (le possono vedere tutti? soltanto i tuoi amici o follower?), poi controlla le immagini cui sei taggate (dovrebbe sempre essere possibile rimuovere un tuo tag da immagini altrui). Infine ricorda che quando installi nuove app sul tuo smartphone o tablet queste spesso richiedono l'accesso alle tue foto e ai tuoi video: sei sicuro che sia sempre indispensabile concederglielo?"));
onEvent("button_polpost", "click", apri_approfondimento("Polizia Postale", "La Polizia Postale e delle Comunicazioni, comunemente conosciuta con il nome di \"Polizia Postale\" o \"PolPost\", è uno speciale corpo della Polizia di Stato italiana che si occupa di frodi postali e crimini informatici. La sede principale è a Roma ma ci sono anche 20 compartimenti regionali ed 80 sezioni territoriali. \n\nOccorre rivolgersi alla Polizia Postale quando si è vittima di una truffa online, di hackeraggio, di furto d\'identità, di diffusione illecita di immagini o dati personali ecc. Per effettuare una denuncia è possibile recarsi negli uffici della Polizia o utilizzare il servizio online su www.commissariatodips.it (al momento in cui scriviamo - maggio 2022 - risulta essere in manutenzione). Si ricordi che la denuncia è un procedimento penale, che innesca le investigazioni e porta ad un giudizio. Qualora si usi il servizio di denuncia online, il sistema rilascia una ricevuta elettronica ed un numero di protocollo con il quale è possibile recuperare la propria pratica presso l\'ufficio di Polizia Postale scelto."));
onEvent("button_bitcoin", "click", apri_approfondimento("Bitcoin", "Un Bitcoin è una criptovaluta basata su blockchain con mining artificialmente limitato, nonché una riserva di valore molto volatile. Cosa vuol dire tutto questo? Andiamo con ordine.\n\nCriptovaluta: secondo la Banca d\'Italia è una valuta (una forma di denaro) virtuale basata su tecnologie digitali che può esser utilizzata come mezzo di scambio o come investimento. Lo stoccaggio ed il trasferimento di criptovalute avvengono mediante strumenti digitali.\n\nBlockchain: la certificazione del possesso dei Bitcoin nonché il loro trasferimento non sono gestiti da enti centralizzati ma da una base di dati distribuita tra i singoli utenti, la blockchain, dove è possibile verificare possesso e trasferimenti senza necessariamente esporre la propria identità al resto del mondo (ogni operatore di Bitcoin ha un proprio \"indirizzo\", basta non associarlo al proprio nome nel mondo fisico).\n\nMining: i Bitcoin vengono generati con un\'operazione chiamata \"mining\", in cui dei dispositivi digitali (computer, FPGA ecc.) eseguono calcoli che potrebbero \"creare\" un Bitcoin, ovvero che potrebbero trovare una sequenza numerica che rispetti le condizioni imposte dai creatori del Bitcoin. Mining, in inglese, significa \"estrazione da miniera\": anche se l\'attività per creare i Bitcoin è di tutt\'altra natura si è voluto fare un parallelo con lo scavo di metalli preziosi.\n\nArtificialmente limitato: i Bitcoin non sono infiniti, c\'è un limite al loro numero. Inoltre, più Bitcoin vengono generati (potresti talvolta sentire l\'orribile anglicismo \"minati\") più diventa difficile creare i Bitcoin successivi.\n\nRiserva di valore molto volatile: oltre ad essere usato come strumento di scambio (peraltro, vista la possibilità di usarli in modo anonimo, spesso anche per transazioni riguardanti attività illecite) il Bitcoin è anche diventato oggetto di investimento. Tuttavia la mancanza di forti regolamentazioni in materia fa sì che il Bitcoin sia soggetto a forti fluttuazioni: il suo valore sale o scende con grande rapidità. Si tratta quindi di un investimento molto rischioso."));
onEvent("button_databreach", "click", apri_approfondimento("Data breach", "Un data breach è una violazione di sicurezza, accidentale o intenzionale, che riguarda i nostri dati personali. A seguito di un data breach, infatti, i nostri dati possono essere usati, divulgati, manipolati o cancellati senza il nostro consenso.\n\nUn famoso esempio di data breach è quello di Facebook nel 2019: circa 536 milioni di profili, tra cui quelli di 36 milioni di italiani, sono stati trafugati da criminali. Tra le informazioni personali coinvolte nel data breach troviamo nome, sesso, numero di cellulare, email, città di nascita, professione, stato sentimentale. Il numero di telefono e le email, in particolare, sono utilissime per campagne di SPAM mirate (vedi la voce corrispondente).\n\nAi sensi del Regolamento UE 2016/679, noto come GDPR, il titolare del trattamento dei dati (nel nostro esempio, Facebook - ora Meta) è obbligato a notificare l'avvenuto al Garante della privacy entro 72 ore dal momento in cui ne è venuto a conoscenza. Questo obbligo riguarda soltanto le violazioni di dati personali che possono avere effetti avversi significativi sugli individui."));
onEvent("button_furtoidentita", "click", apri_approfondimento("Furto d'identità", "Il furto d\'identità consiste nello spacciarsi per qualcun altro, generalmetne per scopi illeciti. In senso stretto la nostra identità non può essere rubata: sarebbe meglio dire che è possibile \"copiarla\".\n\nOggi è piuttosto semplice spacciarsi per qualcun altro, grazie al materiale che pubblichiamo sui social: informazioni personali (anche apparentemente innocue), fotografie, video... Tutto questo potrebbe essere usato da malintenzionati per compiere cattive azioni fingendosi noi. È quindi opportuno limitare il più possibile la diffusione dei nostri dati e delle nostre immagini, anche se dobbiamo sempre tenere a mente che quando mettiamo qualcosa su Internet è pressoché impossibile cancellarla (si suol dire \"The Internet doesn't forget\" - \"Internet non dimentica\"). Ad esempio, assicuriamoci di avere soltanto persone fidate e verificate come amici o follower nei nostri social, anche se i nostri post possono sempre essere condivisi e ricondivisi, o magari fotografati... Insomma, prima di postare pensaci bene!\n\nTalvolta, inoltre, anche i nostri dati social che riteniamo privati possono essere diffusi contro la nostra volontà: a tal proposito vedi l\'approfondimento sui Data breach.\n\nCosa possono fare dei malintenzionati con la nostra identità? Acquisti a rate con finanziamenti, apertura di carte di credito, abbonamento a servizi di telefonia... le possibilità sono molte, e più sono i dati \"rubati\" più aumentano i rischi. Fate attenzione!"));

// Cosa fai?
onEvent("label_cosa_fai_a_1", "click", function () {
  if (funzione_a) {
    funzione_a();
  }
});
onEvent("label_cosa_fai_b_1", "click", function () {
  if (funzione_b) {
    funzione_b();
  }
});
var ho_denunciato = false;
var amico_hacker_1 = false;
var amico_hacker_2 = false;
function start_game() {
  ho_denunciato = false;
  amico_hacker_1 = false;
  amico_hacker_2 = false;
  hideElement("button_restart");
  hide_cosa_fai();
  stopSound("");
  setProperty("screen_base", "image", "assets/Base.png");
  setScreen("screen_base");
  timeout = setTimeout(function () {
    playSound("assets/Warning.mp3", false);
    setProperty("screen_base", "image", "assets/Base-hint.png");
  }, 3000);
}
function show_cosa_fai(opzione_a, opzione_b, f_a, f_b) {
  playSound("assets/Warning.mp3", false);
  setProperty("label_cosa_fai_a_1", "text", opzione_a);
  setProperty("label_cosa_fai_b_1", "text", opzione_b);
  showElement("image_cosa_fai_bg_1");
  showElement("label_cosa_fai_1");
  showElement("label_cosa_fai_a_1");
  showElement("label_cosa_fai_b_1");
  funzione_a = f_a;
  funzione_b = f_b;
}
function hide_cosa_fai() {
  hideElement("image_cosa_fai_bg_1");
  hideElement("label_cosa_fai_1");
  hideElement("label_cosa_fai_a_1");
  hideElement("label_cosa_fai_b_1");
}
var MILLIS_SMS = 3000;
function sequenza_sms(lista_sms, funzione_successiva) {
  sms = 0;
  var immagine = lista_sms[sms][0];
  var inviato = lista_sms[sms][1];
  var millis = lista_sms[sms].length === 3 ? lista_sms[sms][2] : MILLIS_SMS;
  var suono_sms = null;
  if (inviato === 0) suono_sms = "assets/sms.mp3";
  else if (inviato === 1) suono_sms = "assets/sms_sent.mp3";
  setProperty("screen_sms", "image", immagine);
  if (suono_sms !== null) playSound(suono_sms, false);
  sms = sms + 1;
  function invia_sms() {
    var immagine = lista_sms[sms][0];
    var inviato = lista_sms[sms][1];
    suono_sms = null;
    if (inviato === 0) suono_sms = "assets/sms.mp3";
    else if (inviato === 1) suono_sms = "assets/sms_sent.mp3";
    setProperty("screen_sms", "image", immagine);
    if (suono_sms !== null) playSound(suono_sms, false);
    sms = sms + 1;
    if (sms >= lista_sms.length) {
      stopTimedLoop();
      if (funzione_successiva) {
        setTimeout(funzione_successiva, MILLIS_SMS);
      }
    }
  };
  setTimeout(function () {
    invia_sms();
    timedLoop(MILLIS_SMS, invia_sms);
  }, millis);
}
// SMS con lo staker, prima parte
function sms_stalker_1() {
  var lista_sms = [
    ["assets/stalker-01.jpg", 0], ["assets/stalker-02.jpg", 0], ["assets/stalker-03.jpg", 0], ["assets/stalker-04.jpg", 0],
    ["assets/stalker-05.jpg", 1], ["assets/stalker-06.jpg", 1], ["assets/stalker-07.jpg", 1], ["assets/stalker-08.jpg", 0],
    ["assets/stalker-09.jpg", 0], ["assets/stalker-10.jpg", 0]
  ];
  sequenza_sms(lista_sms, function () {
    show_cosa_fai("a) Contatti la Polizia Postale", "b) Contatti il tuo amico hacker", function () {
      hide_cosa_fai();
      sms_denuncia_polpost();
    }, function () {
      hide_cosa_fai();
      sms_amico_hacker_1();
    });
  });
}
// Denuncia POLPOST
function sms_denuncia_polpost() {
  ho_denunciato = true;
  var lista_sms = [
    ["assets/polpost-01.jpg", 1], ["assets/polpost-02.jpg", 1],
    ["assets/polpost-03.jpg", 0]
  ];
  sequenza_sms(lista_sms, function () {
    if (amico_hacker_1) {
      sms_indagini_polpost_1();
    } else {
      show_cosa_fai("a) Attendi con pazienza", "b) Contatti il tuo amico hacker", function () {
        hide_cosa_fai();
        sms_indagini_polpost_1();
      }, function () {
        hide_cosa_fai();
        if (amico_hacker_1) sms_amico_hacker_2();
        else sms_amico_hacker_1();
      });
    }
  })
}
// Indagini POLPOST, prima parte
function sms_indagini_polpost_1() {
  var lista_sms = [
    ["assets/Qualche-tempo-dopo.png", 2, 2000],
    ["assets/polpost-04.jpg", 0], ["assets/polpost-05.jpg", 0], ["assets/polpost-06.jpg", 0], ["assets/polpost-07.jpg", 0],
    ["assets/polpost-08.jpg", 0]
  ];
  sequenza_sms(lista_sms, function () {
    show_cosa_fai("a) Continui ad attendere", "b) Contatti il tuo amico hacker", function () {
      hide_cosa_fai();
      sms_indagini_polpost_2();
    }, function () {
      hide_cosa_fai();
      if (amico_hacker_1) sms_amico_hacker_2();
      else sms_collegamento_polpost_hacker();
    });
  });
}
// Collegamento POLPOST --> amico hacker
function sms_collegamento_polpost_hacker() {
  var lista_sms = [
    ["assets/hacker-01.jpg", 1], ["assets/hacker-02.jpg", 1], ["assets/hacker-03.jpg", 1]
  ];
  sequenza_sms(lista_sms, function () {
    sms_amico_hacker_2();
  });
}
// Indagini POLPOST, seconda parte
function sms_indagini_polpost_2() {
  var lista_sms = [
    ["assets/Qualche-tempo-dopo.png", 2, 2000],
    ["assets/polpost-09.jpg", 0], ["assets/polpost-10.jpg", 0], ["assets/polpost-11.jpg", 0], ["assets/polpost-12.jpg", 0],
    ["assets/polpost-13.jpg", 1], ["assets/polpost-14.jpg", 1],
    ["assets/polpost-15.jpg", 0], ["assets/polpost-16.jpg", 0], ["assets/polpost-17.jpg", 0], ["assets/polpost-18.jpg", 0],
    ["assets/polpost-19.jpg", 1],
    ["assets/polpost-20.jpg", 1],
  ];
  sequenza_sms(lista_sms, function () {
    if (amico_hacker_2) hai_perso();
    else hai_vinto();
  });
}
// SMS con l'amico hacker
function sms_amico_hacker_1() {
  amico_hacker_1 = true;
  var lista_sms = [
    ["assets/hacker-01.jpg", 1], ["assets/hacker-02.jpg", 1], ["assets/hacker-03.jpg", 1],
    ["assets/hacker-04.jpg", 0], ["assets/hacker-05.jpg", 0],
    ["assets/hacker-06.jpg", 1], ["assets/hacker-07.jpg", 1],
    ["assets/hacker-08.jpg", 0], ["assets/hacker-09.jpg", 0],
    ["assets/hacker-10.jpg", 1],
    ["assets/hacker-11.jpg", 0], ["assets/hacker-12.jpg", 0],
    ["assets/hacker-13.jpg", 0], ["assets/hacker-14.jpg", 0], ["assets/hacker-15.jpg", 0], ["assets/hacker-16.jpg", 0]
  ];
  sequenza_sms(lista_sms, function () {
    show_cosa_fai("a) Contatti la Polizia Postale", "b) Continui ad affidarti al tuo amico hacker", function () {
      hide_cosa_fai();
      if (!ho_denunciato) sms_denuncia_polpost();
      else sms_indagini_polpost_2();
    }, function () {
      hide_cosa_fai();
      sms_amico_hacker_2();
    });
  });
}
// SMS con l'amico hacker, II parte
function sms_amico_hacker_2() {
  amico_hacker_2;
  var lista_sms = [
    ["assets/hacker-17.jpg", 1],
    ["assets/hacker-18.jpg", 0],
    ["assets/hacker-19.jpg", 1],
    ["assets/hacker-20.jpg", 0], ["assets/hacker-21.jpg", 0],
    ["assets/hacker-22.jpg", 1],
    ["assets/hacker-23.jpg", 0], ["assets/hacker-24.jpg", 1]
  ];
  sequenza_sms(lista_sms, function () {
    show_cosa_fai("a) Contatti la Polizia Postale", "b) Ti fai giustizia da solo insieme al tuo amico hacker", function () {
      hide_cosa_fai();
      if (!ho_denunciato) sms_denuncia_polpost();
      else sms_indagini_polpost_2();
    }, function () {
      hide_cosa_fai();
      sms_amico_hacker_3();
    });
  });
}
// SMS con l'amico hacker, III parte
function sms_amico_hacker_3() {
  var lista_sms = [
    ["assets/hacker-25.jpg", 1],
    ["assets/hacker-26.jpg", 0],
    ["assets/hacker-27.jpg", 1],
    ["assets/hacker-28.jpg", 0], ["assets/hacker-29.jpg", 0], ["assets/hacker-30.jpg", 0],
    ["assets/hacker-31.jpg", 1],
    ["assets/hacker-32.jpg", 0],
    ["assets/hacker-33.jpg", 1]
  ];
  sequenza_sms(lista_sms, function () {
    show_cosa_fai("a) Contatti la Polizia Postale", "b) Continui a farti giustizia da solo", function () {
      hide_cosa_fai();
      if (!ho_denunciato) sms_denuncia_polpost();
      else sms_indagini_polpost_2();
    }, function () {
      hide_cosa_fai();
      hai_perso();
    });
  });
}
function hai_vinto() {
  setTimeout(function () {
    playSound("assets/Victory.mp3", false);
    setProperty("screen_sms", "image", "assets/YouWin.png");
    setTimeout(ending, 10000);
  }, MILLIS_SMS);
}
function hai_perso() {
  setTimeout(function () {
    playSound("assets/GameOver.mp3", false);
    setProperty("screen_sms", "image", "assets/YouLost.png");
    setTimeout(ending, 10000);
  }, MILLIS_SMS);
}
function ending() {
  hideElement("button_restart");
  setScreen("screen_sms");
  playSound("assets/Ending.mp3", false);
  setProperty("screen_sms", "image", "assets/Ending1.png");
  setTimeout(function () {
    setProperty("screen_sms", "image", "assets/Credits.png");
    setTimeout(function () {
      stopSound("");
      showElement("button_restart");
    }, 8000);
  }, 8000);
}
onEvent("canvas_messaggi", "click", function () {
  if (timeout) {
    clearTimeout(timeout);
  }
  setScreen("screen_sms");
  sms_stalker_1();
});
onEvent("button_restart", "click", function () {
  stopSound("")
  playSound("assets/Click.mp3");
  menu();
});
