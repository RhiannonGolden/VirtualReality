let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0, rocketTemplate, rockets = [ ], score_text, ufoTemplate, ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  rocketTemplate = document.querySelector("#rocketTemplate");
  ufoTemplate = document.querySelector("#ufoTemplate");
  score_text = document.getElementById("score");


  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })


  for(let i = 0; i < 50; i++){
    let x = rnd(-50, 50);
    let z = rnd(-200, 0);
    //let speed = rnd(2, 10)/100;
    let speed = 0.05;
    let rotate = rnd(25, 40)/10;

    rockets.push(new Rocket(x,z,speed,rotate))
   }


  for(let i = 0; i < 10; i++){
    let x = rnd(-25, 25);
    let z = rnd(0, -50);
    //let ufo = new UFO(x, z);
    //ufos.push(ufo);
    ufos.push(new UFO(x,z));
  }

  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){

  score_text.setAttribute("value",`Ammo: ${ammo_count}`);


  for(let rocket of rockets){
    if(bullet && distance(rocket.obj,bullet.obj) < 3){
      rocket.flag = true;
      console.log("hit");
    }
    rocket.launch();
    rocket.spin()
  }



  for(let ufo of ufos){
    if(distance(ufo.obj,camera) < 3){
      //rocket.flag = true;;
      console.log("hit");
      ufo.flag = true;
      ufo.obj.setAttribute("position",{x:this.x,y:-100,z:this.z});
      ammo_count++;
    }
    ufo.spin();
  }




  if(bullet){
    bullet.fire();
    bullet.spin();
  }






 
  window.requestAnimationFrame(loop);
}

function countdown(){

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}