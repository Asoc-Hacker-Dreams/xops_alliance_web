let currentLang = 'es';
const langBtn = document.getElementById('langBtn');
const elements = document.querySelectorAll('[data-en][data-es]');
const navLinks = document.querySelectorAll('.nav nav a');

function applyCommunityLinks() {
  const valkyriasCard = Array.from(document.querySelectorAll('.community-card')).find(function (card) {
    const title = card.querySelector('h3');
    return title && title.textContent.trim().toLowerCase() === 'valkyrias';
  });

  if (valkyriasCard) {
    const valkyriasLink = valkyriasCard.querySelector('.community-link');
    if (valkyriasLink) {
      valkyriasLink.classList.remove('disabled');
      valkyriasLink.removeAttribute('aria-disabled');
      valkyriasLink.setAttribute('href', 'https://t.me/v4lkyr14s');
      valkyriasLink.setAttribute('target', '_blank');
      valkyriasLink.setAttribute('rel', 'noopener noreferrer');
      valkyriasLink.setAttribute('data-en', 'Join Telegram');
      valkyriasLink.setAttribute('data-es', 'Unirse a Telegram');
    }
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  elements.forEach(function (el) {
    el.textContent = el.getAttribute('data-' + lang);
  });
  const labels = lang === 'en'
    ? ['About', 'Communities', 'Conferences', 'Infrastructure', 'Join']
    : ['Acerca', 'Comunidades', 'Conferencias', 'Infraestructura', 'Unirse'];
  navLinks.forEach(function (link, index) {
    if (labels[index]) link.textContent = labels[index];
  });
  langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
}

langBtn.addEventListener('click', function () {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

applyCommunityLinks();
setLanguage(currentLang);
