$(function(){


   const swiper1 = new Swiper('.swiper1', {


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      spaceBetween: 48,
      slidesPerView: 'auto',
    });

    const swiper2 = new Swiper('.swiper2', {

      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',

    });
    const swiper3 = new Swiper('.swiper3', {

      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 32,
      slidesPerView: 'auto',


    });

    const swiper4 = new Swiper('.swiper4', {

      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 32,
      slidesPerView: 'auto',

    });

    const swiper5 = new Swiper('.swiper5', {

      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 32,
      slidesPerView: 'auto',

    });

    const swiper6 = new Swiper('.swiper-sp', {

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 16,
      slidesPerView: 'auto',

    });
    const swiper7 = new Swiper('.swiper-sp2', {

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 16,
      slidesPerView: 'auto',

    });

    $('.drawer-icon').click(function(){
       $('.drawer').addClass('opened');
       $('body,html').css('overflow-y', 'hidden');
    })
    $('.drawer-icon-close').click(function(){
      $('.drawer').removeClass('opened');
      $('body,html').css('overflow-y', 'visible');
   })

   $('.top-btn-plan').click(function(){
      $('.search-plan').addClass('opened');
      $('body,html').css('overflow-y', 'hidden');
      return false;
   })
   
   $('.top-btn-area').click(function(){
      $('.search-area').addClass('opened');
      $('body,html').css('overflow-y', 'hidden');
      return false;
   })

   $('.search-window-overlay').click(function(){
      $('.search-plan').removeClass('opened');
      $('.search-area').removeClass('opened');
      $('body,html').css('overflow-y', 'visible');
      return false;
   })

})