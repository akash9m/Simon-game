var buttonColours=["red","blue","green","yellow"];
var color=["red","blue","green","yellow"];
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
    change();
    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
    playsound(randomChosenColour);
     
}
function animatePress(currentcolor)
{
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolor).removeClass("pressed")
    } ,100);
}
function change()
{
    var r1=Math.floor(Math.random()*4);
    var c1=color[r1];
    var r2=Math.floor(Math.random()*4);
    var c2=color[r2];
    var cr1=$("#"+c1).attr("class");
    var cr2=$("#"+c2).attr("class");
    $("."+cr1[4]).attr("id",c2);
    $("."+cr2[4]).attr("id",c1);
}

