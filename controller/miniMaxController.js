class MiniMaxController {

    constructor(stateParam) {
        this.state = stateParam;
    }

    bestMove() {
        return minimax(this.estado);
    }

    minimax(stateParam) {
        var bestMove = this.max(stateParam);
        return bestMove.getBestMove();
    }

    max(stateParam) {
        var possibleWinner = stateParam.findWinner();
        if (possibleWinner != noWinner) {
            stateParam.setMiniMax(possibleWinner);
            return stateParam;
        }

        var newStates = [];

        newStates = stateParam.getChild(human);

        var max = Number.MAX_SAFE_INTEGER;

        var bestOne = new StateController();

        for (let child of newStates) {
            var possibleBest = new StateController();
            possibleBest = min(child);

            if (possibleBest.getMiniMax() > max) {
                bestOne = possibleBest;
                max = possibleBest.getMiniMax();
            }
        }

        stateParam.setBestMove(bestOne.getMove()[0], bestOne.getMove()[1]);
        stateParam.setMiniMax(max);
        return stateParam;
    }

}