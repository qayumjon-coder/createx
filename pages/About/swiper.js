const swiper = new Swiper('.swiper.testimonials-swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
})

const blogSwiper = new Swiper('.blog-swiper',  {
	slidesPerView: 2,
	spaceBetween: 5,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},

	breakpoints: {
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},

		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},

    1024: {
      slidesPerView: 5,
    }
	},
})
