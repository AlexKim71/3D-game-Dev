const currentUrl = window.location.href;
const allLinks = document.querySelectorAll('.main-nav__link, .contact-us');

allLinks.forEach(link => {
  const isIndexPage = currentUrl.endsWith('/') && link.href.endsWith('index.html');
  
  if (link.href === currentUrl || isIndexPage) {
    if (link.classList.contains('contact-us')) {
      link.classList.add('main-nav__linkBtn');
    } else {
      link.classList.add('active');
    }
  }
});