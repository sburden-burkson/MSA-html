// Staggered Slider Section
$('#staggeredCarousel').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: true
});

$('#staggeredCarouselMobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(window).resize(function() {
  if ($(window).width() > 990 && $('#staggeredCarousel .slick-list').outerHeight() < 300) {
    $('#staggeredCarousel').each(function() {
      $(this).slick("getSlick").refresh();
    });
  }
  $(".staggeredCarouselHeight").matchHeight();
  $(".carouselInfoHeight").matchHeight();
});

$(".staggeredCarouselHeight").matchHeight();
$(".carouselInfoHeight").matchHeight();
$(".carouselInfoMobileHeight").matchHeight();
