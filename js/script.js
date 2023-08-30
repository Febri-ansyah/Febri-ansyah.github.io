$(window).click(() =>{
	if($(event.target).hasClass("toggle") || $(event.target).parent().hasClass("nav-link"))
	{
		$(".toggle").toggleClass("active");
		$(".menu").toggleClass("active");

	};
});

$("#kirim").on('click', (e)=>{
	e.preventDefault;
	location.href = "https://api.whatsapp.com/send/?phone=6289634477490&text=subjek:"
	+$("input[name='text-subject']").val()+"   Context:"+ $("textarea[name='text-body']").val();
});

$(window).on('hashchange', ()=>{
    $("#page-transition").addClass("active");
	setTimeout(()=>{
		$("#page-transition").removeClass("active");
	}, 500);

	const thisPage = location.hash;
	
	$(".nav-link").each((i,e)=>{
		if(thisPage !== ''){
			if(thisPage === $(e).attr("href"))
			{
				$(e).parent().addClass("active");
			}
			else{
				$(e).parent().removeClass("active");
			};
		}
		
		$(".nav-link[href='headline']").addClass("active");
	});


	if($(thisPage).hasClass("hide")){
	 	$(".section").addClass("hide");
	 	setTimeout(()=>{
			$(thisPage).removeClass("hide");
		}, 300);
	};

}).trigger('hashchange');
