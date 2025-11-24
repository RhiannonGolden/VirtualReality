class Car{
  constructor(x,z,speed,angle, direction){
    this.x = x;
    this.y = 1.3;
    this.z = z;
    this.speed = speed;
    this.flag1 = false;
    this.angle = angle;
    this.direction = direction;
    
    this.obj = carTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.angle, z:0});
  
    this.obj.addEventListener("mouseenter",()=>{
        this.flag1 = true;
    })
    scene.append(this.obj);
  }
  
  
  drive(){
    if(this.flag1 && this.direction){
        this.x += this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:this.angle, z:0});
    }
    if(this.flag1 && this.direction == false){
        this.x -= this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:this.angle, z:0});
    }
    if(this.flag1 && this.x > 20){
        this.speed = - this.speed;
        this.angle = -this.angle;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:(this.z)});
        this.obj.object3D.rotation.y == this.angle;
    }
     if(this.flag1 && this.x < -20){
        this.speed = - this.speed;
        this.angle = -this.angle;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
        //this.obj.setAttribute("rotation", {x:0, y:this.angle, z:0});
        this.obj.object3D.rotation.y == this.angle;
    }
  }


}