jQuery(document).ready(function ($) {
  // $('#config-modal').modal('show');
  $('#config-modal-mobile').modal('show');

  $('#config-wheel-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('#config-wheel-carousel-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('#config-selection-carousel-mobile').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="config-selection-carousel-mobile-button carousel-button-left form-control"><i class="fal fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="config-selection-carousel-mobile-button carousel-button-right form-control"><i class="fal fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });

function configOptionArrows() {
  if ($('#config-modal-mobile .config-option.active').data("config-option") == 0) {
    $('.config-option-previous').hide();
  } else {
    $('.config-option-previous').show();
  }
  if ($('#config-modal-mobile .config-option.active').data("config-option") == $('#config-modal-mobile .config-option').last().data("config-option")){
    $('.config-option-next').hide();
  } else {
    $('.config-option-next').show();
  }
}
configOptionArrows();

$('.config-option-previous').click(function() {
  var $currentEl = $('#config-modal-mobile .config-option.active');
  var nextIndex = $currentEl.data("config-option") - 1;
  var lastIndex = $('#config-modal-mobile .config-option').last().data("config-option");
  $('#config-modal-mobile .config-option[data-config-option="'+nextIndex+'"]').addClass('active');
  $currentEl.removeClass('active');
  configOptionArrows();
});

$('.config-option-next').click(function() {
  var $currentEl = $('#config-modal-mobile .config-option.active');
  var nextIndex = $currentEl.data("config-option") + 1;
  var lastIndex = $('#config-modal-mobile .config-option').last().data("config-option");
  $('#config-modal-mobile .config-option[data-config-option="'+nextIndex+'"]').addClass('active');
  $currentEl.removeClass('active');
  configOptionArrows();
});



});
