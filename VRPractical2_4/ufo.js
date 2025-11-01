class UFO{
    constructor(x, y, z, speed){
        this.x = x;
        this.y = y;
        this.z = z;
        this.speed = speed;
        this.a = 0;
        this.da = 5;
    

        this.obj = document.createElement("a-entity");

        let part1 = document.createElement("a-cone");
        part1.setAttribute("color", "yellow");
        part1.setAttribute("height", "0.5");
        part1.setAttribute("radius-top", "1");
        part1.setAttribute("radius-bottom", "0.85");
        part1.setAttribute("position", "0 -0.5 0");
        this.obj.append(part1);


        let part2 = document.createElement("a-sphere");
        part2.setAttribute("radius", "1");
        part2.setAttribute("position", "0 0.8 0");
        part2.setAttribute("opacity", "0.3");
        this.obj.append(part2);


        let ring = document.createElement("a-cylinder");
        ring.setAttribute("radius", "1.75");
        ring.setAttribute("height", "0.5");
        ring.setAttribute("color", "red");
        this.obj.append(ring);


        let alien = document.createElement("a-sphere");
        alien.setAttribute("radius", "0.5");
        alien.setAttribute("position", "0 0.7 0");
        alien.setAttribute("color", "green");
        alien.setAttribute("scale", "1.25 2 1");
        this.obj.append(alien);

        let eye1 = document.createElement("a-sphere");
        eye1.setAttribute("radius", "0.1");
        eye1.setAttribute("position", "-0.15 0.9 0.5");
        eye1.setAttribute("color", "black");
        eye1.setAttribute("scale", "1 1.5 1");
        this.obj.append(eye1);


        let eye2 = document.createElement("a-sphere");
        eye2.setAttribute("radius", "0.1");
        eye2.setAttribute("position", "0.15 0.9 0.5");
        eye2.setAttribute("scale", "1 1.5 1");
        eye2.setAttribute("color", "black");
        this.obj.append(eye2);


        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj );
    }

    invade(){
        this.y-=this.speed;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        if(this.y < -10){
            this.y = rnd(100, 200);
        }
    }


    spin(){
        this.a += this.da;
        this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
    }


}