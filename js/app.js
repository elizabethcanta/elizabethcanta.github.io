const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_resume: "Resume",
    home_title: "Hello, I’m Elizabeth.",
    home_intro: "I’m a Computer Science student building thoughtful software in web development, systems, and problem solving.",
    home_projects_cta: "View projects",
    home_about_cta: "Learn more",
    status_label: "Currently",
    status_title: "Building polished, useful projects.",
    status_item_1: "Web development",
    status_item_2: "C and systems fundamentals",
    status_item_3: "Problem solving and clean code",
    stack_label: "Core stack",
    about_eyebrow: "Profile",
    about_title: "About me",
    about_role: "Computer Science student",
    about_intro: "I’m a Computer Science student who enjoys turning ideas into polished, useful software. I’m especially interested in web development, systems fundamentals, and building projects that combine clean design with practical problem solving.",
    about_looking_for_label: "What I’m looking for",
    about_looking_for_1: "Co-op and internship opportunities",
    about_looking_for_2: "Projects where I can ship real features and keep learning",
    about_looking_for_3: "Teams that value mentorship and thoughtful engineering",
    about_currently_label: "Currently working on",
    about_currently_1: "Refining this portfolio and project storytelling",
    about_currently_2: "Strengthening my C fundamentals and debugging skills",
    about_currently_3: "Building small front-end projects to improve UI and UX",
    projects_eyebrow: "Selected work",
    projects_title: "Projects",
    projects_intro: "A few things I’ve built or am actively developing to sharpen my design, problem-solving, and engineering skills.",
    project1_title: "Portfolio website",
    project1_tag: "Personal brand",
    project1_desc: "This portfolio itself. Designed as a clean, responsive, personal landing page to showcase my work, background, and interests.",
    project2_title: "Cat Petting Incremental Game",
    project2_tag: "JavaScript",
    project2_desc: "A fun browser game where the user clicks to earn points, unlock upgrades, and explore a simple incremental loop with a cute visual style.",
    project3_title: "More projects coming soon",
    project3_tag: "In progress",
    project3_desc: "I’m actively building and refining more hands-on projects, with a focus on practical functionality and polished user experience."
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_resume: "Currículum",
    home_title: "Hola, soy Elizabeth.",
    home_intro: "Soy estudiante de Ciencias de la Computación y desarrollo software útil y bien pensado en web, sistemas y resolución de problemas.",
    home_projects_cta: "Ver proyectos",
    home_about_cta: "Más sobre mí",
    status_label: "Actualmente",
    status_title: "Creando proyectos útiles y bien pensados.",
    status_item_1: "Desarrollo web",
    status_item_2: "Fundamentos de C y sistemas",
    status_item_3: "Resolución de problemas y código limpio",
    stack_label: "Stack principal",
    about_eyebrow: "Perfil",
    about_title: "Sobre mí",
    about_role: "Estudiante de Ciencias de la Computación",
    about_intro: "Soy estudiante de Ciencias de la Computación y me gusta transformar ideas en software útil y pulido. Me interesan especialmente el desarrollo web, los fundamentos de sistemas y la creación de proyectos que combinan un diseño limpio con soluciones prácticas.",
    about_looking_for_label: "Qué busco",
    about_looking_for_1: "Oportunidades de co-op y pasantías",
    about_looking_for_2: "Proyectos donde pueda entregar funciones reales y seguir aprendiendo",
    about_looking_for_3: "Equipos que valoren la mentoría y la ingeniería reflexiva",
    about_currently_label: "Estoy trabajando en",
    about_currently_1: "Perfeccionando este portafolio y la forma de contar mis proyectos",
    about_currently_2: "Fortaleciendo mis fundamentos en C y mis habilidades de depuración",
    about_currently_3: "Construyendo pequeños proyectos front-end para mejorar la interfaz y la experiencia",
    projects_eyebrow: "Trabajo seleccionado",
    projects_title: "Proyectos",
    projects_intro: "Algunas cosas que he construido o en las que estoy trabajando para mejorar mi diseño, resolución de problemas y habilidades de ingeniería.",
    project1_title: "Sitio web personal",
    project1_tag: "Marca personal",
    project1_desc: "Este mismo portafolio: una página personal limpia y responsiva para mostrar mi trabajo, trayectoria e intereses.",
    project2_title: "Juego incremental de acariciar gatos",
    project2_tag: "JavaScript",
    project2_desc: "Un juego web entretenido donde el usuario hace clic para ganar puntos, desbloquear mejoras y explorar un sistema incremental con un estilo visual tierno.",
    project3_title: "Más proyectos próximamente",
    project3_tag: "En progreso",
    project3_desc: "Estoy desarrollando y refinando más proyectos prácticos, con foco en funcionalidad real y una experiencia de usuario pulida."
  }
};

function getLang() {
  return localStorage.getItem("lang") || "en";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "EN" : "ES";
  }
}

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlink").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();

  const lang = getLang();
  applyLang(lang);

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = getLang();
      const next = current === "en" ? "es" : "en";
      setLang(next);
    });
  }
});