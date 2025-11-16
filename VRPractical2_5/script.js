/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

let maze = [
"xxxxxxxxxxxxxxxxxxxxx",
"xbbbbbbbbbxbbbbbbbxbb",
"xbxxxxxxxbxbxxxbxbxbx",
"xbxbbbbbbbbbxbbbxbxbx",
"xbxbbxxxxxxxxbxxxbxbx",
"xbxbbbxbbbbbxbxbxbxbx",
"xbxxxxxbxxxbxxxbxxxbx",
"xbbbbbbbxbxbbbbbbbxbx",
"xbxxxxxbxbxxxxxxxxxbx",
"xbxbbbxbbbxbbbxbbbbbx",
"xbxxxbxxxbxbxbxxxxxbx",
"xbbbxbxbxbbbxbbbbbxbx",
"xxxbxbxbxxxbxxxxxxxbx",
"xbbbxbxbbbbbbbbbbbxbx",
"xbxxxbxxxbxxxxxbxbxbx",
"xbxbbbxbxbxbbbbbxbxbx",
"xbxbxbxbxxxbxxxxxbxbx",
"xbxbxbbbbbbbxbbbxbbbx",
"xbxbxbxxxxxxxbxbxxxbx",
"bbxbxbbbbbbbbbxbbbxbx",
"xxxxxxxxxxxxxxxxxxxxx",
];


let scene, brickTemplate, bricks=[ ], wallTemplate, walls=[ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  brickTemplate = document.querySelector("#brickTemplate");
  wallTemplate = document.querySelector("#wallTemplate");

  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");

    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        let wall = new Wall(2*c,3,r*2);
        walls.push(wall);
      }else if(cols[c]=="b"){
        let brick = new Brick(c*2,0,r*2);
        bricks.push(brick);
      }      
    }
  }
   

})