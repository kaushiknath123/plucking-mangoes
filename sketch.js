
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var img, img1;

function preload () {
	img = loadImage("boy.png");
	img1 = loadImage("tree.png");
}


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

		Engine.update(engine);
		
		stone1 = new stone(200, 430, 20, 20);
		ground1 = new Ground(400, 480, 800, 20);

		mango1 = new mango(520, 280, 30, 30);
		mango2 = new mango(580, 260, 30, 30);
		mango3 = new mango(490, 250, 30, 30);
		mango4 = new mango(660, 240, 30, 30);
		mango5 = new mango(460, 290, 30, 30);
		mango6 = new mango(690, 260, 30, 30);
		mango7 = new mango(590, 230, 30, 30);

		
		sling1  = new slingshot(stone1.body, {x:110, y:390})

		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

	
   
   
	sling1.display();
	
	ground1.display();
	
	image(img1, 350, 180, 400, 300);
	image(img, 100, 390, 100, 100);
   
	stone1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	drawSprites();
}

function mouseDragged () {
    Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased () {
    sling1.fly();
}
function detectCollision(lmango, lstone){
	mango.body.position = lmango.body.position;
	stone.body.position = lstone.body.position;

	var distance = dist(mango.body.position.x, mango.body.position.y, stone.body.position.x, stone.body.position.y);
	if(distance<=lmango.r, lstone.r){
		Matter.body.setStatic(lmango.body, false);
	}

}


