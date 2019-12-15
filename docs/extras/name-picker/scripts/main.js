let roller = document.getElementById("roll-it");
let sketchParent = document.getElementById("sketch-parent");
let particles = [];
let tempParticles = [];
var numParticles = 6.0;
let ages = [];
let names = ["Darcy", "Dermott", "Fengwei", "Ilai", "Jun", "Max", "Riley", "Jeanette", "Shannon", "Soo", "Suri", "Winnie", "Xin", "Zhixuan"];
let shuffledNames = shuffle(names);
let tempFrameCount;
let oneName = true;
let shouldLerp = false;


function setup() {

  var canvas = createCanvas(sketchParent.clientWidth, sketchParent.clientHeight);
  canvas.parent("sketch-parent");
  
  colorMode(HSB, 100);
  background(0);
  rectMode(CENTER);
  textSize(100);
  strokeWeight(4);

  // set up ages array
  for(let i = 0; i < shuffledNames.length-2; i++) {
    ages.push(60+(i*i*4));
  }
  ages.push(800);
  ages.push(1200);

  console.log("Initial shuffle: " + shuffledNames);

  // create initial particle system
  for(let i = 0; i < shuffledNames.length; i++) {  
    let p = new Particle(shuffledNames[i], ages[i]);
    particles.push(p);
    tempParticles.push(p);
  }
}


function draw() {

  if(!shouldLerp){
    push();
      fill(0, 0, 0, 5);
      rectMode(CORNER);
      noStroke();
      rect(0, 0, width, height);
    pop();
  }
  for(let i = 0; i < tempParticles.length; i++) {
    
    stroke(tempParticles[i].stroke);
    fill(tempParticles[i].color);
    //textSize(tempParticles[i].size);
    push();
      translate(tempParticles[i].pos.x, tempParticles[i].pos.y);
      rotate((abs(tempParticles[i].vel.x))/5);
      text(tempParticles[i].name, 0, 0);
    pop();
    tempParticles[i].update();
    
    //console.log(abs(tempParticles[i].vel.y));

    // if(abs(tempParticles[i].vel.x) < 0.25 && abs(tempParticles[i].vel.y) < 0.25 && abs(tempParticles[i].pos.y == sketchParent.clientHeight) && tempParticles.length > 1) {
    //   tempParticles.splice(i, 1);
    //   //print(tempParticles);
    // }

    if(abs(tempParticles[i].vel.x) < 0.25 && abs(tempParticles[i].vel.y) < 0.25 && tempParticles.length > 1) {
      tempParticles.splice(i, 1);
      tempFrameCount = frameCount;
      //print(tempParticles);
    }

    
    if(frameCount-tempFrameCount > 120 && tempParticles.length == 1 && oneName) {
      
      push();
        rectMode(CORNER);
        noStroke();
        fill(0, 0, 0, 5);
        rect(0, 0, width, height);
      pop();

      if(frameCount-tempFrameCount > 180 && !shouldLerp) {
        
        //background(0);
        tempFrameCount = frameCount;
        shouldLerp = !shouldLerp;
        oneName = false;
      }
      
    }

    if(shouldLerp) {
      let lerpVal = constrain(map(frameCount, tempFrameCount, tempFrameCount+240, 0., 1.), 0., 1.);
      //console.log(lerpVal);

      tempParticles[0].pos.x = lerp(tempParticles[0].pos.x, (width/2)-(textWidth(tempParticles[0].name)/2), lerpVal);
      tempParticles[0].pos.y = lerp(tempParticles[0].pos.y, height/2, lerpVal);
    }
  }
}

function resetParticleSystem(_names, _age) {

  tempParticles = [];
  // reset particle values
  for(let i = 0; i < _names.length; i++) {
  
      let currParticle = particles[i];

      currParticle.pos = createVector((width/2)-(textWidth(currParticle.name)/2), (height/2)-textAscent()/2);
      currParticle.vel = createVector(random(-30, 30), random(-30, -30));
      currParticle.age = ages[i];
      currParticle.name = shuffledNames[i];
      currParticle.color = color(random(100), random(50, 100), 100);
      currParticle.stroke = color(random(100), random(80, 100), 30);
      currParticle.drag = random(0.99, 0.993);

      tempParticles[i] = particles[i];
  }
  
}

roller.addEventListener("click", function(){
    
  // reset the page
  background(random(100), random(100), random(100));

  // pop off the last name
  console.log("winner?: " + shuffledNames.pop());

  // shift off the first age
  ages.shift();

  shuffle(shuffledNames);
  
  resetParticleSystem(shuffledNames, ages);
  

});

// Particle class
class Particle {
  
  constructor(_name, _age) {

    this.pos = createVector((width/2)-(textWidth(_name)/2), (height/2)-textAscent()/2);
    this.vel = createVector(random(-30000, 30000), random(-30000, 50000));
    this.accel = createVector(0.0, 0.0);
    this.age = _age;
    
    this.color = color(random(100), random(100), 100);
    this.stroke = color(random(100), random(100), 100);
    this.size = 1;
    this.name = _name;
    this.drag = random(0.98, 0.992);
    
  }

  update() {

    this.vel.add(this.accel);
    this.vel.x*=this.drag;
    this.vel.y*=this.drag;
    this.pos.add(this.vel);
    this.size+=0.08;
   
    this.checkWalls();
  }

  checkWalls() {
  
    if(this.pos.x > sketchParent.clientWidth-textWidth(this.name)+10) {
      this.pos.x = sketchParent.clientWidth-textWidth(this.name)+10;
      this.vel.x = -this.vel.x;
    }
    if(this.pos.x < -10) {
      this.pos.x = -10;
      this.vel.x = -this.vel.x;
    }
    if(this.pos.y > sketchParent.clientHeight) {
      this.pos.y = sketchParent.clientHeight;
      this.vel.y = -this.vel.y;
    }
    if(this.pos.y < textAscent()/1.3) {
      this.pos.y = textAscent()/1.3;
      this.vel.y = -this.vel.y;
    }
  }
}

function shuffle(arra1) {

    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function windowResized() {
  if(fullscreen())
  {
    sketchParent.style.position = "absolute";
    sketchParent.style.top = "0";
    sketchParent.style.left = "0";
    sketchParent.style.border = "none";
    resizeCanvas(innerWidth, innerHeight);
  } else {
    sketchParent.style.position = "static";
    sketchParent.style.border = "2px solid coral";
    resizeCanvas(sketchParent.clientWidth, sketchParent.clientHeight);
  }
  background(100);
}