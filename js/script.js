

$(document).ready(function(){
	
	var nav_menu_shown = true;
	var $nav_menu = $("#categories");
	var $nav_bar = $(".nav_bar")
	var $scrolling = false;
	

	$nav_bar.hover(function() {
    	$nav_menu.stop().animate({ "font-size": "22px" }, 500);
    	$nav_bar.stop().animate({ "height": "45px" }, 500);
	}, function() {
    	$nav_menu.stop().animate({ "font-size": "21px" }, 500);
    	$nav_bar.stop().animate({ "height": "40px" }, 500);
	});

	$(window).scroll(function() {
		$scrolling = true;
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
        	$scrolling = false;
        	console.log("hasn't scrolled for 600 ms");
        	$nav_menu.stop().animate({ "font-size": "21px" }, 500);
    		$nav_bar.stop().animate({ "height": "40px" }, 500);
    	}, 600));
    	if ($scrolling == true){
    		console.log("is scrolling");
    		$nav_menu.stop().animate({ "font-size": "20px" }, 500);
    		$nav_bar.stop().animate({ "height": "38px" }, 500);
    	} else {
    		console.log("is not scrolling");
    		
    	}
	});

	var $bob_img  = $('#cyrus');
	var $bob_info = $('#cyrus_info');
	
	var is_shown_bob  = false;
	$bob_img.click(function(){
		if (!is_shown_bob ) {	
			$bob_info.fadeIn('200');
			window.scrollTo(0, 800);
			is_shown_bob  = true;
			if(is_shown_sponge) {
				$sponge_info.hide();
				is_shown_sponge  = false;
			}
		} else {
			$bob_info.hide();
			is_shown_bob  = false;
		}
		
	});
	
	var $sponge_img  = $('#greg');
	var $sponge_info = $('#greg_info');
	var is_shown_sponge  = false;
	$sponge_img.click(function(){
		if (!is_shown_sponge ) {
			
			$sponge_info.fadeIn('200');
			window.scrollTo(0, 800);
			is_shown_sponge  = true;
			if (is_shown_bob) {
				$bob_info.hide();
				is_shown_bob  = false;
			}
		} else {
			$sponge_info.hide();
			is_shown_sponge  = false;
		}
		
	});
});