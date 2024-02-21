
var gamepattern=[];
var color=["green", "blue", "red","yellow"];
var userpattern=[];
var started= false;
var level=0;
$(document).keypress(function(){
    if(!started){
        $("level-title").text("Level"+level);
        nextSequence();
        started=true;

    }
});
$(".btn").click(function(){
var userchosenbutton=$(this).attr("id");
userpattern=push(userchosenbutton);
playsound(userchosenbutton);
animation(userchosenbutton);
checkans(userchosenbutton);
});
function playsound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animation(currentColor){
    $("#"+currentColor).addclass("pressed");
    setTimeout(function(){
        $("#"+currentColor).remove("pressed")
    },100);
}
function checkans(currentLevel){
    if(gamepattern[currentLevel]===userpattern[currentLevel]){
        console.log("success");
        if(userpattern.length==gamepattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
       console.log("wrong");
       playsound("wrong");
       $("body").addclass("game-over") ;
       setTimeout(function(){
        $("body").addclass("game-over");
       },200);
       $("#level-title").text("game over, press any key to start over");
       startOver();

    }
    function nextSequence(){
        userpattern=[];
        level++;
        $("#level-title").text("level"+level);
        var randomNumber= Math.floor(Math.random()*4);
        var randomChosenColour=color[randomNumber];
        gamepattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playsound(randomChosenColour);

    }
    function startOver(){
        level=0;
        gamepattern=[];
        started=false
        ;
    }
}




