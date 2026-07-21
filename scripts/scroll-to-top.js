const target = document.querySelector("footer");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

if (target && scrollToTopBtn) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      scrollToTopBtn.classList.toggle("showBtn", entry.isIntersecting);
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