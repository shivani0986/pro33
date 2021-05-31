var frozen;
var frozenImage;
var frozen_running;

function preload() {
  //load the images here
  frozen_running = loadAnimation("se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se13.png","se14.png","se6.png","se5.png","se7.png","se4.png","se1.png","se3.png","se26.png","fro.png","fro2.png","fro3.png","fro4.png","fro5.png","fro6.png","fro7.png","fro8.png","fe1.png","fe19.png","fe10.png","fe11.png","fe8.png","fe9.png","se26.png","se27.png","fe12.png","fe7.png","fe6.png","fe3.png","fe4.png","fe5.png","fe13.png","fe13.png","fe14.png","fe16.png","fe15.png","fe17.png","se19.png","se20.png","se16.png","se17.png","se18.png","se23.png","se27.png","se10.png","se11.png","se12.png","se11.png","se12.png","se11.png","se12.png","se11.png","se12.png","se25.png","se22.png","se21.png","se8.png");

}

function setup() {
  createCanvas(1500,1500);
  frozen = createSprite(700,500,700,700);
  frozen.addAnimation("moving",frozen_running);
  //frozen.addAnimation("moving",frozen_running);
  frozen.scale = 2;
  //frozen.velocity=2;
  
}

function draw() {
  background("black");  
  drawSprites();
}