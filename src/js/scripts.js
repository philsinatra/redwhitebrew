$(document).ready(function() {
  $('#btn-oc').sidr({
    displace : false
  });

  // Click event handlers ------------------------------------------------------
  $('.sidr-close').click(function(e) {
    e.preventDefault();
    $.sidr('close', 'sidr');
  });
});