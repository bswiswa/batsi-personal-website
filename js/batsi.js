$(document).ready(function() {
	console.log("document ready");


	$(".about").on("click",function(event) {
		//console.log("Clicked about"); test
	$(".nav ul li").removeClass("clicked");
	$(this).parent().addClass("clicked");
	$(".details").hide();
	$("#about").show();
	event.preventDefault();
	});

	$(".about").trigger("click");

	$(".education").on("click", function(event) {
		$(".nav ul li").removeClass("clicked");
		$(this).parent().addClass("clicked");
		$(".details").hide();
		$("#education").show();
		event.preventDefault();
	});


	$(".experience").on("click", function(event) {
		$(".nav ul li").removeClass("clicked");
		$(this).parent().addClass("clicked");
		$(".details").hide();
		$("#experience").show();
		event.preventDefault();

	});

	$(".skills").on("click", function(event) {
		$(".nav ul li").removeClass("clicked");
		$(this).addClass("clicked");
		$(".details").hide();
		$("#skills").show();
		event.preventDefault();

	});

	$(".reference").on("click", function(event) {
		$(".nav ul li").removeClass("clicked");
		$(this).parent().addClass("clicked");
		$(".details").hide();
		$("#reference").show()
		event.preventDefault();

	});

	$(".profile_pic").on("click", function(event) {
		$(".about").trigger("click");
		event.preventDefault();
	});


});
