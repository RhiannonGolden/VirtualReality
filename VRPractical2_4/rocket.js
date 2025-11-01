class Rocket{
    constructor(x, y, z, speed, rotate){
        this.x = x;
        this.y = y;
        this.z = z;
        this.speed = speed;
        this.a = 0;
        this.rotate = rotate;

        this.obj = document.createElement("a-entity");

        let part1 = document.createElement("a-cone");
        part1.setAttribute("radius-top", "0");
        part1.setAttribute("radius-bottom", "0.5");
        part1.setAttribute("height", "1");
        part1.setAttribute("color", "red");
        part1.setAttribute("position", "0 0 -2");
        this.obj.append(part1);

        let part2 = document.createElement("a-cylinder");
        part2.setAttribute("radius", "0.5");
        part2.setAttribute("height", "2");
        part2.setAttribute("color", "blue");
        part2.setAttribute("position", "0 -1.5 -2");
        this.obj.append(part2);

        let part3 = document.createElement("a-cone");
        part3.setAttribute("radius-top", "0");
        part3.setAttribute("radius-bottom", "0.25");
        part3.setAttribute("height", "2");
        part3.setAttribute("color", "orange");
        part3.setAttribute("position", "0 -3.5 -2");
        part3.setAttribute("rotation", "-180 0 0");
        this.obj.append(part3);

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
    }

    launch(){
        this.y+=this.speed;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});


        if(this.y > 200){
            this.y = rnd(-100, -200);
        }
    }
    

    spin(){
        this.a += this.rotate;
        this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
    }

    
}