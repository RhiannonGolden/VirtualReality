let maze = [
  "----t-----------------",
  "rrrr-rrrrrrrrrrrrrrrrr",
  "r--------------------r",
  "r-x--xxxxxxxxxxx-----r",
  "r-x------------x-----r",
  "r-x------xxxxx-x-x-x-r",
  "r-xxxxx---x-x--x-x-x-r",
  "r------x--x-x--x-x-x-r",
  "r------x--x-x--x-x-x-r",
  "r--xxxxx--x-xxxx-xxx-r",
  "r--x--x--xx-x----x---r",
  "r--x---------xxxxxxxxr",
  "r--xx-xxxxx---------xr",
  "r---x-x---xxxxxxxxx-xr",
  "r---xxx-----------x---t",
  "rrrrrrrrrrrrrrrrrrrrrr",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "t"){
        new Tree(c,1,r);
      }else if(cols[c]=="r"){
        new Rock(c,1,r)
      }
    }

  }

})