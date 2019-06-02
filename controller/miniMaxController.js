class MiniMaxController {

    constructor(stateParam) {

        this.state = stateParam;
    }

    bestMove() {
        return this.minimax(this.state);
    }

    minimax(stateParam) {
        var bestMove = this.max(stateParam);
        return bestMove.getBestMove();
    }

    max(stateParamMax) {
        var possibleWinner = stateParamMax.findWinner();
        console.log("Metodo: max - FindWinner retornando "+possibleWinner);
        if (possibleWinner != noWinner) {
            console.log("Encontrei um vencedor max no stateParamMax");
            stateParamMax.printMatrix();
            stateParamMax.setMiniMax(possibleWinner);
            return stateParamMax;
        }
        
        var newStates = [];
        newStates = stateParamMax.getChild(ai);

        console.log("Metodo: max - Gerando novos filhos")

        for (let i = 0; i < newStates.length; i++) {
            newStates[i].printMatrix();
        }

        console.log("Metodo: max - Fim de geracao de novos filhos");

        var max = Number.MIN_SAFE_INTEGER;
        var bestOne = new StateController();

        for (let child of newStates) {
            console.log("Metodo: max - Entrei no for do child newStates");
            var possibleBestMax = new StateController();
            possibleBestMax = this.min(child);
            console.log("Metodo: max - Valor do possibleBestMax "+possibleBestMax.getMiniMax()+ " valor do Max "+max+ " mm")
            if (possibleBestMax.getMiniMax() > max) {
                console.log("Metodo: max - Detectado max menor que possibleBestMax");
                bestOne = possibleBestMax;
                max = possibleBestMax.getMiniMax();
            }
        }

        stateParamMax.setBestMove(bestOne.getMove());
        stateParamMax.setMiniMax(max);
        return stateParamMax;
    }

    min(stateParamMin) {
        stateParamMin.printMatrix();
        var possibleWinner = stateParamMin.findWinner();
        console.log("Metodo: min - FindWinner retornando "+possibleWinner);
        if (possibleWinner != noWinner) {
            console.log("Metodo: min - Encontrei um vencedor min");
            stateParamMin.setMiniMax(possibleWinner);
            return stateParamMin
        }

        var newStatesMin = [];
        newStatesMin = stateParamMin.getChild(human);

        console.log("Metodo: min - Gerando novos filhos ")

        for (let i = 0; i < newStatesMin.length; i++) {
            newStatesMin[i].printMatrix();
        }

        console.log("Metodo: min - Fim de geracao de novos filhos");

        var min = Number.MAX_SAFE_INTEGER;
        var bestOne = new StateController();

        for (let child of newStatesMin) {
            var possibleBestMin = new StateController();
            possibleBestMin = this.max(child);
            console.log("Metodo: min - Valor do possibleBestMin "+possibleBestMin.getMiniMax()+ " valor do min "+min+ " mm")
            if (possibleBestMin.getMiniMax() < min) {
                bestOne = possibleBestMin;
                min = possibleBestMin.getMiniMax();
            }
        }

        console.log("log1: bestMove"+bestOne.getMove());
        bestOne.printMatrix();
        console.log("terminei de printar bestMove");

        stateParamMin.setBestMove(bestOne.getMove());
        stateParamMin.setMiniMax(min);
        return stateParamMin;

    }

}