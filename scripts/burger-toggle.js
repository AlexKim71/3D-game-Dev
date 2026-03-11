const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const body = document.body; // Обязательно добавьте эту переменную
const overlay = document.querySelector('.overlay'); // И эту (убедитесь, что div.overlay есть в HTML)

let isAnimating = false;

function toggleMenu() {
  if (isAnimating) return;
  const isOpen = menu.classList.contains('is-open');
  if (isOpen) {
    closeMenuAnimation();
  } else {
    openMenuAnimation();
  }
}

function openMenuAnimation() {
  isAnimating = true;
  btn.classList.add('is-active');
  menu.classList.remove('is-closing');
  menu.classList.add('is-open');

  // ВКЛЮЧАЕМ блокировку и оверлей
  body.classList.add('lock-scroll');
  if (overlay) overlay.classList.add('is-active');

  menu.addEventListener('animationend', handleOpenAnimationEnd, { once: true });
}

function closeMenuAnimation() {
  isAnimating = true;
  btn.classList.remove('is-active');
  menu.classList.remove('is-open');
  menu.classList.add('is-closing');

  // ВЫКЛЮЧАЕМ блокировку и оверлей
  body.classList.remove('lock-scroll');
  if (overlay) overlay.classList.remove('is-active');

  menu.addEventListener('animationend', handleCloseAnimationEnd, { once: true });
}

function handleOpenAnimationEnd() {
  isAnimating = false;
}

function handleCloseAnimationEnd() {
  menu.classList.remove('is-closing');
  isAnimating = false;
}

function closeMenuOnLinkClick() {
  if (menu.classList.contains('is-open')) {
    closeMenuAnimation();
  }
}

// Слушатели событий
btn.addEventListener('click', toggleMenu);

// Закрытие при клике на оверлей (хороший тон для UX)
if (overlay) {
  overlay.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) closeMenuAnimation();
  });
}

const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenuOnLinkClick);
});