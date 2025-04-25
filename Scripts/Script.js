const menu = document.querySelector('#mobile-menu-icon');
const menuLinks = document.querySelector('.navbar_menu');
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {

    direction: 'vertical',
    loop: true,
    
        
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } } );
    
