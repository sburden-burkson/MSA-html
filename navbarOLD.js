$(function(){
	//Affix Navbar
	var headerHeight = $('header').outerHeight();
	$('.navbar-default').data('offset-top', headerHeight);
	var topSection;
	var whiteTop = $('.white-top')[0];
	var blackGradientImage = "images/textures/top-gradient.png";

	if (!$('[id^="top-section"]')[0] && !$('.home-video-wrapper')[0]) {
		topSection = false;
		$('#navColor').addClass("changeBlack");
	} else {
		$('#navColor').addClass("changeWhite");
		topSection = true;
		if (whiteTop) {
			$('#top-section').append('<div class="texture-top" style="background-image: url('+blackGradientImage+');"></div>');
		}
	}
	// Navbar Height and Transparency
	var navHeight = $('.navbar-default nav').outerHeight();
	function adjustNav(){
		var scrollTop = $(document).scrollTop();
		var navTop = scrollTop - $('header').outerHeight();
		var newNavHeight = navHeight - (navTop * 0.1);
		var opacity = 0 + Math.abs((navTop * 0.01));
		var navLogoHeight = $('#navLogo').outerHeight();
		var logoPad = (newNavHeight - navLogoHeight) / 2;
		if (scrollTop <= headerHeight) {
			$('#navColor').css(
				'background-color', 'rgba(255, 255, 255, 0.05)',
				'height', '80px'
			);
			$('.nav>li>a').css(
				'line-height', '80px'
			);
		}
		if (navTop > 200) {
			$('#navColor').css(
				'background-color', 'rgba(255, 255, 255, 1)'
			);
		}
		if (newNavHeight >= 60 && newNavHeight <= navHeight) {
			$('.navbar-default nav, .navbar-toggle').css(
				'height', newNavHeight
			);
			$('.navbar-brand').css(
				'padding-top', logoPad,
				'padding-bottom', logoPad
			);
			$('.nav>li>a').css(
				'line-height', newNavHeight + 'px'
			);
			$('#navColor').css(
				'background-color', 'rgba(255, 255, 255,' + opacity + ')'
			);
		}
		if (topSection) {
			if (opacity > 0.4) {
				$('#navColor').removeClass("changeWhite");
				$('#navColor').addClass("changeBlack");
			} else {
				$('#navColor').removeClass("changeBlack");
				$('#navColor').addClass("changeWhite");
				// $('#navColor').addClass("changeBlack");
			}
		}
	}
	$(window).on('scroll', function() {
		adjustNav();
	});
	adjustNav();
});
