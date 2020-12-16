const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine,world,ground,ball
function setup() {
  createCanvas(800,800);
engine = Engine.create()
world = engine.world

var options = {
  isStatic:true 
 }
 var options1 = {
  restitution:1.5
 }
ground = Bodies.rectangle(400,700,100,10,options)  
World.add(world,ground)
ball = Bodies.circle(400,200,50,options1)
World.add(world,ball)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,100,10)
ellipseMode(RADIUS)
ellipse(ball.position.x-350,ball.position.y,50)
}