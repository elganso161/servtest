// var swiper = new Swiper(".blog-slider", {
//   spaceBetween: 30,
//   effect: "fade",
//   loop: true,
//   mousewheel: {
//     invert: false,
//   },
//   // autoHeight: true,
//   pagination: {
//     el: ".blog-slider__pagination",
//     clickable: true,
//   },
// });




    var swiper = new Swiper(".swiper-container", {
      speed: 600,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
