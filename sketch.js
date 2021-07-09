var backImg
var spaceStation,spaceStationImg;
var spacepod,spacepodimg1,spacepodimg2,spacepod3,spacepod4;

function preload(){
backImg = loadImage("images/spacebg.jpg")
spaceStationImg = loadImage("images/iss.png")
spacepodimg1 = loadImage("images/spacecraft1.png")
spacepodimg2 = loadImage("images/spacecraft2.png")
spacepodimg3 = loadImage("images/spacecraft3.png")
spacepodimg4 = loadImage("images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
spaceStation = createSprite(400, 200, 50, 50);
spaceStation.addImage(spaceStationImg);
spacepod = createSprite(600,300,10,10)
spacepod.addImage(spacepodimg1);
spacepod.scale = 0.1;
}

function draw() {
  background(backImg);

  text("MOVE THE POD IN THE GLOWING BLUE DOT!!USE THE ARROW KEYS TO MOVE",10,10)

  if(keyDown(RIGHT_ARROW)){
    spacepod.velocityX = 2
    spacepod.addImage(spacepodimg3);
  }
  
  if(keyDown(LEFT_ARROW)){
    spacepod.velocityX = -2
    spacepod.addImage(spacepodimg4);
  }
  
  if(keyDown(UP_ARROW)){
    spacepod.velocityY = -2
    spacepod.addImage(spacepodimg2);
  }
  
  if(keyDown(DOWN_ARROW)){
    spacepod.velocityY = 2
    spacepod.addImage(spacepodimg1);
  }

  drawSprites();
}