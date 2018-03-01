var warrantyPageOptions = {
  byRow: false,
  // property: 'height',
  // target: null,
  // remove: false
}
$(".warrantyHeight").matchHeight();
$(".warrantyOptionHeight").matchHeight();
$(".tab-pane").matchHeight(false);
function warrantyInfoCorrectHeight() {
  if ($(window).width() > 767) {
    $(".tab-pane").matchHeight(false);
  } else {
    // $('.tab-pane').css(
    //   'height', 'auto'
    // );
    $('.tab-pane').matchHeight({ remove: true });
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
