
// SWIPER-PORTFOLIO
const swiper = new Swiper('.portfolio-slides .swiper', {
  loop: true,
  slidesPerView: 3,
  breakpoints: {
    // when window width is >= 980px
    980: {
      slidesPerView: 5,
    }
  },
  spaceBetween: 24,
  navigation: {
    prevEl: '',
    nextEl: '.portfolio-slides .swiper .swiper-next'
  }
});

