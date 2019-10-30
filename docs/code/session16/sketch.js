// var x = 0;
// var y = 0;

// function setup() {
// let canvas = createCanvas(400, 400);
// background(255);
// canvas.parent("sketch");

// x = 0;

// }
// function draw() {
//     //background(220);
  
  
//   //fill(255);
//   ellipse(x, y, 20, 20);
  
//   if(x > width) {
//     x = 0;
//     y = random(height/2);
//     fill(random(100, 255), random(255), random(255));
    
//   }
  
  
//   x+=10;
// }


var x = 0;
var y = 0;

function setup() {
let canvas = createCanvas(400, 400);
background(255);
canvas.parent("sketch");

x = 0;

}
function draw() {
    //background(220);
  
  
  if(x < width/2) {
    
    fill(255, 200, 20);
  } else {
    fill(20, 200, 255);
  }
  
  ellipse(x, y, 10, 10);
  
  if(x > width) {
    x = 0;
    y = random(height-30);
    
  }
  
  
  x+=10;
}
