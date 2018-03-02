// Staggered Slider
$('#staggeredCarousel').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: true,
  // prevArrow: $('.staggered-prev'),
  // nextArrow: $('.staggered-next')
});

$('#staggeredCarouselMobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});


$( window ).resize(function() {
  if ($(window).width() > 990 && $('#staggeredCarousel .slick-list').outerHeight() < 300) {
    $('#staggeredCarousel').each(function() {
      $(this).slick("getSlick").refresh();
    });
  }
  $(".staggeredCarouselHeight").matchHeight();
  $(".carouselInfoHeight").matchHeight();
});


// Match Height for Staggered Carousel
// {byRow: false}
$(".staggeredCarouselHeight").matchHeight();
$(".carouselInfoHeight").matchHeight();
$(".carouselInfoMobileHeight").matchHeight();
