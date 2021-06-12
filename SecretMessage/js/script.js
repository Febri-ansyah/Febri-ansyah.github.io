(()=>{
	const show = document.querySelector(".show"),
	close = document.querySelector(".close"),
	message = document.querySelector(".card");

	show.addEventListener("click", (event)=>{
		show.classList.add("hide");
		message.classList.add("circle");
		message.classList.remove("hide");
		event.preventDefault();
	});

	close.addEventListener("click", (event)=>{
		message.classList.remove("circle");
		message.classList.add("hide");
		show.classList.remove("hide");
		event.preventDefault();
	});

})();