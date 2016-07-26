$(document).ready(function() {

 	$(".nav-class > a").on("click", function(event) {
 		var href = $(this).attr("href");
 		var active = $(this).hasClass("clicked");

 		$(".list-group-item").removeClass("clicked");
 		$(".details").hide("slow");

 		if(active == false) {
			$(this).addClass("clicked");
			$(href).show("slow");
		} 

		event.preventDefault(); //no scrolling
 	});

	// equivalent to $(".about").trigger("click");
	$(".nav-class > a:nth-child(1)").trigger("click");


	$(".profile_pic").on("click", function(event) {
		var first_child = $(".nav-class > a:nth-child(1)");
		if(first_child.hasClass("clicked")) return;
		first_child.trigger("click");
		event.preventDefault(); //no scrolling
	});


});
