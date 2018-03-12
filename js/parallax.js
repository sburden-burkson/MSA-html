function getBackgroundImageSize(el) {
    var imageUrl = $(el).css('background-image').match(/^url\(["']?(.+?)["']?\)$/);
    var dfd = new $.Deferred();

    if (imageUrl) {
        var image = new Image();
        image.onload = dfd.resolve;
        image.onerror = dfd.reject;
        image.src = imageUrl[1];
    } else {
        dfd.reject();
    }

    return dfd.then(function() {
        return { width: this.width, height: this.height };
    });
}
var scrollSpeed = 0.3;
function parallaxScroll() {
		var scrolled = $(window).scrollTop() + 1;
		$('.scroll-effect').each(function() {
			// Get window and element values
			windowViewTop = $(window).scrollTop();
			windowViewBottom = windowViewTop + $(window).height();
			elTop = $(this).offset().top;
			elBottom = elTop + $(this).outerHeight();

			// Find scroll position and adjust for element location
			// scrolledAdjusted = scrolled - (elTop-($(this).outerHeight()/2));
			scrolledAdjusted = scrolled - (elTop - $(window).height()/2);
			scrolledAdjusted = elTop - (scrolled + $(window).height());
			scrolledAdjusted = (scrolled + $(window).height()) - elTop;
			console.log('scrolledAdjusted = '+scrolledAdjusted);

			// Get actual img height
			var elImgHeight = $(this).data('imgHeight');
			//							Get half height, use actual img height if possible          Adjust for parallax effect
			var newImgPos = -( ((elImgHeight)? elImgHeight : $(this).outerHeight()) /2) + (scrolledAdjusted * scrollSpeed);
			// var newImgPos = -(scrolledAdjusted * scrollSpeed) - ($(this).outerHeight()/2);
			
			// Check to make sure the img fills the element
			// NOT WORKING FOR SOME REASON... FORCES TOO SOON
			// if(newImgPos > 0 || elImgHeight && newImgPos < -(elImgHeight)){
			// 	newImgPos = '50%';
			// 	$(this).addClass('scroll-effect-forced');
			// }else{
				newImgPos += 'px';
				$(this).removeClass('scroll-effect-forced');
			// }

			// Set the position
			$(this).css({'background-position': '50% '+newImgPos});
		});
}
$(function(){
	var parallaxSizeAdjustInitial = 200;

	// 100 = No size adjustment, 120 = 20% larger
	var parallaxSizeAdjust = 100;

	$('.scroll-effect').css({'background-size':'auto '+parallaxSizeAdjustInitial+'%', 'background-attachment':'scroll'}).each(function(){
		var currEl = $(this);
		getBackgroundImageSize(currEl).then(function(size) {
			// Increase height of photo so that it fills element with room for parallax scrolling
			justInCase = 10;
			var heightAdjusted = currEl.outerHeight() + (($(window).height() * scrollSpeed)) + justInCase;
			var widthAdjusted = (size.width / size.height) * heightAdjusted;
			if(widthAdjusted < currEl.width()){
				// console.log('Warning: Parallax image is portrait. Will adjust to fill width. (Img width (150%): '+widthAdjusted+', El width: '+currEl.width()+')');
				currEl.data('imgWidth', size.width).data('imgHeight', size.height);
				currEl.css({'background-size':'100% auto'}).addClass('scroll-effect-adjusted');
			}else{
				// console.log('Success: Parallax image fits. (Img width (150%): '+widthAdjusted+', El width: '+currEl.width()+')');
				currEl.data('imgWidth', widthAdjusted).data('imgHeight', heightAdjusted);
				currEl.css({'background-size':widthAdjusted+'px '+heightAdjusted+'px'});
			}
			parallaxScroll();
		}).fail(function() {
			// console.log('Failed to load image size');
		});
	});
	$(window).scroll(function (e) {
			parallaxScroll();
	});
	parallaxScroll();
});
