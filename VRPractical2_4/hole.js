class Hole{
  constructor(){

    this.r = 0;
    this.dr = 0.25;
    
    this.obj = holeTemplate.cloneNode(true);
    
    scene.append(this.obj);  
    
  }
  spin(){
    this.r += this.dr;
    this.obj.setAttribute("rotation",{x:0, y:this.r, z:0});
  }
}