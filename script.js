// ============ i18n (EN default, ES secondary) ============
const I18N = {
  en: {
    "nav.about": "About", "nav.stack": "Stack", "nav.work": "Work", "nav.projects": "Projects", "nav.contact": "Contact",
    "hero.chip": "Open to internships & collaborations",
    "hero.lead": "Software engineer building backends, distributed systems and robots — and curious about everything that happens under the hood.",
    "hero.cta1": "See my work", "hero.cta2": "Say hello",
    "about.eyebrow": "whoami",
    "about.title": "Engineer by training, <em>tinkerer</em> by nature.",
    "about.p1": "I'm a Systems Engineering student at Pontificia Universidad Javeriana who likes to understand how things work all the way down — from a ROS node moving a robotic arm to a message travelling through a Kafka topic.",
    "about.p2": "Right now I'm diving deep into backend services, distributed architectures, cloud and DevOps. I care about software that is clean, scalable and efficient — and about leaving teams better than I found them.",
    "about.f1": "leadership roles", "about.f2": "languages in daily use", "about.f3": "bugs squashed",
    "stack.eyebrow": "toolbox", "stack.title": "The <em>stack</em> I reach for.",
    "stack.lang": "Languages", "stack.fw": "Frameworks & runtimes", "stack.db": "Data", "stack.ops": "Cloud & tooling",
    "work.eyebrow": "leadership & impact", "work.title": "Where I <em>lead</em> and teach.",
    "work.r1.title": "Chairman",
    "work.r1.desc": "Lead the student chapter and coordinate its technical initiatives, workshops and events.",
    "work.r2.title": "Vice President",
    "work.r2.desc": "Support robotics projects, technical initiatives and the chapter's digital presence.",
    "work.r3.title": "Teaching Assistant · Software Fundamentals",
    "work.r3.desc": "Help students turn software engineering concepts into working code through hands-on support.",
    "projects.eyebrow": "selected work", "projects.title": "Things I've <em>built</em>.",
    "projects.p1.title": "Robotic Arm · ROS",
    "projects.p1.desc": "Simulation and control system for robotic arms — kinematics, motion planning and ROS nodes talking to each other.",
    "projects.p2.desc": "Web platform for the university's racing team: team info, sponsors and race updates in one place.",
    "projects.p3.title": "Next up…",
    "projects.p3.desc": "Currently experimenting, breaking things and building something new. Stay tuned.",
    "beyond.eyebrow": "offline mode", "beyond.title": "Beyond the <em>code</em>.",
    "beyond.b1": "League of Legends — chasing Diamond", "beyond.b2": "Always hunting for new music",
    "beyond.b3": "Movies, movies and more movies", "beyond.b4": "Robots — apparently a hobby too",
    "contact.eyebrow": "ping me", "contact.title": "Let's build <em>something</em>.",
    "contact.lead": "Always up for a conversation about software, robotics, distributed systems or a good idea.",
    "footer.note": "thanks for stopping by 👾",
    typer: ["Software Engineer", "Backend & Distributed Systems", "Building robots with ROS", "Cloud · DevOps · Linux", "probably debugging something..."],
    title: "Marlon Restrepo — Software Engineer",
  },
  es: {
    "nav.about": "Sobre mí", "nav.stack": "Stack", "nav.work": "Experiencia", "nav.projects": "Proyectos", "nav.contact": "Contacto",
    "hero.chip": "Abierto a prácticas y colaboraciones",
    "hero.lead": "Ingeniero de software construyendo backends, sistemas distribuidos y robots — con curiosidad por todo lo que pasa bajo el capó.",
    "hero.cta1": "Ver mi trabajo", "hero.cta2": "Hablemos",
    "about.eyebrow": "quién soy",
    "about.title": "Ingeniero por formación, <em>curioso</em> por naturaleza.",
    "about.p1": "Soy estudiante de Ingeniería de Sistemas en la Pontificia Universidad Javeriana y me gusta entender cómo funcionan las cosas hasta el fondo — desde un nodo de ROS moviendo un brazo robótico hasta un mensaje viajando por un tópico de Kafka.",
    "about.p2": "Ahora mismo estoy profundizando en servicios backend, arquitecturas distribuidas, cloud y DevOps. Me importa el software limpio, escalable y eficiente — y dejar a los equipos mejor de lo que los encontré.",
    "about.f1": "roles de liderazgo", "about.f2": "lenguajes en uso diario", "about.f3": "bugs aplastados",
    "stack.eyebrow": "caja de herramientas", "stack.title": "El <em>stack</em> que uso.",
    "stack.lang": "Lenguajes", "stack.fw": "Frameworks y runtimes", "stack.db": "Datos", "stack.ops": "Cloud y herramientas",
    "work.eyebrow": "liderazgo e impacto", "work.title": "Donde <em>lidero</em> y enseño.",
    "work.r1.title": "Chairman",
    "work.r1.desc": "Lidero el capítulo estudiantil y coordino sus iniciativas técnicas, talleres y eventos.",
    "work.r2.title": "Vicepresidente",
    "work.r2.desc": "Apoyo proyectos de robótica, iniciativas técnicas y la presencia digital del capítulo.",
    "work.r3.title": "Monitor · Fundamentos de Software",
    "work.r3.desc": "Ayudo a los estudiantes a convertir conceptos de ingeniería de software en código que funciona.",
    "projects.eyebrow": "trabajo destacado", "projects.title": "Cosas que he <em>construido</em>.",
    "projects.p1.title": "Brazo Robótico · ROS",
    "projects.p1.desc": "Sistema de simulación y control para brazos robóticos — cinemática, planeación de movimiento y nodos de ROS comunicándose.",
    "projects.p2.desc": "Plataforma web para el equipo de carreras de la universidad: equipo, patrocinadores y novedades en un solo lugar.",
    "projects.p3.title": "Lo que viene…",
    "projects.p3.desc": "Experimentando, rompiendo cosas y construyendo algo nuevo. Pendientes.",
    "beyond.eyebrow": "modo offline", "beyond.title": "Más allá del <em>código</em>.",
    "beyond.b1": "League of Legends — rumbo a Diamante", "beyond.b2": "Siempre buscando música nueva",
    "beyond.b3": "Películas, películas y más películas", "beyond.b4": "Robots — al parecer también son hobby",
    "contact.eyebrow": "escríbeme", "contact.title": "Construyamos <em>algo</em>.",
    "contact.lead": "Siempre dispuesto a hablar de software, robótica, sistemas distribuidos o una buena idea.",
    "footer.note": "gracias por pasar 👾",
    typer: ["Ingeniero de Software", "Backend y Sistemas Distribuidos", "Construyendo robots con ROS", "Cloud · DevOps · Linux", "probablemente depurando algo..."],
    title: "Marlon Restrepo — Ingeniero de Software",
  },
};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

