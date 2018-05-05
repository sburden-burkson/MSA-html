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

  $('#config-selection-caps-mobile').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    // prevArrow: '<button type="button" class="config-selection-carousel-mobile-button carousel-button-left form-control"><i class="fal fa-angle-left"></i></button>',
    // nextArrow: '<button type="button" class="config-selection-carousel-mobile-button carousel-button-right form-control"><i class="fal fa-angle-right"></i></button>',
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
    // prevArrow: '<button type="button" class="config-selection-carousel-mobile-button carousel-button-left form-control"><i class="fal fa-angle-left"></i></button>',
    // nextArrow: '<button type="button" class="config-selection-carousel-mobile-button carousel-button-right form-control"><i class="fal fa-angle-right"></i></button>',
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
  var configOption = $('#config-modal-mobile .config-option.active').data("config-option");
  if (configOption == 1) {
    $('.config-option-previous').hide();
  } else {
    $('.config-option-previous').show();
  }
  if (configOption == $('#config-modal-mobile .config-option').last().data("config-option")){
    $('.config-option-next').hide();
  } else {
    $('.config-option-next').show();
  }
}
configOptionArrows();


// function configSelection() {
//   $ = jQuery;
//   $('#config-selection-caps-mobile').css({'position': 'absolute'}).stop().animate({
//     right: '-100%'
//   }, 'slow', function() {
//     // $(this).css({'right': '-1000%', 'left': 'auto'});
//   });
//   $('#config-selection-stars-mobile').css({'position': 'relative'}).stop().animate({
//     left: '0'
//   }, 'slow', function() {
//     $(this).slick('refresh');
//   });
// }


$('.config-option-previous').click(function() {
  var $currentEl = $('#config-modal-mobile .config-option.active');
  var currentOption = $currentEl.data("config-option");
  var nextOption = currentOption - 1;
  var lastOption = $('#config-modal-mobile .config-option').last().data("config-option");
  $('#config-modal-mobile .config-option[data-config-option="'+nextOption+'"]').addClass('active');
  $currentEl.removeClass('active');
  configOptionArrows();

  $('#config-selection-caps-mobile').css({'position': 'relative'}).stop().animate({
    left: '0'
  }, 500, function() {
    // $(this).slick('refresh');
    // $(this).css({'right': '-1000%', 'left': 'auto'});
  });
  $('#config-selection-stars-mobile').css({'position': 'absolute', 'top': '0'}).stop().animate({
    left: '100%'
  }, 500, function() {
    // $(this).css({'top': '0'});
    // $(this).slick('unslick');
    // $(this).slick('refresh');
  });


});

$('.config-option-next').click(function() {
  var $currentEl = $('#config-modal-mobile .config-option.active');
  var currentOption = $currentEl.data("config-option");
  var nextOption = currentOption + 1;
  var lastOption = $('#config-modal-mobile .config-option').last().data("config-option");
  $('#config-modal-mobile .config-option[data-config-option="'+nextOption+'"]').addClass('active');
  $currentEl.removeClass('active');
  configOptionArrows();


  $('#config-selection-caps-mobile').css({'position': 'absolute','top': '0'}).stop().animate({
    left: '-100%'
  }, 500, function() {
    // $(this).css({'top': '0'});
    // $(this).slick('unslick');
    // $(this).css({'right': '-1000%', 'left': 'auto'});
  });
  $('#config-selection-stars-mobile').css({'position': 'relative'}).stop().animate({
    left: '0'
  }, 500, function() {
    // $(this).slick('refresh');
  });

});



});
