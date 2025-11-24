let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocketTemplate, rockets = [ ], carTemplate, cars = [ ], snowmanTemplate, snowmen = [ ];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  rocketTemplate = document.querySelector("#rocketTemplate");
  carTemplate = document.querySelector("#carTemplate");
  snowmanTemplate = document.querySelector("#snowmanTemplate")


  for(let g = 0; g < 5; g++){
    for(let i = 0; i < 10; i++){
      let x = 5*i-22.5;
      let z = 3*g-25;
      let speed = rnd(2, 20)/100;
      let rotate = rnd(1, 50)/10;

      rockets.push(new Rocket(x,z,speed,rotate))
    }
  }

  for(let i = 0; i < 1; i++){
    let speed = rnd(5, 20)/100;

    cars.push(new Car(-5, -3.5, speed, 90, true));
    cars.push(new Car(5, -6.5, speed, 270, false));
  }


  for(let i = 0; i < 1; i++){
    let rotate = rnd(1, 10);

    snowmen.push(new Snowman(-5, 3, rotate));
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
    rocket.spin();
  }

  for(let car of cars){
    car.drive();
  }

  for(let snowman of snowmen){
    snowman.spins();
  }



  window.requestAnimationFrame(loop);
}