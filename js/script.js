

$(document).ready(function(){

	var $bob_info = $('#bob_info');
	var $bob_img  = $('#bob');
	var is_shown_bob  = false;
	$bob_img.click(function(){
		if (!is_shown_bob ) {
			
			$bob_info.slideDown();
			is_shown_bob  = true;
			if(is_shown_sponge) {
				$sponge_info.slideUp();
				is_shown_sponge  = false;
			}
		} else {
			$bob_info.slideUp();
			is_shown_bob  = false;
		}
		
	});
	
	var $sponge_img  = $('#sponge');
	var $sponge_info = $('#sponge_info');
	var is_shown_sponge  = false;
	$sponge_img.click(function(){
		if (!is_shown_sponge ) {
			
			$sponge_info.slideDown();
			is_shown_sponge  = true;
			if (is_shown_bob) {
				$bob_info.slideUp();
				is_shown_bob  = false;
			}
		} else {
			$sponge_info.slideUp();
			is_shown_sponge  = false;
		}
		
	});
});