const swiper = new Swiper('.first-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  loopAddBlankSlides: false,
  loopPreventsSliding: false,

  navigation: {
    nextEl: ".custom-btn-next",
    prevEl: ".custom-btn-prev"
  }
});