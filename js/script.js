const toggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio .item');
const revealElements = document.querySelectorAll('.reveal');

// === Translations ===
const translations = {
  id: {
    name: "Daffa Syahrandy",
    subtitle: "Web Developer | Designer",
    "about-title": "Tentang Saya",
    "about-desc": "Saya adalah seorang web developer yang sedang belajar front-end dan back-end skills menggunakan HTML, CSS, dan JavaScript.",
    "btn-know": "Kenali Saya",
    "btn-cv": "Download CV",
    "portfolio-title": "Portofolio",
    "filter-all": "Semua",
    "filter-web": "Website",
    "filter-design": "Desain",
    "filter-project": "Project",
    "web-title": "🌐 Website Pribadi",
    "web-desc": "Website ini dibuat dengan HTML, CSS, dan JavaScript.",
    "design-title": "✏️ Desain UI",
    "design-desc": "Beberapa desain interface menggunakan Figma dan Canva.",
    "project-title": "💻 Mini Project",
    "project-desc": "Mini project latihan seperti kalkulator, to-do list, dan lainnya.",
    "contact-title": "Kontak",
    email: "📧 Email: daffa@example.com",
    instagram: "📷 Instagram: @daffasyhrndy",
    linkedin: "💼 LinkedIn: Daffa Syahrandy",
    "footer-name": "Daffa Syahrandy",
    "footer-rights": "Hak cipta dilindungi."

  },
  en: {
    name: "Daffa Syahrandy",
    subtitle: "Web Developer | Designer",
    "about-title": "About Me",
    "about-desc": "I am a web developer currently learning front-end and back-end skills using HTML, CSS, and JavaScript.",
    "btn-know": "Know Me",
    "btn-cv": "Download CV",
    "portfolio-title": "Portfolio",
    "filter-all": "All",
    "filter-web": "Website",
    "filter-design": "Design",
    "filter-project": "Project",
    "web-title": "🌐 Personal Website",
    "web-desc": "This site is made with HTML, CSS, and JavaScript.",
    "design-title": "✏️ UI Design",
    "design-desc": "Some UI designs made with Figma and Canva.",
    "project-title": "💻 Mini Project",
    "project-desc": "Practice projects like calculator, to-do list, and more.",
    "contact-title": "Contact",
    email: "📧 Email: daffa@example.com",
    instagram: "📷 Instagram: @daffasyhrndy",
    linkedin: "💼 LinkedIn: Daffa Syahrandy",
    "footer-name": "Daffa Syahrandy",
    "footer-rights": "All rights reserved."
  }
};

// === Theme Toggle ===
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// === Language Toggle ===
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key] || key;
  });
  langToggle.textContent = lang === 'id' ? '🌐 EN' : '🌐 ID';
  localStorage.setItem('lang', lang);
}

langToggle.addEventListener('click', () => {
  const currentLang = localStorage.getItem('lang') || 'id';
  const newLang = currentLang === 'id' ? 'en' : 'id';
  setLanguage(newLang);
});

// === Portfolio Filter ===
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    items.forEach(item => {
      item.style.display = filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
    });
  });
});

// === Scroll Reveal Animation ===
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// === Initial Setup on Load ===
window.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggle.textContent = '☀️ Light Mode';
  }

  // Language
  const savedLang = localStorage.getItem('lang') || 'id';
  setLanguage(savedLang);

  // Reveal
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);
