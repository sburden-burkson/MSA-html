$(".down-arrows a").click(function(){var o=$(this).closest(".section");$("html,body").animate({scrollTop:o.offset().top+o.outerHeight(!0)-60},"slow")});var headerHeight=$("header").outerHeight();$("#navColor").data("offset-top",headerHeight);var topSection;$('[id^="top-section"]')[0]||$(".home-video-wrapper")[0]?($("#navColor").addClass("changeWhite"),topSection=!0):(topSection=!1,$("#navColor").addClass("changeBlack"));var navHeight=$("nav").outerHeight();$(window).on("scroll",function(){var o=$(document).scrollTop(),a=o-$("header").outerHeight(),e=navHeight-.1*a,t=0+Math.abs(.01*a),n=$("#navLogo").outerHeight(),r=(e-n)/2;o<=headerHeight&&($("#navColor").css("background-color","rgba(255, 255, 255, 0.05)","height","80px"),$(".nav>li>a").css("line-height","80px")),a>200&&$("#navColor").css("background-color","rgba(255, 255, 255, 1)"),e>=60&&e<=navHeight&&($("nav, .navbar-toggle").css("height",e),$(".navbar-brand").css("padding-top",r,"padding-bottom",r),$(".nav>li>a").css("line-height",e+"px"),$("#navColor").css("background-color","rgba(255, 255, 255,"+t+")")),topSection&&(t>.4?($("#navColor").removeClass("changeWhite"),$("#navColor").addClass("changeBlack")):($("#navColor").removeClass("changeBlack"),$("#navColor").addClass("changeWhite")))});