var headerHeight=$("header").outerHeight();$(".navbar-default").data("offset-top",headerHeight);var navHeight=$("nav").outerHeight();$(window).on("scroll",function(){var a=$(this).scrollTop(),o=a-$("header").outerHeight(),e=navHeight-.1*o,r=0+Math.abs(.01*o),t=$("#navLogo").outerHeight(),n=(e-t)/2;a<$("header").outerHeight()&&$("#navColor").css("background-color","rgba(255, 255, 255, 0.05)"),o>200&&$("#navColor").css("background-color","rgba(255, 255, 255, 1)"),e>=60&&e<=navHeight&&($("nav, .navbar-toggle").css("height",e),$(".navbar-brand").css("padding-top",n,"padding-bottom",n),$(".nav>li>a").css("line-height",e+"px"),$("#navColor").css("background-color","rgba(255, 255, 255,"+r+")")),$("#navColor").addClass("changeBlack")});