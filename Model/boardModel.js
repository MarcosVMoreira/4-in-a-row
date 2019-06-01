class BoardModel {
    
    constructor () {

    }
    
    //receive image coordinate and color as parameter and change the state of the button
    //usage example: changeColor("31", humanButton);
    changeColor (imageCoord, imageSource) {

        $("#img"+imageCoord).attr("src", imageSource);

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

    //sync the visual board with the given matrix
    updateBoardWithMatrix (matrix) {
        for (let row = 0; row < boardHeight; row++) {
            for (let column = 0; column < boardWidth; column++) {
                let coord = ""+row+column;
                if (matrix[row][column] == ai) {
                    this.changeColor(coord, aiButton);
                } else if (matrix[row][column] == human) {
                    this.changeColor(coord, humanButton);
                } else {
                    this.changeColor(coord, emptyButton);
                }
            }
        } 
    }
}
