function Box(x,y,wide,height){
 this.x=x;
 this.y=y;
 this.wide=wide;
 this.height=height;
 this.update=function(){
  this.x=mouseX;
  this.x=constrain(this.x,0+this.wide/2,width-this.wide/2-1)
 }
 
  this.hits=function(){
  for (var i=0;i<balls.length;i++){
  
  if(balls[i].y+balls[i].r >= this.y-this.height/2 && balls[i].y-balls[i].r<this.y+this.height/2 && balls[i].x+balls[i].r >= this.x-this.wide/2 && balls[i].x-balls[i].r <= this.x+this.wide/2) {
   
    return true;
    
    } else{
  
   return false;
    }
 }
}
 this.display=function(){
  rectMode(CENTER);
  fill(120,13,90)
  rect(this.x,this.y,this.wide,this.height);
 }
 
}