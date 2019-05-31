$(document).ready(function() {

    //cleanBoard();
    //scorePoint ("AI");

});

class BoardModel {
    
    constructor () {

        this.emptyButton = "img/empty.png";
        this.aiButton = "img/red.png";
        this.humanButton = "img/blue.png";
        this.boardWidth = "6";
        this.boardHeight = "6";

        this.variavel = "teste";

    }
    
    //receive image coordinate and color as parameter and change the state of the button
    //usage example: changeColor("31", "red");
    changeColor (imageCoord, imageColor) {

        let fullPath = "img/"+imageColor+".png";

        $("#img"+imageCoord).attr("src", fullPath);

    }

    //clean the board, setting all images to empty
    cleanBoard () {

        for (let i = 0; i < boardWidth; i++) {
            for (let j = 0; j < boardHeight; j++) {
                $("#img"+i+j).attr("src", emptyButton);
            }
        }

    }

    //increase score of the given parameter ("AI" or "human"). Return true if sucessfull.
    //usage example: scorePoint ("AI")
    scorePoint (scorer) {

        if (scorer === "AI") {
            //increase AI scoreboard
            console.log("AI scored a point");
            return true;
        } else if (scorer === "human") {
            console.log("Human scored a point");
            //increase human scoreboard
            return true;
        } else {
            console.log("Error on scorePoint method.");
            return false;
        }

    }


    //fazer funcao que transforma a matriz em jogo visual
}
