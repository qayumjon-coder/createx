const swiper = new Swiper('.swiper.testimonials-swiper' , {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  mousewheel: true,
  loop: true,
  breakpoints:{{
    640: {
      navigation: {
        
      }
    }
  }

  }
});