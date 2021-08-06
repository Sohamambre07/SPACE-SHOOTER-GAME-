var rocket
var planet
var newx=0;

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
}

function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);
 rocket = createSprite(50,height/2,50,50)
rocket.addImage(RocketImg)
rocket.scale=0.1
rocket.rotation+=90

for(i=0;i<30;i++){
  planet = new Planet(newx)
  newx=newx+planet.width
}
}



function draw()
{
  background(0);
  translate(-rocket.x+200,0)
  drawSprites()
  
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
}

