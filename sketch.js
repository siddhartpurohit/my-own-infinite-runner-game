 var back , backImg ;
 var santa ,santaImg ;
 var robotGroup,robotImg ;
 var lightGroup,lightImg ;
 var ground,groundImg ;
 var ufoGroup,ufoImg ;
 var coinGroup,coinImg ;

var PLAY =1;
var END = 0;
 var gameState = PLAY;
var score = 0;


function preload(){
backImg = loadImage ("snow.webp");
santaImg = loadImage("bla.png");
  robotImg = loadImage ("download.png");
  lightImg = loadImage ("light.png");
  coinImg = loadImage ("hiclipart.com.png");
  ufoImg = loadImage ("ufo.png");
}

function setup() {
 createCanvas(700,480);
  
  back = createSprite (350,0,10,10);
  back.addImage (backImg);
  back.scale =1;
  back.velocityX = -10;
  
  santa = createSprite (200,300,10,10);
  santa.addImage (santaImg);
  santa.scale = 0.2;
  
  ground = createSprite(360,310,1440,10);
  ground.velocityX = -20
  ground.visible = false;
  
  santa.setCollider("circle",0,0,40);
  santa.debug =false;
  
  coinGroup = new Group ();
  ufoGroup = new Group ();
  lightGroup = new Group ();
  robotGroup = new Group ();
  
 score =0;
 fill(256);
 textSize(20);
}

function draw() {
  
 if(gameState===PLAY){
   background(0);
    if(back.x<0){
    back.x = back.width/2;
      
  }
   if(ground.x<50){
     ground.x = ground.width/2;
   }
    santa.collide(ground);
   if(keyDown("space")&&santa.y>295){
   santa.velocityY = -  15;  
   }
 
   
    santa.velocityY = santa.velocityY+0.9
  
    
    if(ufoGroup.isTouching(santa)){
    gameState= END; 
    }
    if(coinGroup.isTouching(santa)){
      coinGroup.destroyEach();
      score = score+10;
      
    }
    
    if(lightGroup.isTouching(santa)){
      lightGroup.destroyEach();
      score = score+25;
      
    }
    
    if(robotGroup.isTouching(santa)){
      gameState = END;
      
    }
    
    
    spawnLight();
    spawnCoin();
    spawnRobot();
    spawnUfo();
 
   
   
 }
   
    if(gameState===END){
      robotGroup.destroyEach();
      santa.destroy();
      lightGroup.destroyEach();
      ufoGroup.destroyEach();
      coinGroup.destroyEach();
      back.velocityX = 0;
      background(0)
     
      back.scale = 0;
       score = score;
       textSize(1)
       fill(0)
      
      text("lou lose loser",250,250);
      textSize(50)
    }
      
      
    
  
  
 drawSprites();
 text("score:"+score,200,25);
 
 
}

function spawnLight(){
  if(frameCount%400===0){
   light = createSprite (800,300,10,10);
    light.y = Math.round(random(120,310));
   light.addImage(lightImg);
   light.velocityX = -20
   light.scale = 0.1;
    lightGroup.depth = santa.depth;
    lightGroup.add(light);
  }
}

function spawnCoin(){
  if(frameCount%100===0){
  coin = createSprite (1000,200,10,10) ;
  coin.y = Math.round(random(100,310));
  coin.addImage(coinImg);
  coin.velocityX = -20
    coin.scale = 0.3;
    coinGroup.depth = santa.depth; 
    
    coinGroup.add(coin);
  }
}

function spawnRobot(){
  if(frameCount%140===0){
    robot = createSprite(1200,270,10,10);
    robot.addImage(robotImg);
    robot.velocityX = -20
    robot.scale = 0.1;
    robotGroup.depth =  santa.depth;
    
    robotGroup.add(robot);
    
  }
}
function spawnUfo(){
 if(frameCount%180===0){
   ufo = createSprite(1400,100,10,10);
   ufo.y = Math.round(random(80,180));
   ufo.addImage(ufoImg);
   ufo.velocityX = -20
   ufo.scale = 0.5;
   ufoGroup.depth = santa.depth;
  
   ufoGroup.add(ufo);
   
 }
}



