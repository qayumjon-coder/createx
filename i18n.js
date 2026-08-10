// i18n.js

const translations = {
  uz: {
    // Navbar
    "nav_about": "Biz haqimizda",
    "nav_courses": "Kurslar",
    "nav_events": "Tadbirlar",
    "nav_blog": "Blog",
    "nav_contacts": "Aloqa",
    "btn_consultation": "Konsultatsiya olish",
    "btn_login": "Kirish / Ro'yxatdan o'tish",

    // Asosiy qism (Hero)
    "hero_title": "IT sohasida o'z karyerangizni quring",
    "hero_subtitle": "Bizning amaliy kurslarimiz bilan zamonaviy kasblarni egallang va muvaffaqiyatga erishing.",
    "btn_about_us": "Biz haqimizda ko'proq",
    "btn_explore_courses": "Kurslarni o'rganish"
  },
  ru: {
    // Navbar
    "nav_about": "О нас",
    "nav_courses": "Курсы",
    "nav_events": "Мероприятия",
    "nav_blog": "Блог",
    "nav_contacts": "Контакты",
    "btn_consultation": "Получить консультацию",
    "btn_login": "Вход / Регистрация",

    // Asosiy qism (Hero)
    "hero_title": "Постройте свою карьеру в сфере IT",
    "hero_subtitle": "Освойте современные профессии с нашими практическими курсами и добейтесь успеха.",
    "btn_about_us": "Больше о нас",
    "btn_explore_courses": "Изучить курсы"
  },
  en: {
    // Navbar
    "nav_about": "About Us",
    "nav_courses": "Courses",
    "nav_events": "Events",
    "nav_blog": "Blog",
    "nav_contacts": "Contacts",
    "btn_consultation": "Get consultation",
    "btn_login": "Log in / Register",

    // Asosiy qism (Hero)
    "hero_title": "Build your career in IT",
    "hero_subtitle": "Master modern professions with our practical courses and achieve success.",
    "btn_about_us": "More about us",
    "btn_explore_courses": "Explore courses"
  }
};

function updateContent(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

function changeLanguage(lang) {
  localStorage.setItem('createx_lang', lang);
  updateContent(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('createx_lang') || 'uz';
  
  const langSwitcher = document.getElementById('lang-switcher');
  if(langSwitcher) {
      langSwitcher.value = savedLang;
  }
  
  updateContent(savedLang);
});