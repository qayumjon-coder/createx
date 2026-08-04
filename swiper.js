const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  loopAddBlankSlides: false,
  loopPreventsSliding: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});