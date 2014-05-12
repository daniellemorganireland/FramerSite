$('#topbar img').click( function(){
    $("#sidebar").toggleClass("appear");
});

// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);


/* ========================= */

 if ( $( "#sidebar" ).hasClass( "more" ) ) {
	$("#sidebar ul#more section").addClass("appear");
	$("#sidebar ul#more svg").hide();
}

/* ========================= */

 if ( $( "#sidebar" ).hasClass( "docs" ) ) {
	$("#sidebar ul#docs section").addClass("appear");
	$("#sidebar ul#docs svg").hide();
}

/* ========================= */

 if ( $( "#sidebar" ).hasClass( "learn" ) ) {
	$("#sidebar ul#learn section").addClass("appear");
	$("#sidebar ul#learn svg").hide();
}

/* ========================= */

 if ( $( "#sidebar" ).hasClass( "examples" ) ) {
	$("#sidebar ul#examples section").addClass("appear");
	$("#sidebar ul#examples svg").hide();
}

/* ========================= */

 if ( $( "#sidebar" ).hasClass( "start" ) ) {
	$("#sidebar ul#start section").addClass("appear");
	$("#sidebar ul#start svg").hide();
}

/* ========================= */
