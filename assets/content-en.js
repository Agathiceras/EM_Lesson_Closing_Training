/* Kodland training · Cierre de clase en el modelo EM — LATAM
   Texts in language: en. This file holds ONLY texts; the logic is in index.html.
   Loaded by index.html when the URL has ?lang=en */
{
/* ============================================================
   Cierre de clase en el modelo EM — LATAM · Code & Game
   Contenido en español. Mismo formato que el entrenamiento EM Core:
   - Traduce o edita SOLO el texto entre comillas '…' y backticks `…`.
   - No cambies: etiquetas HTML, código ${…}, {marcadores}, ids/claves, emoji, nombres de archivo.
   - Dentro de '…' usa el apóstrofo tipográfico ’, nunca el recto.
   - CONTENT.data (más abajo): datos del análisis de asistencia y novedades de las lecciones.
   ============================================================ */
window.CONTENT = { lang: 'en' };

CONTENT.ui = {
  pageTitle: 'New Educational Model Training',
  footer: 'kodland · New Educational Model · Tutor training',
  devLink: '🛠 Developer',

  // Navigation
  logoSub: 'New Educational Model',
  navCore: 'Core {done}/{total}',
  navHome: '← Home',
  navModules: '← All modules',
  navBackModule: '← Back to the module',

  // Home
  heroKicker: '🚀 Tutor training',
  heroTitle: 'The <span class="hl">new</span> educational model',
  heroLead: 'Kodland is changing how some of its courses are taught. This training gets you ready to teach with the new model: {n} modules, in order. Each one ends with a short check that unlocks the next one.',
  fact1: '<b>At your own pace.</b> Your progress is saved in this browser.',
  fact2: '<b>Practice included.</b> Three simulations — Backoffice, Classroom and Kodland Sparks — that you can repeat as many times as you like.',
  progAllDone: 'Modules completed 🎉',
  progLabel: 'modules complete',
  moduleN: 'Module {n}',
  badgeDone: '✓ Completed · {score}%',
  badgeLocked: '🔒 Complete Module {n}',
  badgeStart: 'Start →',
  homeDoneTitle: 'Modules completed!',
  homeDoneText: 'One last step: the DST test on the LMS training page.',
  homeDoneBtn: 'See what to do next →',

  // Module page and its check
  eyebrow: 'Module {n} of {total}',
  ctaQuizTitle: 'Module check',
  ctaQuizText: '{n} short questions. Score 70% or more to pass.',
  ctaRiskTitle: 'Module check: spot the risky strategy',
  ctaRiskText: '{n} real situations. <b style="color:#E5484D">Different from the other checks: in each case you pick the strategy that would HURT the lesson</b> — not the good one. Score 70% or more to pass.',
  lockOne: '🔒 Complete {what} and enter its code above to unlock the check.',
  lockMany: '🔒 Complete {what} and enter their codes above to unlock the check.',
  listAnd: ' and ',
  startCheck: 'Start the check →',
  retake: '🔁 Retake the check',

  // Simulations and completion codes
  launchSteps: ['Open it in a new tab.', 'Follow every step until you see the completion screen and your code.', 'Come back to this tab and enter the code below.'],
  codeOk: '✅ <b>{sim} completed.</b> Code accepted.',
  codeLabel: '<b>🔑 Completion code</b> — you’ll find it on the last screen of the {sim}.',
  codePlaceholder: 'e.g. XX-0000-00',
  codeUnlock: 'Unlock',
  codeWrong: 'That code isn’t right. Check it on the last screen of the simulation.',

  // Small interactive pieces
  tapFlip: 'Tap to flip',
  mythReality: 'Reality ✓',
  loopAgain: '<b>And again!</b> The reflection becomes the next goal — one turn deeper.',
  ages: 'Ages {age}',
  aiBar: 'How much AI is part of the project',
  stageWas: 'Was: <s>{was}</s> → now:',
  stageOf: '{i} of {n}',
  stageWatch: 'Watch “{t}” in a real lesson',
  stageFirst: 'Back to the first',
  next: 'Next →',
  sortWrong: '✗ Not quite.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Teacher notes — only you see this',
  fmFollowing: '🔗 Following the teacher',
  fmStart: '👆 Sofia is on the same lesson, but Lead the group is off. Turn the switch on.',
  fmOn: '✅ <b>Lead the group is ON.</b> Sofia jumped to your card — but notice: she sees the card <b>without</b> your Teacher Notes. Now try <b>Next card</b>.',
  fmOff: '⏸️ <b>Lead the group is OFF.</b> Sofia stays where she is, whatever you open.',
  fmMoved: '➡️ You moved to card {t} — <b>Sofia moved with you</b>.',
  fmMovedAlone: '➡️ You moved to card {t}, but <b>Sofia is still on card {s}</b>. She may be looking at something else. Turn on Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Opening.</b> Warm-up and greeting, link to the previous lesson, homework check, lesson goal.',
  tlCards: '<b>The cards.</b> Students see the final result, learn the theory and practise it. Keep an eye on the clock — {left} minutes left…',
  tlClose: '<b>{left} minutes before the end: time to close.</b> Wherever you are in the cards, start the closing routine now.',
  tlRoutine: '<b>Closing routine.</b> Recap by the students → teaser for the next lesson → next homework.',
  tlBye: '<b>Goodbye!</b> Everyone leaves knowing what they learned, what comes next and what to do at home.',

  // Videos
  watchExample: 'Watch a real example',
  comingSoon: 'coming soon',
  close: 'Close',
  videoDefault: 'Real lesson',
  soonTitle: 'Video coming soon',
  soonText: 'Here you’ll watch this part of the lesson in a real class. The video is being prepared and will appear here soon.',
  zoomBadge: '🔍 Click to enlarge',
  zoomAria: 'Open the video bigger',
  zoomDefault: 'Video',
  openDrive: 'Video not playing? Open it in Google Drive ↗',
  zoomIn: 'Zoom in',
  zoomOut: 'Zoom out',
  zoomReset: 'Reset',
  zoomHint: 'Zoom with + / −, the mouse wheel or a double-click · drag to move around · Esc or ✕ to close',

  // Checks (quiz engine)
  qmeta: '{e} Module {n} check · {kind} {i} of {total}',
  qCase: 'Case',
  qQuestion: 'Question',
  riskQuestion: 'Which one would <span class="hurt">HURT</span> this part of the lesson?',
  riskBanner: '⚠️ Careful: in this check you choose the <b>WRONG</b> strategy — the one that would <b>HURT</b> the lesson. Not the good one!',
  tfTrue: '✅ True',
  tfFalse: '❌ False',
  openHint: '✍️ Write your own answer — at least {min} characters. There’s no single right wording: you’ll see a model answer to compare with yours.',
  openPlaceholder: 'Type your answer here…',
  openSubmit: 'Submit my answer',
  openRecorded: '✅ <b>Answer recorded.</b> Model answer — compare it with yours:',
  fbRight: '✅ <b>Correct!</b> ',
  fbWrong: '❌ <b>Not quite.</b> ',
  fbRiskRight: '✅ <b>Correct — that’s the strategy that would hurt the lesson.</b> ',
  fbRiskWrong: '❌ <b>That one actually helps the lesson.</b> The risky one is highlighted in green. ',
  nextQuestion: 'Next question →',
  seeResult: 'See my result →',

  // Result of a check
  passedTitle: 'You passed!',
  failTitle: 'Almost there',
  scoreLine: 'You answered <b>{score} of {n}</b> correctly.',
  failText: 'You need 70% or more. Review the module and try again — you can retake it as many times as you need.',
  nextUnlocked: '<b>Module {n} · {title}</b> is now unlocked.',
  goModule: 'Go to Module {n} →',
  allDoneText: 'You’ve completed the whole training.',
  seeNext: 'See what’s next →',
  reviewModule: '📖 Review the module',

  // Final page
  doneTitle: 'Modules completed!',
  doneText: `<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p>
    <p>👉 <b>You must complete and pass the DST test for the training to be considered successfully completed.</b> If you do not complete the DST test, the training will remain incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  doneBadge: '✓ Done',
  doneNexts: [
    ['📒', '<b>Before every lesson:</b> read the Teacher Notes in Backoffice — and check for updates.'],
    ['🔑', '<b>Kodland Sparks:</b> your credentials come from the Operations or Teaching department.'],
    ['🏁', '<b>Every lesson:</b> a proper opening, reasoning questions and a 5–7 minute closing.'],
    ['🤖', '<b>When students use AI:</b> the AI proposes, the author decides.']
  ],
  doneBack: 'Back to the modules',

  // Locked messages
  lockedTitle: 'Still locked',
  lockedModule: 'Complete Module {n} first.',
  lockedStep: 'Complete the previous step to unlock this one.',
  ok: 'OK'
};

/* ============================================================
   INTERFACE OVERRIDES — this training only
   ============================================================ */
Object.assign(CONTENT.ui, {
  pageTitle: 'Closing the lesson in the EM model',
  footer: 'kodland · Code & Game · Closing the lesson in the EM model',
  logoSub: 'Lesson closing · EM',
  navCore: 'Progress {done}/{total}',
  heroKicker: '🏁 Training for Code & Game tutors',
  heroTitle: 'How to <span class="hl">close</span> your lessons',
  heroLead: 'A short training for Code & Game tutors who were trained in the EM model. Two modules, in order: each one ends with a check that unlocks the next. A short survey at the start and at the end.',
  fact1: '<b>About 15 minutes.</b> Module 1: 5 minutes · Module 2: 10 minutes. Your progress is saved in this browser.',
  fact2: '<b>Your opinion counts.</b> Two short surveys, at the start and at the end, so we learn about your experience with lesson closings.',
  badgeSent: '✓ Sent',
  nextUnlockedLabel: 'The <b>{label}</b> is now unlocked: two minutes and you’re done.',
  goLabel: 'Go to the {label} →',
  homeDoneText: 'One last step: the DST on the training page in the LMS.',
  ctaQuizTitle: 'Final check',
  ctaQuizText: '{n} real lesson situations. Choose what you would do. You need 70% or more to pass.',
  failText: 'You need 70% or more. Review the module and try again: you can retake the check as many times as you need.',
  qmeta: '{e} Module {n} check · {kind} {i} of {total}',
  allDoneText: 'You completed both modules and the survey.',
  doneTitle: 'Last step: go back to the LMS and complete the DST',
  doneText: `<p>You’re almost done! ❤️</p>
    <p>Go back to the training page in the LMS, where you opened this training. You’ll find the DST right below the training content.</p>
    <p>👉 <b>You must take and pass the DST for the training to count as completed.</b> If you don’t take the DST, the training will still show as incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  doneNexts: [
    ['⏰', '<b>Set a timer</b> 5–8 minutes before the end. When it rings, you start the closing, wherever you are.'],
    ['📋', '<b>Let them recap:</b> 2–3 students, by name, explain what they built and how.'],
    ['🏠', '<b>Homework with a purpose:</b> link it to their project and remind them to submit it with “Send”.'],
    ['🔮', '<b>Read the next lesson</b> before teaching this one, so the teaser sparks real curiosity.']
  ],
  doneBack: 'Back to the start'
});

