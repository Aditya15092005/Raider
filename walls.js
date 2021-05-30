class Walls{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("Sandstone.jpg");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill (244,164,96)
        rectMode(CENTER);
        rect( pos.x, pos.y, this.width, this.height);
      }
};