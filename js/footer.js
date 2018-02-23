function footerAccordion(){
  if ($(window).width() > 767) {
    $('[id^="collapse"]').addClass('in');
  } else {
    $('[id^="collapse"]').removeClass('in');
  }
}
footerAccordion();

$(window).on('resize', function() {
  footerAccordion();
});
