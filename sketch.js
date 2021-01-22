var canvas;
var music;
var fixedRect, fixedRect1, fixedRect2, fixedRect3;
var movingRect ;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
fixedRect =createSprite=(600,400,50,20);
fixedRect.shapeColor="blue"

fixedRect1 =createSprite=(600,400,50,20);
fixedRect1.shapeColor="red"

fixedRect2 =createSprite=(600,400,50,20);
fixedRect2.shapeColor="green"

fixedRect3=createSprite=(600,400,50,20);
fixedRect3.shapeColor="pink"

movingRect =createSprite=(600,400,50,20);
movingRect.shapeColor="orange"
    //create 4 different surfaces



    //create box sprite and give velocity
}


function draw() {
    background(rgb(169,169,169));
    movingRect.x=World.mouseX
    movingRect.y=World.mouseY
    //create edgeSprite


drawSprites();

    //add condition to check if box touching surface and make it box
}
