
var randomNumber1= Math.floor(6*(Math.random()))+1;
var randomNumber2= Math.floor(6*(Math.random()))+1;
var imageSource1="./images/dice" + randomNumber1 + ".png";
var imageSource2="./images/dice" + randomNumber2 + ".png";
/*
if(randomNumber1===0){
    document.querySelector(".player1").setAttribute("src", "/images/dice1.png");
}
else if(randomNumber1===1){
    document.querySelector(".player1").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice2.png");
}
else if(randomNumber1===2){
    document.querySelector(".player1").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice3.png");
}
else if(randomNumber1===3){
    document.querySelector(".player1").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice4.png");
}
else if(randomNumber1===4){
    document.querySelector(".player1").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice5.png");
}
else if(randomNumber1===5){
    document.querySelector(".player1").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice6.png");
}

var randomNumber2= Math.floor(6*(Math.random()));

if(randomNumber2===0){
    document.querySelector(".player2").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice1.png" );
}
if(randomNumber2===1){
    document.querySelector(".player2").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice2.png" );
}
if(randomNumber2===2){
    document.querySelector(".player2").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice3.png" );
}
if(randomNumber2===3){
    document.querySelector(".player2").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice4.png" );
}
if(randomNumber2===4){
    document.querySelector(".player2").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice5.png" );
}
if(randomNumber2===5){
    document.querySelector(".player2").setAttribute("src", "C:\Users\Muhammad Ali\Desktop\dicee.com\images\dice6.png" );
}
*/

for(var i=0; i<6 ; i++){
    if(i===randomNumber1){
        document.querySelector(".player1").setAttribute("src", imageSource1);       
    }
}
for(var z=0; z<6 ; z++){
    if(z===randomNumber2){
        document.querySelector(".player2").setAttribute("src", imageSource2);       
    }
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent='Player 1 has won';
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent='Player 2 has won';
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent='Draw';
}