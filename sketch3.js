let blok1Color = "white";
let blok2Color = "white";
let blok3Color = "white";
let player = 1;
let player1Color = "blue";
let player2Color = "red";
let block1_locked = false;
let block2_locked = false;
let block3_locked = false;


function setup(){
  createCanvas(600,600);
}

function draw(){
background(100);

if(player == 1){
  playerColor = "blue";
} else {
  playerColor = "red";
}

  fill(blok1Color);
  rect(0,0,80);

  fill(blok2Color);
  rect(80,0,80);

  fill(blok3Color);
  rect(160,0,80);


}

function mousePressed(){

  if(mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 80 && block1_locked == false){
    if(player == 1){
      blok1Color = player1Color;
      player = 2;
    } else {
      blok1Color = player2Color;
      player = 1;
    }
    block1_locked = true;
  }
  if(mouseX > 80 && mouseX < 160 && mouseY > 0 && mouseY < 160 && block2_locked == false){
    if(player == 1){
      blok2Color = player1Color;
      player = 2;
    } else {
      blok2Color = player2Color;
      player = 1;
    }
    block2_locked = true;
  }
  if(mouseX > 160 && mouseX < 240 && mouseY > 0 && mouseY < 240 && block3_locked == false){
    if(player == 1){
      blok3Color = player1Color;
      player = 2;
    } else {
      blok3Color = player2Color;
      player = 1;
    }
    block3_locked = true;
  }
}