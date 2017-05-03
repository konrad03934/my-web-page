$(window).scroll(function() {

    if ( $(window).scrollTop() >= 80 ) {
        $('.nav li').css('transition-duration', '2s');
        $('.nav li').css('padding', '1px 10px');      
        $('.navbar').css('opacity', '0.9');
        $('.navbar').css('background-color', '#dddddd');
        $('.nav li a').css('color', '#1b4600');
			 
    } else {
        $('.nav li').css('padding','8px 20px');
				$('.navbar').css('opacity', '0.8');
				$('.navbar').css('background-color', '#e0e0e0');
				$('.nav li a').css('color', '#1ac056');
    }
});