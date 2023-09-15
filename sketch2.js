let cellWidth = 100;
let cellHeight = 100;

let startXpos = 50;
let startYpos = 50;

let cell_1_Color = "white";
let cell_2_Color = "white";
let cell_3_Color = "white";
let cell_4_Color = "white";
let cell_5_Color = "white";
let cell_6_Color = "white";
let cell_7_Color = "white";
let cell_8_Color = "white";
let cell_9_Color = "white";


function setup(){
  createCanvas(600,600);
}

function draw(){
  background(0);

 

  // tekenen van het grid 9 vierkanten
  
  //cel 1 linksboven
  fill(cell_1_Color);
  rect(startXpos,startYpos,cellWidth, cellHeight);
  
  //cel 2 de nieuwe x-positie is x + 1 * de breedte
  fill(cell_2_Color);
  rect(startXpos+(1*cellWidth),startYpos,cellWidth, cellHeight);
  
  //cel 3 de nieuwe x-positie is x + 2 * de breedte
  fill(cell_3_Color);
  rect(startXpos+(2*cellWidth),startYpos,cellWidth, cellHeight);

  //cel 4 
  fill(cell_4_Color);
  rect(startXpos,startYpos+(1*cellHeight),cellWidth, cellHeight);

  //cel 5
  fill(cell_5_Color);
  rect(startXpos+(1*cellWidth),startYpos+(1*cellHeight),cellWidth, cellHeight);

  //cel 6
  fill(cell_6_Color);
  rect(startXpos+(2*cellWidth),startYpos+(1*cellHeight),cellWidth, cellHeight);

  //cel 7
  fill(cell_7_Color);
  rect(startXpos,startYpos+(2*cellHeight),cellWidth, cellHeight);

  //cel 8
  fill(cell_8_Color);
  rect(startXpos+(1*cellWidth),startYpos+(2*cellHeight),cellWidth, cellHeight);
   
  //cel 9
  fill(cell_9_Color);
  rect(startXpos+(2*cellWidth),startYpos+(2*cellHeight),cellWidth, cellHeight);   

}

function mousePressed(){
  //afvangen van mouseX-positie en y positie om te bepalen boven welke cell de muis is
  // mouseX > startXpos && mouseX < startXpos+cellWidth) && (mouseY > startYpos && mouseY < startYpos + cellHeight) && cell_1_Locked 
  // console.log(mouseX);
  // console.log(startXpos);
  // console.log(mouseY);
  // console.log(startYpos);
  console.log(mouseX);
  console.log(startXpos+cellWidth);
  console.log(mouseY);
  console.log(startYpos+cellHeight)
}