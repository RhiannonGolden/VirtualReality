class VerticalWall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","black");
    this.obj.setAttribute("height", "4");
    this.obj.setAttribute("width", "2");
    this.obj.setAttribute("depth", "2");
    this.obj.setAttribute("rotation", "0 90 0");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}