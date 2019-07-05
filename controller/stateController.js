class StateController {

    //7x6 matrix. 0 means empty, 1 means "AI" and -1, "Human"
    constructor() {

        this.boardMatrix = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
    }

    printMatrix() {
        console.log("Matrix");

        for (let row = 0; row < boardHeight; row++) {
            var aux = [];
            for (let column = 0; column < boardWidth; column++) {
                aux.push(((column != 0) ? " " : "") + this.boardMatrix[row][column]);
            }
            console.log(aux[0] + aux[1] + aux[2] + aux[3] + aux[4] + aux[5] + aux[6]);
        }
    }

    //check if there is a empty slot in the given column and, if empty, make the move and return true
    makeMove(player, column) {
        var foundEmptySlot = false;
        var emptySlotRow;

        for (let row = (boardHeight - 1); row >= 0; row--) {
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
    cloneState() {
        var clone = new StateController();

        for (let column = 0; column < boardWidth; column++) {
            for (let row = 0; row < boardHeight; row++) {
                clone.boardMatrix[row][column] = this.boardMatrix[row][column];
            }
        }

        return clone;
    }

    // Determines if this is a final state
    isFinished(depth, score) {
        if (depth == difficulty || score == aiWon || score == humanWon || this.isFull()) {
            return true;
        }
        return false;
    }

    // Determines if board is full
    isFull() {
        for (let i = 0; i < boardWidth; i++) {
            if (this.boardMatrix[0][i] == empty) {
                return false;
            }
        }
        return true;
    }

    // Return a score for various positions (either horizontal, vertical or diagonal by moving through our board).
    scorePosition(row, column, delta_y, delta_x) {
        let human_points = 0;
        let computer_points = 0;

        // Determine score through amount of available chips
        for (let i = 0; i < winCondition; i++) {
            if (this.boardMatrix[row][column] == human) {
                human_points++; // Add for each human chip
            } else if (this.boardMatrix[row][column] == ai) {
                computer_points++; // Add for each computer chip
            }

            // Moving through our board
            row += delta_y;
            column += delta_x;
        }

        // Marking winning/returning score
        if (human_points == winCondition) {
            return humanWon;
        } else if (computer_points == winCondition) {
            return aiWon;
        } else {
            // Return normal points
            return computer_points;
        }
    }

    score() {
        let points;
        let vertical_points = 0;
        let horizontal_points = 0;
        let diagonal_points1 = 0;
        let diagonal_points2 = 0;

        // Vertical points
        // Check each column for vertical score
        for (let row = 0; row < boardHeight - 3; row++) {
            for (let column = 0; column < boardWidth; column++) {
                let score = this.scorePosition(row, column, 1, 0);
                if (score == aiWon) return aiWon;
                if (score == humanWon) return humanWon;
                vertical_points += score;
            }
        }

        // Horizontal points
        // Check each row's score
        for (let row = 0; row < boardHeight; row++) {
            for (let column = 0; column < boardWidth - 3; column++) {
                let score = this.scorePosition(row, column, 0, 1);
                if (score == aiWon) return aiWon;
                if (score == humanWon) return humanWon;
                horizontal_points += score;
            }
        }


        // Diagonal points 1 (left-bottom)
        for (let row = 0; row < boardHeight - 3; row++) {
            for (let column = 0; column < boardWidth - 3; column++) {
                let score = this.scorePosition(row, column, 1, 1);
                if (score == aiWon) return aiWon;
                if (score == humanWon) return humanWon;
                diagonal_points1 += score;
            }
        }

        // Diagonal points 2 (right-bottom)
        for (let row = 3; row < boardHeight; row++) {
            for (let column = 0; column <= boardWidth - 4; column++) {
                let score = this.scorePosition(row, column, -1, +1);
                if (score == aiWon) return aiWon;
                if (score == humanWon) return humanWon;
                diagonal_points2 += score;
            }

        }

        points = horizontal_points + vertical_points + diagonal_points1 + diagonal_points2;
        return points;
    }

    //return the state board matrix
    getBoardMatrix() {
        return this.boardMatrix;
    }
}
