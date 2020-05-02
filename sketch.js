var movingRect,fixedRect; 


function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 80);
fixedRect = createSprite(100,200,80,50);
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
movingRect.velocityY=-5;
fixedRect.velocityY=5;
}


function draw() {

  background(0,0,0);  
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=fixedRect.width/2 +movingRect.width/2){
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);

    }
    if(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY =fixedRect.velocityY*(-1);
  }



  drawSprites();
}