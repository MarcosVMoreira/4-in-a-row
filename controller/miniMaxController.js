class MiniMaxController {

    constructor(stateParam) {
        this.state = stateParam;
    }

    bestMove() {
        if(this.state.score() != aiWon && this.state.score() != humanWon && !this.state.isFull()) {
            let move = this.maximize(this.state, 0);
            console.log("Best move: " + move[0]);
            return move[0];
        }
    }

    maximize(stateParam, level) {

        let score = stateParam.score();
        if(stateParam.isFinished(level, score)) return [null, score];

        let max = [null, Number.MIN_SAFE_INTEGER];

        for(let column = 0; column < boardWidth; column++) {

            let newState = stateParam.cloneState();
            if(newState.makeMove(ai, column)) {

                let nextMove = this.minimize(newState, level + 1);

                // Evaluate new move
                if (max[0] == null || nextMove[1] > max[1]) {
                    max[0] = column;
                    max[1] = nextMove[1];
                }
            }
        }

        return max;
    }

    minimize(stateParam, level) {

        let score = stateParam.score();
        if(stateParam.isFinished(level, score)) return [null, score];

        let min = [null, Number.MAX_SAFE_INTEGER];

        for (let column = 0; column < boardWidth; column++) {
            let newState = stateParam.cloneState();

            if (newState.makeMove(human, column)) {

                let nextMove = this.maximize(newState, level + 1);

                if (min[0] == null || nextMove[1] < min[1]) {
                    min[0] = column;
                    min[1] = nextMove[1];
                }
            }
        }

        return min;
    }
}