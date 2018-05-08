jQuery(document).ready(function ($) {

  $('#config-modal').modal('show');
  //$('#config-modal-mobile').modal('show');

  $(window).on('resize', function() {
    if ($("#config-modal").data('bs.modal').isShown || $("#config-modal-mobile").data('bs.modal').isShown) {
      if ($(window).width() < 992) {
        $('#config-modal-mobile').modal('show');
        $('#config-modal').modal('hide');
      } else {
        $('#config-modal-mobile').modal('hide');
        $('#config-modal').modal('show');
      }
    }
  });

  $('#open-config-modal').click(function() {
    if ($(window).width() < 992) {
      $('#config-modal-mobile').modal('show');
    } else {
      $('#config-modal').modal('show');
    }
  });

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

  $('#config-modal .config-option-wrapper .config-option').click(function() {
    var configOption = $(this).data("config-option");
    if ($(this).attr('class').includes('active') !== true ) {
      $('#config-modal .config-selection-container').removeClass('active');
      $('#config-modal .config-selection-container[data-config-option="'+configOption+'"]').addClass('active');
      $('#config-modal .config-option-wrapper .config-option').removeClass('active');
      $('#config-modal .config-option-wrapper .config-option[data-config-option="'+configOption+'"]').addClass('active');

      // Arrows & Checks
      $('#config-modal .config-option-wrapper .config-option[data-config-option="'+configOption+'"] .fa-check').css({ display: 'none' });
      for (var i = 1; i <= 4; i++) {
        if (i !== configOption) {
          var setEl = $('#config-modal .config-option-wrapper .config-option[data-config-option="'+i+'"] .fa-check');
          var el = $('#config-modal .config-selection-container[data-config-option="'+i+'"]');
          if (i == 1 ) {
            if (el.find(".active").length == 3) {
              setEl.css({ display: 'inline-block' });
            } else {
              setEl.css({ display: 'none' });
            }
          } else if ((el.find(".active").length == 1)) {
            setEl.css({ display: 'inline-block' });
          } else {
            setEl.css({ display: 'none' });
          }
        }
      }

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

  $('[data-sku]').click(function() {
    var configOption = $(this).parent().data('config-option');
    var sku = $(this).data('sku');
    $(".config-selection .config-selection-container[data-config-option="+configOption+"] .config-selection-item").removeClass('active');
    $("[data-sku="+sku+"]").addClass('active');
  });

});
