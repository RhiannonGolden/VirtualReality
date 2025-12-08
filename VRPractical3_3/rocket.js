class Rocket{
  constructor(x,z,speed,rotate){
    this.x = x;
    this.y = 5;
    this.z = z;
    this.a = 0;
    this.speed = speed;
    this.rotate = rotate;
    this.flag = false;
    this.drop = 0.15;
    
    this.obj = rocketTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    scene.append(this.obj);
  }
  
  
  launch(){
      this.z += this.speed;
      this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
  }

  spin(){
    if(this.flag){
      this.a += this.rotate;
      this.y -= this.drop;
      this.obj.setAttribute("rotation",{x:0,y:0,z:this.a});
      this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
      //this.obj.object3D.position.y = this.crash;
    }
  }


}