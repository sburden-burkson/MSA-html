var warrantyPageOptions = {
  byRow: false,
  // property: 'height',
  // target: null,
  // remove: false
}
$(".warrantyHeight").matchHeight();
$(".warrantyOptionHeight").matchHeight();
$(".tab-pane").matchHeight(false);
$(".warrantyInfoHeight").matchHeight(false);

$(".warrantyOptionHeight").click(function(){
  $(".warrantyOptionHeight").removeClass("active");
  $(this).addClass("active");
});
