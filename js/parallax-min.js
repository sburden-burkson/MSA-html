function getBackgroundImageSize(e){var t=$(e).css("background-image").match(/^url\(["']?(.+?)["']?\)$/),o=new $.Deferred;if(t){var i=new Image;i.onload=o.resolve,i.onerror=o.reject,i.src=t[1]}else o.reject();return o.then(function(){return{width:this.width,height:this.height}})}function parallaxScroll(){var e=$(window).scrollTop()+1;$(".scroll-effect").each(function(){windowViewTop=$(window).scrollTop(),windowViewBottom=windowViewTop+$(window).height(),elTop=$(this).offset().top,elBottom=elTop+$(this).outerHeight(),scrolledAdjusted=e-(elTop-$(window).height()/2),scrolledAdjusted=elTop-(e+$(window).height()),scrolledAdjusted=e+$(window).height()-elTop;var t=$(this).data("imgHeight"),o=-(t||$(this).outerHeight())/2+scrolledAdjusted*scrollSpeed;o+="px",$(this).removeClass("scroll-effect-forced"),$(this).css({"background-position":"50% "+o})})}var scrollSpeed=.3;$(function(){var e=200,t=100;$(".scroll-effect").css({"background-size":"auto 200%","background-attachment":"scroll"}).each(function(){var e=$(this);getBackgroundImageSize(e).then(function(t){justInCase=10;var o=e.outerHeight()+$(window).height()*scrollSpeed+justInCase,i=t.width/t.height*o;i<e.width()?(e.data("imgWidth",t.width).data("imgHeight",t.height),e.css({"background-size":"100% auto"}).addClass("scroll-effect-adjusted")):(e.data("imgWidth",i).data("imgHeight",o),e.css({"background-size":i+"px "+o+"px"})),parallaxScroll()}).fail(function(){})}),$(window).scroll(function(e){parallaxScroll()}),parallaxScroll()});