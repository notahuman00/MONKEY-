
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGrp, obstacleGrp
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGrp= new Group()
  obstacleGrp= new Group()
  
}



function setup() {
  createCanvas(500, 400);
  score=0
  survivalTime=0
  
  ground = createSprite(0,300,1500,10)
  
   monkey=createSprite(90,270,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  background("yellow")
  
  if(keyDown("space")&&monkey.y >= 250){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.4;
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits();
 }
  
  if(World.frameCount%300===0){
    stone();
 }
  
  if(monkey.isTouching(FoodGrp)){
     FoodGrp.destroyEach();
    score=score+1;
      }
  
 
 drawSprites()
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(World.frameCount/20);
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(180,110)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGrp.add(banana)
}

function stone(){
  obstacle=createSprite(670,260,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGrp.add(obstacle)
}






