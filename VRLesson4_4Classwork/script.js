let rnd = (l,u) => Math.random()*(u-l)+l;
let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  s = document.querySelector("#s");
  
  /* Challenge
     Create 10 random boxes through the world
  */
 for(let i = 0; i<10; i++){
  let x = rnd(-20, 20);
  let z = rnd(-20,20);
  boxes.push( new Box(x,1,z) );
 }



 setTimeout(loop,100); 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  for(let box of boxes){
    box.blast();
  }




    
  window.requestAnimationFrame( loop )
  
}