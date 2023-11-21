var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var start = false;
$("body").keypress( function(){
    if(!start)
 { 
     $("h1").text("Level "+ level);
     nextSequence();
     start = true;
 } 
 });
$(".btn").click(function(){
    var userchosencolor = $(this).attr("id");
    userClickedPattern.push(userchosencolor);
    playsound(userchosencolor);
    animatePress(userchosencolor);
    checkanswer(userClickedPattern.length-1);
});
function checkanswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        console.log("success");
    
     if(userClickedPattern.length === gamePattern.length)
     {
        setTimeout(function()
         {nextSequence();},1000);
     }
    }
    else
    {
        console.log("wrong");
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {$("body").removeClass("game-over");} , 200);
        $(".heading").text("Game Over ! , Press any key to start");
        startOver();
    }
}
function startOver()
{
    gamePattern = [];
    level = 0;
    start = false;
}
function playsound(name)
{
    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}
function nextSequence()
{
    userClickedPattern = [];
    level++;
    $(".heading").text("Level " + level);
    var rn=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[rn];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}
function animatePress(currentcolor)
{
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolor).removeClass("pressed")
    } ,100);
}


