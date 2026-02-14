/* ═══════════════════════════════════
   GLOBALS
   ═══════════════════════════════════ */
let audioActual = null;
let audioFadeTimer = null;
let twTimer = null;
let twIdx = 0;
let isPaused = false;

/* ═══════════════════════════════════
   BOOT
   ═══════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  try { initValentinFlow(); } catch(e){ console.error("valentinFlow",e); }

  try { buildAlbum(); }   catch(e){ console.error("buildAlbum",e); }
  try { initModal(); }    catch(e){ console.error("initModal",e); }
  try { initParallax(); } catch(e){ console.error("initParallax",e); }
  try { spawnSparkles(40); } catch(e){}
  try { spawnHearts(16); }   catch(e){}
  try { spawnPetals(18); }   catch(e){}
  try { buildTulips(); }     catch(e){}
});


/* ═══════════════════════════════════
   1. PANTALLA DE ACCESO
   ═══════════════════════════════════ */
function initAcceso() {
  var screen = document.getElementById("pantalla-acceso");
  var input  = document.getElementById("input-fecha");
  var btn    = document.getElementById("btn-entrar");
  var msg    = document.getElementById("msg-acceso");
  var tit    = document.getElementById("titulo-acceso");
  var foot   = document.getElementById("acceso-foot");

  if (tit) tit.textContent = TEXTO_BIENVENIDA;
  if (foot) foot.textContent = ALBUM_FOOTER + " 💕";

  input.addEventListener("input", function(e) {
    var v = e.target.value.replace(/[^0-9]/g, "");
    if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
    if (v.length > 5) v = v.slice(0, 5) + "/" + v.slice(5, 9);
    e.target.value = v.slice(0, 10);
  });

  function validar() {
    var valor = input.value.trim();
    if (valor === FECHA_CLAVE) {
      if (msg) { msg.textContent = TEXTO_EXITO; msg.className = "msg exito"; }
      screen.classList.add("salida");
      setTimeout(function() {
        screen.style.display = "none";
        var album = document.getElementById("album-principal");
        if (album) album.classList.add("visible");
      }, 1200);
    } else {
      if (msg) { msg.textContent = TEXTO_ERROR; msg.className = "msg error"; }
      input.classList.add("shake");
      setTimeout(function() { input.classList.remove("shake"); }, 600);
    }
  }

  btn.addEventListener("click", validar);
  input.addEventListener("keydown", function(e) { if (e.key === "Enter") validar(); });
}

/* ═══════════════════════════════════
   2. BUILD ALBUM
   ═══════════════════════════════════ */
function buildAlbum() {
  var section = document.getElementById("cuerdas-section");
  var titEl   = document.getElementById("album-titulo");
  var subEl   = document.getElementById("album-subtitulo");
  if (titEl) titEl.textContent = ALBUM_TITULO;
  if (subEl) subEl.textContent = ALBUM_SUBTITULO;

  var perRow = 4;
  var rows = [];
  for (var i = 0; i < recuerdos.length; i += perRow) {
    rows.push(recuerdos.slice(i, i + perRow));
  }

  rows.forEach(function(group, ri) {
    var row = document.createElement("div");
    row.classList.add("cuerda-row");

    row.appendChild(buildRopeSVG(ri));

    var wrap = document.createElement("div");
    wrap.classList.add("carousel-wrap");
    var track = document.createElement("div");
    track.classList.add("carousel-track");

    var tripled = [].concat(group, group, group);
    tripled.forEach(function(r, idx) { track.appendChild(buildPhotoCard(r, idx)); });
    wrap.appendChild(track);
    row.appendChild(wrap);
    section.appendChild(row);

    requestAnimationFrame(function() { initCarousel(track, group.length); });
  });
}

/* ═══════════════════════════════════
   3. SVG CUERDA BÉZIER
   ═══════════════════════════════════ */
