let roller = document.getElementById("roll-it");
let sketchParent = document.getElementById("sketch-parent");

let nameParticles = [];
let names = [];
let tempFrameCount;
let shouldLerp = false;
let shouldDisplay = false;
let singleName = false;
var winner = "";
var removedNames = 0;

//let names = ["Darcy", "Dermott", "Fengwei", "Ilai", "Jun", "Max", "Riley", "Jeanette", "Shannon", "Soo", "Suri", "Winnie", "Xin", "Zhixuan"];


function setup() {

  var canvas = createCanvas(sketchParent.clientWidth, sketchParent.clientHeight);
  canvas.parent("sketch-parent");
  background(0);
  
  colorMode(HSB, 100);
  textSize(100);
  strokeWeight(4);
}


function draw() {

  // draw nearly transparent squares over whole canvas
  

  if(shouldDisplay) {

    if(!shouldLerp){
      push();
        fill(0, 0, 0, 4);
        noStroke();
        rect(0, 0, width, height);
      pop();
    }

    for(let i = 0; i < nameParticles.length; i++) {
      let p = nameParticles[i];
      p.update();

      push();
      translate(p.pos.x, p.pos.y);
        p.display();
      pop();

      let t = 0.185;
    
      // if a name slows down enough, remove it from the array
      if(nameParticles.length > 1 && abs(p.vel.x) < t && abs(p.vel.y) < t) {
        // p.vel.x = 0;
        // p.vel.y = 0;
        nameParticles.splice(i, 1);
        tempFrameCount = frameCount;
      }

      if(singleName && abs(nameParticles[0].vel.x) < t && abs(nameParticles[0].vel.y) < t) {
        tempFrameCount = frameCount;
        singleName = !singleName;
      }

      // if one name remains, fade in some squares after 2 seconds...
      if(nameParticles.length == 1 && frameCount-tempFrameCount > 120 && !shouldLerp && !singleName){
        
        push();
          noStroke();
          fill(0, 0, 0, 4);
          rect(0, 0, width, height);
        pop();

        winner = nameParticles[0].name;
        console.log("winner: " + winner);

        if(frameCount-tempFrameCount > 180) {
          tempFrameCount = frameCount;
          shouldLerp = !shouldLerp;
        }
      }
    }

    if(shouldLerp) {
      let lerpVal = constrain(map(frameCount, tempFrameCount, tempFrameCount+240, 0.0, 1.0), 0.0, 1.0);

      let p0 = nameParticles[0];
      p0.pos.x = lerp(p0.pos.x, (width/2)-(textWidth(p0.name)/2), lerpVal);
      p0.pos.y = lerp(p0.pos.y, height/2, lerpVal);
    }
  }
}

function selectName() {

  // clear the nameParticles array
  nameParticles = [];
  for(let i = 0; i < names.length; i++) {
  
    let p = new Particle(names[i]);
    nameParticles.push(p);
  }
  shouldDisplay = true;
  shouldLerp = false;
  print(nameParticles);
}

roller.addEventListener("click", function(){
  
  if(names.length == 0) {
    addNamesDebug();
  } else {
    // reset the page
    removeName(winner);
    if(names.length == 1) {
      singleName = true;
    }
    background(0);  
    selectName();
    removedNames++;
  }
});

// Particle class
class Particle {
  
  constructor(_name) {

    let t = 1500;
    this.pos = createVector((width/2)-(textWidth(_name)/2), (height/2)-textAscent()/2);
    this.vel = createVector(random(-t, t), random(-t, t));
    
    this.color = color(random(100), random(100), 100);
    this.stroke = color(random(100), random(100), 100);
    this.size = 1;
    this.name = _name;
    this.drag = random(0.987, 0.991);
  }

  update() {

    this.vel.add(this.accel);
    this.vel.x*=this.drag;
    this.vel.y*=this.drag;
    this.pos.add(this.vel);
   
    this.checkWalls();
  }

  display() {
    stroke(this.stroke);
    fill(this.color);
    text(this.name, 0, 0);
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
  background(0);
}

function addNames() {
  let duplicateCounter = 0;
  let remainingNames = document.getElementById("remaining-names");
  let enteredName = document.getElementById("name-field");
  
  for(let i = 0; i < names.length; i++) {
    if(names[i] === enteredName.value) {
      duplicateCounter++;
    }
  }
  if(duplicateCounter > 0) {
    enteredName.value = "";
    enteredName.placeholder="Enter a different name";
  } else if(enteredName.value === "") {
    enteredName.placeholder="plz";
  }
  
  else {
    enteredName.placeholder="Enter a name";
    names.push(enteredName.value);
    console.log(names);
    let liNode = document.createElement("LI");
    let textNode = document.createTextNode(names[names.length-1]);
    liNode.appendChild(textNode);
    remainingNames.appendChild(liNode);
    enteredName.value = "";
  }
}

function addNamesDebug() {
  removedNames = 0;
  let remainingNames = document.getElementById("remaining-names");
  names = ["dog", "cat", "fish", "bird", "antelope", "penguin", "dolphin", "monkey", "caterpillar", "lizard", "shark", "spider", "mouse", "keyboard", "lion", "bear", "ferret", "wildabeast", "crocodile", "alligator", "ladybug", "cow", "pig", "chicken", "turtle", "orangutan", "sloth"];

  for(let i = 0; i < names.length; i++) {
    let liNode = document.createElement("LI");
    let textNode = document.createTextNode(names[i]);
    liNode.appendChild(textNode);
    remainingNames.appendChild(liNode);
  }
}

function search() {
  if(event.key === 'Enter') {
      addNames();       
  }
}

function removeName(_name) {

  if(removedNames > 0){
    let removeIndex = 0;
    for(let i = 0; i < names.length; i++){
      if(names[i] == _name) {
        removeIndex = i;
      }
    }
    names.splice(removeIndex, 1);
    let ulNames = document.getElementById("remaining-names");
    ulNames.removeChild(ulNames.childNodes[removeIndex]);
  }
}

////////// UNUSED //////////

/*
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

*/