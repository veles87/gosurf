$(function(){
    $('.header__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class"slider-arrows slider-arrows__left" src="./images/svg/arrow-left.svg" alt="">',
        nextArrow: '<img class"slider-arrows slider-arrows__right" src="./images/svg/arrow-right.svg" alt="">',

    });
});