/**
 * Animated scroll to selected section
 * @param  {string} target defines the container ID being scrolled to
 * @return {number}        the time duration taken to scroll
 */
function scrollTarget (target) {
  if ($(window).width() > 320) {
    scrollOffset = 60;
    duration = 500;
  }
  else {
    scrollOffset = 80;
    duration = 500;
  }

  $("html, body").animate({scrollTop: $("#" + target).offset().top - scrollOffset}, duration);

  return duration;
}

$(function() {

  // Click event handlers ------------------------------------------------------
  //
  $('.btn-menu').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href').substring(1);
    var scroll = scrollTarget(target);
  });
});