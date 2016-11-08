

function setup() {
  createCanvas(600,400);
  ball=new Ball(random(10,width-1),random(10,height-1),5,4,5);
  ball2=new Ball(random(10,width-1),random(10,height-1),7,4,5); 
   
   
}

function draw() {
  
  squear=new Box(40,300,90,15);
  background(0);
  ball.display();
  ball.move();
  //ball2.display();
  //ball2.move();
  squear.update();
  squear.display();
  if(squear.hits(ball)){
   ball.changedirection();
  }
  if(squear.hits(ball2)){
   ball2.changedirection();
  }
  
}

function Box(x,y,wide,height){
 this.x=x;
 this.y=y;
 this.wide=wide;
 this.height=height;
 this.update=function(){
  this.x=mouseX;
  this.x=constrain(this.x,0+this.wide/2,width-this.wide/2-1)
 }
 
 this.hits=function(ball){
  if(ball.y+ball.r > this.y-this.height/2 && ball.x+ball.r > this.x-this.wide/2 && ball.x+ball.r < this.x+this.wide/2){
   //if(ball.x+ball.r > this.x-this.wide/2 && ball.x+ball.r < this.x+this.wide/2){
    return true;
   }
   
  //}
   return false;
 }
 this.display=function(){
  rectMode(CENTER);
  fill(120,13,90)
  rect(this.x,this.y,this.wide,this.height);
 }
 
}