function buildRopeSVG(ri) {
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "rope-svg");
  svg.setAttribute("viewBox", "0 0 1000 60");
  svg.setAttribute("preserveAspectRatio", "none");

  var defs = document.createElementNS(NS, "defs");

  var rg = document.createElementNS(NS, "radialGradient");
  rg.id = "bG" + ri;
  [[0,"#fff8e0",1],[45,"#ffe080",0.7],[100,"#ffa030",0]].forEach(function(a) {
    var s = document.createElementNS(NS, "stop");
    s.setAttribute("offset", a[0]+"%");
    s.setAttribute("stop-color", a[1]);
    s.setAttribute("stop-opacity", a[2]);
    rg.appendChild(s);
  });
  defs.appendChild(rg);

  var fl = document.createElementNS(NS, "filter");
  fl.id = "gl" + ri;
  fl.setAttribute("x","-80%"); fl.setAttribute("y","-80%");
  fl.setAttribute("width","260%"); fl.setAttribute("height","260%");
  var gb = document.createElementNS(NS, "feGaussianBlur");
  gb.setAttribute("stdDeviation","3.5"); gb.setAttribute("result","g");
  var mg = document.createElementNS(NS, "feMerge");
  ["g","SourceGraphic"].forEach(function(inp) {
    var mn = document.createElementNS(NS, "feMergeNode");
    mn.setAttribute("in", inp); mg.appendChild(mn);
  });
  fl.appendChild(gb); fl.appendChild(mg);
  defs.appendChild(fl);
  svg.appendChild(defs);

  var sag = 20 + (ri * 7) % 12 + Math.random() * 6;
  var yS = 6 + (ri % 2) * 2;
  var yE = yS + (Math.random() - 0.5) * 4;
  var yM = yS + sag;
  var c1x = 200 + (ri * 50) % 100;
  var c2x = 800 - (ri * 40) % 80;
  var d = "M 10," + yS + " C " + c1x + "," + yM + " " + c2x + "," + yM + " 990," + yE;

  var path = document.createElementNS(NS, "path");
  path.setAttribute("d", d);
  path.setAttribute("class", "rope-path");
  path.style.animationDuration = (5.5 + ri * 1.8) + "s";
  svg.appendChild(path);

  for (var i = 0; i < 12; i++) {
    var t = (i + 0.8) / 12.6;
    var pt = bPt(t, 10, yS, c1x, yM, c2x, yM, 990, yE);
    var wire = document.createElementNS(NS, "line");
    wire.setAttribute("x1", pt.x); wire.setAttribute("y1", pt.y);
    wire.setAttribute("x2", pt.x); wire.setAttribute("y2", pt.y + 7);
    wire.setAttribute("class", "bulb-wire");
    svg.appendChild(wire);
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", pt.x); c.setAttribute("cy", pt.y + 9);
    c.setAttribute("r", "4");
    c.setAttribute("fill", "url(#bG" + ri + ")");
    c.setAttribute("filter", "url(#gl" + ri + ")");
    c.setAttribute("class", "bulb-glow");
    c.style.animationDelay = (i * 0.4) + "s";
    c.style.animationDuration = (2.2 + Math.random() * 1.5) + "s";
    svg.appendChild(c);
  }
  return svg;
}

function bPt(t, x0, y0, x1, y1, x2, y2, x3, y3) {
  var m = 1-t, m2 = m*m, m3 = m2*m, t2 = t*t, t3 = t2*t;
  return {
    x: m3*x0 + 3*m2*t*x1 + 3*m*t2*x2 + t3*x3,
    y: m3*y0 + 3*m2*t*y1 + 3*m*t2*y2 + t3*y3
  };
}

/* ═══════════════════════════════════
   4. FOTO CARD
   ═══════════════════════════════════ */
function buildPhotoCard(rec, idx) {
  var el = document.createElement("div");
  el.classList.add("photo-card");
  var rot = (Math.random() - 0.5) * 9;
  el.style.setProperty("--rot", rot + "deg");
  el.style.setProperty("--d", (idx * 0.07) + "s");
  el.style.setProperty("--swing-dur", (4 + Math.random() * 3) + "s");
  el.style.setProperty("--swing-delay", (Math.random() * -5) + "s");

  var wire = document.createElement("div");
  wire.classList.add("photo-wire");
  wire.style.height = (22 + Math.random() * 22) + "px";

  var pin = document.createElement("div");
  pin.classList.add("pin");
  pin.innerHTML = '<div class="pin-coil"></div>';

  var pol = document.createElement("div");
  pol.classList.add("polaroid");
  var img = document.createElement("img");

// 🔥 Si tiene múltiples imágenes, usa la primera como portada
if (rec.imagenes && Array.isArray(rec.imagenes)) {
  img.src = rec.imagenes[0];
} else {
  img.src = rec.imagen;
}

  img.alt = rec.titulo || "Foto " + rec.id;
  img.loading = "lazy";
  img.onerror = function() { this.src = phSvg(rec.id); };
  var foot = document.createElement("div");
  foot.classList.add("polaroid-bottom");
  foot.innerHTML = '<span class="tiny-heart">♥</span>';
  pol.appendChild(img);
  pol.appendChild(foot);

  el.appendChild(wire);
  el.appendChild(pin);
  el.appendChild(pol);
  el.addEventListener("click", function() { openModal(rec); });
  return el;
}

