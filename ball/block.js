function Block(x,y){
 this.x=x;
 this.y=y;
 this.wide=75;
 this.height=20;
 this.color=color(random(30,150),random(30,150),random(30,150))

 
 this.display=function(){
  
  fill(this.color);
  stroke(255);
  rect(this.x,this.y,this.wide,this.height)
 }
 
 this.hits=function(obj){
  for (var i=0;i<obj.length;i++){
  
  if(collideRectCircle(this.x,this.y,this.wide,this.height,obj[i].x,obj[i].y,obj[i].r*2)){
 
 return true;}
 
  }
}
  
}

  
