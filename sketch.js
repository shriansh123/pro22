const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1
var bob2
var bob3
var bob4
var bob5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

rope1= new rope(bob1,roof,-80,0)
rope2= new rope(bob2,roof,-80,0)
rope3= new rope(bob3,roof,-80,0)
rope4= new rope(bob4,roof,-80,0)
rope5= new rope(bob5,roof,-80,0)

	var bob_option = {
		restitution:0.8
	}

	bob1 = Bodies.circle(280,400,10,bob_option);
    World.add(world,bob1);

	bob2 = Bodies.circle(340,400,10,bob_option);
    World.add(world,bob2);

	bob3 = Bodies.circle(400,400,10,bob_option);
    World.add(world,bob3);

	bob4 = Bodies.circle(460,400,10,bob_option);
    World.add(world,bob4);

	bob5 = Bodies.circle(520,400,10,bob_option);
    World.add(world,bob5);

	Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,400,30);

  //call display() to show ropes here
  display()
	  {
		  var pointA= this.BodyA.position;
		  var pointB= this.bodyB.position;

		  strokeWeight(2);
	  }
  
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,60);
  ellipse(bob2.position.x,bob2.position.y,60);
  ellipse(bob3.position.x,bob3.position.y,60);
  ellipse(bob4.position.x,bob4.position.y,60);
  ellipse(bob5.position.x,bob5.position.y,60);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
    }
}