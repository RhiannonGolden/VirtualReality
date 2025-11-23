class Snowman{
  constructor(x,z,rotate){
    this.x = x;
    this.z = z;
    this.a = 0;
    this.rotate = rotate;
    this.flag1 = false;
    
    this.obj = snowmanTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  
    this.obj.addEventListener("mouseenter",()=>{
        this.flag1 = true;
    })

    this.obj.addEventListener("mouseleave",()=>{
        this.flag1 = false;
    })

    scene.append(this.obj);
  }
  

  spins(){
    if(this.flag1){
      this.a += this.rotate;
      this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
    }
  }


}