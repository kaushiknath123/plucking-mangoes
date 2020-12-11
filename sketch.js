
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var img;
function preload () {
	img = loadImage("pictures/boy.png");
}
function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

		Engine.update(engine);


		
		stone1 = new stone(200, 430, 20, 20);
		image(img, 400, 400);
 
		sling1  = new slingshot(stone1.body, {x:180, y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

	
    stone1.display();
   sling1.display();
   
 
   image(img, 400, 400);
 
}

function mouseDragged () {
    Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased () {
    sling1.fly();
}

