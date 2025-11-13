class Brick{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = brickTemplate.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}