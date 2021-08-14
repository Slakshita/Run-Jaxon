var pathImg , RunnerImg;
var Runner , path;
var invisibleGround1 , invisibleGround2;

function preload(){
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png" , "Runner-2.png");
}

function setup(){
  createCanvas(600,600);
  // Moving background
  path = createSprite(300,300);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;


  //create sprites here
  Runner = createSprite(300,500);
  Runner.addAnimation("Running",RunnerImg);
  Runner.scale = 0.2;
  invisibleGround1 = createSprite(0,300,20,600);
  invisibleGround1.visible = false;
  invisibleGround2 = createSprite(600,300,20,600);
  invisibleGround2.visible = false;
}

function draw() {
  background(0);
 
  //creating background
  path.velocityY = 3;
  if (path.y < 600 ){
    path.y = height/2;
  }
  Runner.x = World.mouseX
  Runner.collide(invisibleGround2);
  Runner.collide(invisibleGround1);
drawSprites();
}
