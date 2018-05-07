jQuery(document).ready(function ($) {
  $('#config-modal').modal('show');
  //$('#config-modal-mobile').modal('show');

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

  $('#config-selection-caps-mobile').slick({
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

  $('#config-selection-stars-mobile').slick({
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
  var activeOption = $('#config-modal-mobile .config-option.active').data("config-option");
  if (activeOption == 1) {
    $('.config-option-previous').hide();
  } else {
    $('.config-option-previous').show();
  }
  if (activeOption == $('#config-modal-mobile .config-option:last-child').data("config-option")){
    $('.config-option-next').hide();
  } else {
    $('.config-option-next').show();
  }

}
configOptionArrows();

$('.arrow-container a').click(function() {
  var $currentOp = $('#config-modal-mobile .config-option.active');
  var currentOption = $currentOp.data("config-option");
  var nextOption = currentOption - 1;
  var directionClass = $(this).attr('class');
  if (directionClass.includes('config-option-next')) {
    nextOption = currentOption + 1;
  } else {
    nextOption = currentOption - 1;
  }
  var $nextOp = $('#config-modal-mobile .config-option[data-config-option="'+nextOption+'"]');
  var $currentEl = $('#config-modal-mobile .config-selection-container[data-config-option="'+currentOption+'"]');
  var $nextEl = $('#config-modal-mobile .config-selection-container[data-config-option="'+nextOption+'"]');
  $nextOp.addClass('active');
  $currentEl.removeClass('active');
  $nextEl.addClass('active');
  $currentOp.removeClass('active');
  configOptionArrows();
  if ($nextEl.attr('class').includes('slick-slider')) {
    $nextEl.slick('refresh');
  }
});

$('#config-modal .config-option-wrapper a').click(function() {
  var configOption = $(this).data("config-option");
  if ($(this).attr('class').includes('active') !== true ) {
    $('#config-modal .config-selection-container').removeClass('active');
    $('#config-modal .config-selection-container[data-config-option="'+configOption+'"]').addClass('active');
  }
});

// $nextEl = config-selection

});
