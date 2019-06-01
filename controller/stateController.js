class StateController {

    //6x6 matrix. 0 means empty, 1 means "human" and 2, "AI"
    constructor() {

        this.boardMatrix = [
            [1,0,0,0,0,0],
            [1,0,0,2,0,0],
            [1,0,0,1,0,0],
            [2,0,0,1,0,0],
            [2,0,0,1,0,0],
            [1,1,0,1,2,0]
        ];

        //when the game starts, father start as null
        this.father = null;

        //human always do the first move, but the first State is just setted when the AI do one move. 
        this.minmax = ai;
    }


    //return the state board matrix
    getBoardMatrix () {
        console.log("Matriz: \n"
        +this.boardMatrix[0][0]+","+this.boardMatrix[0][1]+","+this.boardMatrix[0][2]+","
        +this.boardMatrix[0][3]+","+this.boardMatrix[0][4]+","+this.boardMatrix[0][5]+
        "\n"
        +this.boardMatrix[1][0]+","+this.boardMatrix[1][1]+","+this.boardMatrix[1][2]+","
        +this.boardMatrix[1][3]+","+this.boardMatrix[1][4]+","+this.boardMatrix[1][5]+
        "\n"
        +this.boardMatrix[2][0]+","+this.boardMatrix[2][1]+","+this.boardMatrix[2][2]+","
        +this.boardMatrix[2][3]+","+this.boardMatrix[2][4]+","+this.boardMatrix[2][5]+
        "\n"
        +this.boardMatrix[3][0]+","+this.boardMatrix[3][1]+","+this.boardMatrix[3][2]+","
        +this.boardMatrix[3][3]+","+this.boardMatrix[3][4]+","+this.boardMatrix[3][5]+
        "\n"
        +this.boardMatrix[4][0]+","+this.boardMatrix[4][1]+","+this.boardMatrix[4][2]+","
        +this.boardMatrix[4][3]+","+this.boardMatrix[4][4]+","+this.boardMatrix[4][5]+
        "\n"
        +this.boardMatrix[5][0]+","+this.boardMatrix[5][1]+","+this.boardMatrix[5][2]+","
        +this.boardMatrix[5][3]+","+this.boardMatrix[5][4]+","+this.boardMatrix[5][5]);        

        return this.boardMatrix;
    }

    //generate childs of current state
    getChild (player) {
        var child = [];

        for(let column = 0; column < boardWidth; column++) {
            var newClone = this.cloneState();
            if (newClone.makeMove(player, column)) {
                child.push(newClone);
            }
        }        

        return child;
    }


    //check if there is a empty slot in the given column and, if empty, make the move and return true
    makeMove (player, column) {
        var foundEmptySlot = false;
        var emptySlotRow;

        for (let row = (boardHeight-1); row >= 0; row--) {
            if (this.boardMatrix[row][column] == 0) {
                foundEmptySlot = true;
                emptySlotRow = row;
                row = -1;
            }
        }

        if (foundEmptySlot) {
            this.boardMatrix[emptySlotRow][column] = player;
            return true;
        } 
        
        return false;
    }

    //clone the current state and return it
    cloneState () {
        var clone = new StateController;

        for(let column = 0; column < boardWidth; column++) {
            for(let row = 0; row < boardHeight; row++) {
                clone.boardMatrix[row][column] = this.boardMatrix[row][column];
            }
        }

        return clone;
    }
}
