$(document).ready(function() {
	console.log("document ready");
/*
Andrew: Using href as a variable in Javascript can be misleading
*/
 	$(".nav-class > a").on("click", function(event) {
 		var href = $(this).attr("href");
 		var active = $(this).hasClass("clicked");

 		$(".list-group-item").removeClass("clicked");
 		$(".details").hide("slow");

 		if(active == false) {
 			console.log("activate");
			$(this).addClass("clicked");
			$(href).show("slow");
		} else {
			console.log("deactivate");
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
