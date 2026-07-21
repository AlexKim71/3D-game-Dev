document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-header]');
    const progressBar = document.querySelector('[data-progress]');
    const hamburger = document.querySelector('.hamburger');
    
    let lastScrollY = window.scrollY;
    let ticking = false; 

    function updateHeader() {
        const currentScroll = window.scrollY;
       
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (documentHeight > 0) {
            const progress = (currentScroll / documentHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled', 'header-hidden');
            lastScrollY = currentScroll;
            ticking = false;
            return;
        }
       
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
       
        if (Math.abs(currentScroll - lastScrollY) > 15) {
            if (currentScroll > lastScrollY && currentScroll > 100) {
                header.classList.add('header-hidden'); 
            } else {
                header.classList.remove('header-hidden'); 
            }
            lastScrollY = currentScroll;
        }
        
        ticking = false;
    }
   
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
});