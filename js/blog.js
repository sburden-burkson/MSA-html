var blogPageOptions = {
  byRow: true,
  // property: 'min-height',
  // target: null,
  // remove: false
}
$(".featuredBlogHeight").matchHeight(blogPageOptions);

// Featured Blog Post Sizing
// function resizeFeatured() {
//   var padding = parseInt($('#featuredBlog').css('padding-top')) + parseInt($('#featuredBlog').css('padding-bottom'));
//   var rightH = $('#featuredBlogText').outerHeight();
//   if ($(window).width() > 767) {
//     var rightH = $('#featuredBlogText').outerHeight();
//     $('#featuredBlog').css({
//       'height': rightH + padding
//     });
//     $('#featuredBlogImage').css({
//       'height': rightH
//     });
//   } else {
//     $('#featuredBlog').css({
//       'height': "auto"
//     });
//     $('#featuredBlogImage').css({
//       'height': "auto"
//     });
//   }
// }
// resizeFeatured();
// $(window).on('resize', function() {
//   resizeFeatured();
// });

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
