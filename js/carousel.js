// Staggered Slider
$('#staggeredCarousel').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: false,
  // prevArrow: $('.staggered-prev'),
  // nextArrow: $('.staggered-next')
});

$( window ).resize(function() {
  if ($(window).width() > 990 && $('#staggeredCarousel .slick-list').outerHeight() < 300) {
    $('#staggeredCarousel').each(function() {
      $(this).slick("getSlick").refresh();
      $(".staggeredCarouselHeight").matchHeight();
      $(".carouselInfoHeight").matchHeight();
    });
   }
});


// Match Height for Staggered Carousel
// {byRow: false}
$(".staggeredCarouselHeight").matchHeight();
$(".carouselInfoHeight").matchHeight();
