var ball 
function setup() {
  createCanvas(400,400);
ball = createSprite (200,200, 20, 20)
}

function draw() 
{
  background(30);
  if (keyIsDown(LEFT_ARROW)){
    ball.shapeColor = "green";
  }
  if (keyIsDown(RIGHT_ARROW)){
    ball.shapeColor = "purple"
  }
  if (keyIsDown(UP_ARROW)){
    ball.shapeColor = "blue"
  } if (keyIsDown(DOWN_ARROW)){
    ball.shapeColor = "red"
  }
drawSprites()
}




