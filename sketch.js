var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
  music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=4;
    ball.velocityY=9;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
   
    if(isTouching(ball,block1)){ 
        console.log("hi "); 
        ball.shapeColor = "blue"; 
        bounceOff(ball, block1); 
        music.play(); 
    } 
    if(isTouching(ball,block2)){
         ball.shapeColor = "orange";
          ball.velocityX=0; 
          ball.velocityY=0;
           music.stop();
         }
          if(isTouching(ball,block3) ){
               ball.shapeColor = "red"; 
               bounceOff(ball,block3) 
               music.play(); 
            }
             if(isTouching(block4,ball)){
                  ball.shapeColor = "yellow"; 
                  bounceOff(block4,ball) 
                  ball.velocityX=0;
                   ball.velocityY=0; 
    music.stop(); }
    
    
   
    drawSprites();
}
function isTouching(object1,object2) {
    
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;
  }
  else {
      return false;
  }
  }