/* ============================================================
   DATA TO COMPLETE — fill these in and the training shows them automatically
   ============================================================ */
CONTENT.data = {
  /* Attendance analysis (Module 1). Each item: ['value', 'label']. While empty, a "pending" box is shown. */
  stats: [],
  statsSource: 'Analysis of attendance and lesson quality in Code & Game lessons.',
  /* What changed in the new Code & Game lessons (Module 2). Each item: { e:'emoji', t:'title', p:'text', time:'optional label' } */
  news: []
};

/* ============================================================
   MODULES
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🪞', color:'#F03D9E', title:'Why are you here?', check:'quiz', checkTitle:'Module check', checkText:'{n} short questions. You need 70% or more to pass.',
    desc:'The situation we spotted in attendance, why the end of the lesson matters so much, and a quick check. About 5 minutes.',
    obj:'Understand what we saw in the attendance indicators, how a weak closing affects students’ motivation, and why the end of one lesson is the start of the next.',
    offer:[['📊','Learn about the situation we spotted.'],['💔','See what a student loses when the lesson ends abruptly.'],['🔮','Understand why the closing prepares the next lesson.'],['✅','Check what you learned.']],
    sections:[ ['situacion','📊','The situation'], ['impacto','💔','When the lesson ends abruptly'], ['puente','🔮','The closing is the bridge to the next lesson'] ] },
  { id:'m2', n:2, e:'🏁', color:'#C4F046', title:'How to close a lesson effectively', check:'quiz',
    desc:'What changed in the new Code & Game lessons, the lesson structure, the four elements of a good closing, real examples, the final survey and a practical check. About 10 minutes.',
    obj:'Know how the new lessons help you manage time, and have a concrete routine to close every lesson: recap, recognise achievements, motivate practice at home and spark curiosity about the next lesson.',
    offer:[['🆕','Discover what’s new in the lessons.'],['🧱','Review the EM lesson structure.'],['🏁','Master the four elements of the closing.'],['🎬','Learn from closings in real lessons.']],
    sections:[ ['novedades','🆕','What’s new in the Code & Game lessons'], ['estructura','🧱','The lesson structure in one minute'], ['elementos','🏁','The four elements of a good closing'], ['ejemplos','🎬','Closings in real lessons'], ['practica','🎯','Quick practice: does it help the closing?'], ['lista','✅','Your closing in 5–7 minutes'], ['survey2','💬','Final survey'] ],
    needs:['s2'] }
];

/* ============================================================
   CHECKS (Module 1 and Module 2) — "a" is the number of the correct option (0 = first)
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { q:'Which of these is NOT one of the results of an effective closing?',
      o:['Students recognise what they learned.',
         'Students finish every card of the lesson.',
         'Students feel curious about the next lesson.'],
      a:1, e:'An effective closing helps students recognise what they learned, feel motivated to practise at home, feel curious and want to come back. Finishing every card isn’t the goal: an unfinished card can continue at home.' },
    { q:'Which part of the lesson does a student usually remember most?',
      o:['The start','The end','The theory explanation'],
      a:1, e:'The end is what a student remembers most. If the lesson ends abruptly, they leave without a clear achievement or a reason to come back.' },
    { q:'Why do we say the closing is the bridge to the next lesson?',
      o:['Because that’s when the homework from the previous lesson is checked.',
         'Because clear homework and a teaser that sparks curiosity give students reasons to practise and come back.',
         'Because that’s when the tutor explains the full syllabus of the next lesson.'],
      a:1, e:'Homework → they practise and arrive with something to show. Teaser → they have a reason to connect. Recognised achievement → they feel capable.' },
    { tf:true, q:'Attendance depends only on how the tutor ends the lesson.',
      a:1, e:'External and seasonal factors also matter: holidays, vacations and other commitments. This training focuses on the one that’s in your hands: how you end your lessons.' }
  ],
  m2:[
    { ctx:'60-minute lesson. It’s 6:53 and your group is still on the last CORE card. Some students are deeply focused on finishing it.',
      q:'What do you do?',
      o:['Let them finish: the closing can be done quickly in the last minute.',
         'Start the closing now: the unfinished card can continue at home or at the start of the next lesson.',
         'Skip the closing this time and make up for it with a longer recap next lesson.'],
      a:1, e:'Seven minutes left: it’s time to close. The closing doesn’t compete with the card, it completes it: what they didn’t finish becomes homework or the starting point of the next lesson.' },
    { ctx:'You start the closing. You want to know what your students are taking away from today’s lesson.',
      q:'How do you run the recap?',
      o:['“Was everything clear today?”',
         'You give a full summary of everything they saw, so nobody misses anything.',
         '“Valentina, what did you add to your game today, and how did you do it?” and then you ask another student.'],
      a:2, e:'The students do the recap: targeted questions, by name, that ask them to explain what they did and how. “Was it clear?” almost always gets a “yes” that tells you nothing.' },
    { ctx:'You have two minutes left to explain the homework.',
      q:'Which sentence motivates practice at home the most?',
      o:['“The homework is on the platform, don’t forget to do it.”',
         '“Your game already has coins. At home, add an enemy that takes away a life, publish it and send me the link with “Send”. Next lesson we’ll look at the best enemies.”',
         '“If you don’t do the homework, you’ll fall behind the group.”'],
      a:1, e:'Homework motivates when it’s the next version of their own project, it’s clear (what to do and how to submit it) and it has a purpose in the next lesson. Always remind them about “Send”.' },
    { ctx:'In the next lesson, students will program enemies for their game.',
      q:'Which teaser sparks the most curiosity?',
      o:['“Next lesson is number 8: Enemies and collisions.”',
         'Explaining in detail all the blocks they’ll use next lesson, so they arrive prepared.',
         '“Until now your hero had a clear path… Next lesson someone is going to try to stop them. Who do you think it will be?”'],
      a:2, e:'A good teaser is a promise, not a syllabus: it connects with their project, leaves an open question and makes them want to come back. It only works if you’ve read the next lesson.' }
  ]
};

/* ============================================================
   CAROUSELS — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  leccion:[
    { e:'👋', t:'Opening', ph:'Start · 5–7 min', c:'#BDE7FF', goal:'Connect and prepare: warm-up and greeting, link to the previous lesson, homework check and lesson goal.',
      d:['Greet each student by name.','Pick up the project where last lesson left it.','Check the homework: this closes the loop of the previous closing.'] },
    { e:'🃏', t:'Main part: the cards', ph:'Main part', c:'#E4FFC2', goal:'The cards aren’t just for looking at or reading: in them, students see the final result before they start, learn the theory and put it into practice in their own project. You set the pace.',
      d:['Keep an eye on the clock as they progress.','An unfinished card isn’t a problem: it can continue at home.'] },
    { e:'🏁', t:'Closing', ph:'Last 5–7 min', c:'#FFD9EC', goal:'The part that is most easily lost, and the one that most influences whether students want to come back.',
      d:['Recap · recognise · motivate the homework · spark curiosity.','Start on time, even if the activity isn’t finished.'] }
  ],
  cierre:[
    { e:'📋', t:'Recap what was learned', ph:'Element 1', c:'#FFD9EC', v:'recap', goal:'Students put into words what they did and learned. You don’t summarise: they do.',
      d:['Ask 2–3 students, by name.','Ask about what and how, not “was it clear?”.','Use the card’s quiz or recap list, if there is one.'],
      say:['“Sofia, what can your game do now that it couldn’t do at the start of the lesson?”'] },
    { e:'🏆', t:'Recognise achievements and effort', ph:'Element 2', c:'#FFF1B8', v:'praise', goal:'Every student leaves knowing their progress was noticed. Recognise the concrete achievement and the effort behind it.',
      d:['Be specific: name what they achieved.','Recognise effort and mistakes overcome too.','Share the recognition around: not always the same students.'],
      say:['“Tom, getting the score to work was hard and you didn’t give up: you tried three ways until it worked.”'] },
    { e:'🏠', t:'Motivate practice at home', ph:'Element 3', c:'#C9F2D6', v:'nexthw', goal:'Homework is the next version of their project. Explain it clearly and give it a purpose.',
      d:['Explain it in one or two sentences.','Connect it with what they just built.','Remind them to publish and send the link with “Send”.'],
      say:['“At home, add a new level to your game, publish it and send me the link. I want to play it next lesson!”'] },
    { e:'🔮', t:'Spark curiosity', ph:'Element 4', c:'#E9DDFF', v:'teaser', goal:'One sentence that makes them want to come back. A promise, not a syllabus.',
      d:['Read the next lesson while preparing this one.','Connect the teaser with their project.','Leave an open question.'],
      say:['“Next lesson your hero will find something unexpected… What do you think it will be?”'] }
  ]
};

/* Compare widget (Module 1): the end of the lesson seen by a student */
CONTENT.cmp = { finales:{
  v:['Time’s up: “OK everyone, we’re out of time. The homework is on the platform. Bye!”',
     'I leave without really knowing what I learned today.',
     'I don’t know what to do at home or what it’s for.',
     'Next lesson… what was it about? I’ll see if I join.'],
  s:['“Before we go: Lucia, what did you add to your game today?”',
     'I hear myself explaining what I achieved: I did it!',
     'I know exactly what to add at home, and that we’ll look at it next lesson.',
     '“Next time someone will try to stop your hero…” I want to know who!'] } };
