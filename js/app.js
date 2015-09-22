$(document).ready(function(){
	var nav_menu_shown = true;
	var $nav_menu = $("#categories");
	var $nav_arrow = $(".nav_pic");
	var $nav_bar = $(".nav_bar")
	var $scrolling = false;
	
	$nav_arrow.click(function(){
		if(nav_menu_shown == true){
			$nav_menu.animate({width:'toggle'},1000);
			console.log("clicked on nav_arrow");
			nav_menu_shown = false;
		}
		else if(nav_menu_shown == false){
			$nav_menu.show();
			console.log("clicked on nav_arrow");
			nav_menu_shown = true;
		}
	});

	$nav_bar.hover(function() {
    	$nav_menu.stop().animate({ "font-size": "22px" }, 500);
    	$nav_bar.stop().animate({ "height": "45px" }, 500);
	}, function() {
    	$nav_menu.stop().animate({ "font-size": "20px" }, 500);
    	$nav_bar.stop().animate({ "height": "40px" }, 500);
	});

	$(window).scroll(function() {
		$scrolling = true;
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
        	$scrolling = false;
        	console.log("hasn't scrolled for 600 ms");
        	$nav_menu.stop().animate({ "font-size": "20px" }, 500);
    		$nav_bar.stop().animate({ "height": "40px" }, 500);
    	}, 600));
    	if ($scrolling == true){
    		console.log("is scrolling");
    		$nav_menu.stop().animate({ "font-size": "19px" }, 500);
    		$nav_bar.stop().animate({ "height": "38px" }, 500);
    	} else {
    		console.log("is not scrolling");
    		
    	}
	});
});