class Planet{

    constructor(x){
this.y=height-random ([200,400,600])
this.width=random(300,600)
this.body=createSprite(x,this.y,20,20)
var rand=Math.round(random(0,8))
switch(rand){
    case 0: this.body.addImage(planet0Img);break;
    case 1: this.body.addImage(planet1Img);break;
    case 2: this.body.addImage(planet2Img);break;
    case 3: this.body.addImage(planet3Img);break;
    case 4: this.body.addImage(planet4Img);break;
    case 5: this.body.addImage(planet5Img);break;
    case 6: this.body.addImage(planet6Img);break;
    case 7: this.body.addImage(planet7Img);break;
    case 8: this.body.addImage(planet8Img);break;
}
    }
}