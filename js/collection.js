$(function(){
    // Collection Masonry
    var $collectionGrid = $('.collection-item-container').masonry({
      // options
      itemSelector: '.collection-item',
      columnWidth: 300,
      isFitWidth: true,
      gutter: 20,
      horizontalOrder: true
    });
    $collectionGrid.imagesLoaded().progress(function() {
      $collectionGrid.masonry('layout');
    });

    // Match Height JS
    $(".collectionHeight").matchHeight({byRow: false});
    $(".collection-img-wrap").matchHeight({byRow: false});
    $(".collection-col").matchHeight({byRow: false});
    
    // Color fix
    // use var `colorVals` and `queryString` from archive-product.php
    console.log(queryString);
    console.log(colorVals);
    $('.shop-filters-widget-area .woocommerce-widget-layered-nav-list li a').each(function(){
        var isChosen = ($(this).closest('li').hasClass('chosen'))? true : false;
        
    });
});