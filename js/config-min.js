jQuery(document).ready(function($){function o(){0==$("#config-modal-mobile .config-option.active").data("config-option")?$(".config-option-previous").hide():$(".config-option-previous").show(),$("#config-modal-mobile .config-option.active").data("config-option")==$("#config-modal-mobile .config-option").last().data("config-option")?$(".config-option-next").hide():$(".config-option-next").show()}$("#config-modal-mobile").modal("show"),$("#config-wheel-carousel").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}),$("#config-wheel-carousel-mobile").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}),$("#config-selection-carousel-mobile").slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,prevArrow:'<button type="button" class="config-selection-carousel-mobile-button carousel-button-left form-control"><i class="fal fa-angle-left"></i></button>',nextArrow:'<button type="button" class="config-selection-carousel-mobile-button carousel-button-right form-control"><i class="fal fa-angle-right"></i></button>',responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),o(),$(".config-option-previous").click(function(){var i=$("#config-modal-mobile .config-option.active"),n=i.data("config-option")-1,t=$("#config-modal-mobile .config-option").last().data("config-option");$('#config-modal-mobile .config-option[data-config-option="'+n+'"]').addClass("active"),i.removeClass("active"),o()}),$(".config-option-next").click(function(){var i=$("#config-modal-mobile .config-option.active"),n=i.data("config-option")+1,t=$("#config-modal-mobile .config-option").last().data("config-option");$('#config-modal-mobile .config-option[data-config-option="'+n+'"]').addClass("active"),i.removeClass("active"),o()})});