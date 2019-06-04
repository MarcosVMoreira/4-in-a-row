class MiniMaxController {

    constructor(stateParam) {

        this.state = stateParam;
    }

    bestMove() {
        return this.minimax(this.state);
    }

    minimax(stateParamMinimax) {
        var bestMove = this.max(stateParamMinimax, nivelNaArvore);
        return bestMove.getBestMove();
    }

    max(stateParamMax, nivel) {
        nivel++;
        console.log("Nivel: "+nivel);
        var possibleWinner = stateParamMax.findWinner();

        if (possibleWinner != noWinner) {
            stateParamMax.setMiniMax(possibleWinner);
            return stateParamMax;
        }
        
        var newStates = [];
        newStates = stateParamMax.getChild(ai);

        var max = Number.MIN_SAFE_INTEGER;
        var bestOne = new StateController();

        for (let child of newStates) {
            var possibleBestMax = new StateController();
            possibleBestMax = this.min(child, nivel);
            if (possibleBestMax.getMiniMax() > max) {
                bestOne = possibleBestMax;
                max = possibleBestMax.getMiniMax();
            }
        }

        stateParamMax.setBestMove(bestOne.getMove());
        stateParamMax.setMiniMax(max);
        return stateParamMax;
    }

    min(stateParamMin, nivel) {
        nivel++;
        console.log("Nivel: "+nivel);
        var possibleWinner = stateParamMin.findWinner();

        if (possibleWinner != noWinner) {
            stateParamMin.setMiniMax(possibleWinner);
            return stateParamMin
        }

        var newStatesMin = [];
        newStatesMin = stateParamMin.getChild(human);

        var min = Number.MAX_SAFE_INTEGER;
        var bestOne = new StateController();

        for (let child of newStatesMin) {
            var possibleBestMin = new StateController();
            possibleBestMin = this.max(child, nivel);
            if (possibleBestMin.getMiniMax() < min) {
                bestOne = possibleBestMin;
                min = possibleBestMin.getMiniMax();
            }
        }

        stateParamMin.setBestMove(bestOne.getMove());
        stateParamMin.setMiniMax(min);
        return stateParamMin;

    }

}