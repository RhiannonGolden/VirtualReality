let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0, rocketTemplate, rockets = [ ], score_text, ufoTemplate, ufos = [], time_count = 60, time_text, hearts_count = 3, hearts_text, win, lose, score_count = 0, streetTemplate, streets = [ ], hit_count = 0;



let layout = [
"xxx",
"xxx",
];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  rocketTemplate = document.querySelector("#rocketTemplate");
  ufoTemplate = document.querySelector("#ufoTemplate");
  ammo_text = document.getElementById("ammo");
  time_text = document.getElementById("time");
  hearts_text = document.getElementById("hearts");
  score_text = document.getElementById("score");
  streetTemplate = document.querySelector("#streetTemplate");

  win = document.getElementById("win_img");
  lose = document.getElementById("lose_img");


  for(let r = 0; r < layout.length; r++){
    let row = layout[r];
    let cols = row.split("");

    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        let street = new Street(60*c-75,60*r);
        streets.push(street);
      }  
    }
  }


  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })


  for(let i = 0; i < 20; i++){
    let x = rnd(-50, 50);
    let y = rnd(-1, 4);
    let z = rnd(-150, -25);
    let speed = rnd(5, 10)/100;
    let rotate = rnd(25, 40)/10;

    rockets.push(new Rocket(x,y,z,speed,rotate))
   }


  for(let i = 0; i < 25; i++){
    let x = rnd(-50, 50);
    let z = rnd(-50, 50);
    ufos.push(new UFO(x,z));
  }

  setTimeout(loop,300);
  setTimeout(countdown,300);  
})

function loop(){

  ammo_text.setAttribute("value",`Ammo: ${ammo_count}`);
  time_text.setAttribute("value",`${time_count} seconds`);
  hearts_text.setAttribute("value",`Lives: ${hearts_count}`);
  score_text.setAttribute("value",`Score: ${score_count}`);


  for(let rocket of rockets){
    if(bullet && distance(rocket.obj,bullet.obj) < 3){
      rocket.flag = true;
      score_count++;
      rocket.obj.object3D.position.y = -100;
      bullet.obj.object3D.position.y = -100;
      rocket.spin()
    }

    

    if(rocket.flag2 && distance(rocket.obj,camera) < 1){
      rocket.flag2 = false;
      hearts_count--;
      rocket.flag = true;
      hit_count++;
      console.log(hit_count);
    }
    
    rocket.launch();
    rocket.spin()
  }


  for(let ufo of ufos){
    if(distance(ufo.obj,camera) < 1){
      //ufo.flag = true;
      ufo.obj.object3D.position.y = -100;
      ammo_count++;
    }
    ufo.spin();
  }





  if(bullet){
    bullet.fire();
    bullet.spin();
  }


  let total_count = score_count + hit_count;
  if(total_count > 19){
    win.setAttribute("opacity", 1);
    lose.setAttribute("opacity", 0);
  } else if(time_count < 0 || hearts_count < 0){
    win.setAttribute("opacity", 0);
    lose.setAttribute("opacity", 1);
  }


 
  window.requestAnimationFrame(loop);
}

function countdown(){
  time_count--;
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