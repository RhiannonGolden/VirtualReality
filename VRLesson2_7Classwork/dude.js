class Dude{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    //Challenge 1: Add delta variables in order to make the dude walk forward on the z axis and jump up and down on the y axis.
    this.dz = 0.05;
    this.dy = 0.05;

    this.obj = dudeTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    //Challenge 2: Add the accumulators to modify the y and z variables
    this.z += this.dz;
    this.y += this.dy;
    

    //Challenge 3: Add the decision in order to alternate the delta on the y axis when the dude reaches less then 1 or greater than 2

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    if(this.y > 2 || this.y < 1){
      this.dy = -this.dy;
    }

  }
}