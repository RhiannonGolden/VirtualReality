class Car{
  constructor(x,z,speed){
    this.x = x;
    this.y = 1.75;
    this.z = z;
    this.speed = speed;
    this.flag1 = false;
    
    this.obj = carTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  
    this.obj.addEventListener("mouseenter",()=>{
        this.flag1 = true;
    })
    scene.append(this.obj);
  }
  
  
  drive(){
    if(this.flag1){
        this.x += this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
    }
    if(this.flag1 && this.x > 25){
        this.x += -this.speed;
        this.obj.setAttribute("position", {x:this.x-2,y:this.y,z:this.z});
    }
  }


}