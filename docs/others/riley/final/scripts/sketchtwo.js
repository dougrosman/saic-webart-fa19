var glitch = document.getElementById("#glitch")[0];
var lo = document.getElementById(".look")
	.mouseenter(function(){
		glitch.play();
		console.log("the hover works")
	});