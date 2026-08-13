const i18n = {
  en: {
    home_title: "Hello.",
    home_intro: "I am Elizabeth.",
    home_blurb:
        "I’m a Computer Science student building projects in Python, C, web development, and more. This site is my little hub for what I’m learning and building.",
    nav_label: "Navigation",
    nav_home: "Home",
    nav_about: "About me",
    nav_projects: "Projects",
    nav_resume: "Resume (PDF)",
    socials_label: "Socials",
    about_title: "About me",
    about_role: "Computer Science student",
    about_body:
        "I’m a Computer Science student who loves building small projects that feel polished and useful. Right now I’m focused on strengthening my C fundamentals, building web apps, and getting comfortable with debugging and writing clean code.",
    projects_title: "Projects",
    projects_body:
        "Projects I'm working on or have completed. Click for details and links to code! (More coming soon...)",

    // project-specific
    project_portfolio_title: "Portfolio",
    project_portfolio_desc:
        "This portfolio website you’re looking at! Built with HTML/CSS/JS, featuring a custom responsive design and language toggle.",
    project_cat_title: "Cat Petting Incremental Game",
    project_cat_desc:
        "A fun little web game where you earn points by petting a virtual cat. Built with JS, featuring cute animations and a simple upgrade system.",
    link_github: "GitHub",
    link_live_demo: "Live Demo"
    ,
    link_linkedin: "LinkedIn",
    fact_location: "📍 Hamilton, ON, Canada",
    fact_school: "🎓 McMaster University",
    fact_skills: "💻 C • Java • Python • JavaScript",
    fact_interests: "✨ Interests: Web Dev, Systems",
    about_looking_title: "What I’m looking for",
    about_looking_li1: "Co-op / internship opportunities",
    about_looking_li2: "Projects where I can ship features and learn fast",
    about_looking_li3: "Teams that value mentorship + good engineering habits",
    about_current_title: "Currently working on",
    about_current_li1: "Portfolio website + project writeups",
    about_current_li2: "C programming",
    about_current_li3: "Small web projects to practice HTML/CSS/JS"
  },
  es: {
    home_title: "Hola.",
    home_intro: "Soy Elizabeth.",
    home_blurb:
        "Soy estudiante de Ciencias de la Computación y estoy creando proyectos en C, desarrollo web y más. Este sitio es mi espacio para mostrar lo que estoy aprendiendo y construyendo.",
    nav_label: "Navegación",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_resume: "Currículum (PDF)",
    socials_label: "Redes",
    about_title: "Sobre mí",
    about_role: "Estudiante de Ciencias de la Computación",
    about_body:
        "Soy estudiante de Ciencias de la Computación que disfruta crear pequeños proyectos pulidos y útiles. En este momento me estoy enfocando en fortalecer mis fundamentos en C, construir aplicaciones web y sentirme cómoda con la depuración y la escritura de código limpio.",
    projects_title: "Proyectos",
    projects_body:
        "Proyectos en los que estoy trabajando o que he completado. ¡Haz clic para obtener detalles y enlaces al código! (Más proyectos próximamente...)",

    // project-specific
    project_portfolio_title: "Portafolio",
    project_portfolio_desc:
        "¡Este sitio que estás viendo! Construido con HTML/CSS/JS, con un diseño responsivo personalizado y un conmutador de idioma.",
    project_cat_title: "Juego incremental de acariciar gatos",
    project_cat_desc:
        "Un pequeño juego web donde ganas puntos acariciando a un gato virtual. Construido con JS, con animaciones y un sistema simple de mejoras.",
    link_github: "GitHub",
    link_live_demo: "Ver demo"
    ,
    link_linkedin: "LinkedIn",
    fact_location: "📍 Hamilton, ON, Canadá",
    fact_school: "🎓 Universidad McMaster",
    fact_skills: "💻 C • Java • Python • JavaScript",
    fact_interests: "✨ Intereses: Desarrollo web, Sistemas",
    about_looking_title: "Qué estoy buscando",
    about_looking_li1: "Oportunidades de co-op / prácticas",
    about_looking_li2: "Proyectos donde pueda implementar funciones y aprender rápido",
    about_looking_li3: "Equipos que valoren la mentoría y buenas prácticas de ingeniería",
    about_current_title: "Actualmente trabajando en",
    about_current_li1: "Sitio del portafolio + descripciones de proyectos",
    about_current_li2: "Programación en C",
    about_current_li3: "Pequeños proyectos web para practicar HTML/CSS/JS"
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

  // update document language attribute for accessibility
  try {
    document.documentElement.lang = lang;
  } catch (e) {
    // ignore if not available in the environment
  }

  // update resume links to match selected language
  const resumeHref = (lang === 'es') ? 'resume/español_resume.pdf' : 'resume/english_resume.pdf';
  document.querySelectorAll('.resume-btn, a[href^="resume/"]').forEach(a => {
    a.setAttribute('href', resumeHref);
  });
}

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('.navlink').forEach(a => a.removeAttribute('aria-current'));
  document.querySelectorAll(".navlink").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.setAttribute("aria-current", "page");
  });
}

async function copyEmailAddress(email) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(email);
    return;
  }

  const tempInput = document.createElement("input");
  tempInput.value = email;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function showCopyStatus(message) {
  const status = document.getElementById("emailCopyStatus");
  if (!status) return;

  status.textContent = message;
  status.classList.add("is-visible");

  window.clearTimeout(showCopyStatus.hideTimer);
  showCopyStatus.hideTimer = window.setTimeout(() => {
    status.classList.remove("is-visible");
    status.textContent = "";
  }, 2500);
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

  const emailLink = document.querySelector('.social-circle[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener("click", async (event) => {
      event.preventDefault();

      const email = emailLink.getAttribute("href").replace("mailto:", "");

      try {
        await copyEmailAddress(email);
        showCopyStatus("Email copied to clipboard.");
      } catch (error) {
        showCopyStatus("Could not copy the email address.");
      }
    });
  }
});
