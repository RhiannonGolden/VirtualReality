let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 


  for(let g = 0; g < 15; g++){

    for(let i = 0; i < 10; i++){
    let x = 5*i;
    let y = rnd(-100, 0);
    let z = 5*g;
    let speed = rnd(2, 20)/100;
    let rocket = new Rocket(x-20, y, z-20, speed);
    rockets.push(rocket);
  }
  
  }


  for(let g = 0; g < 10; g++){

    for(let i = 0; i < 10; i++){
    let x = 5*i;
    let y = rnd(50, 100);
    let z = 5*g;
    let speed = rnd(2, 20)/100;
    let ufo = new UFO(x-20, y, z-20, speed);
    ufos.push(ufo);
    }
  
  }


  loop();
})

function loop(){

  for(let i=0; i<rockets.length;i++){
    rockets[i].launch();
  }


  for(let i=0; i<ufos.length;i++){
    ufos[i].invade();
  }


  
  window.requestAnimationFrame( loop );
}