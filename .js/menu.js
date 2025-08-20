$(document).ready(function() {
  $('.nav-header-dropdown').click(function(event) {
    event.preventDefault(); 
    $(this).toggleClass('open');
  });
});