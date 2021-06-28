const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,slingshot;
var box1,polygon;

function preload(){

}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(890,250,250,15);
  ground1 = new Ground(750,500,250,15);

  box1 = new Box(830,235,40,40);
  box2 = new Box(860,235,40,40);
  box3 = new Box(890,235,40,40);
  box4 = new Box(920,235,40,40);
  box5 = new Box(950,235,40,40);

  box6 = new Box(860,195,40,40);
  box7 = new Box(890,195,40,40);
  box8 = new Box(920,195,40,40);
  box9 = new Box(890,155,40,40);

  box10 = new Box(690,485,40,40);
  box11 = new Box(720,485,40,40);
  box12 = new Box(750,485,40,40);
  box13 = new Box(780,485,40,40);
  box14 = new Box(810,485,40,40);
  
  box15 = new Box(720,445,40,40);
  box16 = new Box(750,445,40,40);
  box17 = new Box(780,445,40,40);
  box18 = new Box(750,405,40,40);
  
  polygon = new Polygon(200,100);

   slingshot = new Slingshot(polygon.body,{x:200,y:200});

}

function draw(){
  background("lightgreen");
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  polygon.display();
  ground.display();
  ground1.display();
  slingshot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}
