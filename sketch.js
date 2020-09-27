var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup, grassImg,grass,gameOver,go;
var score = 0;
  

function preload(){
  console.log("k1")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  grassImg = loadImage("grass.png")
  gameOver = loadImage ("gameover.png")
}



function setup() {
  createCanvas(600, 200);
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
   grass = createSprite(200,195,1000,20);
  //grass.addImage("grass", grassImg);
  grass.x= grass.width /2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
 go = createSprite(300,300,10,10);
  go.addImage(gameOver);
  go.visible = false;
}


function draw() {
background("white")
monkey.x = 50;
text("Score: "+ score, 500,50);
  
  if (monkey.isTouching(obstacleGroup)){
 text ("Game Over", 400,300);
    score =0;
  }
  
  
   if(keyDown("space")&& (monkey.y >= 151)) {
        //monkey.velocityY = -12;
     //monkey.y = monkey.y + 12;
     //monkey.x = monkey.x + 12;
    
     jump();
    // a
    }

    monkey.velocityY = monkey.velocityY + 0.1; 
    
   monkey.collide(grass); 
  spawnRocks();
spawnBan();
  drawSprites();
}

function jump(){

  monkey.y = monkey.y - 100;
}

function spawnRocks() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     obstacle = createSprite(600,170,40,10);
    obstacle.x = Math.round(random(550,601));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.09;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
    
    }
  
}
function spawnBan() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(600,140,40,10);
    banana.x = Math.round(random(550,601));
    banana.addImage(bananaImage);
   banana.scale = 0.09;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
    
     if (monkey.x = banana.x){
      score = score + 1;
    }
    
 
  }
  
}



