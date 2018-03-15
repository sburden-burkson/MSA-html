jQuery(function($){
    
    // Product Image Carousel
    $('#product-image-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '#product-thumbs',
      dots: true
    });
    
    // Product Image Carousel Thumbnails
    $('#product-thumbs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '#product-image-carousel',
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
    });
    
    // Window resize catch
    $( window ).resize(function() {
        $('#product-thumbs').each(function() {
          $(this).slick("getSlick").refresh();
        });
    });
    
    // Product Images Match Height
    $('.product-image-height').matchHeight();
    
    // Tab click event
    $(".productTabsHeight").click(function(){
        if(!$(this).hasClass('active-skip')){
            $(".productTabsHeight").removeClass("active");
            $(this).addClass("active");
        }
    });
    
    // Scroll-to buttons
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        var anchorId = $.attr(this, 'href');
        if(anchorId.length > 1){
            $('html, body').animate({
                scrollTop: $(anchorId).offset().top
            }, 500);
        }
    });
    
    // Specs Table Carousel
    var specsSlides = $('#product-specs-carousel .product-specs-carousel-slide').length;
    function specsSlickCheck() {
        if($(window).width() > 1214) {
            if($('#product-specs-carousel').hasClass('slick-initialized')) {
                $('#product-specs-carousel').slick('unslick');
            }
        }else{
            if(!$('#product-specs-carousel').hasClass('slick-initialized')) {
                $('#product-specs-carousel').not('.slick-initialized').slick({
                    dots: true,
                    arrows: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: (specsSlides > 4)? 4 : specsSlides,
                    slidesToScroll: (specsSlides > 4)? 4 : 1,
                    variableWidth: true,
                    prevArrow: '<button type="button" class="product-specs-carousel-button carousel-button-left form-control"><i class="fal fa-angle-left"></i></button>',
                    nextArrow: '<button type="button" class="product-specs-carousel-button carousel-button-right form-control"><i class="fal fa-angle-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true,
                                dots: true,
                            }
                        }
                    ]
                });
            }
        }
    }
    specsSlickCheck(); // First run
    
    // Window resize event
    $(window).on('resize', function() {
        $('#product-thumbs').each(function() {
          $(this).slick("getSlick").refresh();
        });
        specsSlickCheck();
    });
});