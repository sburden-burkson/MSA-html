$(function(){
    // Blog Item Masonry
    var $blogGrid = $('.collection-item-container').masonry({
      // options
      itemSelector: '.collection-item',
      columnWidth: 300,
      isFitWidth: true,
      gutter: 20,
      horizontalOrder: true
    });
    $blogGrid.imagesLoaded().progress(function() {
      $blogGrid.masonry('layout');
    });

    // Match Height JS
    var collectionHeightOptions = {
      byRow: false
    }
    $(".collectionHeight").matchHeight(collectionHeightOptions);
    $(".collection-img-wrap").matchHeight(collectionHeightOptions);

    $(".collection-col").matchHeight(collectionHeightOptions);
});