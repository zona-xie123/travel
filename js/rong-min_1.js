$(document).ready((function(){$(".fancybox").fancybox(),$(".tab .tab_menu li").click((function(){var i=$(this).attr("data-tab");$(".tab li").removeClass("active"),$(this).addClass("active"),$(".tab_content ul").removeClass("active").css({display:"none"}),$("#"+i).slideToggle().addClass("active")})),$(".triger").click((function(i){$(this).siblings("ul").slideToggle()})),$("ex_menu li").click((function(){var i=$(this).attr("data-tab");$(".tab li").removeClass("active"),$(this).addClass("active"),$(".tab_content ul").removeClass("active").css({display:"none"}),$("#"+i).slideToggle().addClass("active")})),$(".triger").click((function(i){$(this).siblings("ul").slideToggle()})),$(".ex_menu li").click((function(){$(".ex_menu li .click").removeClass("active"),$(".ex_menu li a p").removeClass("active"),$(this).children("a").children(".click").addClass("active"),$(this).children("a").children("p").addClass("active")})),$(".understand .table thead").click((function(){$(this).siblings("tbody").stop().slideToggle(50)}))}));