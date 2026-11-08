/* Kodland training · Cierre de clase en el modelo EM — LATAM
   Texts in language: es. This file holds ONLY texts; the logic is in index.html.
   Loaded by index.html when the URL has ?lang=es */
{
/* ============================================================
   Cierre de clase en el modelo EM — LATAM · Code & Game
   Contenido en español. Mismo formato que el entrenamiento EM Core:
   - Traduce o edita SOLO el texto entre comillas '…' y backticks `…`.
   - No cambies: etiquetas HTML, código ${…}, {marcadores}, ids/claves, emoji, nombres de archivo.
   - Dentro de '…' usa el apóstrofo tipográfico ’, nunca el recto.
   - CONTENT.data (más abajo): datos del análisis de asistencia y novedades de las lecciones.
   ============================================================ */
window.CONTENT = { lang: 'es' };

CONTENT.ui = {
  pageTitle: 'Capacitación sobre el Nuevo Modelo Educativo',
  footer: 'kodland · Nuevo Modelo Educativo · Capacitación para tutores',
  devLink: '🛠 Desarrollador',

  // Navigation
  logoSub: 'Nuevo Modelo Educativo',
  navCore: 'Básico {done}/{total}',
  navHome: '← Inicio',
  navModules: '← Todos los módulos',
  navBackModule: '← Volver al módulo',

  // Home
  heroKicker: '🚀 Capacitación para tutores',
  heroTitle: 'El <span class="hl">nuevo</span> modelo educativo',
  heroLead: 'Kodland está cambiando la forma de enseñar algunos de sus cursos. Esta capacitación te prepara para enseñar con el nuevo modelo: {n} módulos, en orden. Cada uno termina con una breve evaluación que desbloquea el siguiente.',
  fact1: '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador.',
  fact2: '<b>Con práctica incluida.</b> Tres simulaciones — Backoffice, Classroom y Kodland Sparks — que puedes repetir todas las veces que quieras.',
  progAllDone: 'Módulos completados 🎉',
  progLabel: 'módulos completados',
  moduleN: 'Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeStart: 'Empezar →',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Un último paso: el test DST en la página de la capacitación en el LMS.',
  homeDoneBtn: 'Ver qué sigue →',

  // Module page and its check
  eyebrow: 'Módulo {n} de {total}',
  ctaQuizTitle: 'Evaluación del módulo',
  ctaQuizText: '{n} preguntas cortas. Necesitas un 70% o más para aprobar.',
  ctaRiskTitle: 'Evaluación del módulo: detecta la estrategia de riesgo',
  ctaRiskText: '{n} situaciones reales. <b style="color:#E5484D">Esta evaluación es distinta de las demás: en cada caso eliges la estrategia que PERJUDICARÍA la clase</b>, no la buena. Necesitas un 70% o más para aprobar.',
  lockOne: '🔒 Completa {what} e ingresa su código arriba para desbloquear la evaluación.',
  lockMany: '🔒 Completa {what} e ingresa sus códigos arriba para desbloquear la evaluación.',
  listAnd: ' y ',
  startCheck: 'Empezar la evaluación →',
  retake: '🔁 Repetir la evaluación',

  // Simulations and completion codes
  launchSteps: ['Ábrela en una pestaña nueva.', 'Sigue todos los pasos hasta ver la pantalla final con tu código.', 'Vuelve a esta pestaña e ingresa el código abajo.'],
  codeOk: '✅ <b>{sim} completada.</b> Código aceptado.',
  codeLabel: '<b>🔑 Código de finalización</b> — lo encontrarás en la última pantalla de la {sim}.',
  codePlaceholder: 'p. ej., XX-0000-00',
  codeUnlock: 'Desbloquear',
  codeWrong: 'Ese código no es correcto. Revísalo en la última pantalla de la simulación.',

  // Small interactive pieces
  tapFlip: 'Toca para girar',
  mythReality: 'Realidad ✓',
  loopAgain: '<b>¡Y otra vez!</b> La reflexión se convierte en el próximo objetivo, una vuelta más a fondo.',
  ages: '{age} años',
  aiBar: 'Cuánta IA forma parte del proyecto',
  stageWas: 'Antes: <s>{was}</s> → ahora:',
  stageOf: '{i} de {n}',
  stageWatch: 'Mira «{t}» en una clase real',
  stageFirst: 'Volver a la primera',
  next: 'Siguiente →',
  sortWrong: '✗ No exactamente.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Notas del tutor — solo las ves tú',
  fmFollowing: '🔗 Siguiendo al profesor',
  fmStart: '👆 Sofía está en la misma clase, pero Lead the group está desactivado. Activa el interruptor.',
  fmOn: '✅ <b>Lead the group está ACTIVADO.</b> Sofía saltó a tu tarjeta, pero fíjate: ve la tarjeta <b>sin</b> tus notas del tutor. Ahora prueba <b>Siguiente tarjeta</b>.',
  fmOff: '⏸️ <b>Lead the group está DESACTIVADO.</b> Sofía se queda donde está, abras lo que abras.',
  fmMoved: '➡️ Pasaste a la tarjeta {t} y <b>Sofía pasó contigo</b>.',
  fmMovedAlone: '➡️ Pasaste a la tarjeta {t}, pero <b>Sofía sigue en la tarjeta {s}</b>. Puede que esté mirando otra cosa. Activa Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Apertura.</b> Calentamiento y saludo, conexión con la clase anterior, revisión de la tarea y objetivo de la clase.',
  tlCards: '<b>Las tarjetas.</b> Los estudiantes conocen el resultado final, aprenden la teoría y la practican. Vigila el reloj: quedan {left} minutos…',
  tlClose: '<b>Faltan {left} minutos: es hora de cerrar.</b> Estés donde estés en las tarjetas, empieza ya la rutina de cierre.',
  tlRoutine: '<b>Rutina de cierre.</b> Resumen hecho por los estudiantes → adelanto de la próxima clase → próxima tarea.',
  tlBye: '<b>¡Hasta pronto!</b> Todos se van sabiendo qué aprendieron, qué viene después y qué hacer en casa.',

  // Videos
  watchExample: 'Mira un ejemplo real',
  comingSoon: 'próximamente',
  close: 'Cerrar',
  videoDefault: 'Clase real',
  soonTitle: 'Video próximamente',
  soonText: 'Aquí verás esta parte de la clase en una sesión real. El video se está preparando y aparecerá aquí pronto.',
  zoomBadge: '🔍 Haz clic para ampliar',
  zoomAria: 'Abrir el video más grande',
  zoomDefault: 'Video',
  openDrive: '¿No se ve el video? Ábrelo en Google Drive ↗',
  zoomIn: 'Acercar',
  zoomOut: 'Alejar',
  zoomReset: 'Restablecer',
  zoomHint: 'Haz zoom con + / −, la rueda del mouse o un doble clic · arrastra para moverte · Esc o ✕ para cerrar',

  // Checks (quiz engine)
  qmeta: '{e} Evaluación del módulo {n} · {kind} {i} de {total}',
  qCase: 'Caso',
  qQuestion: 'Pregunta',
  riskQuestion: '¿Cuál <span class="hurt">PERJUDICARÍA</span> esta parte de la clase?',
  riskBanner: '⚠️ Atención: en esta evaluación eliges la estrategia <b>EQUIVOCADA</b>, la que <b>PERJUDICARÍA</b> la clase. ¡No la buena!',
  tfTrue: '✅ Verdadero',
  tfFalse: '❌ Falso',
  openHint: '✍️ Escribe tu propia respuesta, de al menos {min} caracteres. No hay una única redacción correcta: verás una respuesta modelo para compararla con la tuya.',
  openPlaceholder: 'Escribe tu respuesta aquí…',
  openSubmit: 'Enviar mi respuesta',
  openRecorded: '✅ <b>Respuesta registrada.</b> Respuesta modelo — compárala con la tuya:',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  fbRiskRight: '✅ <b>Correcto: esa es la estrategia que perjudicaría la clase.</b> ',
  fbRiskWrong: '❌ <b>Esa opción en realidad ayuda a la clase.</b> La de riesgo está resaltada en verde. ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',

  // Result of a check
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste correctamente <b>{score} de {n}</b>.',
  failText: 'Necesitas un 70% o más. Repasa el módulo e inténtalo de nuevo: puedes repetir la evaluación todas las veces que lo necesites.',
  nextUnlocked: 'El <b>Módulo {n} · {title}</b> ya está desbloqueado.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste toda la capacitación.',
  seeNext: 'Ver qué sigue →',
  reviewModule: '📖 Repasar el módulo',

  // Final page
  doneTitle: '¡Módulos completados!',
  doneText: `<p>¡Ya casi terminas! Vuelve a la página de la capacitación en el LMS desde la que accediste a esta capacitación. El test DST está disponible justo debajo de la capacitación.</p>
    <p>👉 <b>Debes completar y aprobar el test DST para que la capacitación se considere completada con éxito.</b> Si no completas el test DST, la capacitación quedará incompleta y podría vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  doneBadge: '✓ Listo',
  doneNexts: [
    ['📒', '<b>Antes de cada clase:</b> lee las notas del tutor en Backoffice y revisa si hay actualizaciones.'],
    ['🔑', '<b>Kodland Sparks:</b> tus credenciales te las da el departamento de Operaciones o el de Enseñanza.'],
    ['🏁', '<b>En cada clase:</b> una buena apertura, preguntas de razonamiento y un cierre de 5–7 minutos.'],
    ['🤖', '<b>Cuando los estudiantes usan IA:</b> la IA propone, el autor decide.']
  ],
  doneBack: 'Volver a los módulos',

  // Locked messages
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'Entendido'
};

/* ============================================================
   INTERFACE OVERRIDES — this training only
   ============================================================ */
Object.assign(CONTENT.ui, {
  pageTitle: 'Cierre de clase en el modelo EM · LATAM',
  footer: 'kodland · Code & Game · Cierre de clase en el modelo EM · LATAM',
  logoSub: 'Cierre de clase · EM',
  navCore: 'Progreso {done}/{total}',
  heroKicker: '🏁 Entrenamiento para tutores de Code & Game · LATAM',
  heroTitle: 'Cómo <span class="hl">cerrar</span> tus clases',
  heroLead: 'Un entrenamiento breve para tutores de Code & Game que se capacitaron en el modelo EM. Dos módulos, en orden: cada uno termina con una comprobación que desbloquea el siguiente. Al inicio y al final, una encuesta corta.',
  fact1: '<b>Unos 15 minutos.</b> Módulo 1: 5 minutos · Módulo 2: 10 minutos. Tu progreso se guarda en este navegador.',
  fact2: '<b>Tu opinión cuenta.</b> Dos encuestas cortas, al inicio y al final, para conocer tu experiencia con el cierre.',
  badgeSent: '✓ Enviada',
  nextUnlockedLabel: 'La <b>{label}</b> ya está desbloqueada: dos minutos y terminas.',
  goLabel: 'Ir a la {label} →',
  homeDoneText: 'Un último paso: el test DST en la página del entrenamiento en el LMS.',
  ctaQuizTitle: 'Comprobación final',
  ctaQuizText: '{n} situaciones reales de clase. Elige lo que harías. Necesitas un 70% o más para aprobar.',
  failText: 'Necesitas un 70% o más. Repasa el módulo e inténtalo de nuevo: puedes repetir la comprobación todas las veces que lo necesites.',
  qmeta: '{e} Comprobación del módulo {n} · {kind} {i} de {total}',
  allDoneText: 'Completaste los dos módulos y la encuesta.',
  doneTitle: 'Último paso: vuelve al LMS y completa el DST',
  doneText: `<p><b>¡Ya casi terminas!</b></p>
    <p>Regresa a la página del entrenamiento en el LMS, donde accediste a esta capacitación. Encontrarás el test DST justo debajo del contenido del entrenamiento.</p>
    <p><b>Debes realizar y aprobar el test DST para que el entrenamiento se considere completado.</b> Si no realizas el DST, el entrenamiento seguirá apareciendo como incompleto y podría vencer.</p>
    <p>La nota mínima para aprobar es del <b>80 %</b>.</p>
    <p>¡Muchos éxitos!</p>`,
  doneNexts: [
    ['⏰', '<b>Pon un temporizador</b> 5–8 minutos antes del final. Cuando suene, empiezas el cierre, estés donde estés.'],
    ['📋', '<b>Que resuman ellos:</b> 2–3 estudiantes, por su nombre, explican qué construyeron y cómo.'],
    ['🏠', '<b>Tarea con sentido:</b> conéctala con su proyecto y recuérdales enviarla con «Send».'],
    ['🔮', '<b>Lee la próxima clase</b> antes de dar esta, para que el adelanto genere verdadera curiosidad.']
  ],
  doneBack: 'Volver al inicio'
});

/* ============================================================
   DATA TO COMPLETE — fill these in and the training shows them automatically
   ============================================================ */
CONTENT.data = {
  /* Attendance analysis (Module 1). Each item: ['value', 'label']. Example: ['-12%', 'asistencia en ... vs ...']
     While the list is empty, a "pending" box is shown instead. */
  stats: [
    ['80%', 'de asistencia en los cursos de Code & Game en LATAM: <b>1 de cada 5</b> estudiantes falta o se va antes de la mitad de la clase.'],
    ['63%', 'de las clases de Code & Game terminan con un <b>adelanto de la próxima clase</b>. En los otros cursos que dan los mismos tutores: 85%.'],
    ['72%', 'de las clases de Code & Game terminan con un <b>resumen de lo aprendido</b>. En los otros cursos de los mismos tutores: 84%.']
  ],
  statsNote: 'En las revisiones de calidad, la apertura y la parte principal de las clases de Code & Game tienen resultados similares a los de otros cursos. <b>El cierre es la parte donde las clases de Code & Game quedan más por debajo: es el punto más débil en calidad.</b>',
  statsSource: 'Asistencia: octubre de 2026 · Calidad: revisiones de clases de agosto a octubre de 2026 · LATAM.',
  /* What changed in the new Code & Game lessons (Module 2). Each item: { e:'emoji', t:'title', p:'text', time:'optional label' }
     While the list is empty, a "pending" box is shown instead.
     key:true = a change that frees time for the closing (shown first, highlighted). */
  newsLesson: 'Code & Game · Nivel 1 · M1L1 «Dance Party»',
  newsLessonNote: 'Comparamos la misma clase de 60 minutos en la versión anterior y en la nueva. Las dos llevan a la misma clase siguiente: «Guardián del portal».',
  timing: {
    phases: [ ['Inicio y presentaciones', '#BDE7FF'], ['Abrir el proyecto', '#FFE7A8'], ['Construir', '#D4F58A'], ['Publicar', '#E3D9FF'], ['Muestra y reflexión', '#FFD9EC'] ],
    rows: [ ['Antes', [14, 17, 16, 4, 9]], ['Ahora', [10, 7, 30, 7, 6]] ],
    note: 'Antes, los estudiantes empezaban a construir en el <b>minuto 31</b>. Ahora empiezan en el <b>minuto 17</b>: la clase llega al final con tiempo para cerrar.'
  },
  news: [
    { key:true, e:'🃏', t:'La mitad de tarjetas: 8 en lugar de 16', p:'Se quitaron o unieron las tarjetas separadas de bienvenida, explicación de bloques, feedback de IA y reflexión final. Menos tarjetas = más tiempo para cada etapa, incluido el cierre.', time:'16 → 8 tarjetas' },
    { key:true, e:'🔗', t:'Abrir el proyecto es mucho más simple', p:'Ya no hay que descargar un archivo .sb3 y subirlo en Studio → Slot 1. Los estudiantes abren el proyecto listo en Sparks con un enlace directo.', time:'17 → 7 min' },
    { key:true, e:'📋', t:'Reglas y metodología, dentro del inicio', p:'Las reglas, las señales de Classroom y la metodología ya no son un bloque aparte: se integran en la bienvenida y las presentaciones.', time:'Bloque de 8 min eliminado' },
    { key:true, e:'🤖', t:'Un solo momento con IA', p:'Ya no se genera un fondo con IA en Sandbox ni se pide feedback a AI Buddy después de publicar. Ahora hay un único paso: Robby sugiere una idea antes de la música.', time:'2 pasos con IA → 1' },
    { key:true, e:'🏁', t:'Un cierre en una sola tarjeta', p:'Las tres tarjetas finales (feedback de IA, antes/después del festival y resumen con autoevaluación) ahora son una: muestran su proyecto y responden «¿qué no funcionó al principio y qué te ayudó?».', time:'3 tarjetas → 1 · 6 min' },
    { e:'🎪', t:'Nueva historia', p:'En lugar de la «primera misión» en el Laboratorio del Creador, la clase pasa en el Parque de Aventuras Increíbles, un mundo del Universo Kodland que se prepara para un festival.' },
    { e:'🧑‍🚀', t:'Eligen su personaje', p:'Cada estudiante elige uno de tres personajes: Robot, Héroe o Alien. Antes todos trabajaban con el mismo.' },
    { e:'🎶', t:'Ellos programan la música y las luces', p:'Antes la música ya venía en la plantilla y el estilo salía de un fondo hecho con IA. Ahora construyen dos scripts en el escenario: música y cambio de color. Construir el baile pasó de 8 a 20 minutos y es el centro de la clase.' },
    { e:'🌐', t:'Publicación más completa', p:'Se agregaron los ajustes de visibilidad (comentarios, uso publicitario, remixes, Discord) y una lista para comprobar que el proyecto está listo.' },
    { e:'⚖️', t:'Nueva calificación', p:'El proyecto pasa a valer 80 (antes 20) y la tarea 10 (antes 100). Cada tarjeta de clase sigue valiendo 10.' },
    { e:'📒', t:'Notas del tutor más breves', p:'Las notas ya no repiten la misma estructura en cada tarjeta. Son más cortas y el plan general de la clase está en la primera tarjeta: léela antes de empezar.' }
  ]
};

/* ============================================================
   MODULES
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🪞', color:'#F03D9E', title:'¿Por qué estás aquí?', check:'quiz', checkTitle:'Comprobación del módulo', checkText:'{n} preguntas cortas. Necesitas un 70% o más para aprobar.',
    desc:'La situación que detectamos en la asistencia, por qué el final de la clase importa tanto y una comprobación rápida. Unos 5 minutos.',
    obj:'Entender qué observamos en los indicadores de asistencia, cómo un cierre poco efectivo afecta la motivación de los estudiantes y por qué el final de una clase es el comienzo de la siguiente.',
    offer:[['📊','Conoce la situación que detectamos.'],['💔','Descubre qué pierde un estudiante cuando la clase termina de golpe.'],['🔮','Entiende por qué el cierre prepara la próxima clase.'],['✅','Comprueba lo que aprendiste.']],
    sections:[ ['situacion','📊','La situación'], ['impacto','💔','Cuando la clase termina de golpe'], ['puente','🔮','El cierre es el puente hacia la próxima clase'] ] },
  { id:'m2', n:2, e:'🏁', color:'#C4F046', title:'Cómo lograr un cierre efectivo', check:'quiz',
    desc:'Qué cambió en las nuevas lecciones de Code & Game, la estructura de la clase, los cuatro elementos de un buen cierre, ejemplos reales, la encuesta final y una comprobación práctica. Unos 10 minutos.',
    obj:'Saber cómo las nuevas lecciones te ayudan a gestionar el tiempo y tener una rutina concreta para cerrar cada clase: recapitular, reconocer logros, motivar la práctica en casa y despertar curiosidad por la próxima clase.',
    offer:[['🆕','Conoce las novedades de las nuevas lecciones.'],['🧱','Repasa la estructura de la clase EM.'],['🏁','Domina los cuatro elementos del cierre.'],['🎬','Aprende de cierres en clases reales.']],
    sections:[ ['novedades','🆕','Novedades en las nuevas lecciones de Code & Game'], ['estructura','🧱','La estructura de la clase, en un minuto'], ['elementos','🏁','Los cuatro elementos de un buen cierre'], ['ejemplos','🎬','Cierres en clases reales'], ['practica','🎯','Práctica rápida: ¿ayuda o no al cierre?'], ['lista','✅','Tu cierre en 5–7 minutos'], ['survey2','💬','Encuesta final'] ],
    needs:['s2'] }
];

/* ============================================================
   CHECKS (Module 1 and Module 2) — "a" is the number of the correct option (0 = first)
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { q:'¿Cuál de estas cosas NO es uno de los logros de un cierre efectivo?',
      o:['Los estudiantes reconocen lo que aprendieron.',
         'Los estudiantes terminan todas las tarjetas de la clase.',
         'Los estudiantes sienten curiosidad por la próxima clase.'],
      a:1, e:'Un cierre efectivo consigue que reconozcan lo que aprendieron, se motiven a practicar en casa, sientan curiosidad y quieran volver. Terminar todas las tarjetas no es el objetivo: una tarjeta sin terminar puede continuar en casa.' },
    { q:'Para un estudiante, ¿qué parte de la clase suele recordar más?',
      o:['El inicio','El final','La explicación de la teoría'],
      a:1, e:'El final es lo que más recuerda. Si la clase termina de golpe, se va sin un logro claro ni un motivo para volver.' },
    { q:'¿Por qué decimos que el cierre es el puente hacia la próxima clase?',
      o:['Porque es el momento de revisar la tarea de la clase anterior.',
         'Porque una tarea clara y un adelanto que despierta curiosidad le dan al estudiante motivos para practicar y volver.',
         'Porque es el momento de explicar el temario completo de la próxima clase.'],
      a:1, e:'La tarea → practican y llegan con algo que mostrar. El adelanto → tienen un motivo para conectarse. El logro reconocido → se sienten capaces.' },
    { tf:true, q:'La asistencia depende solo de cómo el tutor cierra la clase.',
      a:1, e:'También influyen factores externos y estacionales: festividades, vacaciones y otros compromisos. Este entrenamiento se enfoca en el que está en tus manos: cómo terminas tus clases.' }
  ],
  m2:[
    { ctx:'Clase de 60 minutos. Son las 6:53 y tu grupo todavía está en la última tarjeta CORE. Algunos estudiantes están muy concentrados terminándola.',
      q:'¿Qué haces?',
      o:['Los dejas terminar: el cierre se puede hacer rápido en el último minuto.',
         'Empiezas el cierre ahora: la tarjeta sin terminar puede continuar en casa o al inicio de la próxima clase.',
         'Te saltas el cierre esta vez y lo compensas con un resumen más largo la próxima clase.'],
      a:1, e:'Faltan 7 minutos: es el momento de cerrar. El cierre no compite con la tarjeta, la completa: lo que no terminaron se convierte en la tarea o en el punto de partida de la próxima clase.' },
    { ctx:'Empiezas el cierre. Quieres saber qué se llevan tus estudiantes de la clase de hoy.',
      q:'¿Cómo haces la recapitulación?',
      o:['«¿Quedó claro todo lo de hoy?»',
         'Haces tú un resumen completo de todo lo que vieron, para que nadie se pierda nada.',
         '«Valentina, ¿qué le agregaste hoy a tu juego y cómo lo lograste?» y luego le preguntas a otro estudiante.'],
      a:2, e:'La recapitulación la hacen los estudiantes: preguntas dirigidas, por su nombre, que les piden explicar qué hicieron y cómo. «¿Quedó claro?» casi siempre recibe un «sí» que no te dice nada.' },
    { ctx:'Te quedan dos minutos para explicar la tarea.',
      q:'¿Qué frase motiva más a practicar en casa?',
      o:['«La tarea está en la plataforma, no se olviden de hacerla».',
         '«Tu juego ya tiene monedas. En casa, agrégale un enemigo que te quite una vida, publícalo y envíame el enlace con “Send”. La próxima clase vemos los mejores enemigos».',
         '«Si no hacen la tarea, se van a atrasar con el grupo».'],
      a:1, e:'Una tarea motiva cuando es la siguiente versión de su propio proyecto, está clara (qué hacer y cómo entregarla) y tiene un propósito en la próxima clase. Recuerda siempre el «Send».' },
    { ctx:'En la próxima clase, los estudiantes van a programar enemigos para su juego.',
      q:'¿Qué adelanto despierta más curiosidad?',
      o:['«La próxima clase es la número 8: Enemigos y colisiones».',
         'Explicar en detalle todos los bloques que van a usar la próxima clase, para que lleguen preparados.',
         '«Hasta ahora tu héroe tenía el camino libre… La próxima clase alguien va a intentar detenerlo. ¿Quién creen que será?»'],
      a:2, e:'Un buen adelanto es una promesa, no un temario: conecta con su proyecto, deja una pregunta abierta y les da ganas de volver. Solo funciona si leíste la próxima clase.' }
  ]
};

/* ============================================================
   CAROUSELS — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  leccion:[
    { e:'👋', t:'Apertura', ph:'Inicio · 5–7 min', c:'#BDE7FF', goal:'Conecta y prepara: calentamiento y saludo, conexión con la clase anterior, revisión de la tarea y objetivo de la clase.',
      d:['Saluda a cada estudiante por su nombre.','Recupera el proyecto donde quedó la clase pasada.','Revisa la tarea: aquí se cierra el círculo del cierre anterior.'] },
    { e:'🃏', t:'Parte principal: las tarjetas', ph:'Desarrollo', c:'#E4FFC2', goal:'Las tarjetas no son solo para ver o leer: en ellas los estudiantes conocen el resultado final antes de comenzar, aprenden la teoría y la ponen en práctica en su propio proyecto. El ritmo lo marcas tú.',
      d:['Vigila el reloj mientras avanzan.','Una tarjeta sin terminar no es un problema: puede continuar en casa.'] },
    { e:'🏁', t:'Cierre', ph:'Últimos 5–7 min', c:'#FFD9EC', goal:'La parte que más fácilmente se pierde, y la que más influye en que los estudiantes quieran volver.',
      d:['Recapitular · reconocer · motivar la tarea · despertar curiosidad.','Empieza a tiempo, aunque la actividad no esté terminada.'] }
  ],
  cierre:[
    { e:'📋', t:'Recapitular lo aprendido', ph:'Elemento 1', c:'#FFD9EC', v:'recap', goal:'Los estudiantes ponen en palabras lo que hicieron y aprendieron. No eres tú quien resume: son ellos.',
      d:['Pregunta a 2–3 estudiantes, por su nombre.','Pregunta por el qué y el cómo, no «¿quedó claro?».','Usa el cuestionario o la lista de resumen de la tarjeta, si la hay.'],
      say:['«Sofía, ¿qué puede hacer hoy tu juego que no podía hacer al empezar la clase?»'] },
    { e:'🏆', t:'Reconocer logros y esfuerzos', ph:'Elemento 2', c:'#FFF1B8', v:'praise', goal:'Cada estudiante se va sabiendo que su avance se notó. Reconoce el logro concreto y el esfuerzo detrás.',
      d:['Sé específico: nombra lo que lograron.','Reconoce también el esfuerzo y los errores superados.','Reparte el reconocimiento: no siempre a los mismos.'],
      say:['«Tomás, te costó que el puntaje funcionara y no te rendiste: probaste tres maneras hasta lograrlo».'] },
    { e:'🏠', t:'Motivar la práctica en casa', ph:'Elemento 3', c:'#C9F2D6', v:'nexthw', goal:'La tarea es la siguiente versión de su proyecto. Explícala con claridad y dale un propósito.',
      d:['Explícala en una o dos frases.','Conéctala con lo que acaban de construir.','Recuérdales publicar y enviar el enlace con «Send».'],
      say:['«En casa, agrégale un nivel nuevo a tu juego, publícalo y envíame el enlace. ¡Quiero probarlo la próxima clase!»'] },
    { e:'🔮', t:'Despertar curiosidad', ph:'Elemento 4', c:'#E9DDFF', v:'teaser', goal:'Una frase que les dé ganas de volver. Es una promesa, no un temario.',
      d:['Lee la próxima clase mientras preparas esta.','Conecta el adelanto con su proyecto.','Deja una pregunta abierta.'],
      say:['«La próxima clase tu héroe va a encontrar algo que no esperaba… ¿Qué creen que será?»'] }
  ]
};

/* Compare widget (Module 1): the end of the lesson seen by a student */
CONTENT.cmp = { finales:{
  v:['Suena la hora: «Bueno, chicos, se nos acabó el tiempo. La tarea está en la plataforma. ¡Chau!»',
     'Me voy sin saber bien qué aprendí hoy.',
     'No sé qué hay que hacer en casa ni para qué sirve.',
     'La próxima clase… ¿de qué era? Ya veré si me conecto.'],
  s:['«Antes de irnos: Lucía, ¿qué le agregaste hoy a tu juego?»',
     'Me escucho explicando lo que logré: ¡lo hice yo!',
     'Sé exactamente qué agregar en casa y que lo vamos a ver la próxima clase.',
     '«La próxima vez alguien va a intentar detener a tu héroe…» ¡Quiero saber quién!'] } };
CONTENT.cmpnoteX = { finales:{
  v:'Nada estuvo mal en la clase, pero el final no dejó nada: ni un logro claro, ni un motivo para practicar, ni curiosidad por volver.',
  s:'Los mismos 5 minutos, pero el estudiante se va con un logro, una misión para casa y una pregunta en la cabeza.' } };
CONTENT.cmpIcons = { finales:['😶','🤩'] };

/* ============================================================
   SECTION BODIES
   ============================================================ */
const pendingBox = (title, text) => `<div class="pending"><b>⏳ ${title}</b>${text}</div>`;

CONTENT.body = {
/* ---------------- Module 1 ---------------- */
situacion:() => `
  <p class="p">Este entrenamiento es para ti, tutor de <b>Code & Game</b> en <b>LATAM</b> que ya enseña con el <b>modelo EM</b>. Revisamos cómo van la asistencia y la calidad de las clases de Code & Game, y encontramos una oportunidad de mejora en un momento muy concreto de la clase: <b>el cierre</b>.</p>
  ${CONTENT.data.stats.length
    ? `<div class="stats">${CONTENT.data.stats.map(s => `<div class="stat"><span class="sv">${s[0]}</span><span class="sl">${s[1]}</span></div>`).join('')}</div>${CONTENT.data.statsNote ? callout('warn', '📉', CONTENT.data.statsNote) : ''}
       <p class="p" style="font-size:13.5px;color:var(--muted);margin-top:8px">📊 ${CONTENT.data.statsSource}</p>`
    : pendingBox('Datos del análisis de asistencia', 'Aquí aparecerán las cifras clave de asistencia y calidad de las clases de Code & Game.')}
  ${callout('tip', '🌦️', '<b>No todo depende de ti.</b> La asistencia también se ve afectada por factores externos y estacionales: festividades, vacaciones y otros compromisos de los estudiantes. Pero hay aspectos de la calidad de la clase que sí influyen en su motivación para seguir asistiendo, y ahí es donde sí puedes hacer la diferencia.')}
  <div class="defn" style="margin-top:16px"><span class="de">🎯</span><p>Este entrenamiento no intenta explicar todos los factores de la asistencia. Se enfoca en <b>uno que está en tus manos</b>: cómo terminas tus clases.</p></div>`,

impacto:() => `
  <p class="p">El final de la clase suele quedar de lado: se acaba el tiempo, la actividad no está terminada o parece menos importante que seguir construyendo. Pero para el estudiante, <b>el final es lo que más recuerda</b> de la clase. Cambia y compara cómo vive el final de la misma clase:</p>
  <div class="card">
    <div class="wh"><b>El mismo final, visto por un estudiante</b><span class="tag">Pruébalo</span></div>
    <div class="seg" data-cmp="finales"><button data-k="v" aria-pressed="true">😶 Termina de golpe</button><button data-k="s" aria-pressed="false">🤩 Con cierre</button></div>
    <div class="fbx" data-cmpout="finales"></div>
  </div>
  <p class="p" style="margin-top:18px">Un cierre efectivo consigue cuatro cosas. Gira cada tarjeta:</p>
  <div class="grid4">
    ${flip('1', '🧠', 'Reconocen lo que aprendieron', 'Al decirlo con sus palabras, el estudiante se da cuenta de su avance y lo fija en la memoria.')}
    ${flip('2', '🏠', 'Se motivan a practicar en casa', 'Una tarea clara y conectada con su proyecto tiene sentido: no es «una obligación más».')}
    ${flip('3', '🔮', 'Sienten curiosidad', 'Un buen adelanto deja una pregunta abierta y expectativas positivas sobre la próxima clase.')}
    ${flip('4', '🙌', 'Quieren volver', 'Se van con un logro reconocido y algo que esperar: el mejor motivo para conectarse la próxima vez.')}
  </div>`,

puente:() => `
  <p class="p">Piensa en el cierre como <b>el comienzo de la próxima clase</b>. Cada elemento del cierre tiene una consecuencia directa en lo que pasa después:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🏠</span><h3>La tarea</h3><p>Si queda clara y tiene sentido, el estudiante practica en casa y llega a la próxima clase con algo que mostrar.</p></div>
    <div class="ti"><span class="tie">🔮</span><h3>El adelanto</h3><p>Si genera curiosidad, el estudiante tiene un motivo para conectarse: quiere saber qué pasa.</p></div>
    <div class="ti"><span class="tie">🏆</span><h3>El logro</h3><p>Si se reconoce, el estudiante se va sintiéndose capaz, y eso sostiene su motivación de una clase a otra.</p></div>
  </div>
  ${callout('warn', '⏱️', '<b>«Es que no me da el tiempo».</b> Algunos tutores nos contaron que el contenido y la estructura de las lecciones hacían difícil llegar al cierre. Lo escuchamos: en el Módulo 2 verás qué cambió en las nuevas lecciones de Code & Game para que el tiempo alcance para todas las etapas.')}`,

/* ---------------- Module 2 ---------------- */
novedades:() => `
  <p class="p">Las lecciones de Code & Game se actualizaron, en parte a partir de lo que nos contaron los tutores. El objetivo de estos cambios es que puedas <b>gestionar mejor el tiempo</b> y desarrollar <b>todas las etapas de la clase</b>, sin tener que sacrificar el cierre.</p>
  ${CONTENT.data.news.length ? (() => { const D = CONTENT.data, T = D.timing, item = n => `<div class="newi${n.key ? ' key' : ''}"><span class="ne">${n.e}</span><h3>${n.t}</h3><p>${n.p}</p>${n.time ? `<span class="ntime">${n.time}</span>` : ''}</div>`;
    return `<div class="nlesson"><span class="ntag">Solo Code & Game</span><b>${D.newsLesson}</b><p>${D.newsLessonNote}</p></div>
    ${T ? `<div class="card ntiming"><div class="wh"><b>⏱️ Los mismos 60 minutos, repartidos de otra forma</b></div>
      ${T.rows.map(r => `<div class="nrow"><span class="nlab">${r[0]}</span><div class="nbar">${r[1].map((m, k) => m ? `<span style="width:${m / 60 * 100}%;background:${T.phases[k][1]}" title="${T.phases[k][0]}: ${m} min">${m}′</span>` : '').join('')}</div></div>`).join('')}
      <div class="nleg">${T.phases.map(ph => `<span><i style="background:${ph[1]}"></i>${ph[0]}</span>`).join('')}</div>
      <p class="nnote">${T.note}</p></div>` : ''}
    <h3 class="nhead">🏁 Los cambios que hacen posible el cierre</h3>
    <div class="news">${D.news.filter(n => n.key).map(item).join('')}</div>
    <h3 class="nhead">✨ Otros cambios en la clase</h3>
    <div class="news">${D.news.filter(n => !n.key).map(item).join('')}</div>`; })()
    : pendingBox('Novedades de las nuevas lecciones', 'Aquí aparecerán los principales cambios incorporados en las nuevas lecciones de Code & Game y cómo cada uno ayuda a gestionar el tiempo de la clase.')}
  ${callout('good', '💡', '<b>Lo que esto significa para ti:</b> con las nuevas lecciones, el cierre ya no compite con el contenido. Tiene su lugar en la clase, y tu trabajo es empezarlo a tiempo.')}
  ${callout('tip', '🔄', '<b>Esto es solo el comienzo.</b> Las demás lecciones del Módulo 1 de Code & Game también se irán actualizando de forma gradual, a partir de los comentarios de los tutores y del desarrollo continuo de las lecciones.')}`,

estructura:() => `
  <p class="p">Ya conoces la estructura de una clase en el modelo EM. Un repaso rápido, con la mirada puesta en el final:</p>
  ${stc('leccion')}
  <p class="p" style="margin-top:22px">Reserva siempre los <b>últimos 5–7 minutos</b> para el cierre. Elige la duración de tu clase y arrastra a lo largo de ella:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Clase de 60 minutos</button><button data-len="90" aria-pressed="false">⏱️ Clase de 90 minutos</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minuto de la clase"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Apertura</div><div class="tl-main" id="tlMain">Tarjetas: resultado final, teoría y práctica</div><div class="tl-close" id="tlClose">Cierre</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  ${callout('warn', '⏰', '<b>El truco que funciona:</b> pon un temporizador <b>5–8 minutos antes del final</b>. Cuando suene, empiezas el cierre, estés donde estés. Una tarjeta sin terminar puede continuar en casa o en la próxima clase.')}`,

elementos:() => `
  <p class="p">Un buen cierre tiene cuatro elementos. Recórrelos: cada uno trae frases que puedes usar y, cuando está disponible, un ejemplo de una clase real.</p>
  ${stc('cierre')}
  ${callout('tip', '🔁', 'En el entrenamiento EM viste la rutina <b>resumen → adelanto → tarea</b>. Es la misma rutina: el reconocimiento de logros va dentro del resumen, y puedes dar el adelanto antes o después de la tarea. Lo importante es que <b>no falte ninguno</b> y que el último mensaje deje ganas de volver.')}`,

ejemplos:() => `
  <p class="p">Mira estos fragmentos de clases reales. No los mires solo como ejemplo: usa las preguntas de cada uno para descubrir <b>qué estrategia usa el tutor y por qué funciona</b>.</p>
  <div class="vex"><div class="vl"><span class="vk">Recapitular</span><h3>📋 Los estudiantes cuentan lo que aprendieron</h3>${videoBtn('recap', 'Mira el resumen en una clase real')}</div>
    <div class="vr"><b>Fíjate en…</b><ul><li>¿Quién habla más: el tutor o los estudiantes?</li><li>¿Qué tipo de preguntas hace el tutor?</li><li>¿Cómo usa los nombres de los estudiantes?</li></ul>
    <div class="why">✅ <b>Por qué funciona:</b> cuando el estudiante explica con sus palabras, se da cuenta de lo que logró y lo recuerda mejor.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Despertar curiosidad</span><h3>🔮 Un adelanto que deja ganas de volver</h3>${videoBtn('teaser', 'Mira el adelanto en una clase real')}</div>
    <div class="vr"><b>Fíjate en…</b><ul><li>¿Cómo conecta el tutor la próxima clase con el proyecto de los estudiantes?</li><li>¿Qué deja sin responder, a propósito?</li><li>¿Cuánto tiempo le lleva?</li></ul>
    <div class="why">✅ <b>Por qué funciona:</b> una promesa breve y una pregunta abierta generan expectativa sin adelantar todo el contenido.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Motivar la práctica en casa</span><h3>🏠 Una tarea clara y con propósito</h3>${videoBtn('nexthw', 'Mira la tarea en una clase real')}</div>
    <div class="vr"><b>Fíjate en…</b><ul><li>¿Queda claro qué hay que hacer y cómo entregarlo?</li><li>¿Cómo la relaciona con lo que construyeron hoy?</li><li>¿Con qué tono despide a los estudiantes?</li></ul>
    <div class="why">✅ <b>Por qué funciona:</b> una tarea que es la siguiente versión de su propio proyecto se siente como una misión, no como una obligación.</div></div></div>
  <div class="vex"><div class="vl"><span class="vk">Atención hasta el final</span><h3>🙌 El grupo presente hasta el último minuto</h3>${videoBtn('attention', 'Mira un cierre con todo el grupo')}</div>
    <div class="vr"><b>Fíjate en…</b><ul><li>¿Cómo hace participar el tutor a estudiantes concretos?</li><li>¿Qué hace cuando alguien se desconecta?</li><li>¿Cómo celebra los logros del grupo?</li></ul>
    <div class="why">✅ <b>Por qué funciona:</b> los estudiantes que participan, por su nombre y con algo que mostrar, se mantienen presentes hasta el final.</div></div></div>`,

practica:() => `
  <p class="p">Ocho cosas que un tutor dice o hace al final de la clase. ¿Cuáles ayudan a un cierre efectivo? Decide en cada caso:</p>
  <div class="sorter" id="sorter">${[
    ['📋','«Juan, ¿qué le agregaste hoy a tu juego y cómo lo hiciste?»','yes','<b>Ayuda.</b> Un nombre y un «cómo»: Juan recapitula con sus propias palabras.'],
    ['🙂','«¿Quedó claro todo? ¿Sí? Perfecto, nos vemos».','no','<b>No ayuda.</b> «¿Quedó claro?» recibe un «sí» automático y la clase termina sin recapitulación.'],
    ['🏆','«Ana, hoy tu personaje ya salta y esquiva obstáculos. ¡Eso era lo más difícil de la clase!»','yes','<b>Ayuda.</b> Reconoce un logro concreto: Ana se va sabiendo que avanzó.'],
    ['⏳','Seguir con la tarjeta hasta el último minuto para terminarla.','no','<b>No ayuda.</b> Es justo lo que hace que se pierdan el resumen, la tarea y el adelanto.'],
    ['🏠','«En casa, agrégale un sonido cuando el héroe gana, publícalo y envíame el enlace con “Send”».','yes','<b>Ayuda.</b> Clara, conectada con su proyecto y con el recordatorio del «Send».'],
    ['📄','«La tarea está en la plataforma».','no','<b>No ayuda.</b> Sin explicación ni propósito, la tarea se siente opcional.'],
    ['🔮','«La próxima vez tu juego va a tener un jefe final… ¿cómo creen que habrá que vencerlo?»','yes','<b>Ayuda.</b> Una promesa breve y una pregunta abierta: curiosidad pura.'],
    ['📚','Leer el título de la próxima clase mientras los estudiantes se desconectan.','no','<b>No ayuda.</b> Un adelanto apurado no genera expectativa: llega cuando ya nadie escucha.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">✅ Ayuda</button><button data-pick="no">❌ No ayuda</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>`,

lista:() => `
  <p class="p">Todo el módulo en una lista. Tenla a mano en tus próximas clases hasta que se vuelva un hábito:</p>
  <div class="card"><div class="wh"><b>✅ Mi cierre en 5–7 minutos</b><span class="tag">Márcalas</span></div>
    <div class="ckgroup">☑️ Antes de la clase</div>
    <div class="cklist">${['Leí también la <b>próxima</b> clase, para preparar el adelanto.','Sé cuál es la tarea y cómo la voy a conectar con su proyecto.','Tengo listo un temporizador para 5–8 minutos antes del final.'].map((t, i) => `<button class="ck" data-ck="a${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 En el cierre</div>
    <div class="cklist">${['Empiezo el cierre a tiempo, aunque la tarjeta no esté terminada.','2–3 estudiantes, por su nombre, recapitulan qué hicieron y cómo.','Reconozco logros y esfuerzos concretos.','Explico la tarea, su propósito y recuerdo el «Send».','Cierro con un adelanto que despierte curiosidad.','Me despido con un tono positivo.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`,

};

/* ============================================================
   SURVEYS — start survey (pop-up when the training opens) and final survey (end of Module 2)
   Translate only the texts. Never change: ids, types, region keys, feeling keys.
   types: choice (feelings) · scale (1–5) · open (text, optional)
   ============================================================ */
CONTENT.surveys = {
  ui: {
    emailLabel: 'Correo corporativo', emailPlaceholder: 'nombre@kodland.org',
    emailError: 'Usa tu correo corporativo: debe contener @kodland.',
    regionLabel: 'Región', regionPlaceholder: 'Elige tu región…',
    missing: 'Completa los campos y las preguntas marcadas con ★.',
    sending: 'Enviando…', send: 'Enviar encuesta',
    thanks: '✅ <b>¡Gracias!</b> Recibimos tus respuestas.',
    openPlaceholder: 'Escribe aquí…', optional: 'opcional', low: 'Nada', high: 'Totalmente',
    lockCheck: '🔒 Envía la encuesta de arriba para desbloquear la comprobación del módulo.'
  },
  // Region keys stay in English (they are the values saved in the Sheet). Translate only the names.
  regions: { brazil:'Brasil', latam:'LATAM', mena:'MENA', italy:'Italia', poland:'Polonia', uk:'Reino Unido', usa:'Estados Unidos', indonesia:'Indonesia', gcc:'GCC', cis:'CIS' },
  // Feeling keys stay in English. Translate only the labels.
  feelings: [['excited','🤩 Entusiasmado'],['curious','🤔 Con curiosidad'],['calm','😌 Tranquilo'],['unsure','😕 Inseguro'],['worried','😟 Preocupado'],['overwhelmed','😵 Abrumado']],
  start: {
    title: 'Antes de empezar: ¿cómo te sientes?',
    intro: 'Una encuesta corta: no hay respuestas correctas ni incorrectas. Envíala para empezar el entrenamiento.',
    questions: [
      { id:'feeling', type:'choice', q:'¿Cómo te sientes con este nuevo lanzamiento en este momento?' },
      { id:'confidence', type:'scale', q:'¿Qué tan seguro te sientes para enseñar este nuevo curso o formato?' },
      { id:'understand_why', type:'scale', q:'Entiendo por qué estamos haciendo este cambio.' },
      { id:'know_where', type:'scale', q:'Sé dónde encontrar lo que necesito y a quién pedir ayuda.' },
      { id:'worries', type:'open', optional:true, q:'¿Qué es lo que más te preocupa de este lanzamiento?' }
    ]
  },
  final: {
    title: 'Encuesta final: ¿cómo te sientes ahora?',
    intro: 'No es un test: no hay respuestas correctas ni incorrectas. Envíala para desbloquear la comprobación del módulo.',
    groups: [
      { title:'Cómo te sientes', questions:[
        { id:'feeling', type:'choice', q:'¿Cómo te sientes ahora con este nuevo lanzamiento?' },
        { id:'confidence', type:'scale', q:'¿Qué tan seguro te sientes para enseñar este nuevo curso o formato?' },
        { id:'understand_why', type:'scale', q:'Entiendo por qué estamos haciendo este cambio.' },
        { id:'know_where', type:'scale', q:'Sé dónde encontrar lo que necesito y a quién pedir ayuda.' } ] },
      { title:'Tu confianza para enseñar', questions:[
        { id:'ready_first_lesson', type:'scale', q:'Me siento listo para dar mi primera clase de principio a fin.' },
        { id:'know_course', type:'scale', q:'Sé qué hacen y qué logran los estudiantes en este curso.' },
        { id:'ready_tools', type:'scale', q:'Me siento listo para usar Back Office, el Classroom y las herramientas en clase.' } ] },
      { title:'Los materiales del entrenamiento', questions:[
        { id:'training_clear', type:'scale', q:'El entrenamiento fue claro y fácil de seguir.' } ] }
    ]
  }
};

}
