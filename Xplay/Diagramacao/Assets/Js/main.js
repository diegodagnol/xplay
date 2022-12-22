function setScroll(scroll) {
	if (scroll >= 100) {
		$(".header").addClass("scrolled");
	}
	else {
		$(".header").removeClass("scrolled");
	}
}

$(document).ready(function() {
	var scroll = $(window).scrollTop();    
	setScroll(scroll);

    $(".btn__open--menu").on("click", function() {
		$(this).toggleClass("show");
		$(".menu").toggleClass("show");
		$(".logo").toggleClass("show");
	})
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();    
		setScroll(scroll)
	})
	
});

