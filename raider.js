class Raider{
    constructor(x,y, width, height){
        var options = {
            density: 1,
            frictionAir: 0.005,
            restitution: 1
        };
        this.body = Bodies .rectangle(x, y , width, height, options);
        this.width = width;
        this.height = height;
   
        World.add(world, this.body);
       }
     
       display() {
       var angle = this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       fill ("green");

       rectMode(CENTER);
       rect(0, 0, this.width, this.height);
       pop();
     }


}