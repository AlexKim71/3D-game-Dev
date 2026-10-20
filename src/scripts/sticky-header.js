const header = document.getElementById('header');
const progressBar = document.getElementById('progressBar');
const headerHeight = header.offsetHeight;

let lastScrollY = window.scrollY;
let ticking = false;
let scrollUpStartPoint = 0;
const SCROLL_UP_THRESHOLD = 20;

window.addEventListener('DOMContentLoaded', () => {
  handleScroll();
  updateProgressBar();
});

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      updateProgressBar();
      ticking = false;
    });
    ticking = true;
  }
});

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 10) {
    header.classList.add('scrolled');
    progressBar.style.opacity = '1';
  } else {
    header.classList.remove('scrolled');
    progressBar.style.opacity = '0';
  }

  if (currentScrollY <= 0) {
    header.classList.remove('hidden');
    scrollUpStartPoint = 0;
  } else if (currentScrollY > lastScrollY) {
    if (currentScrollY > headerHeight) {
      header.classList.add('hidden');
    }
    scrollUpStartPoint = currentScrollY;
  } else if (currentScrollY < lastScrollY) {
    const scrolledUpAmount = scrollUpStartPoint - currentScrollY;
    if (scrolledUpAmount > SCROLL_UP_THRESHOLD) {
      header.classList.remove('hidden');
    }
  }

  lastScrollY = currentScrollY;
}

function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + '%';
}
