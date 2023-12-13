var RandomNumber1 = Math.floor(Math.random()*6) + 1;
var RandomImagesSource = "./images/dice" + RandomNumber1 + ".png";

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", RandomImagesSource);

var RandomNumber2 = Math.floor(Math.random()*6)+1;

var RandomImagesSource2 = "./images/dice" + RandomNumber2 + ".png";

var images2 = document.querySelectorAll("img")[1].setAttribute("src", RandomImagesSource2);

if (RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "⚔️ Player 1 vince";
 
 } 
 else if (RandomNumber2 > RandomNumber1) {
     document.querySelector("h1").innerHTML = "Player 2 vince ⚔️ ";
 }
 else {
     document.querySelector("h1").innerHTMLn = "AZZ";
 }