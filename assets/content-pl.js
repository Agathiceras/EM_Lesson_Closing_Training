/* Kodland training · Cierre de clase en el modelo EM — LATAM
   Texts in language: pl. This file holds ONLY texts; the logic is in index.html.
   Loaded by index.html when the URL has ?lang=pl */
{
/* ============================================================
   Cierre de clase en el modelo EM — LATAM · Code & Game
   Contenido en español. Mismo formato que el entrenamiento EM Core:
   - Traduce o edita SOLO el texto entre comillas '…' y backticks `…`.
   - No cambies: etiquetas HTML, código ${…}, {marcadores}, ids/claves, emoji, nombres de archivo.
   - Dentro de '…' usa el apóstrofo tipográfico ’, nunca el recto.
   - CONTENT.data (más abajo): datos del análisis de asistencia y novedades de las lecciones.
   ============================================================ */
window.CONTENT = { lang: 'pl' };

CONTENT.ui = {
  pageTitle: 'Szkolenie: nowy model edukacyjny',
  footer: 'kodland · Nowy model edukacyjny · Szkolenie dla tutorów',
  devLink: '🛠 Deweloper',

  // Navigation
  logoSub: 'Nowy model edukacyjny',
  navCore: 'Podstawa {done}/{total}',
  navHome: '← Strona główna',
  navModules: '← Wszystkie moduły',
  navBackModule: '← Wróć do modułu',

  // Home
  heroKicker: '🚀 Szkolenie dla tutorów',
  heroTitle: '<span class="hl">Nowy</span> model edukacyjny',
  heroLead: 'Kodland zmienia sposób prowadzenia części swoich kursów. To szkolenie przygotuje Cię do pracy w nowym modelu. Liczba modułów: {n}, do przejścia po kolei. Każdy kończy się krótkim sprawdzianem, który odblokowuje następny.',
  fact1: '<b>We własnym tempie.</b> Twoje postępy zapisują się w tej przeglądarce.',
  fact2: '<b>Praktyka w komplecie.</b> Trzy symulacje — Backoffice, Classroom i Kodland Sparks — które możesz powtarzać do woli.',
  progAllDone: 'Moduły ukończone 🎉',
  progLabel: 'ukończonych modułów',
  moduleN: 'Moduł {n}',
  badgeDone: '✓ Ukończono · {score}%',
  badgeLocked: '🔒 Ukończ moduł {n}',
  badgeStart: 'Zaczynamy →',
  homeDoneTitle: 'Moduły ukończone!',
  homeDoneText: 'Ostatni krok: test DST na stronie szkoleń w LMS.',
  homeDoneBtn: 'Zobacz, co dalej →',

  // Module page and its check
  eyebrow: 'Moduł {n} z {total}',
  ctaQuizTitle: 'Sprawdzian modułu',
  ctaQuizText: 'Liczba krótkich pytań: {n}. Zdobądź co najmniej 70%, aby zaliczyć.',
  ctaRiskTitle: 'Sprawdzian modułu: wskaż ryzykowną strategię',
  ctaRiskText: 'Liczba prawdziwych sytuacji: {n}. <b style="color:#E5484D">Inaczej niż w pozostałych sprawdzianach: w każdym przypadku wybierasz strategię, która ZASZKODZI lekcji</b> — a nie tę dobrą. Zdobądź co najmniej 70%, aby zaliczyć.',
  lockOne: '🔒 Ukończ: {what} i wpisz jego kod powyżej, aby odblokować sprawdzian.',
  lockMany: '🔒 Ukończ: {what} i wpisz ich kody powyżej, aby odblokować sprawdzian.',
  listAnd: ' i ',
  startCheck: 'Zacznij sprawdzian →',
  retake: '🔁 Powtórz sprawdzian',

  // Simulations and completion codes
  launchSteps: ['Otwórz ją w nowej karcie.', 'Wykonaj wszystkie kroki, aż zobaczysz ekran końcowy z Twoim kodem.', 'Wróć do tej karty i wpisz kod poniżej.'],
  codeOk: '✅ <b>Ukończono: {sim}.</b> Kod zaakceptowany.',
  codeLabel: '<b>🔑 Kod ukończenia</b> — znajdziesz go na ostatnim ekranie: {sim}.',
  codePlaceholder: 'np. XX-0000-00',
  codeUnlock: 'Odblokuj',
  codeWrong: 'Ten kod jest nieprawidłowy. Sprawdź go na ostatnim ekranie symulacji.',

  // Small interactive pieces
  tapFlip: 'Dotknij, aby obrócić',
  mythReality: 'Rzeczywistość ✓',
  loopAgain: '<b>I jeszcze raz!</b> Refleksja staje się kolejnym celem — o jeden obrót głębiej.',
  ages: 'Wiek {age}',
  aiBar: 'Jak duży udział ma AI w projekcie',
  stageWas: 'Było: <s>{was}</s> → teraz:',
  stageOf: '{i} z {n}',
  stageWatch: 'Zobacz „{t}” na prawdziwej lekcji',
  stageFirst: 'Wróć do pierwszego',
  next: 'Dalej →',
  sortWrong: '✗ Nie do końca.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Notatki dla tutora — widzisz je tylko Ty',
  fmFollowing: '🔗 Podąża za tutorem',
  fmStart: '👆 Sofia jest na tej samej lekcji, ale Lead the group jest wyłączone. Włącz przełącznik.',
  fmOn: '✅ <b>Lead the group jest WŁĄCZONE.</b> Sofia przeskoczyła do Twojej karty — ale zauważ: widzi ją <b>bez</b> Twoich notatek dla tutora. Teraz spróbuj kliknąć <b>Następna karta</b>.',
  fmOff: '⏸️ <b>Lead the group jest WYŁĄCZONE.</b> Sofia zostaje tam, gdzie jest, cokolwiek otworzysz.',
  fmMoved: '➡️ Przechodzisz do karty {t} — <b>Sofia idzie z Tobą</b>.',
  fmMovedAlone: '➡️ Przechodzisz do karty {t}, ale <b>Sofia nadal jest na karcie {s}</b>. Może patrzeć na coś innego. Włącz Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Początek.</b> Rozgrzewka i powitanie, nawiązanie do poprzedniej lekcji, sprawdzenie pracy domowej, cel lekcji.',
  tlCards: '<b>Karty.</b> Uczniowie widzą efekt końcowy, poznają teorię i ją ćwiczą. Pilnuj zegara — zostało {left} min…',
  tlClose: '<b>Na {left} min przed końcem: czas na zakończenie.</b> Niezależnie od tego, w którym miejscu kart jesteś, zacznij rutynę zamykającą teraz.',
  tlRoutine: '<b>Rutyna zamykająca.</b> Podsumowanie przez uczniów → zapowiedź kolejnej lekcji → następna praca domowa.',
  tlBye: '<b>Do widzenia!</b> Wszyscy wychodzą, wiedząc, czego się nauczyli, co będzie dalej i co zrobić w domu.',

  // Videos
  watchExample: 'Zobacz prawdziwy przykład',
  comingSoon: 'wkrótce',
  close: 'Zamknij',
  videoDefault: 'Prawdziwa lekcja',
  soonTitle: 'Wideo już wkrótce',
  soonText: 'Tutaj zobaczysz ten fragment lekcji w prawdziwej klasie. Wideo jest w przygotowaniu i wkrótce się pojawi.',
  zoomBadge: '🔍 Kliknij, aby powiększyć',
  zoomAria: 'Otwórz wideo w większym oknie',
  zoomDefault: 'Wideo',
  openDrive: 'Film się nie wyświetla? Otwórz go w Google Drive ↗',
  zoomIn: 'Przybliż',
  zoomOut: 'Oddal',
  zoomReset: 'Resetuj',
  zoomHint: 'Powiększaj przyciskami + / −, kółkiem myszy lub dwukrotnym kliknięciem · przeciągaj, aby się przesuwać · Esc lub ✕ zamyka okno',

  // Checks (quiz engine)
  qmeta: '{e} Sprawdzian modułu {n} · {kind} {i} z {total}',
  qCase: 'Przypadek',
  qQuestion: 'Pytanie',
  riskQuestion: 'Która z tych strategii <span class="hurt">ZASZKODZI</span> tej części lekcji?',
  riskBanner: '⚠️ Uwaga: w tym sprawdzianie wybierasz <b>ZŁĄ</b> strategię — tę, która <b>ZASZKODZI</b> lekcji. Nie tę dobrą!',
  tfTrue: '✅ Prawda',
  tfFalse: '❌ Fałsz',
  openHint: '✍️ Napisz własną odpowiedź — co najmniej {min} znaków. Nie ma jednego właściwego sformułowania: zobaczysz wzorcową odpowiedź, z którą możesz ją porównać.',
  openPlaceholder: 'Wpisz tutaj swoją odpowiedź…',
  openSubmit: 'Wyślij odpowiedź',
  openRecorded: '✅ <b>Odpowiedź zapisana.</b> Odpowiedź wzorcowa — porównaj ją ze swoją:',
  fbRight: '✅ <b>Dobrze!</b> ',
  fbWrong: '❌ <b>Nie do końca.</b> ',
  fbRiskRight: '✅ <b>Zgadza się — to strategia, która zaszkodziłaby lekcji.</b> ',
  fbRiskWrong: '❌ <b>Ta strategia akurat pomaga lekcji.</b> Ryzykowna jest zaznaczona na zielono. ',
  nextQuestion: 'Następne pytanie →',
  seeResult: 'Zobacz mój wynik →',

  // Result of a check
  passedTitle: 'Zaliczone!',
  failTitle: 'Niewiele zabrakło',
  scoreLine: 'Poprawnych odpowiedzi: <b>{score} z {n}</b>.',
  failText: 'Potrzebujesz co najmniej 70%. Powtórz materiał modułu i spróbuj ponownie — możesz podchodzić do sprawdzianu tyle razy, ile potrzebujesz.',
  nextUnlocked: '<b>Moduł {n} · {title}</b> został odblokowany.',
  goModule: 'Przejdź do modułu {n} →',
  allDoneText: 'Ukończyłeś całe szkolenie.',
  seeNext: 'Zobacz, co dalej →',
  reviewModule: '📖 Powtórz moduł',

  // Final page
  doneTitle: 'Moduły ukończone!',
  doneText: `<p>Już prawie koniec! Wróć na stronę szkoleń w LMS, z której otworzyłeś to szkolenie. Test DST znajduje się tuż pod szkoleniem.</p>
    <p>👉 <b>Aby szkolenie zostało uznane za ukończone, musisz wykonać i zaliczyć test DST.</b> Jeśli nie wykonasz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p>
    <p>Minimalny wynik zaliczający to <b>80%</b>.</p>
    <p>Powodzenia! ❤️</p>`,
  doneBadge: '✓ Gotowe',
  doneNexts: [
    ['📒', '<b>Przed każdą lekcją:</b> przeczytaj Teacher Notes w Backoffice — i sprawdź, czy nie ma aktualizacji.'],
    ['🔑', '<b>Kodland Sparks:</b> dane logowania otrzymasz od działu Operations lub Teaching.'],
    ['🏁', '<b>Na każdej lekcji:</b> porządny początek, pytania wymagające uzasadnienia i 5–7 minut na zakończenie.'],
    ['🤖', '<b>Gdy uczniowie korzystają z AI:</b> AI proponuje, autor decyduje.']
  ],
  doneBack: 'Wróć do modułów',

  // Locked messages
  lockedTitle: 'Nadal zablokowane',
  lockedModule: 'Najpierw ukończ moduł {n}.',
  lockedStep: 'Ukończ poprzedni krok, aby odblokować ten.',
  ok: 'OK'
};

/* ============================================================
   INTERFACE OVERRIDES — this training only
   ============================================================ */
Object.assign(CONTENT.ui, {
  pageTitle: 'Zakończenie lekcji w modelu EM',
  footer: 'kodland · Code & Game · Zakończenie lekcji w modelu EM',
  logoSub: 'Zakończenie lekcji · EM',
  navCore: 'Postęp {done}/{total}',
  heroKicker: '🏁 Szkolenie dla tutorów Code & Game',
  heroTitle: 'Jak <span class="hl">zakończyć</span> lekcję',
  heroLead: 'Krótkie szkolenie dla tutorów Code & Game przeszkolonych w modelu EM. Dwa moduły, po kolei: każdy kończy się sprawdzianem, który odblokowuje następny. Na początku i na końcu krótka ankieta.',
  fact1: '<b>Około 15 minut.</b> Moduł 1: 5 minut · Moduł 2: 10 minut. Twój postęp zapisuje się w tej przeglądarce.',
  fact2: '<b>Twoje zdanie się liczy.</b> Dwie krótkie ankiety, na początku i na końcu, abyśmy poznali Twoje doświadczenia z kończeniem lekcji.',
  badgeSent: '✓ Wysłana',
  nextUnlockedLabel: '<b>{label}</b> jest już odblokowana: dwie minuty i gotowe.',
  goLabel: 'Przejdź do: {label} →',
  homeDoneText: 'Ostatni krok: test DST na stronie szkolenia w LMS.',
  ctaQuizTitle: 'Sprawdzian końcowy',
  ctaQuizText: '{n} prawdziwych sytuacji z lekcji. Wybierz, co byś zrobił(a). Aby zaliczyć, potrzebujesz co najmniej 70%.',
  failText: 'Potrzebujesz co najmniej 70%. Powtórz moduł i spróbuj ponownie: sprawdzian możesz powtarzać tyle razy, ile potrzebujesz.',
  qmeta: '{e} Sprawdzian modułu {n} · {kind} {i} z {total}',
  allDoneText: 'Ukończono oba moduły i ankietę.',
  doneTitle: 'Ostatni krok: wróć do LMS i wypełnij DST',
  doneText: `<p>To już prawie koniec! ❤️</p>
    <p>Wróć na stronę szkolenia w LMS, z której otworzyłeś(-aś) to szkolenie. Test DST znajdziesz tuż pod treścią szkolenia.</p>
    <p>👉 <b>Musisz wykonać i zaliczyć test DST, aby szkolenie zostało uznane za ukończone.</b> Jeśli nie wykonasz testu DST, szkolenie nadal będzie widoczne jako nieukończone i może wygasnąć.</p>
    <p>Minimalny wynik, aby zaliczyć, to <b>80%</b>.</p>
    <p>Powodzenia! ❤️</p>`,
  doneNexts: [
    ['⏰', '<b>Ustaw minutnik</b> na 5–8 minut przed końcem. Gdy zadzwoni, zaczynasz zakończenie, bez względu na to, gdzie jesteś.'],
    ['📋', '<b>Niech to oni podsumują:</b> 2–3 uczniów, wywołanych po imieniu, wyjaśnia, co zbudowali i jak.'],
    ['🏠', '<b>Praca domowa z celem:</b> powiąż ją z ich projektem i przypomnij o wysłaniu przyciskiem „Send”.'],
    ['🔮', '<b>Przeczytaj następną lekcję</b> przed poprowadzeniem tej, aby zapowiedź budziła prawdziwą ciekawość.']
  ],
  doneBack: 'Wróć na start'
});

/* ============================================================
   DATA TO COMPLETE — fill these in and the training shows them automatically
   ============================================================ */
CONTENT.data = {
  /* Attendance analysis (Module 1). Each item: ['value', 'label']. While empty, a "pending" box is shown. */
  stats: [],
  statsSource: 'Analiza frekwencji i jakości lekcji Code & Game.',
  /* What changed in the new Code & Game lessons (Module 2). Each item: { e:'emoji', t:'title', p:'text', time:'optional label' } */
  news: []
};

/* ============================================================
   MODULES
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🪞', color:'#F03D9E', title:'Dlaczego tu jesteś?', check:'quiz', checkTitle:'Sprawdzian modułu', checkText:'{n} krótkie pytania. Aby zaliczyć, potrzebujesz co najmniej 70%.',
    desc:'Sytuacja, którą zauważyliśmy we frekwencji, dlaczego koniec lekcji ma tak duże znaczenie i krótki sprawdzian. Około 5 minut.',
    obj:'Zrozumieć, co zauważyliśmy we wskaźnikach frekwencji, jak słabe zakończenie wpływa na motywację uczniów i dlaczego koniec jednej lekcji jest początkiem następnej.',
    offer:[['📊','Poznaj sytuację, którą zauważyliśmy.'],['💔','Zobacz, co traci uczeń, gdy lekcja kończy się nagle.'],['🔮','Zrozum, dlaczego zakończenie przygotowuje następną lekcję.'],['✅','Sprawdź, czego się nauczyłeś(-aś).']],
    sections:[ ['situacion','📊','Sytuacja'], ['impacto','💔','Gdy lekcja kończy się nagle'], ['puente','🔮','Zakończenie to most do następnej lekcji'] ] },
  { id:'m2', n:2, e:'🏁', color:'#C4F046', title:'Jak skutecznie zakończyć lekcję', check:'quiz',
    desc:'Co się zmieniło w nowych lekcjach Code & Game, struktura lekcji, cztery elementy dobrego zakończenia, prawdziwe przykłady, ankieta końcowa i praktyczny sprawdzian. Około 10 minut.',
    obj:'Wiedzieć, jak nowe lekcje pomagają zarządzać czasem, i mieć konkretną rutynę kończenia każdej lekcji: podsumować, docenić osiągnięcia, zmotywować do ćwiczeń w domu i rozbudzić ciekawość następnej lekcji.',
    offer:[['🆕','Poznaj nowości w lekcjach.'],['🧱','Przypomnij sobie strukturę lekcji EM.'],['🏁','Opanuj cztery elementy zakończenia.'],['🎬','Ucz się na zakończeniach z prawdziwych lekcji.']],
    sections:[ ['novedades','🆕','Nowości w lekcjach Code & Game'], ['estructura','🧱','Struktura lekcji w minutę'], ['elementos','🏁','Cztery elementy dobrego zakończenia'], ['ejemplos','🎬','Zakończenia na prawdziwych lekcjach'], ['practica','🎯','Szybkie ćwiczenie: czy to pomaga zakończeniu?'], ['lista','✅','Twoje zakończenie w 5–7 minut'], ['survey2','💬','Ankieta końcowa'] ],
    needs:['s2'] }
];

/* ============================================================
   CHECKS (Module 1 and Module 2) — "a" is the number of the correct option (0 = first)
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { q:'Która z tych rzeczy NIE jest efektem skutecznego zakończenia lekcji?',
      o:['Uczniowie dostrzegają, czego się nauczyli.',
         'Uczniowie kończą wszystkie karty lekcji.',
         'Uczniowie są ciekawi następnej lekcji.'],
      a:1, e:'Skuteczne zakończenie sprawia, że uczniowie dostrzegają, czego się nauczyli, chcą ćwiczyć w domu, są ciekawi i chcą wrócić. Ukończenie wszystkich kart nie jest celem: niedokończoną kartę można kontynuować w domu.' },
    { q:'Którą część lekcji uczeń zwykle zapamiętuje najlepiej?',
      o:['Początek','Koniec','Wyjaśnienie teorii'],
      a:1, e:'Najlepiej zapamiętuje koniec. Jeśli lekcja kończy się nagle, uczeń wychodzi bez wyraźnego osiągnięcia i bez powodu, by wrócić.' },
    { q:'Dlaczego mówimy, że zakończenie to most do następnej lekcji?',
      o:['Bo wtedy sprawdza się pracę domową z poprzedniej lekcji.',
         'Bo jasna praca domowa i zapowiedź budząca ciekawość dają uczniom powód, by ćwiczyć i wrócić.',
         'Bo wtedy tutor omawia cały program następnej lekcji.'],
      a:1, e:'Praca domowa → ćwiczą i przychodzą z czymś do pokazania. Zapowiedź → mają powód, by się połączyć. Docenione osiągnięcie → czują, że potrafią.' },
    { tf:true, q:'Frekwencja zależy wyłącznie od tego, jak tutor kończy lekcję.',
      a:1, e:'Znaczenie mają też czynniki zewnętrzne i sezonowe: święta, wakacje i inne zajęcia. To szkolenie skupia się na tym, który jest w Twoich rękach: jak kończysz lekcje.' }
  ],
  m2:[
    { ctx:'Lekcja 60-minutowa. Jest 18:53, a Twoja grupa jest wciąż na ostatniej karcie CORE. Niektórzy uczniowie są bardzo skupieni na jej dokończeniu.',
      q:'Co robisz?',
      o:['Pozwalasz im skończyć: zakończenie można zrobić szybko w ostatniej minucie.',
         'Zaczynasz zakończenie teraz: niedokończona karta może być kontynuowana w domu lub na początku następnej lekcji.',
         'Tym razem pomijasz zakończenie i nadrabiasz je dłuższym podsumowaniem na następnej lekcji.'],
      a:1, e:'Zostało 7 minut: czas kończyć. Zakończenie nie konkuruje z kartą, tylko ją uzupełnia: to, czego nie skończyli, staje się pracą domową albo punktem wyjścia następnej lekcji.' },
    { ctx:'Zaczynasz zakończenie. Chcesz wiedzieć, co uczniowie wynoszą z dzisiejszej lekcji.',
      q:'Jak prowadzisz podsumowanie?',
      o:['„Czy wszystko było dziś jasne?”',
         'Sam(a) robisz pełne podsumowanie wszystkiego, co omówiliście, żeby nikt niczego nie przegapił.',
         '„Valentina, co dziś dodałaś do swojej gry i jak to zrobiłaś?”, a potem pytasz kolejnego ucznia.'],
      a:2, e:'Podsumowanie robią uczniowie: konkretne pytania, po imieniu, które proszą o wyjaśnienie, co i jak zrobili. „Czy to jasne?” prawie zawsze dostaje odpowiedź „tak”, która nic Ci nie mówi.' },
    { ctx:'Zostały Ci dwie minuty na wyjaśnienie pracy domowej.',
      q:'Które zdanie najbardziej motywuje do ćwiczeń w domu?',
      o:['„Praca domowa jest na platformie, nie zapomnijcie jej zrobić.”',
         '„Twoja gra ma już monety. W domu dodaj przeciwnika, który odbiera życie, opublikuj grę i wyślij mi link przyciskiem „Send”. Na następnej lekcji obejrzymy najlepszych przeciwników.”',
         '„Jeśli nie zrobicie pracy domowej, zostaniecie w tyle za grupą.”'],
      a:1, e:'Praca domowa motywuje, gdy jest kolejną wersją ich własnego projektu, jest jasna (co zrobić i jak ją oddać) i ma cel na następnej lekcji. Zawsze przypominaj o „Send”.' },
    { ctx:'Na następnej lekcji uczniowie będą programować przeciwników do swojej gry.',
      q:'Która zapowiedź budzi największą ciekawość?',
      o:['„Następna lekcja to numer 8: Przeciwnicy i kolizje.”',
         'Szczegółowo wyjaśnić wszystkie bloki, których użyją na następnej lekcji, żeby przyszli przygotowani.',
         '„Do tej pory Twój bohater miał wolną drogę… Na następnej lekcji ktoś spróbuje go zatrzymać. Jak myślicie, kto to będzie?”'],
      a:2, e:'Dobra zapowiedź to obietnica, a nie program zajęć: łączy się z ich projektem, zostawia otwarte pytanie i sprawia, że chcą wrócić. Działa tylko wtedy, gdy przeczytałeś(-aś) następną lekcję.' }
  ]
};

/* ============================================================
   CAROUSELS — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  leccion:[
    { e:'👋', t:'Początek', ph:'Start · 5–7 min', c:'#BDE7FF', goal:'Nawiąż kontakt i przygotuj grunt: rozgrzewka i powitanie, nawiązanie do poprzedniej lekcji, sprawdzenie pracy domowej i cel lekcji.',
      d:['Przywitaj każdego ucznia po imieniu.','Wróć do projektu tam, gdzie skończyła się poprzednia lekcja.','Sprawdź pracę domową: tu zamyka się pętla poprzedniego zakończenia.'] },
    { e:'🃏', t:'Część główna: karty', ph:'Rozwinięcie', c:'#E4FFC2', goal:'Karty to nie tylko oglądanie czy czytanie: uczniowie widzą w nich efekt końcowy, zanim zaczną, poznają teorię i od razu ćwiczą ją we własnym projekcie. To Ty nadajesz tempo.',
      d:['Pilnuj zegara, gdy idą naprzód.','Niedokończona karta to nie problem: można ją dokończyć w domu.'] },
    { e:'🏁', t:'Zakończenie', ph:'Ostatnie 5–7 min', c:'#FFD9EC', goal:'Część, którą najłatwiej stracić, a która najbardziej wpływa na to, czy uczniowie chcą wrócić.',
      d:['Podsumować · docenić · zmotywować do pracy domowej · rozbudzić ciekawość.','Zacznij na czas, nawet jeśli zadanie nie jest skończone.'] }
  ],
  cierre:[
    { e:'📋', t:'Podsumować, czego się nauczyli', ph:'Element 1', c:'#FFD9EC', v:'recap', goal:'Uczniowie ubierają w słowa to, co zrobili i czego się nauczyli. To nie Ty podsumowujesz: robią to oni.',
      d:['Zapytaj 2–3 uczniów, po imieniu.','Pytaj o to, co i jak, a nie „czy to jasne?”.','Wykorzystaj quiz lub listę podsumowania z karty, jeśli są.'],
      say:['„Zosia, co Twoja gra potrafi teraz, czego nie potrafiła na początku lekcji?”'] },
    { e:'🏆', t:'Docenić osiągnięcia i wysiłek', ph:'Element 2', c:'#FFF1B8', v:'praise', goal:'Każdy uczeń wychodzi z poczuciem, że jego postępy zostały zauważone. Doceń konkretne osiągnięcie i wysiłek, który za nim stoi.',
      d:['Bądź konkretny(-a): nazwij to, co osiągnęli.','Doceniaj też wysiłek i pokonane błędy.','Rozdzielaj docenienie: nie zawsze tym samym osobom.'],
      say:['„Tomek, uruchomienie punktacji było trudne, a Ty się nie poddałeś: próbowałeś trzech sposobów, aż zadziałało.”'] },
    { e:'🏠', t:'Zmotywować do ćwiczeń w domu', ph:'Element 3', c:'#C9F2D6', v:'nexthw', goal:'Praca domowa to kolejna wersja ich projektu. Wyjaśnij ją jasno i nadaj jej cel.',
      d:['Wyjaśnij ją w jednym lub dwóch zdaniach.','Połącz ją z tym, co właśnie zbudowali.','Przypomnij o opublikowaniu i wysłaniu linku przyciskiem „Send”.'],
      say:['„W domu dodaj nowy poziom do swojej gry, opublikuj ją i wyślij mi link. Chcę w nią zagrać na następnej lekcji!”'] },
    { e:'🔮', t:'Rozbudzić ciekawość', ph:'Element 4', c:'#E9DDFF', v:'teaser', goal:'Jedno zdanie, po którym chcą wrócić. Obietnica, a nie program zajęć.',
      d:['Przeczytaj następną lekcję, przygotowując tę.','Połącz zapowiedź z ich projektem.','Zostaw otwarte pytanie.'],
      say:['„Na następnej lekcji Twój bohater znajdzie coś niespodziewanego… Jak myślicie, co to będzie?”'] }
  ]
};

/* Compare widget (Module 1): the end of the lesson seen by a student */
CONTENT.cmp = { finales:{
  v:['Koniec czasu: „Dobra, czas się skończył. Praca domowa jest na platformie. Cześć!”',
     'Wychodzę i właściwie nie wiem, czego się dziś nauczyłem.',
     'Nie wiem, co mam zrobić w domu ani po co.',
     'Następna lekcja… o czym była? Zobaczę, czy się połączę.'],
  s:['„Zanim skończymy: Lucja, co dziś dodałaś do swojej gry?”',
     'Słyszę, jak tłumaczę, co mi się udało: zrobiłem to sam!',
     'Wiem dokładnie, co dodać w domu i że obejrzymy to na następnej lekcji.',
     '„Następnym razem ktoś spróbuje zatrzymać Twojego bohatera…” Chcę wiedzieć kto!'] } };
CONTENT.cmpnoteX = { finales:{
  v:'Na lekcji nic nie poszło źle, ale koniec niczego nie zostawił: ani wyraźnego osiągnięcia, ani powodu do ćwiczeń, ani ciekawości, by wrócić.',
  s:'Te same 5 minut, ale uczeń wychodzi z osiągnięciem, misją na dom i pytaniem w głowie.' } };
CONTENT.cmpIcons = { finales:['😶','🤩'] };

/* ============================================================
   SECTION BODIES
   ============================================================ */
const pendingBox = (title, text) => `<div class="pending"><b>⏳ ${title}</b>${text}</div>`;

CONTENT.body = {
/* ---------------- Module 1 ---------------- */
situacion:() => `
  <p class="p">To szkolenie jest dla Ciebie, tutora <b>Code & Game</b>, który już uczy w <b>modelu EM</b>. Przeanalizowaliśmy frekwencję i jakość lekcji Code & Game i znaleźliśmy pole do poprawy w jednym bardzo konkretnym momencie lekcji: <b>zakończeniu</b>.</p>
  ${CONTENT.data.stats.length
    ? `<div class="stats">${CONTENT.data.stats.map(s => `<div class="stat"><span class="sv">${s[0]}</span><span class="sl">${s[1]}</span></div>`).join('')}</div>${CONTENT.data.statsNote ? callout('warn', '📉', CONTENT.data.statsNote) : ''}
       <p class="p" style="font-size:13.5px;color:var(--muted);margin-top:8px">📊 ${CONTENT.data.statsSource}</p>`
    : pendingBox('Dane z analizy frekwencji', 'Tutaj pojawią się kluczowe dane o frekwencji i jakości lekcji Code & Game.')}
  ${callout('tip', '🌦️', '<b>Nie wszystko zależy od Ciebie.</b> Na frekwencję wpływają też czynniki zewnętrzne i sezonowe: święta, wakacje i inne zajęcia uczniów. Ale niektóre aspekty jakości lekcji wpływają na ich motywację do dalszego uczestnictwa i właśnie tam możesz coś zmienić.')}
  <div class="defn" style="margin-top:16px"><span class="de">🎯</span><p>To szkolenie nie próbuje wyjaśnić wszystkich czynników wpływających na frekwencję. Skupia się na <b>jednym, który jest w Twoich rękach</b>: na tym, jak kończysz lekcje.</p></div>`,

impacto:() => `
  <p class="p">Koniec lekcji często schodzi na dalszy plan: kończy się czas, zadanie nie jest skończone albo wydaje się mniej ważne niż dalsze budowanie. Ale dla ucznia <b>to zakończenie zapamiętuje się najbardziej</b>. Przełącz i porównaj, jak uczeń przeżywa koniec tej samej lekcji:</p>
  <div class="card">
    <div class="wh"><b>Ten sam koniec oczami ucznia</b><span class="tag">Wypróbuj</span></div>
    <div class="seg" data-cmp="finales"><button data-k="v" aria-pressed="true">😶 Kończy się nagle</button><button data-k="s" aria-pressed="false">🤩 Z zakończeniem</button></div>
    <div class="fbx" data-cmpout="finales"></div>
  </div>
  <p class="p" style="margin-top:18px">Skuteczne zakończenie daje cztery rzeczy. Odwróć każdą kartę:</p>
  <div class="grid4">
    ${flip('1', '🧠', 'Uświadamiają sobie, czego się nauczyli', 'Mówiąc to własnymi słowami, uczniowie dostrzegają swoje postępy i utrwalają je w pamięci.')}
    ${flip('2', '🏠', 'Chcą ćwiczyć w domu', 'Jasna praca domowa powiązana z ich projektem ma sens: to nie jest „kolejny obowiązek”.')}
    ${flip('3', '🔮', 'Są ciekawi', 'Dobra zapowiedź zostawia otwarte pytanie i pozytywne oczekiwania wobec następnej lekcji.')}
    ${flip('4', '🙌', 'Chcą wrócić', 'Wychodzą z docenionym osiągnięciem i czymś, na co czekają: to najlepszy powód, by połączyć się następnym razem.')}
  </div>`,

puente:() => `
  <p class="p">Pomyśl o zakończeniu jak o <b>początku następnej lekcji</b>. Każdy element zakończenia ma bezpośredni wpływ na to, co dzieje się dalej:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🏠</span><h3>Praca domowa</h3><p>Jeśli jest jasna i ma sens, uczeń ćwiczy w domu i przychodzi na następną lekcję z czymś do pokazania.</p></div>
    <div class="ti"><span class="tie">🔮</span><h3>Zapowiedź</h3><p>Jeśli budzi ciekawość, uczeń ma powód, by się połączyć: chce wiedzieć, co się wydarzy.</p></div>
    <div class="ti"><span class="tie">🏆</span><h3>Osiągnięcie</h3><p>Jeśli zostanie docenione, uczeń wychodzi z poczuciem, że potrafi, a to podtrzymuje jego motywację z lekcji na lekcję.</p></div>
  </div>
  ${callout('warn', '⏱️', '<b>„Po prostu nie mam czasu”.</b> Niektórzy tutorzy mówili nam, że treść i struktura lekcji utrudniały dojście do zakończenia. Usłyszeliśmy to: w Module 2 zobaczysz, co się zmieniło w nowych lekcjach Code & Game, aby starczyło czasu na wszystkie etapy.')}`,

/* ---------------- Module 2 ---------------- */
novedades:() => `
  <p class="p">Lekcje Code & Game zostały zaktualizowane, częściowo na podstawie tego, co mówili nam tutorzy. Celem tych zmian jest pomóc Ci <b>lepiej zarządzać czasem</b> i przeprowadzić <b>wszystkie etapy lekcji</b> bez poświęcania zakończenia.</p>
  ${CONTENT.data.news.length
    ? `<div class="news">${CONTENT.data.news.map(n => `<div class="newi"><span class="ne">${n.e}</span><h3>${n.t}</h3><p>${n.p}</p>${n.time ? `<span class="ntime">${n.time}</span>` : ''}</div>`).join('')}</div>`
    : pendingBox('Nowości w lekcjach', 'Tutaj pojawią się główne zmiany w nowych lekcjach Code & Game i to, jak każda z nich pomaga zarządzać czasem lekcji.')}
  ${callout('good', '💡', '<b>Co to oznacza dla Ciebie:</b> w nowych lekcjach zakończenie nie konkuruje już z treścią. Ma swoje miejsce w lekcji, a Twoim zadaniem jest zacząć je na czas.')}
  ${callout('tip', '🔄', '<b>To dopiero początek.</b> Pozostałe lekcje Modułu 1 Code & Game również będą stopniowo aktualizowane na podstawie opinii tutorów i dalszego rozwoju lekcji.')}`,

estructura:() => `
  <p class="p">Znasz już strukturę lekcji w modelu EM. Szybka powtórka, z naciskiem na koniec:</p>
  ${stc('leccion')}
  <p class="p" style="margin-top:22px">Zawsze zostaw <b>ostatnie 5–7 minut</b> na zakończenie. Wybierz długość swojej lekcji i przesuwaj suwak:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Lekcja 60-minutowa</button><button data-len="90" aria-pressed="false">⏱️ Lekcja 90-minutowa</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minuta lekcji"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Początek</div><div class="tl-main" id="tlMain">Karty: efekt końcowy, teoria i praktyka</div><div class="tl-close" id="tlClose">Zakończenie</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  ${callout('warn', '⏰', '<b>Sposób, który działa:</b> ustaw minutnik na <b>5–8 minut przed końcem</b>. Gdy zadzwoni, zaczynasz zakończenie, bez względu na to, gdzie jesteś. Niedokończoną kartę można kontynuować w domu lub na następnej lekcji.')}`,

elementos:() => `
  <p class="p">Dobre zakończenie ma cztery elementy. Przejrzyj je: każdy zawiera zdania, których możesz użyć, a tam, gdzie to możliwe, przykład z prawdziwej lekcji.</p>
  ${stc('cierre')}
  ${callout('tip', '🔁', 'W szkoleniu EM poznałeś(-aś) rutynę <b>podsumowanie → zapowiedź → praca domowa</b>. To ta sama rutyna: docenienie osiągnięć jest częścią podsumowania, a zapowiedź możesz dać przed pracą domową lub po niej. Ważne, by <b>żadnego elementu nie zabrakło</b> i by ostatni komunikat sprawiał, że chcą wrócić.')}`,

ejemplos:() => `
  <p class="p">Obejrzyj te fragmenty prawdziwych lekcji. Nie traktuj ich tylko jako przykładu: użyj pytań przy każdym z nich, aby odkryć, <b>jaką strategię stosuje tutor i dlaczego ona działa</b>.</p>
  <div class="vex"><div class="vl"><span class="vk">Podsumowanie</span><h3>📋 Uczniowie mówią, czego się nauczyli</h3>${videoBtn('recap', 'Zobacz podsumowanie na prawdziwej lekcji')}</div>
    <div class="vr"><b>Zwróć uwagę…</b><ul><li>Kto mówi więcej: tutor czy uczniowie?</li><li>Jakie pytania zadaje tutor?</li><li>Jak tutor używa imion uczniów?</li></ul>
    <div class="why">✅ <b>Dlaczego to działa:</b> gdy uczeń tłumaczy własnymi słowami, uświadamia sobie, co osiągnął, i lepiej to zapamiętuje.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Rozbudzić ciekawość</span><h3>🔮 Zapowiedź, po której chce się wrócić</h3>${videoBtn('teaser', 'Zobacz zapowiedź na prawdziwej lekcji')}</div>
    <div class="vr"><b>Zwróć uwagę…</b><ul><li>Jak tutor łączy następną lekcję z projektem uczniów?</li><li>Co celowo zostawia bez odpowiedzi?</li><li>Ile czasu to zajmuje?</li></ul>
    <div class="why">✅ <b>Dlaczego to działa:</b> krótka obietnica i otwarte pytanie budują oczekiwanie, nie zdradzając całej treści.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Motywacja do ćwiczeń w domu</span><h3>🏠 Jasna praca domowa z celem</h3>${videoBtn('nexthw', 'Zobacz pracę domową na prawdziwej lekcji')}</div>
    <div class="vr"><b>Zwróć uwagę…</b><ul><li>Czy jest jasne, co zrobić i jak to oddać?</li><li>Jak tutor łączy ją z tym, co zbudowali dziś?</li><li>Jakim tonem tutor żegna uczniów?</li></ul>
    <div class="why">✅ <b>Dlaczego to działa:</b> praca domowa, która jest kolejną wersją ich własnego projektu, wydaje się misją, a nie obowiązkiem.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Uwaga do samego końca</span><h3>🙌 Cała grupa obecna do ostatniej minuty</h3>${videoBtn('attention', 'Zobacz zakończenie z całą grupą')}</div>
    <div class="vr"><b>Zwróć uwagę…</b><ul><li>Jak tutor angażuje konkretnych uczniów?</li><li>Co robi, gdy ktoś się wyłącza?</li><li>Jak świętuje osiągnięcia grupy?</li></ul>
    <div class="why">✅ <b>Dlaczego to działa:</b> uczniowie, którzy biorą udział, wywołani po imieniu i z czymś do pokazania, pozostają obecni do końca.</div></div></div>`,

practica:() => `
  <p class="p">Osiem rzeczy, które tutor mówi lub robi na końcu lekcji. Które z nich pomagają w skutecznym zakończeniu? Zdecyduj w każdym przypadku:</p>
  <div class="sorter" id="sorter">${[
    ['📋','„Janek, co dziś dodałeś do swojej gry i jak to zrobiłeś?”','yes','<b>Pomaga.</b> Imię i „jak”: Janek podsumowuje własnymi słowami.'],
    ['🙂','„Wszystko jasne? Tak? Super, do zobaczenia.”','no','<b>Nie pomaga.</b> „Wszystko jasne?” dostaje automatyczne „tak” i lekcja kończy się bez podsumowania.'],
    ['🏆','„Ania, dziś Twoja postać skacze i omija przeszkody. To była najtrudniejsza część lekcji!”','yes','<b>Pomaga.</b> Docenia konkretne osiągnięcie: Ania wychodzi ze świadomością, że zrobiła postęp.'],
    ['⏳','Kontynuowanie karty do ostatniej minuty, żeby ją skończyć.','no','<b>Nie pomaga.</b> Właśnie przez to przepada podsumowanie, praca domowa i zapowiedź.'],
    ['🏠','„W domu dodaj dźwięk, gdy bohater wygrywa, opublikuj grę i wyślij mi link przyciskiem „Send”.”','yes','<b>Pomaga.</b> Jasna, powiązana z ich projektem i z przypomnieniem o „Send”.'],
    ['📄','„Praca domowa jest na platformie.”','no','<b>Nie pomaga.</b> Bez wyjaśnienia i celu praca domowa wydaje się nieobowiązkowa.'],
    ['🔮','„Następnym razem w Twojej grze pojawi się boss… jak myślicie, jak go pokonać?”','yes','<b>Pomaga.</b> Krótka obietnica i otwarte pytanie: czysta ciekawość.'],
    ['📚','Odczytanie tytułu następnej lekcji, gdy uczniowie się rozłączają.','no','<b>Nie pomaga.</b> Pospieszna zapowiedź nie buduje oczekiwania: pada, gdy nikt już nie słucha.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">✅ Pomaga</button><button data-pick="no">❌ Nie pomaga</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>`,

lista:() => `
  <p class="p">Cały moduł w jednej liście. Miej ją pod ręką na kolejnych lekcjach, aż wejdzie Ci w nawyk:</p>
  <div class="card"><div class="wh"><b>✅ Moje zakończenie w 5–7 minut</b><span class="tag">Zaznacz</span></div>
    <div class="ckgroup">☑️ Przed lekcją</div>
    <div class="cklist">${['Przeczytałem(-am) też <b>następną</b> lekcję, aby przygotować zapowiedź.','Wiem, jaka jest praca domowa i jak powiążę ją z ich projektem.','Mam gotowy minutnik na 5–8 minut przed końcem.'].map((t, i) => `<button class="ck" data-ck="a${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 W zakończeniu</div>
    <div class="cklist">${['Zaczynam zakończenie na czas, nawet jeśli karta nie jest skończona.','2–3 uczniów, wywołanych po imieniu, podsumowuje, co i jak zrobili.','Doceniam konkretne osiągnięcia i wysiłek.','Wyjaśniam pracę domową, jej cel i przypominam o „Send”.','Kończę zapowiedzią, która budzi ciekawość.','Żegnam się w pozytywnym tonie.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`,

};

/* ============================================================
   SURVEYS — start survey (pop-up when the training opens) and final survey (end of Module 2)
   Translate only the texts. Never change: ids, types, region keys, feeling keys.
   types: choice (feelings) · scale (1–5) · open (text, optional)
   ============================================================ */
CONTENT.surveys = {
  ui: {
    emailLabel: 'Służbowy e-mail', emailPlaceholder: 'imie@kodland.org',
    emailError: 'Użyj służbowego e-maila: musi zawierać @kodland.',
    regionLabel: 'Region', regionPlaceholder: 'Wybierz swój region…',
    missing: 'Uzupełnij pola i pytania oznaczone ★.',
    sending: 'Wysyłanie…', send: 'Wyślij ankietę',
    thanks: '✅ <b>Dziękujemy!</b> Otrzymaliśmy Twoje odpowiedzi.',
    openPlaceholder: 'Napisz tutaj…', optional: 'opcjonalne', low: 'Wcale', high: 'Całkowicie',
    lockCheck: '🔒 Wyślij ankietę powyżej, aby odblokować sprawdzian modułu.'
  },
  // Region keys stay in English (they are the values saved in the Sheet). Translate only the names.
  regions: { brazil:'Brazylia', latam:'LATAM', mena:'MENA', italy:'Włochy', poland:'Polska', uk:'Wielka Brytania', usa:'USA', indonesia:'Indonezja', gcc:'GCC', cis:'CIS' },
  // Feeling keys stay in English. Translate only the labels.
  feelings: [['excited','🤩 Podekscytowany(-a)'],['curious','🤔 Zaciekawiony(-a)'],['calm','😌 Spokojny(-a)'],['unsure','😕 Niepewny(-a)'],['worried','😟 Zaniepokojony(-a)'],['overwhelmed','😵 Przytłoczony(-a)']],
  start: {
    title: 'Zanim zaczniesz: jak się czujesz?',
    intro: 'Krótka ankieta: nie ma dobrych ani złych odpowiedzi. Wyślij ją, aby rozpocząć szkolenie.',
    questions: [
      { id:'feeling', type:'choice', q:'Jak się teraz czujesz w związku z tym nowym wdrożeniem?' },
      { id:'confidence', type:'scale', q:'Jak pewnie czujesz się, ucząc tego nowego kursu lub formatu?' },
      { id:'understand_why', type:'scale', q:'Rozumiem, dlaczego wprowadzamy tę zmianę.' },
      { id:'know_where', type:'scale', q:'Wiem, gdzie znaleźć to, czego potrzebuję, i kogo poprosić o pomoc.' },
      { id:'worries', type:'open', optional:true, q:'Co najbardziej Cię niepokoi w związku z tym wdrożeniem?' }
    ]
  },
  final: {
    title: 'Ankieta końcowa: jak się teraz czujesz?',
    intro: 'To nie jest test: nie ma dobrych ani złych odpowiedzi. Wyślij ją, aby odblokować sprawdzian modułu.',
    groups: [
      { title:'Jak się czujesz', questions:[
        { id:'feeling', type:'choice', q:'Jak się teraz czujesz w związku z tym nowym wdrożeniem?' },
        { id:'confidence', type:'scale', q:'Jak pewnie czujesz się, ucząc tego nowego kursu lub formatu?' },
        { id:'understand_why', type:'scale', q:'Rozumiem, dlaczego wprowadzamy tę zmianę.' },
        { id:'know_where', type:'scale', q:'Wiem, gdzie znaleźć to, czego potrzebuję, i kogo poprosić o pomoc.' } ] },
      { title:'Twoja pewność w nauczaniu', questions:[
        { id:'ready_first_lesson', type:'scale', q:'Czuję się gotowy(-a), aby poprowadzić pierwszą lekcję od początku do końca.' },
        { id:'know_course', type:'scale', q:'Wiem, co uczniowie robią i co osiągają na tym kursie.' },
        { id:'ready_tools', type:'scale', q:'Czuję się gotowy(-a), aby korzystać na lekcji z Back Office, Classroom i innych narzędzi.' } ] },
      { title:'Materiały szkoleniowe', questions:[
        { id:'training_clear', type:'scale', q:'Szkolenie było jasne i łatwe do śledzenia.' } ] }
    ]
  }
};

}
