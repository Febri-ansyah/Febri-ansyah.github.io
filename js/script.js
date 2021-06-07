function Menu(){
	$(".toggle").toggleClass("active");
	$(".menu").toggleClass("active");
};

$(window).click(() =>{
	if($(event.target).hasClass("toggle"))
	{
		Menu();
	};

	if($(event.target).parent().hasClass("nav-link"))
	{
		$(".nav-item.active").removeClass('active');
		$(event.target).parent().parent().addClass('active');
		Menu();
	};
});

$(window).on('hashchange', ()=>{
    $("#page-transition").addClass("active");
	setTimeout(()=>{
		$("#page-transition").removeClass("active");
	}, 400);

	const thisPage = location.hash;
	
	if($(thisPage).hasClass("hide")){
	 	$(".section").addClass("hide");
	 	setTimeout(()=>{
			$(thisPage).removeClass("hide");
		}, 430);
	}
	
}).trigger('hashchange');