function phSvg(id) {
  var cs = ["#e0909c","#d0a0c0","#f0c098","#c0b0d8","#a8d0c0","#e0a098","#c8b898","#b8a0c8"];
  var c = cs[(id - 1) % cs.length];
  var s = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="'+c+'"/><text x="150" y="130" text-anchor="middle" font-size="44" fill="#fff" opacity=".6">📷</text><text x="150" y="178" text-anchor="middle" font-family="Georgia" font-size="15" fill="#fff" opacity=".5">Foto '+id+'</text></svg>';
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(s)));
}

/* ═══════════════════════════════════
   5. CARRUSEL INFINITO
   ═══════════════════════════════════ */
function initCarousel(track, realCount) {
  var items = track.children;
  var gap = parseFloat(getComputedStyle(track).gap) || 22;
  var itemW = items[0].offsetWidth + gap;
  var posX = -(realCount * itemW);
  track.style.transform = "translateX(" + posX + "px)";

  var dragging = false, startX = 0, dragX = posX;

  function onStart(e) {
    dragging = true;
    track.classList.add("dragging");
    startX = (e.touches ? e.touches[0].clientX : e.clientX) - dragX;
  }
  function onMove(e) {
    if (!dragging) return;
    e.preventDefault();
    dragX = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    track.style.transform = "translateX(" + dragX + "px)";
  }
  function onEnd() {
    if (!dragging) return;
    dragging = false;
    track.classList.remove("dragging");
    posX = dragX;
    loopReset();
  }
  function loopReset() {
    itemW = items[0].offsetWidth + (parseFloat(getComputedStyle(track).gap) || 22);
    var set = realCount * itemW;
    if (posX < -(2 * set)) { posX += set; snap(); }
    else if (posX > 0)     { posX -= set; snap(); }
  }
  function snap() {
    dragX = posX;
    track.style.transition = "none";
    track.style.transform = "translateX(" + posX + "px)";
    void track.offsetHeight;
  }

  track.addEventListener("mousedown", onStart);
  track.addEventListener("mousemove", onMove);
  track.addEventListener("mouseup", onEnd);
  track.addEventListener("mouseleave", onEnd);
  track.addEventListener("touchstart", onStart, { passive: true });
  track.addEventListener("touchmove", onMove, { passive: false });
  track.addEventListener("touchend", onEnd);

  var autoOn = true;
  function autoScroll() {
    if (!dragging && autoOn) {
      posX -= CAROUSEL_SPEED;
      dragX = posX;
      track.style.transform = "translateX(" + posX + "px)";
      loopReset();
    }
    requestAnimationFrame(autoScroll);
  }
  requestAnimationFrame(autoScroll);

  track.addEventListener("mouseenter", function() { autoOn = false; });
  track.addEventListener("touchstart", function() { autoOn = false; }, { passive: true });
  track.addEventListener("mouseleave", function() { setTimeout(function(){ autoOn = true; }, 1500); });
  track.addEventListener("touchend", function() { setTimeout(function(){ autoOn = true; }, 1500); });

  window.addEventListener("resize", function() {
    itemW = items[0].offsetWidth + (parseFloat(getComputedStyle(track).gap) || 22);
    posX = -(realCount * itemW);
    dragX = posX;
    snap();
  });
}

/* ═══════════════════════════════════
   6. MODAL
   ═══════════════════════════════════ */
function initModal() {
  document.getElementById("modal-overlay").addEventListener("click", closeModal);
  document.getElementById("btn-close").addEventListener("click", closeModal);
  document.getElementById("btn-cerrar").addEventListener("click", closeModal);
  document.getElementById("btn-volver").addEventListener("click", function() {
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("btn-pause").addEventListener("click", togglePause);
  document.getElementById("vol-range").addEventListener("input", function(e) {
    if (audioActual) audioActual.volume = parseFloat(e.target.value);
  });
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });
}

