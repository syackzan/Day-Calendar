// Storing HTML Elements Into Variables //
var nineI = $("#nineI");
var nineB = $("#nineB");
var timeDisplay = $("#currentDay");

//Variables to extract HTML for Dynamic Styling TextBox//
var nineTBG = $("#nineTBG");
var nineTime = $("#nineTime").text();
console.log(nineTime);

// Variables //
var nineArr = [];
var pNineArr = [];
var time;

//Getting Stored Values//
printNine();

// Functions to Store and retrieve into and from local storage //
function storeNine () {
    localStorage.setItem("nineam", nineI.val());
    printNine ();
}

//Printing Stored Items into Text Area //
function printNine (){
    var storedNineX = localStorage.getItem("nineam");
    nineI.text(storedNineX);
}

//On click Events//
nineB.on("click", storeNine);

//Time Functions//
var timeReceiver = moment().format("dddd, MMMM Do YYYY, h:mm a");
timeDisplay.text(timeReceiver);

//Comparison to time//


var timeInterval = setInterval(function () {
  
}, 60000);

//Repeat Timer function//
var timeInterval = setInterval(function () {
    
    time = moment().format("h")
    console.log(time);
    var amPM = moment().format("a");
    console.log(amPM);
    

    if ("9" < time || "am" == amPM){
        nineTBG.addClass("future");
    } else if ("9" == time || "am" == amPM){
        nineTBG.removeClass("future");
        nineTBG.addClass("present");
    } else {
        nineTBG.removeClass("present");
        nineTBG.addClass("past");
    }

}, 60000);

//Immediately Set Backgrounds when Website fires up//
function presentTime() {
    time = moment().format("h")
    console.log(time);
    var amPM = moment().format("a");
    console.log(amPM);
    

    if ("9" < time || "am" == amPM){
        nineTBG.addClass("future");
    } else if ("9" == time || "am" == amPM){
        nineTBG.removeClass("future");
        nineTBG.addClass("present");
    } else {
        nineTBG.removeClass("present");
        nineTBG.addClass("past");
    }
}

presentTime();