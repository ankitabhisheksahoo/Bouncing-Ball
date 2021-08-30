var box ;
var wall1;
var wall2;
var wall3;
var wall4;
function setup() {
 
  
  createCanvas(400,400);
  box = createSprite(200,100,10,10);
  box.shapeColor="red";
   wall1 = createSprite(100,100,10,100);
  wall2 = createSprite(300,100,10,100);
  wall3 = createSprite(200,50,210,10);
  wall4 = createSprite(200,150,210,10);
  box.velocityX=2;
  box.velocityX=-2;
  box.velocityY=2;
  box.velocityY=-2;
}

function draw(){
background("blue");
box.bounceOff(wall1);
box.bounceOff(wall2);
box.bounceOff(wall3);
box.bounceOff(wall4);

drawSprites();
}
