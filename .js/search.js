$(document).ready(function() {
    // Open and close search drawer
    $('.search-submit').click(function(e) {
        e.preventDefault();
        $('.search-overlay').toggleClass('active');
        $('.search-drawer').toggleClass('active');
    });

    $('.search-overlay').on('click', function() {
        $('.search-overlay').removeClass('active');
        $('.search-drawer').removeClass('active');
    });


    $('.search-result-item').on('click', function(event) {
        event.preventDefault(); 

  
        var productUrl = $(this).find('a').attr('href');

     
        if (productUrl) {
            window.location.href = productUrl;
        } else {
            console.log('No URL found for this product.');
        }
    });
});
