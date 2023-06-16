let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggler('.shadow', window.scrollY > 0);
});

var swiper = new Swiper(".homeSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });


  //swiper
  var swiper = new Swiper(".recente-container", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
      delay:55000,
      disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints:{
      0:{
        slidesPerView: 2,
      },
      568:{
        slidesPerView: 3,
      },
      768:{
        slidesPerView: 4,
      },
      968:{
        slidesPerView: 5,
      },
    },
  });