var swiper = new Swiper(".slide-video", {
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 800,
	pagination: {
		el: ".s-videos .swiper-pagination",
		clickable: true
	},
	navigation: {
		prevEl: ".s-videos .btn-prev",
		nextEl: ".s-videos .btn-next"
	}
});
