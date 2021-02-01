
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,600,1200,20);
    box1 = new Box(750, 550, 70, 70);
    box2 = new Box(900, 550, 70, 70);
    box3 = new Box(750, 350, 70, 70);
    box4 = new Box(900, 350, 70, 70);
    box5 = new Box(825, 300, 70, 70);
    pig1 = new Pig(825, 550, 60, 60);
    pig2 = new Pig(825, 350, 60, 60);
    log1 = new Log(825, 500, 225, PI/2);
    log2 = new Log(825, 325, 225, PI/2);
    log3 = new Log(790, 250, 100, PI/4);
    log4 = new Log(865, 225, 100, -PI/6);
    bird = new Bird(200, 200, 50, 50);
    
   

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   pig1.display();
   pig2.display();
   ground.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   bird.display();
    
}

