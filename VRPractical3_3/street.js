class Street{
  constructor(x,z){
    this.x = x;
    this.y = 0;
    this.z = z;
   
    this.obj = streetTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    scene.append(this.obj);
  }
  
  



}