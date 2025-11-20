class Rocket{
  constructor(x,z,speed,rotate){
    this.x = x;
    this.y = 4.5;
    this.z = z;
    this.a = 0;
    this.speed = speed;
    this.rotate = rotate;
    this.flag1 = false;
    
    this.obj = rocketTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  
    this.obj.addEventListener("click",()=>{
        this.flag1 = true;
    })
    scene.append(this.obj);
  }
  
  
  launch(){
    if(this.flag1){
        this.y += this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
    }
  }

  spin(){
    if(this.y > 10){
      this.a += this.rotate;
      this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
    }
  }


}