$(document).ready(function() {
    $('.cart-icon').on('click', function(event) {
        event.preventDefault(); 
        $('.cart-drawer').toggleClass('active');
        $('.cart-overlay').toggleClass('active');
    });

    $('.cart-overlay').on('click', function() {
        $('.cart-drawer').removeClass('active');
        $('.cart-overlay').removeClass('active');
    });
});