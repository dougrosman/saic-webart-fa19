let roller = document.getElementById("roll-it");
let sketchParent = document.getElementById("sketch-parent");
let particles = [];
var numParticles = 6.0;
let ages = [];
let agesCopy = [];
let names = ["Darcy", "Dermott", "Fengwei", "Ilai", "Jun", "Max", "Riley", "Jeanette", "Shannon", "Soo", "Suri", "Winnie", "Xin", "Zhixuan"];
let namesCopy = ["Darcy", "Dermott", "Fengwei", "Ilai", "Jun", "Max", "Riley", "Jeanette", "Shannon", "Soo", "Suri", "Winnie", "Xin", "Zhixuan"];


function resetParticleSystem(_names, _age) {

    // reshuffled the names
    let shuffled = shuffle(_names);
    console.log(shuffled);
    // fill up an array of particles
    for(let i = 0; i < namesCopy.length; i++) {
    
        particles[i].name = shuffled[i];
        particles[i].age = ages[i];
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.accel = createVector(random(-0.00001, 0.00001), random(-0.0001, 0.0001));
        this.age = ages[i];
        this.name = shuffled[i];
        this.color = color(random(100), random(50, 100), 100);
        this.stroke = color(random(100), random(80, 100), 30);
    }
}

roller.addEventListener("click", function(){
    
    // reset the page
    background(100);

    // pop off the last one
    namesCopy.pop();
    ages.shift();

    //if(ready) {
    resetParticleSystem(namesCopy, ages);

   // }
});


function setup() {

  var canvas = createCanvas(sketchParent.clientWidth, sketchParent.clientHeight);
  canvas.parent("sketch-parent");
  
  colorMode(HSB, 100);
  background(100);
  rectMode(CENTER);
  textSize(50);

  // set up ages array
  for(let i = 0; i < namesCopy.length; i++) {
    ages.push(120 + (i*i*i));
    agesCopy.push(120 + (i*i));
}

  // create initial particle system
  for(let i = 0; i < namesCopy.length; i++) {

    // shuffle the names:
    let shuffledNames = shuffle(namesCopy);
    
    let p = new Particle(shuffledNames[i], ages[i]);
    particles.push(p);
}
  
  
}

///// FULLSCREEN UTILS

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


// function mousePressed() {
//   let fs = fullscreen();
//   fullscreen(!fs);
// }

function draw() {
  //background(220);
  
  for(let i = 0; i < particles.length; i++) {
    
    stroke(particles[i].stroke);
    fill(particles[i].color);
    text(particles[i].name, particles[i].pos.x, particles[i].pos.y);
    
    particles[i].update();
  }
}

// Particle class
class Particle {
  
  constructor(_name, _age) {

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.accel = createVector(random(-0.0001, 0.0001), random(-0.001, 0.001));
    this.age = _age;
    this.color = color(random(100), random(50, 100), 100);
    this.stroke = color(random(100), random(80, 100), 30);
    this.size = 20;
    
    this.name = _name;
    
    
    // this.osc = new p5.Oscillator();
    // this.osc.setType('square');
    // this.osc.freq(30);
    // this.osc.amp(map(this.size, 0.0, 100.0, 0.0, 1.0/numParticles));
    // this.osc.start();
  }


  update() {

    // this.accel.add(this.accel2);
    // this.vel.add(this.accel);
    // this.pos.add(this.vel);
    
    // this.osc.freq(map(this.pos.x+this.pos.y, 0.001, innerWidth+innerHeight, 30.0, 60.0));
    // this.osc.amp(map(this.size, 0, 100, 0, 1.0/numParticles));
    // this.checkWalls();
    // this.size = max(abs(this.vel.x), abs(this.vel.y));

    // if (this.age < 0) {
    //   this.osc.amp(0);
    //   this.color = (0, 0);
    //   this.stroke = (0, 0);

    // } else {
      this.vel.add(this.accel);
      this.pos.add(this.vel);
      

      this.age--;

      if(this.age < 0)
      {
        this.vel = createVector(0, 0);

        this.accel = createVector(0, 0);
      }
      this.checkWalls();
    
    //   this.osc.freq(map(this.pos.x+this.pos.y, 0.001, innerWidth+innerHeight, 40.0, 200.0));
    //   this.osc.amp(map(this.size*4, 0, windowHeight/4, 0, 1.0/numParticles));
    //   this.checkWalls();
    //   this.size = max(abs(this.vel.x), abs(this.vel.y));

    // }

  }

  checkWalls() {
  
    if(this.pos.x > sketchParent.clientWidth-this.size/2) {
      this.pos.x = sketchParent.clientWidth-this.size/2;
      this.vel.x = -this.vel.x;
      this.accel.x = -this.accel.x;
      //background(0);
    }
    if(this.pos.x < this.size/2) {
      this.pos.x = this.size/2;
      this.vel.x = -this.vel.x;
      this.accel.x = -this.accel.x;
      //background(0);
    }
    if(this.pos.y > sketchParent.clientHeight-this.size/2) {
      this.pos.y = sketchParent.clientHeight-this.size/2;
      this.vel.y = -this.vel.y;
      this.accel.y = -this.accel.y;
      //background(0);
    }
    if(this.pos.y < this.size/2) {
      this.pos.y = this.size/2;
      this.vel.y = -this.vel.y;
      this.accel.y = -this.accel.y;
      //background(0);
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