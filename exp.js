var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper('.popular_brands_images_swipper', {
      slidesPerView: 5,
      spaceBetween: 25,
      loop: true,
      autoplay: {
          delay: 1000,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          280: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          500: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 25
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 25
          },
          1400: {
              slidesPerView: 5,
              spaceBetween: 25
          }
      }
  });
});
