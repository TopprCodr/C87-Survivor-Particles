const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];

function setup() {
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
}

function draw() {
    background(0);
    Engine.update(engine);
    if(frameCount % 30 == 0){
        newParticle();
    }
    for(var i=0;i<particles.length;i++){
        particles[i].display();
    }
}

function newParticle() {
    var xPos = random(10, width-10);
    var radius = random(5, 10);
    var p = new Particle(xPos, 0, radius);
    particles.push(p);
}