function openModal(rec) {
  const imgEl = document.getElementById("m-img");

  // LIMPIAR carrusel anterior si existía
  if (window.modalInterval) {
    clearInterval(window.modalInterval);
    window.modalInterval = null;
  }

  // 🔥 SI ES CARRUSEL
  if (rec.imagenes && Array.isArray(rec.imagenes) && rec.imagenes.length > 0) {
    let idx = 0;
    imgEl.src = rec.imagenes[0];

    window.modalInterval = setInterval(() => {
      idx = (idx + 1) % rec.imagenes.length;
      imgEl.src = rec.imagenes[idx];
    }, 3000);

  } else {
    // 🔹 Imagen normal
    imgEl.src = rec.imagen;
  }

  imgEl.onerror = function() { this.src = phSvg(rec.id); };

  document.getElementById("m-titulo").textContent = rec.titulo || "";
  document.getElementById("m-texto").innerHTML = "";
  document.getElementById("vol-range").value = AUDIO_VOL_INICIAL;
  document.getElementById("btn-pause").textContent = "⏸";

  document.getElementById("modal-overlay").classList.add("on");
  document.getElementById("modal").classList.add("on");
  document.body.classList.add("no-scroll");

  fadeInAudio(rec.musica);

  setTimeout(function() {
    startTypewriter(rec.texto, document.getElementById("m-texto"));
  }, 600);
}


function closeModal() {

  if (window.modalInterval) {
  clearInterval(window.modalInterval);
  window.modalInterval = null;
}

  document.getElementById("modal").classList.remove("on");
  document.getElementById("modal-overlay").classList.remove("on");
  document.body.classList.remove("no-scroll");
  fadeOutAudio();
  stopTypewriter();
}

/* ═══════════════════════════════════
   7. TYPEWRITER
   ═══════════════════════════════════ */
function startTypewriter(text, container) {
  stopTypewriter();
  twIdx = 0;
  container.innerHTML = "";
  var span = document.createElement("span");
  span.classList.add("tw-t");
  var cursor = document.createElement("span");
  cursor.classList.add("tw-c");
  container.appendChild(span);
  container.appendChild(cursor);

  function type() {
    if (twIdx >= text.length) { cursor.classList.add("done"); return; }
    var ch = text.charAt(twIdx);
    span.appendChild(document.createTextNode(ch));
    twIdx++;
    container.scrollTop = container.scrollHeight;
    var delay = TW_SPEED;
    if (ch === "\n")                          delay = TW_PAUSE_NEWLINE;
    else if (ch === "…")                      delay = TW_PAUSE_ELLIPSIS;
    else if (ch === "." || ch === "!" || ch === "?") delay = TW_PAUSE_PERIOD;
    else if (ch === "," || ch === ";")         delay = TW_PAUSE_COMMA;
    twTimer = setTimeout(type, delay);
  }
  type();
}

function stopTypewriter() {
  if (twTimer) { clearTimeout(twTimer); twTimer = null; }
  twIdx = 0;
}

/* ═══════════════════════════════════
   8. AUDIO CON FADE
   ═══════════════════════════════════ */
function fadeInAudio(src) {
  stopAudioClean();
  isPaused = false;
  audioActual = new Audio(src);
  audioActual.volume = 0;
  audioActual.loop = true;
  audioActual.play().catch(function(){});
  var target = AUDIO_VOL_INICIAL;
  var steps = 30, step = 0;
  clearInterval(audioFadeTimer);
  audioFadeTimer = setInterval(function() {
    step++;
    if (audioActual) audioActual.volume = Math.min(target, (step / steps) * target);
    if (step >= steps) clearInterval(audioFadeTimer);
  }, AUDIO_FADE_MS / steps);
}

function fadeOutAudio() {
  if (!audioActual) return;
  var startVol = audioActual.volume;
  var steps = 20, step = 0;
  clearInterval(audioFadeTimer);
  audioFadeTimer = setInterval(function() {
    step++;
    if (audioActual) audioActual.volume = Math.max(0, startVol * (1 - step / steps));
    if (step >= steps) { clearInterval(audioFadeTimer); stopAudioClean(); }
  }, (AUDIO_FADE_MS * 0.6) / steps);
}

function stopAudioClean() {
  clearInterval(audioFadeTimer);
  if (audioActual) { audioActual.pause(); audioActual.currentTime = 0; audioActual = null; }
  isPaused = false;
}

