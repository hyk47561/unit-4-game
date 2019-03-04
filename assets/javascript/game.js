/*
Pseudo Code

event: page load
    generate random numer between 19 - 120
    assign random number from 1-12 to 4 pictures

event: onclick function to 4 pictures
    total score = ++score each click on pictures
    if total score === random -> ++ wins; -> display wins -> reset random number, total score
    if total score > random -> ++ looses; -> display looses -> reset random number, total score

*/

// --------------- Code start from here -----------------

// declare variable
var wins = 0;
var looses = 0;
var totalScore = 0;
var numArray = [1,2,3,4,5,6,7,8,9,10,11,12];
numArray.sort(function(a, b){return 0.5 - Math.random()});
var numCrys1 = numArray[0];
var numCrys2 = numArray[1]; 
var numCrys3 = numArray[2];
var numCrys4 = numArray[3];

//generate random number between 19-120 , display number to .output1
var randNum = 19 + Math.floor(Math.random() * 102);    
$(".output1").html("Random Number:" + "<br><br>" + randNum);

//.on() method to handle click

$("#pic1").on("click", function () {
    totalScore += numCrys1;
    console.log(totalScore);
});
$("#pic2").on("click", function () {
    totalScore += numCrys2;
    console.log(totalScore);
});
$("#pic3").on("click", function () {
    totalScore += numCrys3;
    console.log(totalScore);
});
$("#pic4").on("click", function () {
    totalScore += numCrys4;
    console.log(totalScore);
});

// display total score to .output2
$("#pic1, #pic2, #pic3, #pic4").on("click", function() {
    $("#totalScore").html(totalScore);
    if (totalScore === randNum) {
        ++wins;
        $("#wins").html("Wins: " + wins);
        reset();
    }
    if (totalScore > randNum) {
        ++looses;
        $("#looses").html("Looses: " + looses);
        reset();
    }
});

function reset() {
    totalScore = 0;
    numArray.sort(function(a, b){return 0.5 - Math.random()});
    randNum = 19 + Math.floor(Math.random() * 102);
    numCrys1 = numArray[0];
    numCrys2 = numArray[1]; 
    numCrys3 = numArray[2];
    numCrys4 = numArray[3];
    $("#totalScore").html(totalScore);
    $(".output1").html("Random Number:" + "<br><br>" + randNum);
}

//resetAll button

$("#btnReset").on("click", function() {
    wins = 0;
    looses = 0;
    totalScore = 0;
    randNum = 19 + Math.floor(Math.random() * 102);
    $("#wins").html("Wins: " + wins);
    $("#looses").html("Looses: " + looses);
    $("#totalScore").html(totalScore);
    $(".output1").html("Random Number:" + "<br><br>" + randNum);
});
