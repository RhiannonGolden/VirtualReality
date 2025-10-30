let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mechs = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  

  for(let i = 0; i < 15; i++){
    let x = rnd(-50, 50);
    let y = 13;
    let z = rnd(-50, 50);
    let mech = new Mech(x, y, z);
    mechs.push(mech);
  }


 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
