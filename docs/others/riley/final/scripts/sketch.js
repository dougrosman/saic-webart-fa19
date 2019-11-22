
window.alert("WARRNING THIS WEBSITE IS MONITERED BY CIA AFTER HITTING 'OK' YOU ARE ALLOWING YOUR DEVICE TO BE MONNITIERED. IF YOU KNOW ANYTHING ABOUT THE DISSAPEARANCE OF ANNE JAYLEANER PLEASE CONTACT OUR MISSING PERSONS HOTLINE")
var bg = document.getElementById("background");
console.log(bg);





window.addEventListener("scroll", function(e) {


  if(window.scrollY > 2500) {
    
  

    bg.style.backgroundImage = "url(assets/gifs/rushingwat.gif)";
    
    
    
    console.log("hey 2500 happened!");
    
    
  } else {
    console.log(window.scrollY);
  }
  
  
  
});


// $(#look).on("mouseleave",function(){
// });

// var beepOne = $("#look")[0];
// $("#glitch1.wav")
// 	.mouseenter(function() {
// 		beepOne.play();
// 	});

