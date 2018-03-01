// function sidenavTop(){
// 	var scrollTop = $(window).scrollTop();
// 	var headerHeight = $('header').outerHeight();
// 	var newTop = 0;
// 	if(scrollTop < headerHeight){
// 		newTop = headerHeight - scrollTop;
// 	}
// 	$('#sidenav .toggle-wrapper').css({'top':newTop+'px'});
// }

$(function(){
	$('nav .navbar-right .side-nav-open, #sidenav .side-nav-close').click(function(){
		$('#sidenav').stop().toggleClass('active').removeClass('animated');
		if($('#sidenav').hasClass('active') && !$('#sidenav').hasClass('animated')){
			$('#sidenav').addClass('animated').css({'left': '10%'}).animate({'left': '0'}, 300);
		}
	});
	/* CLOSE BUTTON AUTO-ADJUST TO MEET OPEN BUTTON */
	/* Commented because it looks silly if you scroll up and down in the sidenav */
	// $(window).on('scroll', function(){
	// 	sidenavTop();
	// });
	// sidenavTop();
});
