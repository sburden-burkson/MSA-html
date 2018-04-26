var warrantyPageOptions = {
  byRow: false,
  // property: 'height',
  // target: null,
  // remove: false
}
$(".warrantyHeight").matchHeight(warrantyPageOptions);
$(".warrantyOptionHeight").matchHeight();
$(".warranty-panes .tab-pane").matchHeight(false);
function warrantyInfoCorrectHeight() {
  if ($(window).width() > 767) {
    $(".warranty-panes .tab-pane").matchHeight(false);
  } else {
    // $('.tab-pane').css(
    //   'height', 'auto'
    // );
    $('.warranty-panes .tab-pane').matchHeight({ remove: true });
  }
}
warrantyInfoCorrectHeight();
$(window).on('resize', function() {
  warrantyInfoCorrectHeight();
});

// $(".warrantyInfoHeight").matchHeight(false);

$(".warrantyOptionHeight").click(function(){
  $(".warrantyOptionHeight").removeClass("active");
  $(this).addClass("active");
});
