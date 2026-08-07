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

const swiperSec = new Swiper('.second-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: ".second-btn-next",
        prevEl: ".second-btn-prev"
    }
})