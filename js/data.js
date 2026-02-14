const FECHA_CLAVE       = "09/08/2025";
const TEXTO_BIENVENIDA  = "Ingresa nuestra fecha especial";
const TEXTO_ERROR       = "Esa no es nuestra fecha, mi amor… 💔";
const TEXTO_EXITO       = "Bienvenido/a a nuestro universo 💖";

const ALBUM_TITULO      = "Nuestros Recuerdos";
const ALBUM_SUBTITULO   = "Cada foto guarda un pedacito de nosotros";
const ALBUM_FOOTER      = "Hecho con todo mi amor para ti";

const TW_SPEED          = 42;
const TW_PAUSE_COMMA    = 180;
const TW_PAUSE_PERIOD   = 320;
const TW_PAUSE_ELLIPSIS = 450;
const TW_PAUSE_NEWLINE  = 500;

const AUDIO_VOL_INICIAL = 0.45;
const AUDIO_FADE_MS     = 1200;
const CAROUSEL_SPEED    = 0.25;

const recuerdos = [
  {
    id: 1,
    imagen: "assets/images/01.jpg",
    musica: "assets/music/01.mp3",
    titulo: "6 meses después… y todo empezó aquí",
    texto: "Desde que se planeó el almuerzo en la casa de la señora Carmen y supe que ibas a ir, acepté inmediatamente. Incluso pagué mi parte por adelantado porque tus compañeras pensaban que no iba a ir… pero yo ya tenía una razón muy clara para estar ahí: tú .Sé que no te gusta mucho esta fotito, pero a mí me encanta. Porque sé que ahí empezó todo. Me hubiera gustado tener más fotos de ese día, pero lo que sí tengo es el recuerdo completo guardado en el corazón. Ese día solo tomé una decisión… y fue quedarme en tu vida por mucho tiempo. Y si tú quieres, para toda la vida. Siempre me dices que caes fácil… pero yo diría que te conquisté. Saqué mis mejores dotes de Romeo solo porque me gustabas muchísimo. Fui con miedo, sí… pero arriesgué. Recuerdo cuando llegué y tomamos ese soju de fresa que había comprado. Estaba nervioso, pero decidido. Después el juego de búsqueda que organizó la señora Carmen, tú ayudando a esconder las pistas, yo prestándote mi casaca porque tenías frío y caminando detrás de ti sintiendo una conexión enorme que no sabía explicar. El almuerzo listo, las risas, cuando se tomaron todo mi six pack y tú casi todo el vino 😂. El juego del sapito donde eres mejor que yo (aunque Maga terminó ganando). Cuando Rosselin nos tomó esa foto sentados juntos. Cuando pasamos a la sala y aproveché para tomar tu mano mientras Virginia nos fastidiaba. Y lo mejor… cuando ya nos íbamos y la señora Carmen nos llevó hasta la avenida principal. Ese momento en el carro… donde “te robé” un besito… bueno, fueron como tres 😅. Después el colectivo hasta el Puente Santa Anita, dejando a Virginia en su casa, caminando por la avenida El Sol… y terminando en el mirador de Barranco. Ahí fue donde te robé — o nos robamos — muchos besitos. Ahí te dije que me gustabas y que quería ser tu enamorado… y me choteaste 😭😂. Pero cuando ya era hora de irnos, me dijiste que podíamos ir a tu casa a descansar… y nunca olvidaré la primera vez que subí esos cinco pisos, entrar a tu cuarto y la manera en que me trataste. Ese día me confirmó que abrir mi corazón había sido la decisión correcta. Dormir abrazados… despertar juntos. Desde el día uno ya convivíamos 😂. Pero fue perfecto. Fue nuestro inicio. Hoy celebramos 6 mesecitos… y sigo tomando la misma decisión que ese día: arriesgarme por ti, elegirte, y quedarme. Porque si algo empezó ahí… yo quiero que nunca termine 🤍✨."
  },
  {
id: 3,
  imagenes: [
    "assets/images/02-1.jpg",
    "assets/images/02-02.jpg",
    "assets/images/02-03.jpg"
  ],
    musica: "assets/music/02.mp3",
    titulo: "14/08/2025 – El día que comprobamos que esto iba en serio",
    texto: "Ese día salimos del trabajo como cualquier otro día, pero sin saber que iba a convertirse en uno de esos recuerdos que se quedan grabados para siempre. Fuimos al Parque de la Amistad y al Parque del Amor, era la primera vez que íbamos juntos ahí. Caminamos todo el parque sin apuro, conversando, conociéndonos más, observando cada detalle como si el tiempo estuviera de nuestro lado. Recuerdo que ese día, más que solo pasear, también estábamos viendo si realmente íbamos a aguantar. No lo dijimos directamente, pero en cada conversación y en cada mirada estábamos descubriendo si nuestras formas, nuestras diferencias y nuestras ideas podían caminar juntas, y lo hicieron. Al salir de ahí habíamos quedado en comer unas Bembos, era el plan sencillo y seguro, pero en el camino decidí cambiarlo y te dije que mejor fuéramos a otro lugar que yo conocía. Te llevé hasta ahora a tu peor pesadilla, a comer una pequeña suprema. Era un lugar al que yo iba seguido porque trabajaba al frente, era parte de mi rutina y de mi historia, y quería que conocieras un pedacito de mi mundo. La pasamos lindo ese día, fue un día tranquilo, real y lleno de intención. También recuerdo que tuvimos una pequeña discusión, tal vez la primera de muchas, pero solo fue eso, pequeña. No fue una pelea grande, fue más bien un primer ajuste, un primer paso para entender cómo reaccionamos y cómo sentimos, fue parte del proceso de conocernos de verdad. Ese 14 de agosto no fue solo una salida después del trabajo, fue uno de los primeros momentos en los que entendí que contigo quería seguir caminando, incluso cuando haya diferencias, incluso cuando haya pequeños roces, porque ese día comprobamos que no se trata de no discutir, sino de quedarse, de seguir hablando y de seguir eligiéndonos. Y desde entonces cada recuerdo contigo tiene algo especial, pero ese fue el primero que marcó que esto iba en serio."
  },
  {
 id: 2,
  imagenes: [
    "assets/images/03-1.jpg",
    "assets/images/03-02.jpg"
  ],
    musica: "assets/music/03.mp3",
    titulo: "Nuestra primera salida… antes de ser ‘nosotros’",
    texto: "08/08 Esa fue una de nuestras primeras salidas.Nos fuimos al Coney Park del Mall del Sur, saliendo del trabajo… y aunque aún no éramos oficialmente “juntitos”, ya se sentía como si lleváramos años siendo pareja.Ese día salimos con la emoción latiendo fuerte en el corazón. Todo era nuevo para nosotros dos. Cada risa, cada mirada, cada momento tenía algo especial… algo que nos hacía sentir que estábamos construyendo algo importante sin siquiera decirlo Jugamos muchísimoCompetimos en el basket como si nos fuera la vida en eso, y en el bowling —donde tú eres experta— me dejaste claro quién mandaba ahí 😌🎳.Tuvimos una suerte increíble. Recuerdo cuando giraste la máquina de tickets y te llevaste 1000 puntos… fue como si el universo estuviera de nuestro lado. Y después me diste tu suerte, y yo también gané. Ese momento fue tan simple, pero tan nuestro.Y ahí fue cuando te regalé tu primer peluche. Me metí a la maquinita de los peluches con nervios, concentrado como si fuera una misión importante… y cuando lo saqué para ti, sentí algo distinto. No era solo un peluche. Era el primer detalle de muchos que quería darte. Sin duda alguna, esa fue nuestra primera salida oficial… incluso antes de que fuéramos oficialmente “juntitos”.Fue el inicio de algo que ninguno de los dos sabía cuánto iba a crecer.Y cada vez que recuerdo ese 08/08, sonrío… porque ahí comenzó a sentirse lo que hoy es una certeza en mi corazón 🤍✨"
  },
  {
    id: 4,
  imagenes: [
    "assets/images/04-1.jpg",
    "assets/images/04-02.jpg",
    "assets/images/04-03.jpg",
    "assets/images/04-04.jpg",
  ],
    musica: "assets/music/04.mp3",
    titulo: "La primera vez que elegimos estar solos",
    texto: "16/08/2026 Lo recuerdo bien, un sábado que salimos en nuestra salida oficial ya como enamorados. Teníamos muchos planes buenos, muchas opciones sobre la mesa, pero al final escogimos simplemente estar juntos. Si mal no recuerdo, hasta jugamos a la ruleta para decidir el plan, y eso lo hizo aún más divertido. Fue un día que siempre voy a guardar en mi memoria. Fue la primera vez que pisábamos un hotel, y nunca fuimos con la intención de que pasara algo más. Para nosotros era el plan perfecto: una mañana juntos por primera vez, después de aquel primer día que marcó todo. Recuerdo cuando llegamos, los dos nerviosos. Yo te miraba y te veía un poco preocupada, con miedo quizá, y en mi cabeza solo pensaba en que no quería que creyeras que lo único que buscaba era intimidad contigo. Lo que yo quería era un espacio para estar los dos tranquilos, sin interrupciones, solo disfrutándonos. Nos pusimos a ver películas, una trilogía romántica que acompañó esa mañana y esa tarde. Fueron horas de risas, de besos, de conversación profunda, de estar a solas y divertirnos como dos personas que estaban empezando a construir algo real. Para el almuerzo pedimos una salchipapa por servicio a la habitación y la comimos entre risas y más conversación. También recuerdo que en ese momento las cuñis se preocupaban mucho más por ti, preguntando dónde estabas y qué hacías, y las entiendo porque aún no me conocían bien. Salimos como al atardecer, con esa memoria marcada, con esos recuerdos que nos llevamos guardados y que hasta hoy siguen siendo parte de nuestra historia."
  },
  {
    id: 5,
    imagenes: [
    "assets/images/05-1.jpg",
    "assets/images/05-02.jpg",
    "assets/images/05-03.jpg",
    "assets/images/05-04.jpg",
  ],
    musica: "assets/music/05.mp3",
    titulo: "Nuestro almuerzo secreto",
    texto: "29/09 Fue un día normal en la oficina, pero para mí no era un día cualquiera porque quería almorzar juntito a ti, aunque sabíamos que era difícil. Pensé en un pequeño plan y te dije que invitaras a tu amiga Gabi para que pudiéramos ir a comer los tres, porque sabía que si íbamos solo nosotros no podríamos estar tranquilos por el temor de que alguien nos viera y comenzaran los rumores. Así el plan se veía más natural y podíamos compartir ese momento sin tanta presión. Siendo sincero, creo que Gabi disfrutó más la comida que nosotros, pero tú y yo sabíamos que no se trataba solo de ir a comer, sino de estar juntos aunque fuera un rato en medio del trabajo. Ese día casi no conversamos mucho, pero bastaron las miradas que nos dábamos y las agarradas de mano bajo la mesa para que todo valiera la pena. Fue un día de locos, con nervios y emoción, pero un día junto a ti siempre es lo máximo."
  },
  {
    id: 6,
    imagenes: [
    "assets/images/06-1.jpg",
    "assets/images/06-02.jpg",
    "assets/images/06-03.jpg",
    "assets/images/06-04.jpg",
  ],
    musica: "assets/music/06.mp3",
    titulo: "Amar de verdad",
    texto: "31/08 Fue un día de mucho movimiento para nosotros. Recuerdo que empezó saliendo a almorzar al Jockey, como haciendo hora porque teníamos un plancito por la tarde: ir a nuestro primer concierto juntos. Para ser sincero, no me gustan mucho los conciertos porque hay demasiada gente, pero acepté ir porque quería estar contigo. Y la verdad, me encantó. No fue como yo pensaba, fue un concierto tranquilo y especial. Para ese momento tú ya te habías atrevido a decirme que me querías, algo que agradezco y admiro mucho porque fuiste valiente. Me lo habías dicho días antes y aunque no tengo una foto para guardar ese instante, recuerdo perfectamente cómo me lo dijiste. Quizá por eso me atreví a decirte que te amaba ahí, en medio del concierto. Pensabas que estaba borracho, pero no lo estaba. Era algo que tenía que decirte y no me arrepiento. Te lo dije al oído, me miraste como si estuviera loco, pero sí, estaba loco, loco de amor por ti. No podría explicarlo con palabras, solo lo sentí y te lo dije. Me dijiste que no me iba a acordar después de ese día, pero sí lo hice, y hoy te lo recuerdo: ahí fue el momento en que acepté y dije que te amaba. No es que no lo sintiera antes, es que no sabía cómo hacerlo, y desde ese momento te vengo amando cada día más y más."
  },
  {
    id: 7,
    imagenes: [
    "assets/images/07-1.jpg",
    "assets/images/07-02.jpg",
    "assets/images/07-03.jpg",
    "assets/images/07-04.jpg",
  ],
    musica: "assets/music/07.mp3",
    titulo: "El peor broaster y la mejor compañía",
    texto: "31/08 Un domingo en el que decidimos ir al Parque de las Aguas, recuerdo mucho de ese día. Pasamos por el túnel del agua y terminé mojándome, como siempre, entre risas y conversaciones profundas en las que seguíamos conociéndonos a fondo. También recuerdo que entramos a la zona más decorada y nos quedamos conversando ahí, fue en ese momento cuando te dije que me acordaba perfectamente de lo que te había dicho en el concierto, que te amaba. Fue un momento de declaraciones y nervios, de pensar que tal vez no sintieras lo mismo o que creyeras que todo fue muy apresurado. Recuerdo también que soy un mal fotógrafo jajajaja, pero prometo que iré aprendiendo. La anécdota que más tengo presente fue cuando salimos del parque y fuimos a buscar algo para comer, encontramos una brostería y nos dieron el peor broaster recalentado en microondas de mi vida, pero con la mejor compañía. Otra anécdota fue el regreso, cuando nos regresamos y lo que pasó ahí queda en nuestras memorias 😈."
  },
  {
    id: 8,
    imagenes: [
    "assets/images/08-1.jpg",
    "assets/images/08-02.jpg"
  ],
    musica: "assets/music/08.mp3",
    titulo: "Nuestro primer mes… de dudas, conversaciones y mucho amor",
    texto: "Nuestro primer mes no fue sencillo, tuvimos conversaciones incómodas y momentos de duda que nos hicieron pensar mucho. Recuerdo ese primer mensaje que me enviaste diciendo que tal vez no íbamos al mismo ritmo al momento de querernos y amarnos. No lo recuerdo con tristeza ni resentimiento, sino como un momento importante en el que ambos estábamos tratando de entender lo que sentíamos. Sé que fue difícil para ti y también lo fue para mí. Te pedí que conversáramos y que no tomáramos decisiones apresuradas. Al día siguiente ya tenía preparado un ramo de flores que había planeado días antes, lo tenía listo porque desde el inicio supe que quería tener detalles contigo. Yo suelo planear lo que quiero darte cada mes, no por obligación ni por cumplir, sino porque me gusta que cada cosa tenga intención y significado. Eres la primera persona a la que le entrego un ramo de flores, un detalle que para mí no cuesta por el dinero sino por lo que representa. Creo en el amor a la antigua, en los detalles, en elegir colores pensando en ti. Cuando te pedí ir a conversar al Mall del Sur fue porque quería entendernos mejor. Aunque sentía que estabas confundida, decidí apostar por lo que estábamos construyendo. Ese día hablamos con calma, entre bromas y momentos sinceros, entendimos que no era falta de cariño sino miedos y pensamientos que necesitaban aclararse. No fui con miedo, fui con la intención de cuidar lo que teníamos. Ese primer mes nos enseñó que el amor también se construye conversando y eligiéndose. Y hoy puedo decir que todo valió la pena y que cada día sigue valiéndolo más."
  },
];