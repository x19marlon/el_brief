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
    "projects.p1.title": "LeRobot SO-101 · Gabo's Arm",
    "projects.p1.desc": "Digital twin of the 6-DOF SO-101 robotic arm in ROS 2 and Gazebo. Modular packages for the URDF/Xacro description, the Gz ↔ ROS 2 bridge, a custom ros2_control hardware interface and keyboard teleoperation, with live visualization in RViz2.",
    "projects.p2.desc": "Formative feedback platform for intro C++ courses. Students code and compile in the browser inside a sandbox; every submission runs against the teacher's test cases, and a local AI drafts feedback that the teacher reviews before it reaches the student — the AI proposes, the teacher decides.",
    "projects.repo": "View repo →",
    "projects.p3.title": "Next up…",
    "projects.p3.desc": "Currently experimenting, breaking things and building something new. Stay tuned.",
    "beyond.eyebrow": "offline mode", "beyond.title": "Beyond the <em>code</em>.",
    "beyond.b1": "League of Legends — chasing Diamond", "beyond.b2": "Always hunting for new music",
    "beyond.b3": "Movies, movies and more movies", "beyond.b4": "Robots — apparently a hobby too",
    "pet.desc": "Fluffy cream-colored French bulldog and official Senior Debugging Supervisor. Rocks heterochromia — one brown eye for reviewing code, one blue eye for spotting bugs — and that skeptical look you get right before a failed deploy.",
    "pet.t1": "French bulldog", "pet.t2": "1 brown eye · 1 blue eye", "pet.t3": "snack-driven development",
    "pet.s1": "Code reviews", "pet.s2": "Bugs found", "pet.s3": "Treats requested",
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
    "projects.p1.title": "LeRobot SO-101 · El brazo de Gabo",
    "projects.p1.desc": "Gemelo digital del brazo robótico SO-101 de 6 grados de libertad en ROS 2 y Gazebo. Paquetes modulares para la descripción URDF/Xacro, el puente Gz ↔ ROS 2, una interfaz de hardware propia para ros2_control y teleoperación por teclado, con visualización en vivo en RViz2.",
    "projects.p2.desc": "Plataforma de retroalimentación formativa para cursos de introducción a C++. Los estudiantes programan y compilan en el navegador dentro de un sandbox; cada entrega corre con los casos de prueba del profesor y una IA local propone retroalimentación que el profesor revisa antes de que llegue al estudiante — la IA propone, el profesor decide.",
    "projects.repo": "Ver repo →",
    "projects.p3.title": "Lo que viene…",
    "projects.p3.desc": "Experimentando, rompiendo cosas y construyendo algo nuevo. Pendientes.",
    "beyond.eyebrow": "modo offline", "beyond.title": "Más allá del <em>código</em>.",
    "beyond.b1": "League of Legends — rumbo a Diamante", "beyond.b2": "Siempre buscando música nueva",
    "beyond.b3": "Películas, películas y más películas", "beyond.b4": "Robots — al parecer también son hobby",
    "pet.desc": "Bulldog francés color crema, peludito y Supervisor Senior de Debugging oficial. Tiene heterocromía — un ojo café para revisar código y uno azul para cazar bugs — y esa mirada escéptica que aparece justo antes de un deploy fallido.",
    "pet.t1": "Bulldog francés", "pet.t2": "1 ojo café · 1 ojo azul", "pet.t3": "desarrollo guiado por snacks",
    "pet.s1": "Code reviews", "pet.s2": "Bugs encontrados", "pet.s3": "Premios pedidos",
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

// ============ Scroll animations ============
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// selector -> animation type (see "Scroll animations" in styles.css)
const ANIMS = [
  [".section .eyebrow", "wipe"],
  [".section h2", "rise-blur"],
  [".contact h2", "zoom"],
  [".window", "crt"],
  [".about-text > p, .facts li", "slide-r"],
  [".card", "flip"],
  [".timeline", "draw"],
  [".timeline li", "slide-l"],
  [".project", "rise-skew"],
  [".pill", "pop"],
  [".pet-photo", "glitch-in"],
  [".pet-info > *", "slide-r"],
  [".contact .lead, .contact .cta", "rise"],
];

// Count-up for numbers like "3", "5+", "9 999+"
function countUp(el) {
  const m = el.textContent.trim().match(/^([\d\s]+)(.*)$/);
  if (!m) return;
  const target = parseInt(m[1].replace(/\s/g, ""), 10);
  const suffix = m[2];
  const fmt = (n) => n.toLocaleString("en-US").replace(/,/g, " ");
  const start = performance.now();
  const dur = 1400;
  const step = (t) => {
    const p = Math.min((t - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js-anim");

  ANIMS.forEach(([sel, type]) => {
    document.querySelectorAll(sel).forEach((el) => { el.dataset.anim = type; });
  });

  // Stagger index among animated siblings
  document.querySelectorAll("[data-anim]").forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.dataset.anim);
    el.style.setProperty("--i", siblings.indexOf(el));
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll(".facts b, .pet-stats dd").forEach(countUp);
      io.unobserve(e.target);
      // Once the entrance is done, drop the slow staggered transition so hovers stay snappy
      const el = e.target;
      const i = parseInt(el.style.getPropertyValue("--i"), 10) || 0;
      setTimeout(() => { delete el.dataset.anim; }, 2600 + i * 120);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  // Wipe elements start fully clipped (zero visible area), so the observer can't see them:
  // they are triggered by their section instead.
  document.querySelectorAll('[data-anim]:not([data-anim="wipe"])').forEach((el) => io.observe(el));

  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("seen");
      e.target.querySelectorAll('[data-anim="wipe"]').forEach((el) => el.classList.add("in"));
      sectionIO.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".section").forEach((s) => sectionIO.observe(s));
}

// Scroll progress bar + hero parallax
const progress = document.querySelector(".progress");
const heroContent = document.querySelector(".hero-content");
const sun = document.querySelector(".sun");
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (!reduceMotion && y < window.innerHeight * 1.2) {
    heroContent.style.setProperty("--hero-y", `${y * 0.35}px`);
    heroContent.style.setProperty("--hero-o", Math.max(0, 1 - y / 650));
    sun.style.setProperty("--sun-y", `${y * 0.18}px`);
  }
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

document.getElementById("year").textContent = new Date().getFullYear();

// Initial language: EN is the primary language; ES only if the visitor picked it before
applyLang(store.get("lang") || "en");
