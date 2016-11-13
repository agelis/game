function Ball(x,y,r,dirx,diry){
 this.x=x;
 this.y=y;
 this.r=r;
 this.dirx=dirx;
 this.diry=diry;
 this.intersects=function(other){
 var d=dist(this.x,this.y,other.x,other.y);
 if(d <= this.r + other.r){
  return true;
  } else{
   return false;
  }
 }
 this.avoid=function(other){
  var d=dist(this.x,this.y,other.x,other.y);
  if(d<=this.r + other.height){
   return true;
  } else{
   return false;
  }
 }
 this.changedirection=function(){
  
  dirx*=1;
  diry*=-1;
  
 }
 this.lost=function(){
  if (this.y+this.r>=height){
   return true;
   }else {
    return false;
   }
  
  
 }
 this.display=function(){
  fill(125,200,200)
  ellipse(this.x,this.y,this.r*2,this.r*2);
 }
 this.move=function(){
  
  if(this.x >= width-this.r||this.x<=0+this.r){
   dirx *= -1;
   } 
  if(this.y<=0+this.r){
   diry*=-1;
  } 
   this.x+=dirx;
   this.y+=diry;
}
}
 