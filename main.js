$(document).ready(function() {

    emptyButton = "img/empty.png";
    aiButton = "img/red.png";
    humanButton = "img/blue.png";
    boardWidth = "6";
    boardHeight = "6";
    ai = "2";
    human = "1";

    //cleanBoard();
    //scorePoint ("AI");
    state = new StateController();

    state.makeMove(1, 3);

    state.getBoardMatrix();

    board = new BoardModel();

    board.updateBoardWithMatrix(state.getBoardMatrix());

    //board.cleanBoard();

});