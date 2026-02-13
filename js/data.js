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
id: 2,
  imagenes: [
    "assets/images/02-01.jpg",
    "assets/images/02-02.jpg",
    "assets/images/02-03.jpg"
  ],
    musica: "assets/music/02.mp3",
    titulo: "El momento que todo cambió",
    texto: "El mundo se detuvo un instante y solo existíamos tú y yo. Fue la primera vez que sentí que el tiempo era nuestro, que cada segundo juntos valía más que mil aventuras separados."
  },
  {
    id: 3,
    imagen: "assets/images/03.jpg",
    musica: "assets/music/03.mp3",
    titulo: "Tu risa, mi canción favorita",
    texto: "No importaba dónde estábamos ni qué hacíamos, bastaba escucharte reír para saber que todo estaría bien. Cada vez que veo esta foto vuelvo a sentir esas mariposas que nunca se han ido."
  },
  {
    id: 4,
    imagen: "assets/images/04.jpg",
    musica: "assets/music/04.mp3",
    titulo: "Nuestro refugio secreto",
    texto: "Aquí las palabras sobraban porque nuestras miradas decían todo. Si pudiera regresar a un solo momento de mi vida, elegiría este, una y mil veces, sin pensarlo ni un segundo."
  },
  {
    id: 5,
    imagen: "assets/images/05.jpg",
    musica: "assets/music/05.mp3",
    titulo: "Mi regalo más bonito",
    texto: "En esta foto veo más que una imagen: veo promesas cumplidas, abrazos eternos y un amor que crece cada día. Gracias por ser mi persona favorita en todo el universo."
  },
  {
    id: 6,
    imagen: "assets/images/06.jpg",
    musica: "assets/music/06.mp3",
    titulo: "Amar de verdad",
    texto: "Dicen que el amor se demuestra con actos pequeños, y tú me lo demuestras cada día. En cada detalle, en cada mirada, en cada buenos días y buenas noches."
  },
  {
    id: 7,
    imagen: "assets/images/07.jpg",
    musica: "assets/music/07.mp3",
    titulo: "Mi lugar favorito",
    texto: "No importa la ciudad, el clima ni la hora. Donde tú estés, ahí es donde quiero estar siempre. Te amo más de lo que las palabras pueden expresar."
  },
  {
    id: 8,
    imagen: "assets/images/08.jpg",
    musica: "assets/music/08.mp3",
    titulo: "Esto es solo el comienzo",
    texto: "Cada día a tu lado es una nueva página de nuestra historia de amor. Y quiero seguir escribiéndola contigo, hoy, mañana y siempre. Te amo infinitamente."
  }
];