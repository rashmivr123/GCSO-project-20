var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = (255);
  wall = createSprite(700, 200, 60, height/2);
  wall.shapeColor = (80,80,80);

  car.velocityX = speed;
}

function draw() {
  background("black");  

  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509;
  	var deformation=0.5 * weight * speed* speed/22500;
  }
  if(deformation < 100){
    car.shapeColor = "green";
  }  
  
  if(deformation < 180 && deformation > 100 ){
    car.shapeColor = "yellow";

  }

  if(deformation > 180){
    car.shapeColor = "red";
  }
  drawSprites();
}