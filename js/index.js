$(document).ready(function () {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        autoplay: true,
        dots: true,
    });

    // $('select').styler();
    // $('.icon-menu').on('click', function(){
    //     $('.nav').slideToggle();
    // })
})
const modalWrapper = document.querySelector('.modal_wrapper'),
    modalWindow = document.querySelector('.modal_window'),
    openModal = document.querySelector('.header_btn'),
    body = document.querySelector('body'),
    modal_btn = document.querySelector('.modal_close'),
    menu_icon = document.querySelector('.menu_icon'),
    nav = document.querySelector('.nav'),
    menu_background = document.querySelector('.menu_background');



openModal.addEventListener('click', function () {
    body.style.overflow = 'hidden';
    modalWrapper.style.display = 'block';
    modalWindow.style.top = '50%';
    modalWindow.style.opacity = '1';
    modalWindow.style.transition = 'all .3s linear';

})

modalWrapper.addEventListener('click', function () {
    modalWrapper.style.display = 'none';
    body.style.overflow = 'visible';
    modalWindow.style.top = '-100%';
    modalWindow.style.transition = 'all 0.5s linear';
})

modal_btn.addEventListener('click', function () {
    modalWindow.style.top = '-100%';
    modalWrapper.style.display = 'none';
    body.style.overflow = 'visible';
})


menu_icon.addEventListener('click', function () {
    nav.classList.toggle('active');
    menu_background.style.display = 'block';
    body.style.overflow = 'hidden';
})

menu_background.addEventListener('click', function(){
    menu_background.style.display = 'none';
    nav.classList.toggle('active');
    body.style.overflow = 'visible';
})
