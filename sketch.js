const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState;

var engine, world;
var box1, box2;
var pig, log, bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,400,50,50);
    box3 = new Box(550,400,50,50);
    box2 = new Box(550,350,50,50);
    box4 = new Box(440,400,50,50);
    box5 = new Box(480,400,50,50);
    box6 = new Box(620,400,50,50);
    pig7 = new Pig(550,250,50,50);
    pig8 = new Pig(550,150,50,50);
    box9 = new Box(480,350,50,50);
    box10 = new Box(480,300,50,50);
    box11 = new Box(620,350,50,50);
    box12 = new Box(620,300,50,50);
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(600, 450, 500, 50)
    pig = new Pig(400, 250);
    pig2 = new Pig(700, 200);
    pig3 = new Pig(700, 200);
    //log = new Log(600,150,50, 50);
    //log1 = new Log(600,150,50, PI/2);
    bird = new Bird(525,50);
    //chain = new Chain(bird.body,{x:200, y:50});
    bruhtime()

    
}

function draw(){
    if(gameState === "day"){
        background(255)
    }
    else{
        background(0)
    }

    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    bird.display();
    ground2.display();
    box5.display();
    box3.display();
    box6.display();
    pig2.display();
    pig3.display();
    pig7.display();
    pig8.display();
    box10.display();
    box9.display();
    box11.display();
    box12.display();
    //chain.display();
    
}


async function bruhtime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    var responseJson = await response.json();
    
    console.log(responseJson)
    var jt = responseJson.datetime
    var jte = jt.slice(11,13)
    console.log(jt)
    console.log(jte)

    if(jte >= 8 && jte <= 18){
        gameState = "day"
    }
    else{
        gameState = "night"
    }

}


function background1(){
    if(gameState === "day"){
        background("white")
    }
}