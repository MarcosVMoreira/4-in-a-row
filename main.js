$(document).ready(function() {

    emptyButton = "img/empty.png";
    aiButton = "img/red.png";
    humanButton = "img/blue.png";
    boardWidth = "6";
    boardHeight = "6";
    ai = "-1";
    human = "1";
    empty = "2";
    noWinner = "-2";
    draw = "0";
    winCondition = "3";
    currentPlayer = human;

    nivelNaArvore = 0; //variavel de teste

    state = new StateController();
    
    board = new BoardModel();

    board.updateBoardWithMatrix(state.getBoardMatrix());

});

function makeAMove (column) {

    //state.findWinner();

    console.log("Chamei column "+column);

    if (currentPlayer == human) {
        if (state.makeMove (currentPlayer, column)) {

            //state.printMatrix();

            board.updateBoardWithMatrix (state.getBoardMatrix());

            currentPlayer = ai;
    
            var clonedState = state.cloneState();
    
            var aiMiniMax = new MiniMaxController(clonedState);
    
            var bestMoveForAI;
    
            bestMoveForAI = aiMiniMax.bestMove();

            var aiColumn = bestMoveForAI;
    
            state.makeMove(currentPlayer, aiColumn);

            console.log("Fim do algoritmo");

            currentPlayer = human;

            state.getBoardMatrix();

            board.updateBoardWithMatrix (state.getBoardMatrix());

            
    
        } else {
            console.log("Não é possível fazer essa jogada.");
        }
    }
}