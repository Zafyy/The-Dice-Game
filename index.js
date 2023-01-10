var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImageL = "dice"+ randomNumber1 + ".png"; //dice1.png
var randomImageSourceL = "images/" + randomDiceImageL;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSourceL);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImageR = "dice"+ randomNumber2 + ".png"; //dice1.png
var randomImageSourceR = "images/" + randomDiceImageR;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSourceR);

var item=document.getElementById("item");

if(randomNumber1>randomNumber2)
{ console.log("Win")
    item.innerHTML="Player 1 wins ✌️";
}
else if(randomNumber2>randomNumber1)
{
    item.innerHTML="Player 2 wins ✌️";
}
else
{
    item.innerHTML="Draw!";
}
