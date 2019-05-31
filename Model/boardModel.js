const emptyButton = "img/empty.png";
const redButton = "img/red.png";
const blueButton = "img/blue.png";


$(document).ready(function() {

    //cleanBoard();
    //scorePoint ("AI");

});

//receive image coordinate and color as parameter and change the state of the button
//usage example: changeColor("31", "red");
function changeColor (imageCoord, imageColor) {

    let fullPath = "img/"+imageColor+".png";

    $("#img"+imageCoord).attr("src", fullPath);

}

//clean the board, setting all images to empty
function cleanBoard () {

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            $("#img"+i+j).attr("src", emptyButton);
        }
    }

}

//increase score of the given parameter ("AI" or "player"). Return true if sucessfull.
////usage example: scorePoint ("AI")
function scorePoint (scorer) {

    if (scorer === "AI") {
        //increase AI scoreboard
        console.log("AI scored a point");
        return true;
    } else if (scorer === "player") {
        console.log("Player scored a point");
        //increase player scoreboard
        return true;
    } else {
        console.log("Error on scorePoint method.");
        return false;
    }

}