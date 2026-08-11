const swiper = new Swiper('.blog-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    breakpoints: {
        480: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }

    },

    navigation: {
        nextEl: ".custom-btn-next",
        prevEl: ".custom-btn-prev"
    }
});