var backgroundImage;
var astronaut,astronautImage1,astronautImage2,astronautImage3;


function preload(){
 backgroundImage=loadImage("bg3.jpg");
 astronautImage1=loadGif("Astronaut1.gif");
 astronautImage=loadImage("Astronaut2.png");
 astronautImage3=loadImage("Astronaut3.png");
}

function setup() {
  createCanvas(1000, 600);
  
  ground=createSprite(500,300,1000,600);
  ground.addImage("bgmars",backgroundImage);
  ground.velocityX=-2;
  
  astronaut=createSprite(20,500,15,15);
  astronaut.addImage("astronaut",astronautImage);
  astronaut.scale=0.2;
}

function draw() {
  
  background(0);
 
 if(ground.x<0){
   ground.x=ground.width/2;
 } 
  
  
  drawSprites();
}



