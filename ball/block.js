function Block(x,y){
 this.x=x;
 this.y=y;
 this.wide=75;
 this.height=20;
 
 this.display=function(){
  fill(20,150,250);
  stroke(255);
  rect(this.x,this.y,this.wide,this.height)
 }
 
 this.hits=function(){
  for (var i=0;i<balls.length;i++){
  
  if(balls[i].y-balls[i].r <= this.y+this.height/2 && balls[i].y+balls[i].r>=this.y-this.height/2 && balls[i].x+balls[i].r > this.x-this.wide/2 && balls[i].x-balls[i].r < this.x+this.wide/2) {
   
    return true;
    
    } else{
  
   return false;
    }
 }
}
  
}

  
