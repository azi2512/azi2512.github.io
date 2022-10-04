const swiper = new Swiper('.swiper', {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
    breakpoints: {
        540: {
            slidesPerView: 2, 
            spaceBetween: 0,
        }
    }
  });


let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})