class Obstacle{
    constructor(x){
        this.y=random([100,200,300,400,500,600])
        this.body=createSprite(x,this.y)
        this.body.velocityX=-4
        
        var rand=Math.round(random(1,5))
switch(rand){
    case 1: this.body.addImage(spaceship1Img);break;
    case 2: this.body.addImage(spaceship2Img);break;
    case 3: this.body.addImage(spaceship3Img);break;
    case 4: this.body.addImage(spaceship4Img);break;
    case 5: this.body.addImage(spaceship5Img);break;
   
}
    
    this.body.scale=0.5
}
}