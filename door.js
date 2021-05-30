class Door{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Door.jpg");

      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
      }
};