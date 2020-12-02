var movingRect, fixedRect 

function setup() {
  createCanvas(800,400);
movingRect= createSprite(400, 200, 50, 50);
movingRect.shapeColor = "purple";
movingRect.debug = true;

fixedRect= createSprite(400, 200, 75, 50);
fixedRect.shapeColor = "purple";
fixedRect.debug = true;
}

function draw() {
  background(45,55,25);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
     movingRect.shapeColor ="red";
     fixedRect.shapeColor ="red";
  }else{
    movingRect.shapeColor ="purple";
     fixedRect.shapeColor ="purple";
  }
  drawSprites();
}