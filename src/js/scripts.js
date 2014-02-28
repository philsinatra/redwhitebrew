$(document).ready(function() {
  $('#btn-oc').sidr({
    displace  : false,
    speed     : 'fast'
  });

  // Click event handlers ------------------------------------------------------
  //
  /**
   * Programatically close the sidr menu when close button is clicked
   * @param  {event} e default click event
   * @return {null}   no return
   */
  $('.sidr-close').click(function(e) {
    e.preventDefault();
    $.sidr('close', 'sidr');
  });
});

$('nav #nav-main a').click(function(e) {
  e.preventDefault();
  var targetSection = $(this).attr('href').substring(1);
  $('body').attr('class', '');
  $('body').addClass(targetSection);
});