// Slick Slider
$('#product-image-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '#product-thumbs',
  dots: true
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
  // if ($(window).width() > 766 && $('#product-thumbs .slick-list').outerHeight() < 50) {
    $('#product-thumbs').each(function() {
      $(this).slick("getSlick").refresh();
    });
   // }
});
$('.product-image-height').matchHeight();
// $(".productTabsHeight").matchHeight();
$(".tab-pane").matchHeight(false);
function productTabsCorrectHeight() {
	/* Same function as in warranty.js */
  if ($(window).width() > 767) {
    $(".tab-pane").matchHeight(false);
  } else {
    $('.tab-pane').matchHeight({ remove: true });
  }
}
productTabsCorrectHeight();
$(window).on('resize', function() {
  productTabsCorrectHeight();
});
$(".productTabsHeight").click(function(){
	if(!$(this).hasClass('active-skip')){
		$(".productTabsHeight").removeClass("active");
		$(this).addClass("active");
	}
});
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
