//namespacing or alias
const Engine = Matter.Engine; //Universe
const World = Matter.World; //World/Earth
const Bodies = Matter.Bodies; //living or non living objects that live inside the world and follow laws of physics

var myEngine, myWorld;
var box;

function setup(){
    var canvas = createCanvas(400,400);

    //create your own engine/universe
    myEngine = Engine.create();

    //create your own world
    myWorld = myEngine.world;

    //create a box body using rectangle
    var box_options = {
        restitution : 0.5
    }
    box = Bodies.rectangle(200,100,50,50,box_options);
    World.add(myWorld,box);

    //create ground
    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(myWorld,ground);

    //create a ball
    var ball_options = {
        restitution: 1.0
    }
    ball = Bodies.circle(100,100,20,ball_options);
    World.add(myWorld,ball);
   
    console.log(box.position.x);
}

function draw(){
    background(0);
    Engine.update(myEngine);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
    //rect(200,100,50,50);
  
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}
