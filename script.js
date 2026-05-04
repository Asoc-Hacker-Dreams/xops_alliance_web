let currentLang = 'en';
const langBtn = document.getElementById('langBtn');
const elements = document.querySelectorAll('[data-en][data-es]');
const navLinks = document.querySelectorAll('.nav nav a');

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  elements.forEach(function (el) {
    el.textContent = el.getAttribute('data-' + lang);
  });
  const labels = lang === 'en' ? ['About', 'Communities', 'Model', 'Join'] : ['Acerca', 'Comunidades', 'Modelo', 'Unirse'];
  navLinks.forEach(function (link, index) {
    if (labels[index]) link.textContent = labels[index];
  });
  langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
}

langBtn.addEventListener('click', function () {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

setLanguage(currentLang);
