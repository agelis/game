var blocks=[];
var balls=[];
var box1;
var ball;
var blockshit;
var ballhit;
var lostball;
var end;
var funnysound;
var rows;
var cols;
var canvas;
var img;
var ballspeed;
function preload(){
 
  blockshit=loadSound("pop.mp3")
  ballhit=loadSound("h.mp3")
  lostball=loadSound("boo.mp3")
  sound=loadSound("soundtrack.mp3")
  end=loadSound("end.mp3")
  img=loadImage("images/Lighthouse.jpg")
}


function setup() {
 
   start();
   ballspeed=createSlider(3,10,5);
   ballspeed.position(550,505);
   var p=createP("SET THE SPEED OF THE BALL:")
   p.position(300,490)
   canvas.mousePressed(play);
function play(){
 if (balls.length===0){
   ball=new Ball(box1.x+52,box1.y-20,5,ballspeed.value(),ballspeed.value());
   balls.push(ball);
 }
 } 
}


function start(){
 canvas=createCanvas(700,500);
  canvas.position(270,0)
  sound.play();
  sound.setVolume(0.9);
  rows=floor(width/75);
  cols=5;
  
   for (var i=0;i<rows;i++){
     for(var j=0;j<cols;j++){
    var block=new Block(i*78,j*22+50)
    blocks.push(block);
 
   }
 }
   
   box1=new Box(350,400,90,15);
 }

function draw() {
  background(img);
  for (var i=blocks.length-1;i>=0;i--){
    blocks[i].display();
   if (blocks[i].hits(balls)){
    blocks.splice(i,1);
    ball.changedirection();
    blockshit.play();
     if (blocks.length===0){
     sound.stop(); 
     end.play();
     ball.disappear();
     setTimeout(start,3000)
  }
 }
}
  
  box1.update();
  box1.display();
  
  for (var j=balls.length-1;j>=0;j--){
   balls[j].display();
   balls[j].move();

  if(box1.hits(balls)){
   balls[j].changedirection();
   ballhit.play();
   ballhit.setVolume(0.3)
  } 
  if (balls[j].lost()){
   balls.splice(j,1);
   lostball.play();
  }
 }
}



