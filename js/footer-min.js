function footerAccordion(){$(window).width()>767?$('[id^="footerCollapse"]',"footer").addClass("in"):$('[id^="footerCollapse"]',"footer").removeClass("in")}footerAccordion(),$(window).on("resize",function(){footerAccordion()}),$(".collapse").on("shown.bs.collapse",function(){$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus")}).on("hidden.bs.collapse",function(){$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus")});