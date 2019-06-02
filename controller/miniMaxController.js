class MiniMaxController {

    constructor(stateParam) {

this.contador=0;

        this.state = stateParam;
    }

    bestMove() {
        return this.minimax(this.state);
    }

    minimax(stateParam) {
        var bestMove = this.max(stateParam);
        return bestMove.getBestMove();
    }

    max(stateParam) {
        var possibleWinner = stateParam.findWinner();
        /*if (possibleWinner != noWinner) {
            stateParam.setMiniMax(possibleWinner);
            return stateParam;
        }*/
        
        var newStates = [];
        newStates = stateParam.getChild(human);
        console.log("Gerando novos filhos: ")

        for (let i = 0; i < newStates.length; i++) {
            newStates[i].getBoardMatrix();
        }

        var max = Number.MAX_SAFE_INTEGER;
        var bestOne = new StateController();

        for (let child of newStates) {
            var possibleBest = new StateController();
            possibleBest = this.min(child);
            if (possibleBest.getMiniMax() > max) {
                bestOne = possibleBest;
                max = possibleBest.getMiniMax();
            }
        }

        stateParam.setBestMove(bestOne.getMove()[0], bestOne.getMove()[1]);
        stateParam.setMiniMax(max);
        return stateParam;
    }

    min(stateParam) {
        var possibleWinner = stateParam.findWinner();
       /* if (possibleWinner != noWinner) {
            stateParam.setMiniMax(possibleWinner);
            return stateParam
        }*/
        if (this.contador == 10 ) {
            return stateParam;
        }
        this.contador++;

        var newStates = [];
        newStates = stateParam.getChild(ai);
        var min = Number.MIN_SAFE_INTEGER;
        var bestOne = new StateController();

        for (let child of newStates) {
            var possibleBest = new StateController();
            possibleBest = this.max(child);
            if (possibleBest.getMiniMax() < min) {
                bestOne = possibleBest;
                min = possibleBest.getMiniMax();
            }
        }

        stateParam.setBestMove(bestOne.getMove()[0], bestOne.getMove()[1]);
        stateParam.setMiniMax(min);
        return stateParam;

    }

}