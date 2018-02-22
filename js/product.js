// Slick Slider
$('#product-image-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '#product-thumbs',
});
$('#product-thumbs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '#product-image-carousel',
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
});
$( window ).resize(function() {
  if ($(window).width() > 766 && $('#product-thumbs .slick-list').outerHeight() < 50) {
    $('#product-thumbs').each(function() {
      $(this).slick("getSlick").refresh();
    });
   }
});
