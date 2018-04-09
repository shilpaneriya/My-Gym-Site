$(document).ready(function(){
  
    var upperLimit = jQuery(window).height();
    $(window).scroll(function () { 
    	var scrollTop = jQuery(document).scrollTop();	
    	if ( scrollTop > 0 ) {
    		$('.navbar').addClass('top-nav-collapse'); 
    	}else{	
    		$('.navbar').removeClass('top-nav-collapse'); 
    	}
    });
});