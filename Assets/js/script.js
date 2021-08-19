// Storing HTML Elements Into Variables //
var nineI = $("#nineI");
var nineB = $("#nineB");

// Variables //
var nineArr = [];
var pNineArr = [];

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