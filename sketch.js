  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;

var backgrnd, back;
var walls1,walls2,walls3,walls5,walls6,walls7,walls8,walls9,walls10,
walls11,walls13,walls14,walls15,walls16;
var raider1, raidImage;
var door1, door2, door3, doorImage, doorImg;
var diamond;

function preload(){
  back = loadImage("pyramid2.jpg");
  doorImage = loadAnimation("Door.jpg");
  raidImage = loadAnimation("raiderimg.png");
  doorImg = loadAnimation("Door2.jpg");
}

function setup(){
  createCanvas(1350,580);

  engine = Engine.create();
  world = engine.world;

  backgrnd = createSprite(width/2, 200);
  backgrnd.addAnimation("123", back);
  backgrnd.scale = 5;
  
  
  walls1 = createSprite(0, 50, 500, 30);
  walls1.shapeColor = "brown";
  walls2 = createSprite(500, 0, 30, 700);
  walls2.shapeColor = "brown";
  walls3 = createSprite(300, 150, 370, 30);
  walls3.shapeColor = "brown";
  walls5 = createSprite(0, 250, 800, 30);
  walls5.shapeColor = "brown";
  walls6 = createSprite(300, 335, 370, 30);
  walls6.shapeColor = "brown";
  walls7 = createSprite(25, 335, 50, 30);
  walls7.shapeColor = "brown";
  walls8 = createSprite(300, 450, 600, 30);
  walls8.shapeColor = "brown";
  walls9 = createSprite(675, 320, 30, 520);
  walls9.shapeColor = "brown";
  walls10 = createSprite(565, 250, 100, 30);
  walls10.shapeColor = "brown";
  walls11 = createSprite(930, 75,700, 30);
  walls11.shapeColor = "brown";
  walls13 = createSprite(1060, 200, 640, 30);
  walls13.shapeColor = "brown";
  walls14 = createSprite(990, 335, 600, 30);
  walls14.shapeColor = "brown";
  walls15 = createSprite(1275, 435, 30, 170);
  walls15.shapeColor = "brown";
  walls16 = createSprite(1015, 505, 550, 30);
  walls16.shapeColor = "brown";

  door1 = createSprite(140, 200, 30, 70);
  door1.addAnimation("door", doorImage);
  door1.scale = 0.27;
  door2 = createSprite(485, 393, 30, 70);
  door2.addAnimation("door", doorImage);
  door2.scale = 0.3;
  door3 = createSprite(980, 420, 30, 70);
  door3.addAnimation("door1", doorImg);
  door3.scale = 0.6;
  
  //raider1.bounceOff(walls1);

  raider1 = createSprite(10,10,30,30);
  raider1.addAnimation("raider", raidImage);
  raider1.scale = 0.08;

  diamond = createSprite(1120,390,30,30);
  diamond.shapeColor = "cyan";

}

function draw(){

  Engine.update(engine);

  Open();

  drawSprites();
  fill ("cyan");
  shape(1100,370,1150,370,1175,390,1125,450, 1075,390);

/*walls1.display();
walls2.display();
walls3.display();
walls5.display();
walls6.display();
walls7.display();
walls8.display();
walls9.display();
walls10.display();
walls11.display();
walls13.display();
walls14.display();
walls15.display();
walls16.display();

//raider1.display();

door1.display();
door2.display();*/

}

function keyPressed(){
  if(keyDown("w")){
    raider1.y -= 20;
  }

  if(keyDown("s")){
    raider1.y += 20;
  }

  if(keyDown("a")){
    raider1.x -= 20;
  }

  if(keyDown("d")){
    raider1.x += 20;
  }
}

function Open(){
    if(raider1.isTouching(door1)){
      door1.destroy();
    }

    if(raider1.isTouching(door2)){
      door2.destroy();
    }
    if(raider1.isTouching(door3)){
      door3.destroy();
    }

    if(raider1.isTouching(diamond)){
      text ("YOU WON", display.width/2, display.height/2);
    }
    
    if(raider1.isTouching(walls1) || raider1.isTouching(walls2) || raider1.isTouching(walls3) ||
    raider1.isTouching(walls5) || raider1.isTouching(walls6) || raider1.isTouching(walls7) || raider1.isTouching(walls8) ||
    raider1.isTouching(walls9) || raider1.isTouching(walls10) || raider1.isTouching(walls11) || raider1.isTouching(walls13) ||
    raider1.isTouching(walls14) || raider1.isTouching(walls15) || raider1.isTouching(walls16)){
        raider1.x = 10;
        raider1.y = 10;
      }
      
}