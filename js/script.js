$(document).ready(function(){
	
	factor_x = ($(window).width())  / 1980;
	factor_y = ($(window).height()) / 1080;

	$('html').css("transform","scale("+factor_x+","+factor_y+")");  
	//For Firefox
	$('html').css("-moz-transform","scale("+factor_x+","+factor_y+")"); 
	      
	//For Google Chrome
	$('html').css("-webkit-transform","scale("+factor_x+","+factor_y+")");

	//For Opera
	$('html').css("-o-transform","scale("+factor_x+","+factor_y+")");
	
	
	var nav_menu_shown = true;
	var $nav_menu = $("#categories");
	var $nav_bar = $(".nav_bar")
	var $scrolling = false;
	

	$nav_bar.hover(function() {
    	$nav_menu.stop().animate({ "font-size": "30px" }, 500);
    	$nav_bar.stop().animate({ "height": "45px" }, 500);
	}, function() {
    	$nav_menu.stop().animate({ "font-size": "28px" }, 500);
    	$nav_bar.stop().animate({ "height": "40px" }, 500);
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