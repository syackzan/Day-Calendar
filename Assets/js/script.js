// Storing HTML Elements Into Variables //
var nineI = $("#nineI");
var nineB = $("#nineB");
var tenI = $("#tenI");
var tenB = $("#tenB");
var elevenI = $("#elevenI");
var elevenB = $("#elevenB");
var twelveI = $("#twelveI");
var twelveB = $("#twelveB");
var oneI = $("#oneI");
var oneB = $("#oneB");
var twoI = $("#twoI");
var twoB = $("#twoB");


//Dispaly Time//
var timeDisplay = $("#currentDay");

//Variables to extract HTML for Dynamic Styling TextBox//
var nineTBG = $("#nineTBG");
var tenTBG = $("#tenTBG");
var elevenTBG = $("#elevenTBG");
var twelveTBG = $("#twelveTBG");
var oneTBG = $("#oneTBG");
var twoTBG = $("#twoTBG");

// Variables //
var nineArr = [];
var pNineArr = [];
var time;

//Getting Stored Values//
printNine();
printTen();
printEleven();
printTwelve();
printOne();
printTwo();

// Functions to Store and retrieve into and from local storage //
function storeNine () {
    localStorage.setItem("nineS", nineI.val());
    printNine ();
}
function storeTen () {
    localStorage.setItem("tenS", tenI.val());
    printTen ();
}
function storeEleven () {
    localStorage.setItem("elevenS", elevenI.val());
    printEleven ();
}
function storeTwelve () {
    localStorage.setItem("twelveS", twelveI.val());
    printTwelve ();
}
function storeOne () {
    localStorage.setItem("oneS", oneI.val());
    printOne ();
}
function storeTwo () {
    localStorage.setItem("twoS", twoI.val());
    printTwo ();
}

//Printing Stored Items into Text Area //
function printNine (){
    var storedNineX = localStorage.getItem("nineS");
    nineI.text(storedNineX);
}
function printTen (){
    var storedTenX = localStorage.getItem("tenS");
    tenI.text(storedTenX);
}
function printEleven (){
    var storedElevenX = localStorage.getItem("elevenS");
    elevenI.text(storedElevenX);
}
function printTwelve (){
    var storedTwelveX = localStorage.getItem("twelveS");
    twelveI.text(storedTwelveX);
}
function printOne (){
    var storedOneX = localStorage.getItem("oneS");
    oneI.text(storedOneX);
}
function printTwo (){
    var storedTwoX = localStorage.getItem("twoS");
    twoI.text(storedTwoX);
}

//On click Events//
nineB.on("click", storeNine);
tenB.on("click", storeTen);
elevenB.on("click", storeEleven);
twelveB.on("click", storeTwelve);
oneB.on("click", storeOne);
twoB.on("click", storeTwo);

//Time Functions//
var timeReceiver = moment().format("dddd, MMMM Do YYYY, h:mm a");
timeDisplay.text(timeReceiver);

//Repeat Timer function//
var timeInterval = setInterval(function () {
    
    time = moment().format("h")
    console.log(time);
    var amPM = moment().format("a");
    console.log(amPM);
    
    //9check
    if ("9" < time && "am" == amPM){
        nineTBG.addClass("future");
    } else if ("9" == time && "am" == amPM){
        nineTBG.removeClass("future");
        nineTBG.addClass("present");
    } else {
        nineTBG.removeClass("present");
        nineTBG.addClass("past");
    }

    //10check
    if ("10" < time && "am" == amPM){
        tenTBG.addClass("future");
    } else if ("10" == time && "am" == amPM){
        tenTBG.removeClass("future");
        tenTBG.addClass("present");
    } else {
        tenTBG.removeClass("present");
        tenTBG.addClass("past");
    }

    //11check
    if ("11" < time && "am" == amPM){
        elevenTBG.addClass("future");
    } else if ("11" == time && "am" == amPM){
        elevenTBG.removeClass("future");
        elevenTBG.addClass("present");
    } else {
        elevenTBG.removeClass("present");
        elevenTBG.addClass("past");
    }

    //12check
    if ("12" < time && "am" == amPM){
        twelveTBG.addClass("future");
    } else if ("12" == time && "pm" == amPM){
        twelveTBG.removeClass("future");
        twelveTBG.addClass("present");
    } else {
        twelveTBG.removeClass("present");
        twelveTBG.addClass("past");
    }

     //1check
     if ("1" < time && "am" == amPM){
        oneTBG.addClass("future");
    } else if ("1" == time && "pm" == amPM){
        oneTBG.removeClass("future");
        oneTBG.addClass("present");
    } else {
        oneTBG.removeClass("present");
        oneTBG.addClass("past");
    }

    //2check
    if ("2" < time && "am" == amPM){
        twoTBG.addClass("future");
    } else if ("2" == time && "pm" == amPM){
        twoTBG.removeClass("future");
        twoTBG.addClass("present");
    } else {
        twoTBG.removeClass("present");
        twoTBG.addClass("past");
    }

}, 60000);

//Immediately Set Backgrounds when Website fires up//
function presentTime() {
    time = moment().format("h")
    console.log(time);
    var amPM = moment().format("a");
    console.log(amPM);
    

    //9check
    if ("9" < time || "am" == amPM){
        nineTBG.addClass("future");
    } else if ("9" == time || "am" == amPM){
        nineTBG.removeClass("future");
        nineTBG.addClass("present");
    } else {
        nineTBG.removeClass("present");
        nineTBG.addClass("past");
    }

    //10check
    if ("10" < time || "am" == amPM){
        tenTBG.addClass("future");
    } else if ("10" == time || "am" == amPM){
        tenTBG.removeClass("future");
        tenTBG.addClass("present");
    } else {
        tenTBG.removeClass("present");
        tenTBG.addClass("past");
    }

    //11check
    if ("11" < time || "am" == amPM){
        elevenTBG.addClass("future");
    } else if ("11" == time || "am" == amPM){
        elevenTBG.removeClass("future");
        elevenTBG.addClass("present");
    } else {
        elevenTBG.removeClass("present");
        elevenTBG.addClass("past");
    }
    
    //12check
    if ("12" < time || "am" == amPM){
        twelveTBG.addClass("future");
    } else if ("12" == time || "pm" == amPM){
        twelveTBG.removeClass("future");
        twelveTBG.addClass("present");
    } else {
        twelveTBG.removeClass("present");
        twelveTBG.addClass("past");
    }

    //1check
    if ("1" < time && "am" == amPM){
        oneTBG.addClass("future");
    } else if ("1" == time && "pm" == amPM){
        oneTBG.removeClass("future");
        oneTBG.addClass("present");
    } else {
        oneTBG.removeClass("present");
        oneTBG.addClass("past");
    }

    //2check
    if ("2" < time && "am" == amPM){
        twoTBG.addClass("future");
    } else if ("2" == time && "pm" == amPM){
        twoTBG.removeClass("future");
        twoTBG.addClass("present");
    } else {
        twoTBG.removeClass("present");
        twoTBG.addClass("past");
    }
}

presentTime();