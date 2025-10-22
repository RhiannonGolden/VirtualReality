class House{
    constructor(x, y, z){
        this.obj = document.createElement("a-entity");
        
        let base = document.createElement("a-box");
        base.setAttribute("color", "blue");
        base.setAttribute("height", "3");
        base.setAttribute("width", "3");
        base.setAttribute("depth", "3");
        this.obj.append(base);

        let roof = document.createElement("a-cylinder");
        roof.setAttribute("segments-radial", "3");
        roof.setAttribute("position", "0 2.375 0");
        roof.setAttribute("color", "purple");
        roof.setAttribute("rotation", "-90 0 0");
        roof.setAttribute("radius", "1.75");
        roof.setAttribute("height", "3");
        this.obj.append(roof);

        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }

}