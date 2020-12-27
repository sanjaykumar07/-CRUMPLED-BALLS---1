
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,box1,box1,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new paper(200,400,40);
	ground1 = new ground(400,500,3200,10);
	box1 = new box(905,450,15,150);
	box2 = new box(1065,450,15,150);
	box3 = new box(985,495,145,15);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();

 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-130})
}
}



