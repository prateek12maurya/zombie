var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;



function preload(){
bgImg= loadImage("bg.jpeg")
shooterImg=loadImage("shooter_2.png")
shooter_shooting=loadImage("shooter_1.png")
heart1Img=loadImage("heart_1.png")
heart2Img=loadImage("heart_2.png")
heart3Img=loadImage("heart_3.png")
zombieImg=loadImage("zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
bg= createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  //adding the background image
bg.addImage(bgImg)

player=createSprite(displayWidth-1150, displayHeight-300, 50, 50)
player.addImage(shooterImg)

player.scale=0.3

heart1 = createSprite(displayWidth-150,40,20,20)
heart1.visible = false
 heart1.addImage("heart1",heart1Img)
 heart1.scale = 0.4

 heart2 = createSprite(displayWidth-100,40,20,20)
 heart2.visible = false
 heart2.addImage("heart2",heart2Img)
 heart2.scale = 0.4

 heart3 = createSprite(displayWidth-150,40,20,20)
 heart3.addImage("heart3",heart3Img)
 heart3.scale = 0.4

 zombieGroup=new Group()
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
  
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  
}

//player goes back to original standing image once we stop pressing the space bar
if(keyWentDown("space")){
  
  player.addImage(shooter_shooting)
  
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


//destroy zombie when player touches it
if(zombieGroup.isTouching(player)){
 

 for(var i=0;i<zombieGroup.length;i++){     
      
  if(zombieGroup[i].isTouching(player)){
       zombieGroup[i].destroy()
       } 
 }
}

//calling the function to spawn zombies

enemy()
drawSprites();
}



//creating function to spawn zombies
function enemy(){
  if(frameCount%50===0){
      //giving random x and y positions for zombie to appear
zombie=createSprite(random(500,1100),random(100,500),40,40)
zombie.addImage(zombieImg)
zombie.scale=0.15
  zombie.velocityX=-3
  zombie.lifetime=400
  zombieGroup.add(zombie)


    
  }

}
