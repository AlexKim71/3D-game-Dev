const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

if (scrollToTopBtn) {
  const target = document.createElement("div");
  target.style.cssText = "position: absolute; top: 0; left: 0; height: 25px; width: 1px; visibility: hidden; pointer-events: none;";

  document.body.prepend(target);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      scrollToTopBtn.classList.toggle("showBtn", !entry.isIntersecting);
    });
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  observer.observe(target);
}