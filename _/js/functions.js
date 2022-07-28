// Browser detection for when you get desperate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


	/* trigger when page is ready */
	$(document).ready(function (){

		// Add a custom open button for the mobile menu
		$('.openmenu-button').click(function() {
			$('.fixed-menu').addClass('active');
			//$(this).toggleClass('active');
			$('.header-wrapper').toggleClass('active');
		});
		$('.close-menu').click(function() {
			$('.fixed-menu').removeClass('active');
		});
		$('.accordion-menu li.menu-item-has-children > a').click(function(e) {
			e.preventDefault();
			$(this).parent().find(".sub-menu:first").slideToggle(600);
			$(this).toggleClass('active');
		});

	});