
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
    var ball_options={
		isStatic=false,
		restitution:0.3,
		frictionAir:0,
		density:1.2
	};

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  

  Engine.update(engine);

  background(0);
   
  ellipse(ball.position.x,ball.position.y,20);
  ball.show();
Engine.update(engine);

  drawSprites();
 
}



