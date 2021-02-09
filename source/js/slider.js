    let swiper = new Swiper(".swiper-container", {
      speed: 1000,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
