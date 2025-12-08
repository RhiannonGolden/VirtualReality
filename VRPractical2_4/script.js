let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], ufos = [ ], holeTemplate, holes = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  holeTemplate = document.querySelector("#holeTemplate");


  for(let g = 0; g < 10; g++){

    for(let i = 0; i < 10; i++){
    let x = 5*i;
    let y = rnd(-100, 0);
    let z = 5*g;
    let speed = rnd(2, 20)/100;
    let rotate = rnd(1, 25);
    let rocket = new Rocket(x-20, y, z-20, speed, rotate);
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


  for(let i = 0; i < 1; i++){
    let hole = new Hole();
    holes.push(hole);
  }



  loop();
})

function loop(){

  for(let i=0; i<rockets.length;i++){
    rockets[i].launch();
    rockets[i].spin();
  }


  for(let i=0; i<ufos.length;i++){
    ufos[i].invade();
    ufos[i].spin();
  }

  
  for(let i=0; i<holes.length;i++){
    holes[i].spin();
  }


  
  window.requestAnimationFrame( loop );
}