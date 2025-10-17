let scene;
let car;
let pokemonball;
let rocket;
let dude;
let sun;


window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");

    car = document.querySelector("#car");
    car.x = 0;
    car.dx = 0.025;
    
    pokemonball = document.querySelector("#pokemonball");
    pokemonball.r = 0;
    pokemonball.rx = 1.5;

    rocket = document.querySelector("#rocket");
    rocket.d = 0;
    rocket.dy = 0.025;

    dude = document.querySelector("#dude");
    dude.g = 1;
    dude.gs = 0.01;

    sun = document.querySelector("#sun");
    sun.o = 0;
    sun.oo = 0.0025;
    

    loop();
})


function loop(){
    car.x -= car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:-8});

    pokemonball.r += pokemonball.rx;
    pokemonball.setAttribute("rotation", {x:pokemonball.r, y:0, z:0});

    rocket.d += rocket.dy;
    rocket.setAttribute("position",{x:3, y:rocket.d, z:-4});

    dude.g += dude.gs;
    dude.setAttribute("scale", {x:dude.g, y:dude.g, z:dude.g});

    sun.o += sun.oo;
    sun.setAttribute("opacity", sun.o);

    window.requestAnimationFrame(loop);
}
