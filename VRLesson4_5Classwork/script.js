let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, lamps=[ ];
window.onload = function(){
  scene = document.querySelector("a-scene");
  // Challenge: Create 10 random lamps
  for(let i =0; i<10; i++){
    let x = rnd(-10, 10);
    let z = rnd(-10,10);
    lamps.push( new Lamp(x,0,z) );
  }
  
}

