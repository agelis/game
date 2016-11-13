var blocks=[];
var balls=[];
var box1;
var ball;
var blockshit;
var ballhit;
var lostball;
function preload(){
 
  blockshit=loadSound("pop.mp3")
  ballhit=loadSound("h.mp3")
  lostball=loadSound("lauph.mp3")
}

function setup() {
  createCanvas(700,500);
  
  for (var i=0; i<10; i++){
   
  //blocks[i]=[];
   //for (var j=0;j<10;j++){
    blocks[i]=new Block(i*78-40,100);
    
  // }
  }
  
   box1=new Box(350,400,90,15);
  
}
function mousePressed(){
 
   ball=new Ball(box1.x,box1.y-20,5,4,5);
   balls.push(ball);
   ballhit.play();
}

function draw() {

  
  background(0);
  for (var i=blocks.length-1;i>0;i--){
    
   //for (var t=blocks.length-1;t>0;t--){
   blocks[i].display();
   
   if (blocks[i].hits(balls[i])){
    
   blocks.splice(i,1);
   ball.changedirection();
   blockshit.play();
   
   //}
  }
}
  
  box1.update();
  box1.display();
  
  for (var j=balls.length-1;j>=0;j--){
   balls[j].display();
   balls[j].move();

  if(box1.hits(balls[j])){
   balls[j].changedirection();
   ballhit.play();
  } 
  if (balls[j].lost()){
   balls.splice(j,1);
   lostball.play();
  }
  
  
 }
 
}



