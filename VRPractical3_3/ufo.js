class UFO{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.a = 0;
    this.da = 5;
    this.flag = false;
    
    this.obj = ufoTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:0.25,z:this.z});

    scene.append(this.obj);
  }
  

  spin(){
        this.a += this.da;
        this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
    }


}