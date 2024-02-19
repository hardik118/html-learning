var randomnum= Math.floor(Math.random()*6 )+1;
var  imagesource= "./images/dice"+randomnum+".png";
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",imagesource);

 var randomnum2= Math.floor(Math.random()*6)+1;
 var imagesource2="./images/dice"+randomnum2+".png";
 var image2= document.querySelectorAll("img")[1];
 image2.setAttribute("src",imagesource2);
if(randomnum>randomnum2){
    document.querySelector("h1").innerHTML="player ONE won yey!";

}
else if (randomnum<randomnum2){
    document.querySelector("h1").innerHTML="player TWO won yey!";

}
else if (randomnum== randomnum2){
    document.querySelector("h1").innerHTML= "its a DRAW";
    
}
