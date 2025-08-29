$(document).ready(function() {
    $('.left-menu-item').click(function(e) {
        e.preventDefault(); 
        $('.submenu').hide();
        var submenuId = $(this).data('submenu');
        $('#' + submenuId).show();
    });
});
