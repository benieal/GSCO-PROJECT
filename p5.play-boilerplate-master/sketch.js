var  a, b ;





function setup() {
  createCanvas(800,400);
   a=createSprite(400, 200, 50, 50);
   b=createSprite(200,40,35,35);
   a.shapeColor=green;
   b.shapeColor=red;
}

function draw() {
  background(0);  
  drawSprites();
}