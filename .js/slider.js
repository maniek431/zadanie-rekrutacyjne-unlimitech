$(document).ready(function(){
    $('.gallery-slider-content').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="C:/Users/manie/Desktop/zadanie-rekrutacyjne/img/slider-arrow-left.png" class="slider-arrow-img"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="C:/Users/manie/Desktop/zadanie-rekrutacyjne/img/slider-arrow-right.png" class="slider-arrow-img"></button>',

    });

  initializeSlider();

  $(window).resize(function() {
    initializeSlider();
  });
  });