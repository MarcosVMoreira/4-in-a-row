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
    currentPlayer = human;

    state = new StateController();
    
    board = new BoardModel();

    board.updateBoardWithMatrix(state.getBoardMatrix());

    /*cleanBoard();
    scorePoint ("AI");
    state = new StateController();

    state.getBoardMatrix();

    board = new BoardModel();

    state.makeMove(2, 2);

    board.updateBoardWithMatrix(state.getBoardMatrix());

    //state.getBoardMatrix();

    state.getChild(ai);

    board.updateBoardWithMatrix(state.getChild(ai)[1].getBoardMatrix());

    miniMax = new MiniMaxController();

    miniMax.minimax(state);

    board.updateBoardWithMatrix(state.getBoardMatrix());

    //board.cleanBoard();*/

    //Início teste MinMax

    //state.makeMove(human, 5);

    var clonedState = state.cloneState();

    var aiMiniMax = new MiniMaxController(clonedState);

    var bestMoveForAI = [];

    bestMoveForAI = aiMiniMax.bestMove();

    console.log("Best move for the AI: ");
    console.log(bestMoveForAI[0]);

    currentPlayer = ai;

    state.makeMove(currentPlayer, bestMoveForAI[0], bestMoveForAI[1]);

    currentPlayer = human;

    /*


    jogadorAtual = EstadoJogo.JOGADOR_O;
    casas[m[0]][m[1]].setBackground(COR_JOGADOR_X);*/

});