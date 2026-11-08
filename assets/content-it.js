/* Kodland training · Cierre de clase en el modelo EM — LATAM
   Texts in language: it. This file holds ONLY texts; the logic is in index.html.
   Loaded by index.html when the URL has ?lang=it */
{
/* ============================================================
   Cierre de clase en el modelo EM — LATAM · Code & Game
   Contenido en español. Mismo formato que el entrenamiento EM Core:
   - Traduce o edita SOLO el texto entre comillas '…' y backticks `…`.
   - No cambies: etiquetas HTML, código ${…}, {marcadores}, ids/claves, emoji, nombres de archivo.
   - Dentro de '…' usa el apóstrofo tipográfico ’, nunca el recto.
   - CONTENT.data (más abajo): datos del análisis de asistencia y novedades de las lecciones.
   ============================================================ */
window.CONTENT = { lang: 'it' };

CONTENT.ui = {
  pageTitle: 'Formazione sul nuovo modello educativo',
  footer: 'kodland · Nuovo modello educativo · Formazione per tutor',
  devLink: '🛠 Sviluppatore',

  // Navigation
  logoSub: 'Nuovo modello educativo',
  navCore: 'Core {done}/{total}',
  navHome: '← Home',
  navModules: '← Tutti i moduli',
  navBackModule: '← Torna al modulo',

  // Home
  heroKicker: '🚀 Formazione per tutor',
  heroTitle: 'Il <span class="hl">nuovo</span> modello educativo',
  heroLead: 'Kodland sta cambiando il modo di insegnare in alcuni corsi. Questa formazione ti prepara a insegnare con il nuovo modello: {n} moduli da seguire in ordine. Ogni modulo termina con una breve verifica che sblocca il successivo.',
  fact1: '<b>Segui il tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser.',
  fact2: '<b>Con attività pratiche.</b> Tre simulazioni — Backoffice, Classroom e Kodland Sparks — da ripetere tutte le volte che vuoi.',
  progAllDone: 'Moduli completati 🎉',
  progLabel: 'moduli completati',
  moduleN: 'Modulo {n}',
  badgeDone: '✓ Completato · {score}%',
  badgeLocked: '🔒 Completa il modulo {n}',
  badgeStart: 'Inizia →',
  homeDoneTitle: 'Moduli completati!',
  homeDoneText: 'Un ultimo passaggio: il test DST nella pagina della formazione su LMS.',
  homeDoneBtn: 'Scopri come proseguire →',

  // Module page and its check
  eyebrow: 'Modulo {n} di {total}',
  ctaQuizTitle: 'Verifica del modulo',
  ctaQuizText: '{n} brevi domande. Per superare la verifica serve almeno il 70%.',
  ctaRiskTitle: 'Verifica del modulo: individua la strategia rischiosa',
  ctaRiskText: '{n} situazioni reali. <b style="color:#E5484D">A differenza delle altre verifiche, qui devi scegliere ogni volta la strategia che DANNEGGEREBBE la lezione</b> — non quella corretta. Per superare la verifica serve almeno il 70%.',
  lockOne: '🔒 Completa {what} e inserisci il relativo codice qui sopra per sbloccare la verifica.',
  lockMany: '🔒 Completa {what} e inserisci i relativi codici qui sopra per sbloccare la verifica.',
  listAnd: ' e ',
  startCheck: 'Inizia la verifica →',
  retake: '🔁 Ripeti la verifica',

  // Simulations and completion codes
  launchSteps: ['Apri in una nuova scheda.', 'Segui tutti i passaggi fino alla schermata di completamento con il tuo codice.', 'Torna a questa scheda e inserisci il codice qui sotto.'],
  codeOk: '✅ <b>{sim}: completamento confermato.</b> Codice accettato.',
  codeLabel: '<b>🔑 Codice di completamento</b> — lo trovi nella schermata finale di {sim}.',
  codePlaceholder: 'es. XX-0000-00',
  codeUnlock: 'Sblocca',
  codeWrong: 'Il codice non è corretto. Controllalo nella schermata finale della simulazione.',

  // Small interactive pieces
  tapFlip: 'Tocca per girare',
  mythReality: 'Realtà ✓',
  loopAgain: '<b>E si ricomincia!</b> La riflessione diventa il prossimo obiettivo — approfondendo a ogni giro.',
  ages: 'Età: {age} anni',
  aiBar: 'Quanto interviene l’IA nel progetto',
  stageWas: 'Prima: <s>{was}</s> → ora:',
  stageOf: '{i} di {n}',
  stageWatch: 'Guarda «{t}» in una lezione reale',
  stageFirst: 'Torna alla prima',
  next: 'Avanti →',
  sortWrong: '✗ Non proprio.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Note per il tutor — le vedi solo tu',
  fmFollowing: '🔗 Segue il tutor',
  fmStart: '👆 Sofia è nella stessa lezione, ma Lead the group è disattivato. Attiva l’interruttore.',
  fmOn: '✅ <b>Lead the group è ATTIVO.</b> Sofia è passata alla tua scheda — ma attenzione: vede la scheda <b>senza</b> le tue note per il tutor. Ora prova <b>Scheda successiva</b>.',
  fmOff: '⏸️ <b>Lead the group è DISATTIVATO.</b> Sofia resta dove si trova, qualunque scheda tu apra.',
  fmMoved: '➡️ Sei sulla scheda {t} — <b>Sofia ti ha seguito</b>.',
  fmMovedAlone: '➡️ Sei sulla scheda {t}, ma <b>Sofia è ancora sulla scheda {s}</b>. Potrebbe guardare altro. Attiva Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Apertura.</b> Attività iniziale e saluti, collegamento alla lezione precedente, controllo dei compiti, obiettivo della lezione.',
  tlCards: '<b>Le schede.</b> Gli studenti vedono il risultato finale, imparano la teoria e la mettono in pratica. Tieni d’occhio il tempo — mancano {left} minuti…',
  tlClose: '<b>Mancano {left} minuti alla fine: è il momento di concludere.</b> A qualunque punto delle schede ti trovi, avvia subito la routine di chiusura.',
  tlRoutine: '<b>Routine di chiusura.</b> Riepilogo degli studenti → anticipazione della prossima lezione → nuovi compiti.',
  tlBye: '<b>Alla prossima!</b> Tutti vanno via sapendo che cosa hanno imparato, che cosa li aspetta e che cosa fare a casa.',

  // Videos
  watchExample: 'Guarda un esempio reale',
  comingSoon: 'in arrivo',
  close: 'Chiudi',
  videoDefault: 'Lezione reale',
  soonTitle: 'Video in arrivo',
  soonText: 'Qui potrai vedere questa fase durante una lezione reale. Il video è in preparazione e sarà disponibile a breve.',
  zoomBadge: '🔍 Clicca per ingrandire',
  zoomAria: 'Apri il video in una finestra più grande',
  zoomDefault: 'Video',
  openDrive: 'Il video non si vede? Aprilo su Google Drive ↗',
  zoomIn: 'Ingrandisci',
  zoomOut: 'Riduci',
  zoomReset: 'Ripristina',
  zoomHint: 'Ingrandisci con + / −, la rotellina del mouse o un doppio clic · trascina per spostarti · Esc o ✕ per chiudere',

  // Checks (quiz engine)
  qmeta: '{e} Verifica del modulo {n} · {kind} {i} di {total}',
  qCase: 'Caso',
  qQuestion: 'Domanda',
  riskQuestion: 'Quale strategia <span class="hurt">DANNEGGEREBBE</span> questa fase della lezione?',
  riskBanner: '⚠️ Attenzione: in questa verifica devi scegliere la strategia <b>SBAGLIATA</b> — quella che <b>DANNEGGEREBBE</b> la lezione. Non quella corretta!',
  tfTrue: '✅ Vero',
  tfFalse: '❌ Falso',
  openHint: '✍️ Scrivi la tua risposta — almeno {min} caratteri. Non esiste un’unica formulazione corretta: vedrai una risposta di esempio da confrontare con la tua.',
  openPlaceholder: 'Scrivi qui la tua risposta…',
  openSubmit: 'Invia la mia risposta',
  openRecorded: '✅ <b>Risposta registrata.</b> Ecco una risposta di esempio: confrontala con la tua.',
  fbRight: '✅ <b>Corretto!</b> ',
  fbWrong: '❌ <b>Non proprio.</b> ',
  fbRiskRight: '✅ <b>Corretto — questa è la strategia che danneggerebbe la lezione.</b> ',
  fbRiskWrong: '❌ <b>Questa strategia, in realtà, aiuta la lezione.</b> Quella rischiosa è evidenziata in verde. ',
  nextQuestion: 'Domanda successiva →',
  seeResult: 'Vedi il mio risultato →',

  // Result of a check
  passedTitle: 'Verifica superata!',
  failTitle: 'Ci sei quasi',
  scoreLine: 'Hai risposto correttamente a <b>{score} domande su {n}</b>.',
  failText: 'Serve almeno il 70%. Ripassa il modulo e riprova — puoi ripetere la verifica tutte le volte che vuoi.',
  nextUnlocked: '<b>Modulo {n} · {title}</b> è ora sbloccato.',
  goModule: 'Vai al modulo {n} →',
  allDoneText: 'Hai completato tutta la formazione.',
  seeNext: 'Scopri il prossimo passaggio →',
  reviewModule: '📖 Ripassa il modulo',

  // Final page
  doneTitle: 'Moduli completati!',
  doneText: `<p>Ci sei quasi! Torna alla pagina della formazione su LMS da cui hai aperto questo percorso. Il test DST si trova subito sotto la formazione.</p><p>👉 <b>Per completare con successo la formazione devi svolgere e superare il test DST.</b> Se non svolgi il test DST, la formazione resterà incompleta e potrebbe scadere.</p><p>Il punteggio minimo per superarlo è <b>80%</b>.</p><p>Buona fortuna! ❤️</p>`,
  doneBadge: '✓ Fatto',
  doneNexts: [
    ['📒', '<b>Prima di ogni lezione:</b> leggi le note per il tutor in Backoffice — e controlla gli aggiornamenti.'],
    ['🔑', '<b>Kodland Sparks:</b> riceverai le credenziali dal reparto Operations o Teaching.'],
    ['🏁', '<b>In ogni lezione:</b> un’apertura curata, domande sul ragionamento e una chiusura di 5–7 minuti.'],
    ['🤖', '<b>Quando gli studenti usano l’IA:</b> l’IA propone, l’autore decide.']
  ],
  doneBack: 'Torna ai moduli',

  // Locked messages
  lockedTitle: 'Ancora bloccato',
  lockedModule: 'Completa prima il modulo {n}.',
  lockedStep: 'Completa il passaggio precedente per sbloccare questo.',
  ok: 'OK'
};

/* ============================================================
   INTERFACE OVERRIDES — this training only
   ============================================================ */
Object.assign(CONTENT.ui, {
  pageTitle: 'La chiusura della lezione nel modello EM',
  footer: 'kodland · Code & Game · La chiusura della lezione nel modello EM',
  logoSub: 'Chiusura della lezione · EM',
  navCore: 'Progressi {done}/{total}',
  heroKicker: '🏁 Formazione per i tutor di Code & Game',
  heroTitle: 'Come <span class="hl">chiudere</span> le tue lezioni',
  heroLead: 'Una formazione breve per i tutor di Code & Game che si sono formati sul modello EM. Due moduli, in ordine: ognuno termina con una verifica che sblocca il successivo. All’inizio e alla fine, un breve questionario.',
  fact1: '<b>Circa 15 minuti.</b> Modulo 1: 5 minuti · Modulo 2: 10 minuti. I tuoi progressi vengono salvati in questo browser.',
  fact2: '<b>La tua opinione conta.</b> Due brevi questionari, all’inizio e alla fine, per conoscere la tua esperienza con la chiusura delle lezioni.',
  badgeSent: '✓ Inviato',
  nextUnlockedLabel: 'Il <b>{label}</b> è sbloccato: due minuti e hai finito.',
  goLabel: 'Vai al {label} →',
  homeDoneText: 'Un ultimo passo: il DST nella pagina della formazione sull’LMS.',
  ctaQuizTitle: 'Verifica finale',
  ctaQuizText: '{n} situazioni reali di lezione. Scegli cosa faresti. Ti serve almeno il 70% per superarla.',
  failText: 'Ti serve almeno il 70%. Ripassa il modulo e riprova: puoi ripetere la verifica tutte le volte che vuoi.',
  qmeta: '{e} Verifica del modulo {n} · {kind} {i} di {total}',
  allDoneText: 'Hai completato i due moduli e il questionario.',
  doneTitle: 'Ultimo passo: torna sull’LMS e completa il DST',
  doneText: `<p>Hai quasi finito! ❤️</p>
    <p>Torna alla pagina della formazione sull’LMS, da cui hai aperto questa formazione. Troverai il test DST subito sotto il contenuto della formazione.</p>
    <p>👉 <b>Devi svolgere e superare il test DST perché la formazione risulti completata.</b> Se non svolgi il DST, la formazione continuerà a risultare incompleta e potrebbe scadere.</p>
    <p>Il punteggio minimo per superarlo è <b>80%</b>.</p>
    <p>In bocca al lupo! ❤️</p>`,
  doneNexts: [
    ['⏰', '<b>Imposta un timer</b> 5–8 minuti prima della fine. Quando suona, inizi la chiusura, ovunque tu sia arrivato.'],
    ['📋', '<b>Fai riassumere a loro:</b> 2–3 studenti, chiamati per nome, spiegano cosa hanno costruito e come.'],
    ['🏠', '<b>Compiti con uno scopo:</b> collegali al loro progetto e ricorda di consegnarli con «Send».'],
    ['🔮', '<b>Leggi la lezione successiva</b> prima di fare questa, così l’anticipazione crea vera curiosità.']
  ],
  doneBack: 'Torna all’inizio'
});

/* ============================================================
   DATA TO COMPLETE — fill these in and the training shows them automatically
   ============================================================ */
CONTENT.data = {
  /* Attendance analysis (Module 1). Each item: ['value', 'label']. While empty, a "pending" box is shown. */
  stats: [],
  statsSource: 'Analisi di presenze e qualità delle lezioni di Code & Game.',
  /* What changed in the new Code & Game lessons (Module 2). Each item: { e:'emoji', t:'title', p:'text', time:'optional label' } */
  news: []
};

/* ============================================================
   MODULES
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🪞', color:'#F03D9E', title:'Perché sei qui?', check:'quiz', checkTitle:'Verifica del modulo', checkText:'{n} domande brevi. Ti serve almeno il 70% per superarla.',
    desc:'La situazione che abbiamo rilevato nelle presenze, perché la fine della lezione conta così tanto e una verifica veloce. Circa 5 minuti.',
    obj:'Capire cosa abbiamo osservato negli indicatori di presenza, come una chiusura poco efficace influisce sulla motivazione degli studenti e perché la fine di una lezione è l’inizio della successiva.',
    offer:[['📊','Conosci la situazione che abbiamo rilevato.'],['💔','Scopri cosa perde uno studente quando la lezione finisce di colpo.'],['🔮','Capisci perché la chiusura prepara la lezione successiva.'],['✅','Verifica cosa hai imparato.']],
    sections:[ ['situacion','📊','La situazione'], ['impacto','💔','Quando la lezione finisce di colpo'], ['puente','🔮','La chiusura è il ponte verso la lezione successiva'] ] },
  { id:'m2', n:2, e:'🏁', color:'#C4F046', title:'Come chiudere una lezione in modo efficace', check:'quiz',
    desc:'Cosa è cambiato nelle nuove lezioni di Code & Game, la struttura della lezione, i quattro elementi di una buona chiusura, esempi reali, il questionario finale e una verifica pratica. Circa 10 minuti.',
    obj:'Sapere come le nuove lezioni ti aiutano a gestire il tempo e avere una routine concreta per chiudere ogni lezione: riassumere, riconoscere i risultati, motivare la pratica a casa e creare curiosità per la lezione successiva.',
    offer:[['🆕','Scopri le novità delle nuove lezioni.'],['🧱','Ripassa la struttura della lezione EM.'],['🏁','Padroneggia i quattro elementi della chiusura.'],['🎬','Impara da chiusure in lezioni reali.']],
    sections:[ ['novedades','🆕','Le novità delle nuove lezioni di Code & Game'], ['estructura','🧱','La struttura della lezione in un minuto'], ['elementos','🏁','I quattro elementi di una buona chiusura'], ['ejemplos','🎬','Chiusure in lezioni reali'], ['practica','🎯','Pratica veloce: aiuta la chiusura o no?'], ['lista','✅','La tua chiusura in 5–7 minuti'], ['survey2','💬','Questionario finale'] ],
    needs:['s2'] }
];

/* ============================================================
   CHECKS (Module 1 and Module 2) — "a" is the number of the correct option (0 = first)
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { q:'Quale di queste cose NON è un risultato di una chiusura efficace?',
      o:['Gli studenti riconoscono cosa hanno imparato.',
         'Gli studenti finiscono tutte le schede della lezione.',
         'Gli studenti sono curiosi della lezione successiva.'],
      a:1, e:'Una chiusura efficace fa sì che gli studenti riconoscano cosa hanno imparato, si motivino a esercitarsi a casa, siano curiosi e vogliano tornare. Finire tutte le schede non è l’obiettivo: una scheda non finita può continuare a casa.' },
    { q:'Quale parte della lezione uno studente ricorda di più, di solito?',
      o:['L’inizio','La fine','La spiegazione della teoria'],
      a:1, e:'La fine è ciò che ricorda di più. Se la lezione finisce di colpo, se ne va senza un risultato chiaro né un motivo per tornare.' },
    { q:'Perché diciamo che la chiusura è il ponte verso la lezione successiva?',
      o:['Perché è il momento in cui si controllano i compiti della lezione precedente.',
         'Perché compiti chiari e un’anticipazione che crea curiosità danno agli studenti un motivo per esercitarsi e tornare.',
         'Perché è il momento in cui il tutor spiega tutto il programma della lezione successiva.'],
      a:1, e:'Compiti → si esercitano e arrivano con qualcosa da mostrare. Anticipazione → hanno un motivo per collegarsi. Risultato riconosciuto → si sentono capaci.' },
    { tf:true, q:'La frequenza dipende solo da come il tutor chiude la lezione.',
      a:1, e:'Contano anche fattori esterni e stagionali: festività, vacanze e altri impegni. Questa formazione si concentra su quello che è nelle tue mani: come chiudi le tue lezioni.' }
  ],
  m2:[
    { ctx:'Lezione di 60 minuti. Sono le 18:53 e il tuo gruppo è ancora sull’ultima scheda CORE. Alcuni studenti sono molto concentrati per finirla.',
      q:'Cosa fai?',
      o:['Li lasci finire: la chiusura si può fare velocemente nell’ultimo minuto.',
         'Inizi subito la chiusura: la scheda non finita può continuare a casa o all’inizio della lezione successiva.',
         'Questa volta salti la chiusura e recuperi con un riassunto più lungo la prossima lezione.'],
      a:1, e:'Mancano 7 minuti: è il momento di chiudere. La chiusura non è in competizione con la scheda, la completa: quello che non hanno finito diventa il compito o il punto di partenza della prossima lezione.' },
    { ctx:'Inizi la chiusura. Vuoi sapere cosa si portano via i tuoi studenti dalla lezione di oggi.',
      q:'Come fai il riassunto?',
      o:['«Era tutto chiaro oggi?»',
         'Fai tu un riassunto completo di tutto quello che hanno visto, così nessuno si perde niente.',
         '«Valentina, cosa hai aggiunto oggi al tuo gioco e come ci sei riuscita?» e poi chiedi a un altro studente.'],
      a:2, e:'Il riassunto lo fanno gli studenti: domande mirate, chiamandoli per nome, che chiedono di spiegare cosa hanno fatto e come. «Era chiaro?» riceve quasi sempre un «sì» che non ti dice niente.' },
    { ctx:'Ti restano due minuti per spiegare il compito.',
      q:'Quale frase motiva di più a esercitarsi a casa?',
      o:['«Il compito è sulla piattaforma, non dimenticate di farlo».',
         '«Il tuo gioco ha già le monete. A casa aggiungi un nemico che ti toglie una vita, pubblicalo e mandami il link con “Send”. La prossima lezione guardiamo i nemici migliori».',
         '«Se non fate il compito, resterete indietro rispetto al gruppo».'],
      a:1, e:'Un compito motiva quando è la versione successiva del loro progetto, è chiaro (cosa fare e come consegnarlo) e ha uno scopo nella lezione successiva. Ricorda sempre il «Send».' },
    { ctx:'Nella prossima lezione gli studenti programmeranno i nemici del loro gioco.',
      q:'Quale anticipazione crea più curiosità?',
      o:['«La prossima lezione è la numero 8: Nemici e collisioni».',
         'Spiegare nel dettaglio tutti i blocchi che useranno la prossima lezione, così arrivano preparati.',
         '«Finora il tuo eroe aveva la strada libera… La prossima lezione qualcuno proverà a fermarlo. Chi pensate che sarà?»'],
      a:2, e:'Una buona anticipazione è una promessa, non un programma: si collega al loro progetto, lascia una domanda aperta e fa venire voglia di tornare. Funziona solo se hai letto la lezione successiva.' }
  ]
};

/* ============================================================
   CAROUSELS — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  leccion:[
    { e:'👋', t:'Apertura', ph:'Inizio · 5–7 min', c:'#BDE7FF', goal:'Crea il contatto e prepara: attività iniziale e saluti, collegamento alla lezione precedente, controllo dei compiti e obiettivo della lezione.',
      d:['Saluta ogni studente per nome.','Riprendi il progetto da dove si era fermato.','Controlla i compiti: qui si chiude il cerchio della chiusura precedente.'] },
    { e:'🃏', t:'Parte centrale: le schede', ph:'Sviluppo', c:'#E4FFC2', goal:'Le schede non servono solo da guardare o leggere: gli studenti vedono il risultato finale prima di iniziare, imparano la teoria e la mettono in pratica nel proprio progetto. Il ritmo lo decidi tu.',
      d:['Tieni d’occhio l’orologio mentre avanzano.','Una scheda non finita non è un problema: può continuare a casa.'] },
    { e:'🏁', t:'Chiusura', ph:'Ultimi 5–7 min', c:'#FFD9EC', goal:'La parte che si perde più facilmente, e quella che più influisce sulla voglia degli studenti di tornare.',
      d:['Riassumere · riconoscere · motivare il compito · creare curiosità.','Inizia in tempo, anche se l’attività non è finita.'] }
  ],
  cierre:[
    { e:'📋', t:'Riassumere quanto imparato', ph:'Elemento 1', c:'#FFD9EC', v:'recap', goal:'Gli studenti mettono in parole cosa hanno fatto e imparato. Non sei tu a riassumere: sono loro.',
      d:['Chiedi a 2–3 studenti, per nome.','Chiedi il cosa e il come, non «è chiaro?».','Usa il quiz o la lista di riepilogo della scheda, se c’è.'],
      say:['«Sofia, cosa sa fare adesso il tuo gioco che non sapeva fare all’inizio della lezione?»'] },
    { e:'🏆', t:'Riconoscere risultati e impegno', ph:'Elemento 2', c:'#FFF1B8', v:'praise', goal:'Ogni studente se ne va sapendo che i suoi progressi sono stati notati. Riconosci il risultato concreto e l’impegno dietro.',
      d:['Sii specifico: nomina ciò che hanno ottenuto.','Riconosci anche l’impegno e gli errori superati.','Distribuisci i riconoscimenti: non sempre agli stessi.'],
      say:['«Tommaso, far funzionare il punteggio è stato difficile e non ti sei arreso: hai provato tre modi finché ci sei riuscito».'] },
    { e:'🏠', t:'Motivare la pratica a casa', ph:'Elemento 3', c:'#C9F2D6', v:'nexthw', goal:'Il compito è la versione successiva del loro progetto. Spiegalo con chiarezza e dagli uno scopo.',
      d:['Spiegalo in una o due frasi.','Collegalo a quello che hanno appena costruito.','Ricorda di pubblicare e inviare il link con «Send».'],
      say:['«A casa aggiungi un nuovo livello al tuo gioco, pubblicalo e mandami il link. Voglio provarlo la prossima lezione!»'] },
    { e:'🔮', t:'Creare curiosità', ph:'Elemento 4', c:'#E9DDFF', v:'teaser', goal:'Una frase che fa venire voglia di tornare. Una promessa, non un programma.',
      d:['Leggi la lezione successiva mentre prepari questa.','Collega l’anticipazione al loro progetto.','Lascia una domanda aperta.'],
      say:['«La prossima lezione il tuo eroe troverà qualcosa di inaspettato… Cosa pensate che sarà?»'] }
  ]
};

/* Compare widget (Module 1): the end of the lesson seen by a student */
CONTENT.cmp = { finales:{
  v:['È finita l’ora: «Bene ragazzi, il tempo è finito. Il compito è sulla piattaforma. Ciao!»',
     'Esco senza sapere bene cosa ho imparato oggi.',
     'Non so cosa fare a casa né a cosa serve.',
     'La prossima lezione… di cosa parlava? Vedrò se mi collego.'],
  s:['«Prima di salutarci: Lucia, cosa hai aggiunto oggi al tuo gioco?»',
     'Mi sento spiegare quello che ho ottenuto: ce l’ho fatta io!',
     'So esattamente cosa aggiungere a casa e che lo vedremo la prossima lezione.',
     '«La prossima volta qualcuno proverà a fermare il tuo eroe…» Voglio sapere chi!'] } };
CONTENT.cmpnoteX = { finales:{
  v:'Nella lezione non è andato storto niente, ma il finale non ha lasciato nulla: né un risultato chiaro, né un motivo per esercitarsi, né curiosità di tornare.',
  s:'Gli stessi 5 minuti, ma lo studente se ne va con un risultato, una missione per casa e una domanda in testa.' } };
CONTENT.cmpIcons = { finales:['😶','🤩'] };

/* ============================================================
   SECTION BODIES
   ============================================================ */
const pendingBox = (title, text) => `<div class="pending"><b>⏳ ${title}</b>${text}</div>`;

CONTENT.body = {
/* ---------------- Module 1 ---------------- */
situacion:() => `
  <p class="p">Questa formazione è per te, tutor di <b>Code & Game</b> che insegna già con il <b>modello EM</b>. Analizzando presenze e qualità delle lezioni di Code & Game, abbiamo trovato margini di miglioramento in un momento molto preciso della lezione: <b>la chiusura</b>.</p>
  ${CONTENT.data.stats.length
    ? `<div class="stats">${CONTENT.data.stats.map(s => `<div class="stat"><span class="sv">${s[0]}</span><span class="sl">${s[1]}</span></div>`).join('')}</div>${CONTENT.data.statsNote ? callout('warn', '📉', CONTENT.data.statsNote) : ''}
       <p class="p" style="font-size:13.5px;color:var(--muted);margin-top:8px">📊 ${CONTENT.data.statsSource}</p>`
    : pendingBox('Dati dell’analisi delle presenze', 'Qui compariranno i dati principali su presenze e qualità delle lezioni di Code & Game.')}
  ${callout('tip', '🌦️', '<b>Non tutto dipende da te.</b> Le presenze risentono anche di fattori esterni e stagionali: festività, vacanze e altri impegni degli studenti. Ma alcuni aspetti della qualità della lezione influiscono sulla loro motivazione a continuare a partecipare, ed è lì che puoi fare la differenza.')}
  <div class="defn" style="margin-top:16px"><span class="de">🎯</span><p>Questa formazione non cerca di spiegare tutti i fattori delle presenze. Si concentra su <b>uno che è nelle tue mani</b>: come concludi le tue lezioni.</p></div>`,

impacto:() => `
  <p class="p">La fine della lezione viene spesso messa da parte: il tempo finisce, l’attività non è conclusa o sembra meno importante che continuare a costruire. Ma per lo studente <b>il finale è ciò che ricorda di più</b> della lezione. Cambia e confronta come vive il finale della stessa lezione:</p>
  <div class="card">
    <div class="wh"><b>Lo stesso finale, visto da uno studente</b><span class="tag">Provalo</span></div>
    <div class="seg" data-cmp="finales"><button data-k="v" aria-pressed="true">😶 Finisce di colpo</button><button data-k="s" aria-pressed="false">🤩 Con una chiusura</button></div>
    <div class="fbx" data-cmpout="finales"></div>
  </div>
  <p class="p" style="margin-top:18px">Una chiusura efficace ottiene quattro cose. Gira ogni carta:</p>
  <div class="grid4">
    ${flip('1', '🧠', 'Riconoscono cosa hanno imparato', 'Dicendolo con parole loro, gli studenti si accorgono dei propri progressi e li fissano nella memoria.')}
    ${flip('2', '🏠', 'Sono motivati a esercitarsi a casa', 'Un compito chiaro e collegato al loro progetto ha senso: non è «un obbligo in più».')}
    ${flip('3', '🔮', 'Sono curiosi', 'Una buona anticipazione lascia una domanda aperta e aspettative positive sulla lezione successiva.')}
    ${flip('4', '🙌', 'Vogliono tornare', 'Se ne vanno con un risultato riconosciuto e qualcosa da aspettare: il motivo migliore per collegarsi la volta dopo.')}
  </div>`,

puente:() => `
  <p class="p">Pensa alla chiusura come <b>all’inizio della lezione successiva</b>. Ogni elemento della chiusura ha una conseguenza diretta su ciò che succede dopo:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🏠</span><h3>Il compito</h3><p>Se è chiaro e ha senso, lo studente si esercita a casa e arriva alla lezione successiva con qualcosa da mostrare.</p></div>
    <div class="ti"><span class="tie">🔮</span><h3>L’anticipazione</h3><p>Se crea curiosità, lo studente ha un motivo per collegarsi: vuole sapere cosa succede.</p></div>
    <div class="ti"><span class="tie">🏆</span><h3>Il risultato</h3><p>Se viene riconosciuto, lo studente se ne va sentendosi capace, e questo sostiene la sua motivazione da una lezione all’altra.</p></div>
  </div>
  ${callout('warn', '⏱️', '<b>«Non ho abbastanza tempo».</b> Alcuni tutor ci hanno detto che il contenuto e la struttura delle lezioni rendevano difficile arrivare alla chiusura. Vi abbiamo ascoltato: nel Modulo 2 vedrai cosa è cambiato nelle nuove lezioni di Code & Game perché il tempo basti per tutte le fasi.')}`,

/* ---------------- Module 2 ---------------- */
novedades:() => `
  <p class="p">Le lezioni di Code & Game sono state aggiornate, anche in base a quello che ci hanno raccontato i tutor. L’obiettivo di questi cambiamenti è aiutarti a <b>gestire meglio il tempo</b> e a svolgere <b>tutte le fasi della lezione</b> senza sacrificare la chiusura.</p>
  ${CONTENT.data.news.length
    ? `<div class="news">${CONTENT.data.news.map(n => `<div class="newi"><span class="ne">${n.e}</span><h3>${n.t}</h3><p>${n.p}</p>${n.time ? `<span class="ntime">${n.time}</span>` : ''}</div>`).join('')}</div>`
    : pendingBox('Le novità delle nuove lezioni', 'Qui compariranno i principali cambiamenti delle nuove lezioni di Code & Game e come ognuno aiuta a gestire il tempo della lezione.')}
  ${callout('good', '💡', '<b>Cosa significa per te:</b> con le nuove lezioni, la chiusura non è più in competizione con il contenuto. Ha il suo spazio nella lezione, e il tuo compito è iniziarla in tempo.')}
  ${callout('tip', '🔄', '<b>Questo è solo l’inizio.</b> Anche le altre lezioni del Modulo 1 di Code & Game verranno aggiornate gradualmente, in base ai feedback dei tutor e allo sviluppo continuo delle lezioni.')}`,

estructura:() => `
  <p class="p">Conosci già la struttura di una lezione nel modello EM. Un ripasso veloce, con lo sguardo rivolto al finale:</p>
  ${stc('leccion')}
  <p class="p" style="margin-top:22px">Riserva sempre gli <b>ultimi 5–7 minuti</b> alla chiusura. Scegli la durata della tua lezione e trascina lungo la barra:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Lezione di 60 minuti</button><button data-len="90" aria-pressed="false">⏱️ Lezione di 90 minuti</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minuto della lezione"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Apertura</div><div class="tl-main" id="tlMain">Schede: risultato finale, teoria e pratica</div><div class="tl-close" id="tlClose">Chiusura</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  ${callout('warn', '⏰', '<b>Il trucco che funziona:</b> imposta un timer <b>5–8 minuti prima della fine</b>. Quando suona, inizi la chiusura, ovunque tu sia arrivato. Una scheda non finita può continuare a casa o nella prossima lezione.')}`,

elementos:() => `
  <p class="p">Una buona chiusura ha quattro elementi. Scorrili: ognuno ha frasi che puoi usare e, quando disponibile, un esempio da una lezione reale.</p>
  ${stc('cierre')}
  ${callout('tip', '🔁', 'Nella formazione EM hai visto la routine <b>riassunto → anticipazione → compito</b>. È la stessa routine: il riconoscimento dei risultati fa parte del riassunto, e puoi dare l’anticipazione prima o dopo il compito. L’importante è che <b>non manchi nessuno</b> e che l’ultimo messaggio lasci la voglia di tornare.')}`,

ejemplos:() => `
  <p class="p">Guarda questi spezzoni di lezioni reali. Non guardarli solo come esempio: usa le domande di ognuno per scoprire <b>quale strategia usa il tutor e perché funziona</b>.</p>
  <div class="vex"><div class="vl"><span class="vk">Riassumere</span><h3>📋 Gli studenti raccontano cosa hanno imparato</h3>${videoBtn('recap', 'Guarda il riassunto in una lezione reale')}</div>
    <div class="vr"><b>Fai caso a…</b><ul><li>Chi parla di più: il tutor o gli studenti?</li><li>Che tipo di domande fa il tutor?</li><li>Come usa i nomi degli studenti?</li></ul>
    <div class="why">✅ <b>Perché funziona:</b> quando lo studente spiega con parole sue, si rende conto di ciò che ha ottenuto e lo ricorda meglio.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Creare curiosità</span><h3>🔮 Un’anticipazione che fa venire voglia di tornare</h3>${videoBtn('teaser', 'Guarda l’anticipazione in una lezione reale')}</div>
    <div class="vr"><b>Fai caso a…</b><ul><li>Come collega il tutor la lezione successiva al progetto degli studenti?</li><li>Cosa lascia senza risposta, di proposito?</li><li>Quanto tempo ci mette?</li></ul>
    <div class="why">✅ <b>Perché funziona:</b> una promessa breve e una domanda aperta creano aspettativa senza anticipare tutto il contenuto.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Motivare la pratica a casa</span><h3>🏠 Un compito chiaro e con uno scopo</h3>${videoBtn('nexthw', 'Guarda il compito in una lezione reale')}</div>
    <div class="vr"><b>Fai caso a…</b><ul><li>È chiaro cosa fare e come consegnarlo?</li><li>Come lo collega a ciò che hanno costruito oggi?</li><li>Con che tono saluta gli studenti?</li></ul>
    <div class="why">✅ <b>Perché funziona:</b> un compito che è la versione successiva del loro progetto sembra una missione, non un obbligo.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Attenzione fino alla fine</span><h3>🙌 Il gruppo presente fino all’ultimo minuto</h3>${videoBtn('attention', 'Guarda una chiusura con tutto il gruppo')}</div>
    <div class="vr"><b>Fai caso a…</b><ul><li>Come coinvolge il tutor studenti specifici?</li><li>Cosa fa quando qualcuno si disconnette?</li><li>Come celebra i risultati del gruppo?</li></ul>
    <div class="why">✅ <b>Perché funziona:</b> gli studenti che partecipano, chiamati per nome e con qualcosa da mostrare, restano presenti fino alla fine.</div></div></div>`,

practica:() => `
  <p class="p">Otto cose che un tutor dice o fa alla fine della lezione. Quali aiutano una chiusura efficace? Decidi in ogni caso:</p>
  <div class="sorter" id="sorter">${[
    ['📋','«Giovanni, cosa hai aggiunto oggi al tuo gioco e come l’hai fatto?»','yes','<b>Aiuta.</b> Un nome e un «come»: Giovanni riassume con parole sue.'],
    ['🙂','«È tutto chiaro? Sì? Perfetto, ci vediamo».','no','<b>Non aiuta.</b> «È chiaro?» riceve un «sì» automatico e la lezione finisce senza riassunto.'],
    ['🏆','«Anna, oggi il tuo personaggio salta ed evita gli ostacoli. Era la parte più difficile della lezione!»','yes','<b>Aiuta.</b> Riconosce un risultato concreto: Anna se ne va sapendo di aver fatto progressi.'],
    ['⏳','Continuare con la scheda fino all’ultimo minuto per finirla.','no','<b>Non aiuta.</b> È proprio ciò che fa perdere il riassunto, il compito e l’anticipazione.'],
    ['🏠','«A casa aggiungi un suono quando l’eroe vince, pubblicalo e mandami il link con “Send”».','yes','<b>Aiuta.</b> Chiaro, collegato al loro progetto e con il promemoria del «Send».'],
    ['📄','«Il compito è sulla piattaforma».','no','<b>Non aiuta.</b> Senza spiegazione né scopo, il compito sembra facoltativo.'],
    ['🔮','«La prossima volta il tuo gioco avrà un boss finale… come pensate che si possa sconfiggere?»','yes','<b>Aiuta.</b> Una promessa breve e una domanda aperta: curiosità pura.'],
    ['📚','Leggere il titolo della prossima lezione mentre gli studenti si scollegano.','no','<b>Non aiuta.</b> Un’anticipazione frettolosa non crea aspettativa: arriva quando nessuno ascolta più.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">✅ Aiuta</button><button data-pick="no">❌ Non aiuta</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>`,

lista:() => `
  <p class="p">Tutto il modulo in una lista. Tienila a portata di mano nelle prossime lezioni finché non diventa un’abitudine:</p>
  <div class="card"><div class="wh"><b>✅ La mia chiusura in 5–7 minuti</b><span class="tag">Spuntale</span></div>
    <div class="ckgroup">☑️ Prima della lezione</div>
    <div class="cklist">${['Ho letto anche la lezione <b>successiva</b>, per preparare l’anticipazione.','So qual è il compito e come lo collegherò al loro progetto.','Ho pronto un timer per 5–8 minuti prima della fine.'].map((t, i) => `<button class="ck" data-ck="a${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Nella chiusura</div>
    <div class="cklist">${['Inizio la chiusura in tempo, anche se la scheda non è finita.','2–3 studenti, chiamati per nome, riassumono cosa hanno fatto e come.','Riconosco risultati e impegno concreti.','Spiego il compito, il suo scopo e ricordo il «Send».','Chiudo con un’anticipazione che crea curiosità.','Saluto con un tono positivo.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`,

};

/* ============================================================
   SURVEYS — start survey (pop-up when the training opens) and final survey (end of Module 2)
   Translate only the texts. Never change: ids, types, region keys, feeling keys.
   types: choice (feelings) · scale (1–5) · open (text, optional)
   ============================================================ */
CONTENT.surveys = {
  ui: {
    emailLabel: 'Email aziendale', emailPlaceholder: 'nome@kodland.org',
    emailError: 'Usa la tua email aziendale: deve contenere @kodland.',
    regionLabel: 'Regione', regionPlaceholder: 'Scegli la tua regione…',
    missing: 'Completa i campi e le domande segnate con ★.',
    sending: 'Invio in corso…', send: 'Invia il questionario',
    thanks: '✅ <b>Grazie!</b> Abbiamo ricevuto le tue risposte.',
    openPlaceholder: 'Scrivi qui…', optional: 'facoltativa', low: 'Per niente', high: 'Del tutto',
    lockCheck: '🔒 Invia il questionario qui sopra per sbloccare la verifica del modulo.'
  },
  // Region keys stay in English (they are the values saved in the Sheet). Translate only the names.
  regions: { brazil:'Brasile', latam:'LATAM', mena:'MENA', italy:'Italia', poland:'Polonia', uk:'Regno Unito', usa:'USA', indonesia:'Indonesia', gcc:'GCC', cis:'CIS' },
  // Feeling keys stay in English. Translate only the labels.
  feelings: [['excited','🤩 Entusiasta'],['curious','🤔 Curioso'],['calm','😌 Tranquillo'],['unsure','😕 Insicuro'],['worried','😟 Preoccupato'],['overwhelmed','😵 Sopraffatto']],
  start: {
    title: 'Prima di iniziare: come ti senti?',
    intro: 'Un breve questionario: non ci sono risposte giuste o sbagliate. Invialo per iniziare la formazione.',
    questions: [
      { id:'feeling', type:'choice', q:'Come ti senti in questo momento rispetto a questo nuovo lancio?' },
      { id:'confidence', type:'scale', q:'Quanto ti senti sicuro nell’insegnare questo nuovo corso o formato?' },
      { id:'understand_why', type:'scale', q:'Capisco perché stiamo facendo questo cambiamento.' },
      { id:'know_where', type:'scale', q:'So dove trovare ciò che mi serve e a chi chiedere aiuto.' },
      { id:'worries', type:'open', optional:true, q:'Cosa ti preoccupa di più di questo lancio?' }
    ]
  },
  final: {
    title: 'Questionario finale: come ti senti adesso?',
    intro: 'Non è un test: non ci sono risposte giuste o sbagliate. Invialo per sbloccare la verifica del modulo.',
    groups: [
      { title:'Come ti senti', questions:[
        { id:'feeling', type:'choice', q:'Come ti senti adesso rispetto a questo nuovo lancio?' },
        { id:'confidence', type:'scale', q:'Quanto ti senti sicuro nell’insegnare questo nuovo corso o formato?' },
        { id:'understand_why', type:'scale', q:'Capisco perché stiamo facendo questo cambiamento.' },
        { id:'know_where', type:'scale', q:'So dove trovare ciò che mi serve e a chi chiedere aiuto.' } ] },
      { title:'La tua sicurezza nell’insegnare', questions:[
        { id:'ready_first_lesson', type:'scale', q:'Mi sento pronto a condurre la mia prima lezione dall’inizio alla fine.' },
        { id:'know_course', type:'scale', q:'So cosa fanno e cosa ottengono gli studenti in questo corso.' },
        { id:'ready_tools', type:'scale', q:'Mi sento pronto a usare Back Office, la Classroom e gli strumenti in classe.' } ] },
      { title:'I materiali della formazione', questions:[
        { id:'training_clear', type:'scale', q:'La formazione è stata chiara e facile da seguire.' } ] }
    ]
  }
};

}
