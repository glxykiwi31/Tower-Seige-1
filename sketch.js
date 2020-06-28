const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bodies;

function setup() {
  createCanvas(1600,1600);
  //createSprite(400, 200, 50, 50);

  ground=new Ground(650,460,10,50)
}

function draw() {
  background("black");  
  Engine.update(engine);

ground.display();


  text("x:y "+mouseX+" "+mouseY,mouseX,mouseY)

  drawSprites();
}