let currentLang = "en";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  currentLang = lang in I18N ? lang : "en";
  document.documentElement.lang = currentLang;
  document.title = dict.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.dataset.i18nHtml];
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll(".lang button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === currentLang))
  );
  store.set("lang", currentLang);
  restartTyper();
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => applyLang(b.dataset.lang))
);

// ============ Typewriter ============
const typerEl = document.getElementById("typer");
let typerTimer;
function restartTyper() {
  clearTimeout(typerTimer);
  const lines = I18N[currentLang].typer;
  let i = 0, j = 0, deleting = false;
  const tick = () => {
    const line = lines[i];
    j += deleting ? -1 : 1;
    typerEl.textContent = line.slice(0, j);
    let delay = deleting ? 35 : 70;
    if (!deleting && j === line.length) { deleting = true; delay = 1600; }
    else if (deleting && j === 0) { deleting = false; i = (i + 1) % lines.length; delay = 300; }
    typerTimer = setTimeout(tick, delay);
  };
  tick();
}

// ============ Reveal on scroll ============
const revealTargets = document.querySelectorAll(".section > *, .card, .project, .timeline li, .pill");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

document.getElementById("year").textContent = new Date().getFullYear();

// Initial language: EN is the primary language; ES only if the visitor picked it before
applyLang(store.get("lang") || "en");
