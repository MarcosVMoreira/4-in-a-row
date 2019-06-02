class StateController {

    //6x6 matrix. 0 means empty, 1 means "human" and 2, "AI"
    constructor() {

        this.boardMatrix = [
            [2,2,2,2,2,2],
            [2,2,2,2,2,2],
            [2,2,2,2,2,2],
            [2,2,2,2,2,2],
            [2,2,2,2,2,2],
            [2,2,2,2,2,2]
        ];

        //when the game starts, father start as null
        this.father = null;

        //human always do the first move, but the first State is just setted when the AI do one move. 
        this.minimax = ai;

        this.bestMove;

        this.move;
    }

    printMatrix () {
        console.log("Matriz: \n");
        
        for (let row = 0; row < boardHeight; row++) {
            var aux = [];
            for (let column = 0; column < boardWidth; column++) {
                if (this.boardMatrix[row][column] != -1) {
                    var string = " "+this.boardMatrix[row][column];
                    aux.push(string);
                } else {
                    aux.push(this.boardMatrix[row][column]);
                }
            }
            console.log(
            aux[0]+" "+aux[1]+" "+aux[2]+" "
            +aux[3]+" "+aux[4]+" "+aux[5]);
        }
      /*  console.log("Matriz: \n"
        +this.boardMatrix[0][0]+" "+this.boardMatrix[0][1]+" "+this.boardMatrix[0][2]+" "
        +this.boardMatrix[0][3]+" "+this.boardMatrix[0][4]+" "+this.boardMatrix[0][5]+
        "\n"
        +this.boardMatrix[1][0]+" "+this.boardMatrix[1][1]+" "+this.boardMatrix[1][2]+" "
        +this.boardMatrix[1][3]+" "+this.boardMatrix[1][4]+" "+this.boardMatrix[1][5]+
        "\n"
        +this.boardMatrix[2][0]+" "+this.boardMatrix[2][1]+" "+this.boardMatrix[2][2]+" "
        +this.boardMatrix[2][3]+" "+this.boardMatrix[2][4]+" "+this.boardMatrix[2][5]+
        "\n"
        +this.boardMatrix[3][0]+" "+this.boardMatrix[3][1]+" "+this.boardMatrix[3][2]+" "
        +this.boardMatrix[3][3]+" "+this.boardMatrix[3][4]+" "+this.boardMatrix[3][5]+
        "\n"
        +this.boardMatrix[4][0]+" "+this.boardMatrix[4][1]+" "+this.boardMatrix[4][2]+" "
        +this.boardMatrix[4][3]+" "+this.boardMatrix[4][4]+" "+this.boardMatrix[4][5]+
        "\n"
        +this.boardMatrix[5][0]+" "+this.boardMatrix[5][1]+" "+this.boardMatrix[5][2]+" "
        +this.boardMatrix[5][3]+" "+this.boardMatrix[5][4]+" "+this.boardMatrix[5][5]);   */     
    }

    //return the state board matrix
    getBoardMatrix () {
       

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
            if (this.boardMatrix[row][column] == empty) {
                foundEmptySlot = true;
                emptySlotRow = row;
                row = -1;
            }
        }

        if (foundEmptySlot) {
            this.move = column;
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

    getBestMove () {
        return this.bestMove;
    }

    setBestMove(column) {
        this.bestMove = column;
    }

    getMove() {
        return this.move;
    }

    setMove(column) {
        this.move = column;
    }

    findWinner () {
        //verificar aqui a matriz inteira para ver se há algum ganhador no estado atual

        let winner = noWinner;
        let winnerRow;

        //checking if there is a lineup of three equal buttons in a row
        for (let row = 0; row < boardHeight; row++) {
            var counter = 1;
            let previous = this.boardMatrix[row][0];
            for (let column = 1; column < boardWidth; column++) {
                if ((this.boardMatrix[row][column] == previous) &&  this.boardMatrix[row][column] != empty){
                    counter++;
                    winner = this.boardMatrix[row][column];
                    winnerRow = row;
                } else {
                    previous = this.boardMatrix[row][column];
                    if (counter <= winCondition-1) {
                        counter = 1;
                    }
                }
            }
            if (counter > winCondition-1) {  
                console.log("Found a row winner: "+winner+" at row: "+winnerRow);
                return winner;
            }
        }

        //checking if there is a lineup of three equal buttons in a column
        for (let column = 0; column < boardWidth; column++) {
            var counter = 1;
            let previous = this.boardMatrix[0][column];
            for (let row = 1; row < boardHeight; row++) {
                if ((this.boardMatrix[row][column] == previous) &&  this.boardMatrix[row][column] != empty){
                    counter++;
                    winner = this.boardMatrix[row][column];
                } else {
                    previous = this.boardMatrix[row][column];
                    if (counter <= winCondition-1) {
                        counter = 1;
                    }
                }
            }
            if (counter > winCondition-1) {  
                console.log("Found a column winner."+winner);
                return winner;
            }
        }

        


        return noWinner;
    }

    setMiniMax(value) {
        this.minimax = value;
    }

    getMiniMax() {
        return this.minimax;
    }

}
