function Box(x,y,wide,height){
 this.x=x;
 this.y=y;
 this.wide=wide;
 this.height=height;
 this.color=color(random(30,150),random(30,150),random(30,150))
 this.update=function(){
  this.x=mouseX-wide/2;
  this.x=constrain(this.x,0,width-this.wide-1)
 }
 
  this.hits=function(obj){
  for (var i=0;i<obj.length;i++){
  
  if(collideRectCircle(this.x,this.y,this.wide,this.height,obj[i].x,obj[i].y,obj[i].r*2)){
 
 return true;}
 
  }
}
 this.display=function(){
  
  fill(this.color)
  stroke(255)
  rect(this.x,this.y,this.wide,this.height);
 }
 
}