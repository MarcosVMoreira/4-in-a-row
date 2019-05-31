class StateController {

    //6x6 matrix. 0 means empty, 1 means human and 2, AI
    constructor() {

        this.boardWidth = "6";
        this.boardHeight = "6";
        this.ai = "2";
        this.human = "1";

        this.boardMatrix = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];

        //when the game starts, father start as null
        this.father = null;

        //human always do the first move, but the first State is just setted when the AI do one move. 
        this.minmax = ai;
    }

    generateState () {
        var child = [];

        for(let column = 0; column < boardWidth; column++) {
            
        }        
    }

    makeMove (column, ) {
        var row = 5;

        while (boardMatrix[row][column] != 0) {
            row--;
        }

        if (row != -1) {
            //faz a jogada
            boardMatrix[row][column]           
        }
    }


    
    public ArrayList<EstadoJogo> getFilhos(int jogador) {
        ArrayList<EstadoJogo> filhos = new ArrayList();
        for(int i = 0; i < 3; ++i) {
            for(int j =0; j < 3; ++j) {
                EstadoJogo e = clonar();
                if(e.realizarJogada(jogador, i, j)) {
                    filhos.add(e);
                }
            }
        } 
        return filhos;
    }

    cloneState () {
        var clone = new StateController;

        for(let column = 0; column < boardWidth; column++) {
            for(let row = 0; row < boardHeight; row++) {
                clone.boardMatrix[row][column] = this.boardMatrix[row][column];
            }
        }

        return clone;
    }


    

    

    

}
