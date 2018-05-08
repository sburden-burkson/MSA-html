jQuery(document).ready(function ($) {
  $('#config-modal').modal('show');
  //$('#config-modal-mobile').modal('show');
$('#config-modal, #config-modal-mobile').on('shown.bs.modal', function () {
  $('#config-wheel-carousel').slick('refresh');
  $('#config-wheel-carousel-mobile').slick('refresh');
  $('#config-selection-caps-mobile').slick('refresh');
  $('#config-selection-stars-mobile').slick('refresh');
});
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
      }
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
      }
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
    $('.add_config_to_cart').css({ display: 'inline-block' });
  } else {
    $('.config-option-next').show();
    $('.add_config_to_cart').hide();
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
  // Desktop modal
  $('#config-modal .config-selection-container').removeClass('active');
  $('#config-modal .config-selection-container[data-config-option="'+nextOption+'"]').addClass('active');
  $('#config-modal .config-option-wrapper .config-option').removeClass('active');
  $('#config-modal .config-option-wrapper .config-option[data-config-option="'+nextOption+'"]').addClass('active');
});

$('#config-modal .config-option-wrapper a').click(function() {
  var configOption = $(this).data("config-option");
  if ($(this).attr('class').includes('active') !== true ) {
    $('#config-modal .config-selection-container').removeClass('active');
    $('#config-modal .config-selection-container[data-config-option="'+configOption+'"]').addClass('active');
    $('#config-modal .config-option-wrapper .config-option').removeClass('active');
    $('#config-modal .config-option-wrapper .config-option[data-config-option="'+configOption+'"]').addClass('active');
    // Mobile modal
    $('#config-modal-mobile .config-selection-container').removeClass('active');
    $('#config-modal-mobile .config-selection-container[data-config-option="'+configOption+'"]').addClass('active');
    $('#config-modal-mobile .config-option').removeClass('active');
    $('#config-modal-mobile .config-option[data-config-option="'+configOption+'"]').addClass('active');
    configOptionArrows();
  }
  if (configOption == $('#config-modal .config-option:last-child').data("config-option")){
    $('.add_config_to_cart').css({ display: 'inline-block' });
  } else {
    $('.add_config_to_cart').hide();
  }
});

$('#config-selection-caps-mobile .config-selection-item').click(function() {
  $('#config-selection-caps-mobile .config-selection-item').removeClass('active');
  $(this).addClass('active');
});

// $nextEl = config-selection

});
