var rocket
var planet
var newx=200;
var gameState="PLAY"

function preload(){
  RocketImg = loadImage("Rocket1.png")
  planet0Img = loadImage("planets0.png")
  planet1Img = loadImage("planets1.png")
  planet2Img = loadImage("planets2.png")
  planet3Img = loadImage("planets3.png")
  planet4Img = loadImage("planets4.png")
  planet5Img = loadImage("planets5.png")
  planet6Img = loadImage("planets6.png")
  planet7Img = loadImage("planets7.png")
  planet8Img = loadImage("planets8.png")
  burstImg = loadImage("Burst.png")
  spaceship1Img = loadImage("Spaceship1 .png")
  spaceship2Img = loadImage("Spaceship2.png")
  spaceship3Img = loadImage("Spaceship 3.png")
  spaceship4Img = loadImage("Spaceship 4.png")
  spaceship5Img = loadImage("Spaceship 5.png")
  SlaserImg = loadImage("S laser.png")
  ElaserImg = loadImage("E laser.jpg")
  bg = loadImage("Space .jpg")

}

function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);
 rocket = createSprite(50,height/2,50,50);
rocket.addImage(RocketImg);
rocket.scale=0.1;
rocket.rotation+=90;

Slaser = createSprite(rocket.x,rocket.y,30,30)

Elaser = createSprite(width+20,random(10,height-10))
Elaser.addImage(ElaserImg)
Elaser.velocityX=-10
Elaser.scale=0.2

planetGroup = new Group()
obstacleGroup = new Group()
ElaserGroup = new Group()

for(i=0;i<30;i++){
  planet = new Planet(newx);
  newx=newx+planet.width;
  planetGroup.add(planet.body)
  if(i%3===0){
  obstacle1 = new Obstacle(newx)
  obstacleGroup.add(obstacle1.body)
}
}
}



function draw()
{
  background(bg);

if(frameCount%200 === 0){
Elaser = createSprite(width+20,random(10,height-10))
Elaser.addImage(ElaserImg)
Elaser.velocityX=-10
Elaser.scale=0.2
ElaserGroup.add(Elaser)
}

rocket.collide(ElaserGroup,kill)
  Slaser.collide(obstacleGroup,kill)
  


  if(gameState === "PLAY"){
    if(keyDown("right")){
      rocket.x+=5
      }
    
      if(keyDown("left")){
        rocket.x-=5
      }
    
      if(keyDown("up")){
        rocket.y-=5
      }
    
      if(keyDown("down")){
        rocket.y+=5
      }

      if (keyWentDown("space")) {
        Slaser = createSprite(rocket.x,rocket.y,30,30)
        Slaser.addImage(SlaserImg)
        Slaser.scale=0.1
       Slaser.velocityX=10;
     }
    
    if(rocket.isTouching(planetGroup)){
      gameState="END"
    }
  }
  textSize(40)
text(mouseX+":"+mouseY,301,121)

  translate(-rocket.x+200,0)
  drawSprites()
  
  if(gameState === "END"){
    textSize(50)
   text("gameover",width/2,height/2)
 rocket.addImage(burstImg)
 rocket.scale=0.5
 rocket.x=width/2
 rocket.y=height/2
 rocket.scale=2
 planetGroup.destroyEach()
 
  }

}

function kill(Slaser,Obstacle){
Slaser.destroy()
Obstacle.destroy()
gameState="END"
}
