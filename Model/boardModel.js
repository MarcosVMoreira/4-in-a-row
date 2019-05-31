const emptyButton = "img/empty.png";
const redButton = "img/red.png";
const blueButton = "img/blue.png";


$(document).ready(function() {

    //changeColor("31", "red");
    //cleanBoard();

});

//receive image coordinate and color as parameter and change the state of the button
function changeColor (imageCoord, imageColor) {

    let fullPath = "img/"+imageColor+".png";

    $("#img"+imageCoord).attr("src", fullPath);

}

//clean the board, setting all images to empty
function cleanBoard () {

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            $("#img"+i+j).attr("src", emptyButton);
        }
    }

}

//increase score of the given parameter ("AI" or "player"). Return true if sucessfull.
function scorePoint (scorer) {

    if (scorer === "AI") {
        //increase AI scoreboard
        return true;
    } else if (scorer === "player") {
        //increase player scoreboard
        return true;
    } else {
        return false;
    }

}