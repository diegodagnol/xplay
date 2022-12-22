const videos = new Swiper('.galeria-video', {
	loop: false,
	slidesPerView: 2,
	spaceBetween: 10,
	breakpoints: {
	  768: {
		slidesPerView: 3,
	  },
	  992: {
		slidesPerView: 4,
	  },
	  1200: {
		slidesPerView: 5,
	  },
	},
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

$(document).ready(function () {
	$(".fancybox-media").fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});