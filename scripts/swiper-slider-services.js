const servicesSwiper = new Swiper('.services-swiper', {  
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  allowTouchMove: true,
  grabCursor: true,
  keyboardControl: true,
  pagination: {
    el: '.services-slider-pagination',
    clickable: true,
    bulletClass: 'services-pagination-bullet',
    bulletActiveClass: 'services-pagination-bullet-active',
    renderBullet: function (index, className) {
      return '<button class="' + className + '"></button>';
    },
  },
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.services-slider__btn--next',
    prevEl: '.services-slider__btn--prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
});
