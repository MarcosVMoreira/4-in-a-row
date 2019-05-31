class StateController {

    //6x6 matrix. 0 means empty, 1 means human and 2, AI
    constructor() {

        this.boardMatrix = [
            [0,0,0,0,0,0],
            [1,2,0,0,2,0],
            [1,0,0,0,0,0],
            [2,0,0,1,0,0],
            [2,0,0,0,0,0],
            [0,1,0,0,2,0]
        ];

        //when the game starts, father start as null
        this.father = null;

        //human always do the first move, but the first State is just setted when the AI do one move. 
        this.minmax = ai;
    }

    getBoardMatrix () {
        return this.boardMatrix;
    }

    getChild (player) {
        var child = [];

        for(let column = 0; column < boardWidth; column++) {
            
        }        
    }

    makeMove (player, column) {
        var foundEmptySlot = false;
        var emptySlotRow;

        for (let row = (boardHeight-1); row >= 0; row--) {
            if (this.boardMatrix[row][column] == 0) {
                foundEmptySlot = true;
                emptySlotRow = row;
                row = -1;
            }
        }

        if (foundEmptySlot) {
            console.log("Encontrei um slot disponíve na row: "+emptySlotRow);
            //faz a jogada aqui dentro
            return true;
        } else {
            console.log("Coluna lotada! Não é possível realizar mais jogadas.");
            return false;
        }
    }

    /*public boolean realizarJogada(int jogador, int i, int j) {
        if(casas[i][j] == CASA_VAZIA) {
            acao = new int[]{i,j};
            casas[i][j] = jogador;     
            return true;
        }
        return false;
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
*/
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
