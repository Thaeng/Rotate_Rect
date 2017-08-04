var myCircle;
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  frameRate(100);
  myCircle = new circle(window.innerWidth/2,window.innerHeight/2,createVector(17,5),50,color(150,10,10));
}

function draw(){
  background(50);
  myCircle.moveCircle();
  drawBlur();
  checkCollision();
}

function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}

function circle(x,y,direction, diameter, yourColor){
  this.x = x;
  this.y = y
  this.vector = direction;
  this.diameter = 50;
  this.yourColor = yourColor;

  this.moveCircle = function(){
    this.x += this.vector.x;
    this.y += this.vector.y;
    fill(this.yourColor);
    noStroke();
    ellipse(this.x,this.y,this.diameter, this.diameter);
  }
}

function checkCollision(){
  var radius = myCircle.diameter/2;
  var x = myCircle.x;
  var y = myCircle.y;
  if(x > window.innerWidth-radius || x <= radius){
    myCircle.vector.x *= -1;
  }
  if(y >= window.innerHeight-radius || y <= radius){
    myCircle.vector.y *= -1;
  }
}

function drawBlur(yourCircle){
  this.circleArray = [5];
  this.diameter = myCircle.diameter;
  this.x = myCircle.x;
  this.y = myCircle.y;
  for(var i = 0; i < 5; i++){
    this.diameter -= 10;
    var vector = createVector(myCircle.vector.x * -1,myCircle.vector.y * -1);
    vector.x = ((vector.x/2) * (i+1));
    vector.y = ((vector.y/2) * (i+1));
    this.circleArray[i] = new circle(this.x,this.y,vector,this.diameter,color(150,10,10,(200/(i+1))));
    this.circleArray[i].moveCircle();
  }
}
