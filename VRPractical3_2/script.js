let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocketTemplate, rockets = [ ];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  rocketTemplate = document.querySelector("#rocketTemplate");


  for(let g = 0; g < 5; g++){
    for(let i = 0; i < 10; i++){
      let x = 5*i-22.5;
      let z = 3*g-25;
      let speed = rnd(2, 20)/100;
      let rotate = rnd(1, 50)/10;

      rockets.push(new Rocket(x,z,speed,rotate))
    }
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
    rocket.spin();
  }

  window.requestAnimationFrame(loop);
}