var bullet1,wall, wall2, bullet2, wall3;


var speed1, weight1, speed2, weight2, thickness;
function setup() {
  createCanvas(1400, 800);
    wall3 = createSprite(700, height/2, 1400, 30)
    wall3.shapeColor = "white";
    speed1 = random(200, 300)
    weight1 = random(30, 50)
    bullet1=createSprite(50, 200, 60,30);   
    bullet1.velocityX = speed1;

    bullet1.shapeColor=color(255);
thickness = random(65, 100);


    speed2 = random(200, 300)
    weight2 = random(30, 50)
    bullet2 = createSprite(50, 600, 60, 30);
    bullet2.velocityX = speed2
    bullet2.shapeColor=color(255);
    wall=createSprite(1300,200, thickness, height/6)
    wall.shapeColor=color(80,80,80)
    wall2 = createSprite(1300, 600, thickness, height/6)
    wall2.shapeColor= color(80, 80, 80)
}


function draw() {
  background(0);
  if(wall.x-bullet1.x < (bullet1.width+wall.width)/2)
  {
    bullet1.velocityX=0;
    var damage=0.5 * weight1 * speed1* speed1/thickness*thickness*thickness;
    if(damage>225)
    {
        bullet1.shapeColor=color(255,0,0);
    }

    if(damage<125)
    {
        bullet1.shapeColor=color(0,255,0);
    }
  }
  if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2){
    bullet2.velocityX = 0;
    if(damage>225){
      bullet2.shapeColor = color(0, 255, 0);
    }
    if(damage<125){
      bullet2.shapeColor = color(255, 0, 0);
    }
  }
  
  drawSprites();
 
}


