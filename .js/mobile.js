$(document).ready(function() {
    $('.hamburger-menu').click(function() {
        $('.nav-header-item').slideToggle(); 
    });
});

$(document).ready(function(){
    $('.container-specials-items-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

$(document).ready(function() {
    $('.mobile-footer-title').click(function(e) {
        e.preventDefault();
        $('.mobile-footer-title').not(this).removeClass('active');
        $('.footer-dropdown-list').not($(this).next('.footer-dropdown-list')).removeClass('show');
        $(this).toggleClass('active');
        $(this).next('.footer-dropdown-list').toggleClass('show');
    });
});