function togglePause() {
  var btn = document.getElementById("btn-pause");
  if (!audioActual) return;
  if (isPaused) { audioActual.play().catch(function(){}); btn.textContent = "⏸"; isPaused = false; }
  else { audioActual.pause(); btn.textContent = "▶"; isPaused = true; }
}

/* ═══════════════════════════════════
   9. PARALLAX
   ═══════════════════════════════════ */
function initParallax() {
  var sky = document.querySelector(".layer-sky");
  var hor = document.querySelector(".layer-horizon");
  var cld = document.querySelector(".layer-clouds");
  if (!sky) return;
  var ticking = false;
  window.addEventListener("scroll", function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        var y = window.scrollY;
        sky.style.transform = "translateY(" + (y * 0.06) + "px)";
        if (hor) hor.style.transform = "translateY(" + (y * 0.1) + "px)";
        if (cld) cld.style.transform = "translateY(" + (y * 0.14) + "px)";
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ═══════════════════════════════════
   10. SPARKLES
   ═══════════════════════════════════ */
function spawnSparkles(n) {
  var c = document.getElementById("sparkles-layer");
  if (!c) return;
  for (var i = 0; i < n; i++) {
    var el = document.createElement("div");
    el.classList.add("sparkle");
    el.style.left = (Math.random() * 100) + "%";
    el.style.top  = (Math.random() * 100) + "%";
    var sz = 2 + Math.random() * 6;
    el.style.width = sz + "px"; el.style.height = sz + "px";
    el.style.animationDelay = (Math.random() * 8) + "s";
    el.style.animationDuration = (3 + Math.random() * 5) + "s";
    c.appendChild(el);
  }
}

/* ═══════════════════════════════════
   11. CORAZONES
   ═══════════════════════════════════ */
function spawnHearts(n) {
  var c = document.getElementById("hearts-layer");
  if (!c) return;
  var hd = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  var cols = ["#e0809c","#d06080","#f0c070","#e09050","#c85050","#d0a0b8"];
  var NS = "http://www.w3.org/2000/svg";
  for (var i = 0; i < n; i++) {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("heart-float");
    var size = 18 + Math.random() * 50;
    svg.style.width = size + "px"; svg.style.height = size + "px";
    svg.style.left = (Math.random() * 100) + "%";
    svg.style.bottom = "-" + (size + 20) + "px";
    svg.style.setProperty("--h-op", 0.04 + Math.random() * 0.09);
    svg.style.animationDuration = (12 + Math.random() * 18) + "s";
    svg.style.animationDelay = (Math.random() * 15) + "s";
    if (Math.random() > 0.6) svg.style.filter = "blur(" + (1 + Math.random() * 2) + "px)";
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", hd);
    p.setAttribute("fill", cols[i % cols.length]);
    svg.appendChild(p);
    c.appendChild(svg);
  }
}

/* ═══════════════════════════════════
   12. PÉTALOS
   ═══════════════════════════════════ */
function spawnPetals(n) {
  var c = document.getElementById("petals-layer");
  if (!c) return;
  var cols = ["rgba(220,120,140,0.5)","rgba(240,160,130,0.4)","rgba(200,100,120,0.45)","rgba(230,150,160,0.35)","rgba(210,130,100,0.4)","rgba(240,180,150,0.3)"];
  for (var i = 0; i < n; i++) {
    var el = document.createElement("div");
    el.classList.add("petal");
    var size = 6 + Math.random() * 14;
    el.style.setProperty("--p-size", size + "px");
    el.style.left = (Math.random() * 100) + "%";
    el.style.top = "-" + (size + 5) + "px";
    el.style.background = cols[i % cols.length];
    el.style.setProperty("--p-op", 0.08 + Math.random() * 0.14);
    el.style.animationDuration = (10 + Math.random() * 16) + "s";
    el.style.animationDelay = (Math.random() * 14) + "s";
    if (Math.random() > 0.5) el.style.setProperty("--p-blur", (1 + Math.random() * 2.5) + "px");
    c.appendChild(el);
  }
}

/* ═══════════════════════════════════
   13. TULIPANES
   ═══════════════════════════════════ */
function buildTulips() {
  var layer = document.getElementById("tulips-layer");
  if (!layer) return;
  var groups = [
    { left: "2%", count: 5, scale: 1 },
    { left: "35%", count: 4, scale: 0.85 },
    { left: "65%", count: 6, scale: 0.9 }
  ];
  var NS = "http://www.w3.org/2000/svg";
  groups.forEach(function(g) {
    var group = document.createElement("div");
    group.classList.add("tulip-group");
    group.style.left = g.left;
    group.style.transform = "scale(" + g.scale + ")";
    for (var i = 0; i < g.count; i++) {
      var h = 70 + Math.random() * 50;
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 30 80");
      svg.setAttribute("width", "30");
      svg.setAttribute("height", h);
      svg.style.overflow = "visible";
      var bend = 2 + Math.random() * 4;
      var stem = document.createElementNS(NS, "path");
      stem.setAttribute("d", "M15,80 Q" + (15+bend) + ",40 15,15");
      stem.setAttribute("stroke", "currentColor");
      stem.setAttribute("stroke-width", "2");
      stem.setAttribute("fill", "none");
      stem.setAttribute("opacity", "0.7");
      var leaf = document.createElementNS(NS, "path");
      leaf.setAttribute("d", "M15,55 Q25,48 20,38 Q17,45 15,50");
      leaf.setAttribute("fill", "currentColor");
      leaf.setAttribute("opacity", "0.5");
      var flower = document.createElementNS(NS, "path");
      flower.setAttribute("d", "M10,18 Q8,8 12,2 Q15,6 15,2 Q15,6 18,2 Q22,8 20,18 Q15,20 10,18");
      flower.setAttribute("fill", "currentColor");
      flower.setAttribute("opacity", "0.6");
      svg.appendChild(stem); svg.appendChild(leaf); svg.appendChild(flower);
      svg.style.color = "hsl(" + (330 + Math.random() * 30) + ", 40%, " + (25 + Math.random() * 10) + "%)";
      svg.style.marginLeft = (i * 18 + Math.random() * 10) + "px";
      group.appendChild(svg);
    }
    layer.appendChild(group);
  });
}
/* ═══════════════════════════════════
   SAN VALENTÍN FLOW
   ═══════════════════════════════════ */

const FECHA_SAN_VALENTIN = new Date("February 14, 2026 00:00:00").getTime();
let noClicks = 0;

function initValentinFlow() {

  // 🔥 SIEMPRE mostramos primero la pregunta
  mostrarPantallaValentin();

}


function mostrarPantallaValentin() {
  const screen = document.getElementById("valentin-screen");
  screen.style.display = "flex";

  document.getElementById("btn-si").addEventListener("click", mostrarCarta);
  document.getElementById("btn-no").addEventListener("click", manejarNoClick);
}

function manejarNoClick() {
  const btnNo = document.getElementById("btn-no");
  const btnSi = document.getElementById("btn-si");
  const msg   = document.getElementById("valentin-msg");

  noClicks++;

  if (noClicks === 1) {
    msg.textContent = "¿Segura? 🥺";
  }
  else if (noClicks === 2) {
    btnNo.style.transform = "scale(0.8)";
    btnSi.style.transform = "scale(1.1)";
    msg.textContent = "Piensa bien eso… 😌";
  }
  else if (noClicks === 3) {
    btnNo.style.position = "relative";
    btnNo.style.left = (Math.random() * 40 - 20) + "px";
    msg.textContent = "Ese botón creo que no funciona 🤭";
  }
  else {
    btnNo.style.transform = "scale(0.5)";
    btnSi.style.transform = "scale(1.2)";
    msg.textContent = "Ya acepta mejor 😏💕";
  }
}

function mostrarCarta() {
  document.getElementById("valentin-screen").style.display = "none";
  document.getElementById("carta-screen").style.display = "flex";
}

function iniciarCountdown() {
  document.getElementById("carta-screen").style.display = "none";
  document.getElementById("countdown-screen").style.display = "flex";

  const el = document.getElementById("countdown");

  const interval = setInterval(() => {
    const ahora = new Date().getTime();
    const diff = FECHA_SAN_VALENTIN - ahora;

    if (diff <= 0) {
      clearInterval(interval);
      mostrarLogin();
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const min = Math.floor((diff / (1000 * 60)) % 60);
    const seg = Math.floor((diff / 1000) % 60);

    el.textContent = `${dias}d ${horas}h ${min}m ${seg}s`;
  }, 1000);
}

function mostrarLogin() {
  document.getElementById("valentin-screen").style.display = "none";
  document.getElementById("countdown-screen").style.display = "none";

  const login = document.getElementById("pantalla-acceso");
  login.style.display = "flex";

  initAcceso(); // ahora sí activamos el login original
}
