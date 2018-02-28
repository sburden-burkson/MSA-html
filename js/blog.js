var blogItemOptions = {
  byRow: false
}
$(".featuredBlogHeight").matchHeight();
$(".blog-item-info-wrap").matchHeight(blogItemOptions);

// Blog Item Masonry
var $blogGrid = $('.blog-item-container').masonry({
  // options
  itemSelector: '.blog-item',
  columnWidth: 320,
  isFitWidth: true,
  gutter: 20,
  horizontalOrder: true,
});
$blogGrid.imagesLoaded().progress(function() {
  $blogGrid.masonry('layout');
});
