
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100, 20, 20);

	base = new Dustbin(950, 350, 200, 20);

	left = new Dustbin(840, 264, 20, 190);
	right = new Dustbin(1040, 264, 20, 190);


	ground = new Ground(600, 370, 1200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  left.display();
  paper.display();

  base.display();
  
  right.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-85})
	}
}