CONTENT.cmpnoteX = { finales:{
  v:'Nothing went wrong in the lesson, but the ending left nothing behind: no clear achievement, no reason to practise, no curiosity to come back.',
  s:'The same 5 minutes, but the student leaves with an achievement, a mission for home and a question on their mind.' } };
CONTENT.cmpIcons = { finales:['😶','🤩'] };

/* ============================================================
   SECTION BODIES
   ============================================================ */
const pendingBox = (title, text) => `<div class="pending"><b>⏳ ${title}</b>${text}</div>`;

CONTENT.body = {
/* ---------------- Module 1 ---------------- */
situacion:() => `
  <p class="p">This training is for you, a <b>Code & Game</b> tutor who already teaches with the <b>EM model</b>. We looked at attendance and lesson quality in Code & Game lessons and found room for improvement in one very specific moment of the lesson: <b>the closing</b>.</p>
  ${CONTENT.data.stats.length
    ? `<div class="stats">${CONTENT.data.stats.map(s => `<div class="stat"><span class="sv">${s[0]}</span><span class="sl">${s[1]}</span></div>`).join('')}</div>${CONTENT.data.statsNote ? callout('warn', '📉', CONTENT.data.statsNote) : ''}
       <p class="p" style="font-size:13.5px;color:var(--muted);margin-top:8px">📊 ${CONTENT.data.statsSource}</p>`
    : pendingBox('Attendance analysis data', 'The key attendance and quality figures for Code & Game lessons will appear here.')}
  ${callout('tip', '🌦️', '<b>Not everything depends on you.</b> Attendance is also affected by external and seasonal factors: holidays, vacations and students’ other commitments. But some aspects of lesson quality do influence their motivation to keep attending, and that’s where you can make a difference.')}
  <div class="defn" style="margin-top:16px"><span class="de">🎯</span><p>This training doesn’t try to explain every factor behind attendance. It focuses on <b>one that is in your hands</b>: how you end your lessons.</p></div>`,

impacto:() => `
  <p class="p">The end of the lesson often gets pushed aside: time runs out, the activity isn’t finished, or it seems less important than building more. But for the student, <b>the ending is what they remember most</b> about the lesson. Switch and compare how they experience the end of the same lesson:</p>
  <div class="card">
    <div class="wh"><b>The same ending, seen by a student</b><span class="tag">Try it</span></div>
    <div class="seg" data-cmp="finales"><button data-k="v" aria-pressed="true">😶 Ends abruptly</button><button data-k="s" aria-pressed="false">🤩 With a closing</button></div>
    <div class="fbx" data-cmpout="finales"></div>
  </div>
  <p class="p" style="margin-top:18px">An effective closing achieves four things. Flip each card:</p>
  <div class="grid4">
    ${flip('1', '🧠', 'They recognise what they learned', 'By saying it in their own words, students notice their progress and lock it into memory.')}
    ${flip('2', '🏠', 'They’re motivated to practise at home', 'Clear homework linked to their project makes sense: it isn’t “just another chore”.')}
    ${flip('3', '🔮', 'They feel curious', 'A good teaser leaves an open question and positive expectations about the next lesson.')}
    ${flip('4', '🙌', 'They want to come back', 'They leave with a recognised achievement and something to look forward to: the best reason to join next time.')}
  </div>`,

puente:() => `
  <p class="p">Think of the closing as <b>the start of the next lesson</b>. Each element of the closing has a direct effect on what happens next:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🏠</span><h3>The homework</h3><p>If it’s clear and makes sense, the student practises at home and arrives at the next lesson with something to show.</p></div>
    <div class="ti"><span class="tie">🔮</span><h3>The teaser</h3><p>If it sparks curiosity, the student has a reason to join: they want to know what happens.</p></div>
    <div class="ti"><span class="tie">🏆</span><h3>The achievement</h3><p>If it’s recognised, the student leaves feeling capable, and that keeps their motivation going from one lesson to the next.</p></div>
  </div>
  ${callout('warn', '⏱️', '<b>“I just don’t have time.”</b> Some tutors told us that the content and structure of the lessons made it hard to reach the closing. We heard you: in Module 2 you’ll see what changed in the new Code & Game lessons so there’s time for every stage.')}`,

/* ---------------- Module 2 ---------------- */
novedades:() => `
  <p class="p">The Code & Game lessons have been updated, partly based on what tutors told us. The goal of these changes is to help you <b>manage time better</b> and run <b>every stage of the lesson</b> without sacrificing the closing.</p>
  ${CONTENT.data.news.length
    ? `<div class="news">${CONTENT.data.news.map(n => `<div class="newi"><span class="ne">${n.e}</span><h3>${n.t}</h3><p>${n.p}</p>${n.time ? `<span class="ntime">${n.time}</span>` : ''}</div>`).join('')}</div>`
    : pendingBox('What’s new in the lessons', 'The main changes in the new Code & Game lessons, and how each one helps you manage lesson time, will appear here.')}
  ${callout('good', '💡', '<b>What this means for you:</b> with the new lessons, the closing no longer competes with the content. It has its place in the lesson, and your job is to start it on time.')}
  ${callout('tip', '🔄', '<b>This is just the beginning.</b> The other lessons in Module 1 of Code & Game will also be updated gradually, based on tutors’ feedback and the ongoing development of the lessons.')}`,

estructura:() => `
  <p class="p">You already know how a lesson is structured in the EM model. A quick review, with an eye on the ending:</p>
  ${stc('leccion')}
  <p class="p" style="margin-top:22px">Always keep the <b>last 5–7 minutes</b> for the closing. Choose your lesson length and drag along it:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ 60-minute lesson</button><button data-len="90" aria-pressed="false">⏱️ 90-minute lesson</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Lesson minute"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Opening</div><div class="tl-main" id="tlMain">Cards: final result, theory and practice</div><div class="tl-close" id="tlClose">Closing</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  ${callout('warn', '⏰', '<b>The trick that works:</b> set a timer <b>5–8 minutes before the end</b>. When it rings, you start the closing, wherever you are. An unfinished card can continue at home or next lesson.')}`,

elementos:() => `
  <p class="p">A good closing has four elements. Go through them: each comes with phrases you can use and, where available, an example from a real lesson.</p>
  ${stc('cierre')}
  ${callout('tip', '🔁', 'In the EM training you saw the routine <b>recap → teaser → homework</b>. It’s the same routine: recognising achievements is part of the recap, and you can give the teaser before or after the homework. What matters is that <b>none is missing</b> and that the last message makes them want to come back.')}`,

ejemplos:() => `
  <p class="p">Watch these clips from real lessons. Don’t just watch them as examples: use the questions for each one to work out <b>which strategy the tutor uses and why it works</b>.</p>
  <div class="vex"><div class="vl"><span class="vk">Recap</span><h3>📋 Students say what they learned</h3>${videoBtn('recap', 'Watch the recap in a real lesson')}</div>
    <div class="vr"><b>Notice…</b><ul><li>Who talks more: the tutor or the students?</li><li>What kind of questions does the tutor ask?</li><li>How does the tutor use students’ names?</li></ul>
    <div class="why">✅ <b>Why it works:</b> when students explain in their own words, they realise what they achieved and remember it better.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Spark curiosity</span><h3>🔮 A teaser that makes them want to come back</h3>${videoBtn('teaser', 'Watch the teaser in a real lesson')}</div>
    <div class="vr"><b>Notice…</b><ul><li>How does the tutor connect the next lesson with the students’ project?</li><li>What do they leave unanswered, on purpose?</li><li>How long does it take?</li></ul>
    <div class="why">✅ <b>Why it works:</b> a short promise and an open question build anticipation without giving away all the content.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Motivate practice at home</span><h3>🏠 Clear homework with a purpose</h3>${videoBtn('nexthw', 'Watch the homework in a real lesson')}</div>
    <div class="vr"><b>Notice…</b><ul><li>Is it clear what to do and how to submit it?</li><li>How does the tutor link it to what they built today?</li><li>In what tone does the tutor say goodbye?</li></ul>
    <div class="why">✅ <b>Why it works:</b> homework that is the next version of their own project feels like a mission, not an obligation.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Attention until the end</span><h3>🙌 The whole group present until the last minute</h3>${videoBtn('attention', 'Watch a closing with the whole group')}</div>
    <div class="vr"><b>Notice…</b><ul><li>How does the tutor involve specific students?</li><li>What does the tutor do when someone disconnects?</li><li>How does the tutor celebrate the group’s achievements?</li></ul>
    <div class="why">✅ <b>Why it works:</b> students who take part, by name and with something to show, stay present until the end.</div></div></div>`,

practica:() => `
  <p class="p">Eight things a tutor says or does at the end of a lesson. Which ones help an effective closing? Decide for each one:</p>
  <div class="sorter" id="sorter">${[
    ['📋','“Juan, what did you add to your game today and how did you do it?”','yes','<b>Helps.</b> A name and a “how”: Juan recaps in his own words.'],
    ['🙂','“Is everything clear? Yes? Great, see you.”','no','<b>Doesn’t help.</b> “Is it clear?” gets an automatic “yes” and the lesson ends without a recap.'],
    ['🏆','“Ana, today your character jumps and dodges obstacles. That was the hardest part of the lesson!”','yes','<b>Helps.</b> It recognises a concrete achievement: Ana leaves knowing she made progress.'],
    ['⏳','Carrying on with the card until the last minute to finish it.','no','<b>Doesn’t help.</b> That’s exactly what makes them miss the recap, the homework and the teaser.'],
    ['🏠','“At home, add a sound when the hero wins, publish it and send me the link with “Send”.”','yes','<b>Helps.</b> Clear, linked to their project and with the reminder about “Send”.'],
    ['📄','“The homework is on the platform.”','no','<b>Doesn’t help.</b> With no explanation or purpose, homework feels optional.'],
    ['🔮','“Next time your game will have a final boss… how do you think you’ll beat it?”','yes','<b>Helps.</b> A short promise and an open question: pure curiosity.'],
    ['📚','Reading out the title of the next lesson while students are leaving.','no','<b>Doesn’t help.</b> A rushed teaser builds no anticipation: it arrives when nobody is listening.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">✅ Helps</button><button data-pick="no">❌ Doesn’t help</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>`,

lista:() => `
  <p class="p">The whole module in one list. Keep it close in your next lessons until it becomes a habit:</p>
  <div class="card"><div class="wh"><b>✅ My closing in 5–7 minutes</b><span class="tag">Tick them</span></div>
    <div class="ckgroup">☑️ Before the lesson</div>
    <div class="cklist">${['I also read the <b>next</b> lesson, to prepare the teaser.','I know the homework and how I’ll link it to their project.','I have a timer ready for 5–8 minutes before the end.'].map((t, i) => `<button class="ck" data-ck="a${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 In the closing</div>
    <div class="cklist">${['I start the closing on time, even if the card isn’t finished.','2–3 students, by name, recap what they did and how.','I recognise concrete achievements and effort.','I explain the homework, its purpose, and remind them about “Send”.','I end with a teaser that sparks curiosity.','I say goodbye on a positive note.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`,

};

/* ============================================================
   SURVEYS — start survey (pop-up when the training opens) and final survey (end of Module 2)
   Translate only the texts. Never change: ids, types, region keys, feeling keys.
   types: choice (feelings) · scale (1–5) · open (text, optional)
   ============================================================ */
CONTENT.surveys = {
  ui: {
    emailLabel: 'Corporate email', emailPlaceholder: 'name@kodland.org',
    emailError: 'Use your corporate email: it must contain @kodland.',
    regionLabel: 'Region', regionPlaceholder: 'Choose your region…',
    missing: 'Please complete the fields and the questions marked with ★.',
    sending: 'Sending…', send: 'Send survey',
    thanks: '✅ <b>Thank you!</b> We received your answers.',
    openPlaceholder: 'Write here…', optional: 'optional', low: 'Not at all', high: 'Completely',
    lockCheck: '🔒 Send the survey above to unlock the module check.'
  },
  // Region keys stay in English (they are the values saved in the Sheet). Translate only the names.
  regions: { brazil:'Brazil', latam:'LATAM', mena:'MENA', italy:'Italy', poland:'Poland', uk:'UK', usa:'USA', indonesia:'Indonesia', gcc:'GCC', cis:'CIS' },
  // Feeling keys stay in English. Translate only the labels.
  feelings: [['excited','🤩 Excited'],['curious','🤔 Curious'],['calm','😌 Calm'],['unsure','😕 Unsure'],['worried','😟 Worried'],['overwhelmed','😵 Overwhelmed']],
  start: {
    title: 'Before you start: how do you feel?',
    intro: 'A short survey: there are no right or wrong answers. Send it to start the training.',
    questions: [
      { id:'feeling', type:'choice', q:'How do you feel about this new launch right now?' },
      { id:'confidence', type:'scale', q:'How confident do you feel about teaching this new course or format?' },
      { id:'understand_why', type:'scale', q:'I understand why we are making this change.' },
      { id:'know_where', type:'scale', q:'I know where to find what I need and who to ask for help.' },
      { id:'worries', type:'open', optional:true, q:'What worries you most about this launch?' }
    ]
  },
  final: {
    title: 'Final survey: how do you feel now?',
    intro: 'This isn’t a test: there are no right or wrong answers. Send it to unlock the module check.',
    groups: [
      { title:'How you feel', questions:[
        { id:'feeling', type:'choice', q:'How do you feel about this new launch now?' },
        { id:'confidence', type:'scale', q:'How confident do you feel about teaching this new course or format?' },
        { id:'understand_why', type:'scale', q:'I understand why we are making this change.' },
        { id:'know_where', type:'scale', q:'I know where to find what I need and who to ask for help.' } ] },
      { title:'Your confidence to teach', questions:[
        { id:'ready_first_lesson', type:'scale', q:'I feel ready to run my first lesson from start to finish.' },
        { id:'know_course', type:'scale', q:'I know what students do and achieve in this course.' },
        { id:'ready_tools', type:'scale', q:'I feel ready to use Back Office, the Classroom and the tools in class.' } ] },
      { title:'The training materials', questions:[
        { id:'training_clear', type:'scale', q:'The training was clear and easy to follow.' } ] }
    ]
  }
};

}
