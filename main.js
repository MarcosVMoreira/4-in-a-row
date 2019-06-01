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

    //cleanBoard();
    //scorePoint ("AI");
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

    //board.updateBoardWithMatrix(state.getBoardMatrix());

    //board.cleanBoard();

});