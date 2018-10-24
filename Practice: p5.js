Figure 2-1: 
function setup() {
  // put setup code here
}

function draw() {
  background(204);
  ellipse(50, 50, 80, 80);
}

Figure 2-2:
function setup() {
  createCanvas(480, 120);
}

function draw() {
  if(mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX,mouseY,80,80);
  }

Personal js Sunset Sketch:
function setup() {
  createCanvas(500, 400);
}

function draw() {
  fill(218, 120, 88)
  rect(-1, 250, 501,5)
  fill (254, 210, 112)
  rect(-1, 240, 501,10)
  fill (210, 195, 207)
  rect(-1, 235, 501,10)
  fill (163, 116, 141)
  rect(-1, 220, 501,15)
  fill (142,158, 234)
  rect(-1, 0, 501,220)
  fill(253, 184, 19)
  ellipse(100,mouseY,75,75)
  fill (245, 218, 169)
  rect(-1, 300, 501, 100)
  fill(74,124,153)
  rect(-1, 255, 501, 50)
  }
