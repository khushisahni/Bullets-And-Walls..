var bullet,wall;
var thickness,speed,weight;

function setup(){
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);


 bullet = createSprite(50, 200, 50, 50);
 bullet.velocityX = 5;
 bullet.shapeColor = (255);

 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor = (80,80,80);

  thickness = random(22,83);
   
 
  

}

function draw() {
  background("black");  
  text(mouseX +","+mouseY,mouseX,mouseY);

  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


        if(damage > 10){
          wall.shapeColor = color(255,0,0);
          
        }
                if(damage < 10){
                  wall.shapeColor = color(0,255,0);

                }
  }

  
  drawSprites();

  
}

function hascollided(1bullet,1wall){
  bulletRightEdge = 1bullet.x + 1bullet.width;
  wallLeftEdge = 1wall.x;

  if(bulletRightEdge > = wallLeftEdge){
    return true;

  }
  return false;
}