class Rock{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    this.a = a;
    this.da = 0.01;

    this.obj = rockTemplate.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }


  fall(){
    this.a -= this.da;
    this.obj.setAttribute("position", {x:this.x, y:this.a, z:this.z});

        if(this.y < -2){
            this.y = 10;
        }
    }

}