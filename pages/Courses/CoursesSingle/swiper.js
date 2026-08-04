var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.related-next',
    prevEl: '.related-prev',
  },
});