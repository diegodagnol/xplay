var swiper = new Swiper(".swiper-planos", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 17,
    },
  },
});

var swiper = new Swiper(".swiper-vantagens", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});