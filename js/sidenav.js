$(function(){
	// $('nav .navbar-right .side-nav-open, #sidenav .side-nav-close').click(function(){
	$('*[data-sidenav]').click(function() {
		sidenavId = $(this).data('sidenav');
		sidenav = $('#'+sidenavId);
		sidenav.stop().toggleClass('active');
		if(sidenav.hasClass('active')){
			sidenav.css({'right': '-10%'}).animate({'right': '0%'}, 300);
			if(sidenav.hasClass('full-screen')){
				$('html, body').css({'overflow': 'hidden'});
			}
		}else if(sidenav.hasClass('full-screen')){
			$('html, body').css({'overflow': 'auto'});
		}
	});
});
