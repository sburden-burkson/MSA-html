var collectionHeightOptions = {
  byRow: false
}
if ($(window).width() < 480) {
  collectionHeightOptions = {
    byRow: true
  }
}
// Featured Blog Post Sizing
function resizeFeatured() {
  var padding = parseInt($('#featuredBlog').css('padding-top')) + parseInt($('#featuredBlog').css('padding-bottom'));
  var rightH = $('#featuredBlogText').outerHeight();
  if ($(window).width() > 767) {
    var rightH = $('#featuredBlogText').outerHeight();
    $('#featuredBlog').css({
      'height': rightH + padding
    });
    $('#featuredBlogImage').css({
      'height': rightH
    });
  } else {
    $('#featuredBlog').css({
      'height': "auto"
    });
    $('#featuredBlogImage').css({
      'height': "auto"
    });
  }
}
resizeFeatured();
$(window).on('resize', function() {
  if ($(window).width() < 480) {
    collectionHeightOptions = {
      byRow: true
    }
  }
  resizeFeatured();
  $(".collectionHeight").matchHeight(collectionHeightOptions);
});

// Blog Item Masonry
var $blogGrid = $('.collection-item-container').masonry({
  // options
  itemSelector: '.collection-item',
  columnWidth: 300,
  isFitWidth: true,
  gutter: 20,
  horizontalOrder: true,
});
$blogGrid.imagesLoaded().progress(function() {
  $blogGrid.masonry('layout');
});

$(".collectionHeight").matchHeight(collectionHeightOptions);
