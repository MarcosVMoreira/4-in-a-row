$(document).ready(function () {

    // Constantes
    emptyButton = "img/empty.png";
    aiButton = "img/red.png";
    humanButton = "img/blue.png";
    boardWidth = 7;
    boardHeight = 6;
    ai = 1;
    human = -1;
    empty = 0;
    noWinner = -2;
    draw = 0;
    winCondition = 4;
    aiWon = 100000;
    humanWon = -100000;
    difficulty = 2;

    // Variáveis
    currentPlayer = human;

    // Objetos
    state = new StateController();
    board = new BoardModel();

    board.updateBoardWithMatrix(state.getBoardMatrix());
    
    $("#difficultySelect").change(function () {
        difficulty = this.value;
        //console.log(this.value);
        state = new StateController();
        board = new BoardModel();
        board.updateBoardWithMatrix(state.getBoardMatrix());
    });

});

function newGame() {
    setTimeout(function () {
        state = new StateController();
        board = new BoardModel();
        board.updateBoardWithMatrix(state.getBoardMatrix());
    }, 5000);
}

function makeAMove(column) {

    console.log("Trying to make a move at column: " + column);

    if (currentPlayer == human) {
        if (state.makeMove(currentPlayer, column)) {

            board.updateBoardWithMatrix(state.getBoardMatrix());

            if(state.score() == aiWon) {
                alert("End game! AI won.");
                newGame();
            } else if(state.score() == humanWon) {
                alert("End game! You won.");
                newGame();
            } else if(state.isFull()) {
                alert("End game! Draw.");
                newGame();
            }

            currentPlayer = ai;

            var clonedState = state.cloneState();

            var aiMiniMax = new MiniMaxController(clonedState);

            var bestMoveForAI;

            bestMoveForAI = aiMiniMax.bestMove();

            var aiColumn = bestMoveForAI;

            state.makeMove(currentPlayer, aiColumn);

            currentPlayer = human;

            state.getBoardMatrix();

            board.updateBoardWithMatrix(state.getBoardMatrix());

            if(state.score() == aiWon) {
                alert("End game! AI won.");
                newGame();
            } else if(state.score() == humanWon) {
                alert("End game! You won.");
                newGame();
            } else if(state.isFull()) {
                alert("End game! Draw.");
                newGame();
            }

        } else {
            console.log("Não é possível fazer essa jogada.");
        }
    }
}