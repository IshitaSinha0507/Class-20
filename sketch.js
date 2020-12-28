var moving,fixed;



function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 10, 40);
  moving.shapeColor ="green";

  fixed = createSprite(300,300,20,20);
  fixed.shapeColor ="green";
}

function draw() {
  background(255,255,255);  

  moving.x = World.mouseX;
  moving.y = World.mouseY;
console.log(moving.x - fixed.x);


  if(moving.x-fixed.x <= fixed.width/2 + moving.width/2 && fixed.x-moving.x <= fixed.width/2 + moving.width/2 && moving.y-fixed.y <= fixed.height/2 + moving.height/2 &&  fixed.y-moving.y <= fixed.height/2 + moving.height/2){
    moving.shapeColor ="red";

    fixed.shapeColor ="red";

  }else{

    moving.shapeColor ="green";

    fixed.shapeColor ="green";

  }

  drawSprites();
}