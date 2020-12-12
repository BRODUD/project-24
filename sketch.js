
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	
var paper,trashcan,ground,leftSprite,bottomSprite,rightSprite;
var bottomBody,leftBody,rightBody;
function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	paper = new Paper(200,550,25);
	 
	 ground = new Ground(500,height,1000,20);
	 
	 bottomSprite = createSprite(800,height-20,250,20);
	 bottomSprite.shapeColor = "red";
 
	 leftSprite = createSprite(675,540,20,100);
	 leftSprite.shapeColor = "red";
 
	 rightSprite = createSprite(925,540,20,100);
	 rightSprite.shapeColor = "red";
 
	 bottomBody = Bodies.rectangle(800,height-20, 250,20, {isStatic:true} );
	 World.add(world, bottomBody);
	 
	 leftBody = Bodies.rectangle(675,540,20,100,{isStatic:true} );
	 World.add(world, leftBody);
	 
	 rightBody = Bodies.rectangle(925, 540, 20, 100 , {isStatic:true} );
	 World.add(world, rightBody);
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  ground.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
	   Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	   
	 }
   }


