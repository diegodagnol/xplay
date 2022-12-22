const banner = new Swiper('.banner', {
  speed: 600,
  parallax: true,
  effect: "fade",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});