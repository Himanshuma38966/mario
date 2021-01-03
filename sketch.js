
//creating variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey ,monkey_running;
var banana ,bananaImage, bananaGroup,obstacle, obstacleImage,obstacleGroup;
var score=0;
function preload()
{
  //load animation
 monkey_running =loadAnimation("mrio1.png.png","mrio2.png.png","mrio3.png.png");
  
bananaImage = loadImage("coin.png.png");
obstacleImage = loadImage("ob.png.png")



   
}
function setup() {
  createCanvas(1000, 400);
  
   ground=createSprite(400,350,10000,10)
   
 
  
  monkey=createSprite(100,350,900,10)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=2;
   bananaGroup=new Group ();     
  obstacleGroup=new Group ();
}

function draw() {
  background("white");
  monkey.velocityY = monkey.velocityY + 0.8
  text("score"+score ,300,300)
  if(monkey.isTouching(bananaGroup)){
     score=score+1
    switch(score){
      case 10:monkey.scale=0.12   
               break;
       case 20:monkey.scale=0.14   
               break; 
       case 30:monkey.scale=0.18   
               break;  
        case 40:monkey.scale=0.20   
               break;       
    }
   }
 //making monkey jump when space is pressed
if( gameState===PLAY){
   if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
      
   }
   
 if(keyDown("space"))
  {
    monkey.velocityY=-12
   
  }
 spawnbanana();
spawnobstacle();
   
 
  
    
    
   if (score+score==10) {
     monkey.scale=0.2
   }


 if(monkey.isTouching(obstacleGroup))  {
   
   gameState=END
  }
  monkey.collide(ground);
  drawSprites()
}

   if (gameState === END) {
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  
     ground.velocityX = 0;
        monkey.velocityY = 0
  
   }
}
                                  

  
   function spawnbanana(){
if (World.frameCount%50===0){
banana=createSprite(500,200,10,2); 
 banana.x=Math.round(random(100,500)) 
banana.y = Math.round(random(80,120))
  banana.setlifetime=150;
  banana.velocityX=-3
banana.addImage( bananaImage );
  banana.scale=0.20     
  bananaGroup.add(banana);
}  
}  
  
 function spawnobstacle (){
if (World.frameCount%160===0){
obstacle=createSprite(500,320,300,2);
obstacle.setlifetime=150;
obstacle.velocityX=-3
obstacle.addImage( obstacleImage);
obstacle.scale=0.50
obstacleGroup.add(obstacle);
}  
    
}  
  
 
  































































