jQuery(document).ready(function ($) {
  // $('#config-modal').modal('show');
  $('#config-modal-mobile').modal('show');

  $('#config-wheel-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });

  $('#config-wheel-carousel-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });

  $('#config-selection-carousel-mobile').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
  });

});
