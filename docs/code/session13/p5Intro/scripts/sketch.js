function setup() {
  createCanvas(400, 400);
  frameRate(60);
  // background-color(255, 0, 0);
}

function draw() {
  
  
  if(frameCount % 10 == 0)
  {
    background(random(255));
    fill(random(255), random(255), random(255));
  }
  
  for(let i = 0; i < 200; i+=20) {
    
    strokeWeight(random(3));

    ellipse(width/2, height/2, sin(frameCount/i)*mouseY, sin(frameCount/i)*mouseX);
    
  }
  
  
  
}