class SvgMenuAnimator {
  constructor() {
    this.path = document.querySelector('.path');
    this.hamburger = document.querySelector('.hamburger');
    this.ul = document.querySelector('.menu ul');
    
    this.progressBar = document.querySelector('.reading-progress');

    this.isOpen = false;
    this.y = 100;
    this.c = 100;

    this.animationFrameId = null;

    this.init();
  }

  init() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }
  }

  static lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  animate() {
    const targetY = this.isOpen ? 0 : 100;
    const targetC = this.isOpen ? 0 : 100;

    this.y = SvgMenuAnimator.lerp(this.y, targetY, 0.055);
    this.c = SvgMenuAnimator.lerp(this.c, targetC, 0.075);

    if (this.path) {
      this.path.setAttribute(
        'd',
        `M 0 ${this.y} L 0 100 100 100 100 ${this.y} C 50 ${this.c}, 50 ${this.c}, 0 ${this.y}`,
      );
    }
   
    if (Math.abs(this.y - targetY) > 0.5 || Math.abs(this.c - targetC) > 0.5) {
      this.animationFrameId = requestAnimationFrame(() => this.animate());
    } else {
      this.y = targetY;
      this.c = targetC;
      if (this.path) {
        this.path.setAttribute(
          'd',
          `M 0 ${this.y} L 0 100 100 100 100 ${this.y} C 50 ${this.c}, 50 ${this.c}, 0 ${this.y}`,
        );
      }
    }

    // 2. Управляем прогресс-баром в зависимости от состояния меню
    if (this.progressBar) {
      if (this.isOpen) {
        // Если меню только что открылось на весь экран — прячем полоску
        this.progressBar.classList.add('progress-hidden');
      } else {
        // Если оранжевый фон полностью уехал вверх — возвращаем полоску
        this.progressBar.classList.remove('progress-hidden');
      }
    }
  }

  toggleMenu() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.hamburger.classList.toggle('is-active');
    document.body.classList.toggle('lock-scroll');

    if (this.isOpen) {
      // === ЛОГИКА ЗАКРЫТИЯ МЕНЮ ===
      this.ul.classList.remove('active');

      // Возвращаем прогресс-бар СРАЗУ, как только нажали крестик
      if (this.progressBar) {
        this.progressBar.classList.remove('progress-hidden');
      }

      setTimeout(() => {
        this.isOpen = false;
        this.animate();
      }, 300);
    } else {
      // === ЛОГИКА ОТКРЫТИЯ МЕНЮ ===
      if (this.progressBar) {
        this.progressBar.classList.add('progress-hidden');
      }

      this.isOpen = true;
      this.animate();

      setTimeout(() => {
        this.ul.classList.add('active');
      }, 300);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SvgMenuAnimator();
});
