var player, playerRunning;
var ground, groundImage;
var point, pointImage;
var obstacles, obstaclesImage;

function preload() {
   playerRunning = loadAnimation("player1.png", "player2.png", "player3.png", "player4.png", "player5.png", "player6.png", "player7.png", "player8.png", "player9.png", "player10.png");
   groundImage = loadImage("ground.png");
   pointImage = loadImage("point.png");
}

function setup() {
   createCanvas(600, 400);

   ground = createSprite(100, 340, 200, 20);
   ground.addImage(groundImage);
   ground.scale = 2;
   groundImage.width = 600;
   // point.addImage(pointImage);
   
   player = createSprite(80, 340, 10, 10);
   player.addAnimation(playerRunning);
}

function draw() {
   background("black");
   ground.velocityX = -4;
   ground.x = ground.width / 2;
   // console.log(mouseX, mouseY);
   drawSprites();

}
