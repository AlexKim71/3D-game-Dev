const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.main-nav__link');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
  
    if (currentPath.includes(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
        link.classList.add('active'); 
        link.classList.add('active');
    }
});