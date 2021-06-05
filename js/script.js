$('.toggle').click(function(){
	$(".menu").toggleClass("active");
	$(".toggle").toggleClass("active");
	
	$(".nav-item").click(function(){
		$('.nav-item.active').removeClass('active');
		$(this).addClass('active');
		$(".toggle.active").removeClass("active");
		$(".menu.active").removeClass("active");
	});
});

