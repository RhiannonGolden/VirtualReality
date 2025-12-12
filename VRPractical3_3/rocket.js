class Rocket{
  constructor(x,y,z,speed,rotate){
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = 0;
    this.speed = speed;
    this.rotate = rotate;
    this.flag = false;
    this.flag2 = true;
    this.drop = 0.15;
    this.direction = 0;
    
    this.obj = rocketTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("rotation", {x:90,y:0,z:0});

    scene.append(this.obj);
  }
  
  
  launch(){
    this.z += this.speed;

    if(this.z > 100 || this.z < -105){
      this.speed = -this.speed;
      this.direction = (this.direction + 180);
    }
    this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("rotation", {x:90,y:this.direction,z:0});
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