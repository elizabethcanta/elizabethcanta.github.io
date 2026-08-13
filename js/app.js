const i18n = {
  en: {
    home_title: "Hello.",
    home_intro: "I am Elizabeth.",
    home_blurb:
      "I’m a Computer Science student building projects in Python, C, web development, and more. This site is my little hub for what I’m learning and building.",
    nav_label: "Navigation",
    nav_about: "About me",
    nav_projects: "Projects",
    nav_resume: "Resume (PDF)",
    socials_label: "Socials",
    about_title: "About me",
    about_body:
      "Write a short paragraph about who you are, what you’re studying, and what you’re looking for (internships, co-op, etc.).",
    projects_title: "Projects",
    projects_body:
      "Projects I'm working on or have completed. Click for details and links to code! (More coming soon...)"
  },
  es: {
    home_title: "Hola.",
    home_intro: "Soy Elizabeth.",
    home_blurb:
      "Soy estudiante de Ciencias de la Computación y estoy creando proyectos en C, desarrollo web y más. Este sitio es mi espacio para mostrar lo que estoy aprendiendo y construyendo.",
    nav_label: "Navegación",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_resume: "Currículum (PDF)",
    socials_label: "Redes",
    about_title: "Sobre mí",
    about_body:
      "Escribe un párrafo corto sobre ti: qué estudias, qué te interesa y qué estás buscando (internships, co-op, etc.).",
    projects_title: "Proyectos",
    projects_body:
      "Proyectos en los que estoy trabajando o que he completado. ¡Haz clic para obtener detalles y enlaces al código! (Más proyectos próximamente...)"
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

  // update all elements with data-i18n="key"
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // update language button text
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = (lang === "en") ? "EN" : "ES";
}

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlink").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.setAttribute("aria-current", "page");
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
      setLang(current === "en" ? "es" : "en");
    });
  }
});