class StateController {

    //6x6 matrix. 2 means empty, 1 means "human" and -1, "AI"
    constructor() {

        this.boardMatrix = [
            [2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2]
        ];

        //when the game starts, father start as null
        this.father = null;

        //human always do the first move, but the first State is just setted when the AI do one move. 
        this.minimax = ai;

        this.bestMove;

        this.move;

        this.dangerForAI = 0;
        this.dangerForHuman = 0;
    }

    printMatrix() {
        console.log("Matriz: \n");

        for (let row = 0; row < boardHeight; row++) {
            var aux = [];
            for (let column = 0; column < boardWidth; column++) {
                if (column != 0) {
                    var string = " " + this.boardMatrix[row][column];
                    aux.push(string);
                } else {
                    aux.push(this.boardMatrix[row][column]);
                }
            }
            console.log(
                aux[0] + " " + aux[1] + " " + aux[2] + " "
                + aux[3] + " " + aux[4] + " " + aux[5]);
        }
        /*  console.log("Matriz: \n"
          +this.boardMatrix[0][0]+" "+this.boardMatrix[0][1]+" "+this.boardMatrix[0][2]+" "
          +this.boardMatrix[0][3]+" "+this.boardMatrix[0][4]+" "+this.boardMatrix[0][5]+
          "\n"
          +this.boardMatrix[1][0]+" "+this.boardMatrix[1][1]+" "+this.boardMatrix[1][2]+" "
          +this.boardMatrix[1][3]+" "+this.boardMatrix[1][4]+" "+this.boardMatrix[1][5]+
          "\n"
          +this.boardMatrix[2][0]+" "+this.boardMatrix[2][1]+" "+this.boardMatrix[2][2]+" "
          +this.boardMatrix[2][3]+" "+this.boardMatrix[2][4]+" "+this.boardMatrix[2][5]+
          "\n"
          +this.boardMatrix[3][0]+" "+this.boardMatrix[3][1]+" "+this.boardMatrix[3][2]+" "
          +this.boardMatrix[3][3]+" "+this.boardMatrix[3][4]+" "+this.boardMatrix[3][5]+
          "\n"
          +this.boardMatrix[4][0]+" "+this.boardMatrix[4][1]+" "+this.boardMatrix[4][2]+" "
          +this.boardMatrix[4][3]+" "+this.boardMatrix[4][4]+" "+this.boardMatrix[4][5]+
          "\n"
          +this.boardMatrix[5][0]+" "+this.boardMatrix[5][1]+" "+this.boardMatrix[5][2]+" "
          +this.boardMatrix[5][3]+" "+this.boardMatrix[5][4]+" "+this.boardMatrix[5][5]);   */
    }

    //return the state board matrix
    getBoardMatrix() {


        return this.boardMatrix;
    }

    //generate childs of current state
    getChild(player) {
        var child = [];

        for (let column = 0; column < boardWidth; column++) {
            var newClone = this.cloneState();
            if (newClone.makeMove(player, column)) {
                child.push(newClone);
            }
        }

        return child;
    }


    //check if there is a empty slot in the given column and, if empty, make the move and return true
    makeMove(player, column) {
        var foundEmptySlot = false;
        var emptySlotRow;

        for (let row = (boardHeight - 1); row >= 0; row--) {
            if (this.boardMatrix[row][column] == empty) {
                foundEmptySlot = true;
                emptySlotRow = row;
                row = -1;
            }
        }

        if (foundEmptySlot) {
            this.move = column;
            this.boardMatrix[emptySlotRow][column] = player;
            return true;
        }

        return false;
    }

    //clone the current state and return it
    cloneState() {
        var clone = new StateController;

        for (let column = 0; column < boardWidth; column++) {
            for (let row = 0; row < boardHeight; row++) {
                clone.boardMatrix[row][column] = this.boardMatrix[row][column];
            }
        }

        return clone;
    }

    getBestMove() {
        return this.bestMove;
    }

    setBestMove(column) {
        this.bestMove = column;
    }

    getMove() {
        return this.move;
    }

    setMove(column) {
        this.move = column;
    }

    findWinner() {
        //verificar aqui a matriz inteira para ver se há algum ganhador no estado atual

        let winner = noWinner;
        let winnerRow;
        let drawFindWinner = 36;

        //checking if there is a lineup of three equal buttons in a row
        for (let row = 0; row < boardHeight; row++) {
            var counter = 1;
            var rowDangerForHuman = 0;
            var rowDangerForAI = 0;
            let previous = this.boardMatrix[row][0];
            for (let column = 1; column < boardWidth; column++) {
                if ((this.boardMatrix[row][column] == previous) && this.boardMatrix[row][column] != empty) {
                    counter++;
                    winner = this.boardMatrix[row][column];
                    winnerRow = row;
                } else {

                    if (counter <= winCondition - 1) { // If a winner was not found

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        if (previous == human && danger > rowDangerForAI) {
                            rowDangerForAI = danger;
                        } else if (previous == ai && danger > rowDangerForHuman) {
                            rowDangerForHuman = danger;
                        }

                        previous = this.boardMatrix[row][column];
                        counter = 1; // counter restarted
                    }
                }
            }
            if (counter > winCondition - 1) {
                //console.log("Found a row winner: "+winner+" at row: "+winnerRow);
                this.dangerForHuman = (winner == human) ? 0 : 1;
                this.dangerForAI = (winner == human) ? 1 : 0;
                console.log("vencedor: " + winner + " perigo: " + ((winner == human) ? 1 : 0));
                return winner;
            } else {
                this.dangerForHuman += rowDangerForHuman;
                this.dangerForAI += rowDangerForAI;
            }
        }

        //checking if there is a lineup of three equal buttons in a column
        for (let column = 0; column < boardWidth; column++) {
            var counter = 1;
            var colDangerForHuman = 0;
            var colDangerForAI = 0;
            let previous = this.boardMatrix[0][column];
            for (let row = 1; row < boardHeight; row++) {
                if ((this.boardMatrix[row][column] == previous) && this.boardMatrix[row][column] != empty) {
                    counter++;
                    winner = this.boardMatrix[row][column];
                } else {

                    if (counter <= winCondition - 1) { // If a winner was not found

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        // 0 means empty, 1 means "human" and 2, "AI"
                        if (previous == human && danger > colDangerForAI) {
                            colDangerForAI = danger;
                        } else if (previous == ai && danger > colDangerForHuman) {
                            colDangerForHuman = danger;
                        }

                        previous = this.boardMatrix[row][column];
                        counter = 1;
                    }
                }
            }
            if (counter > winCondition - 1) {
                // console.log("Found a column winner."+winner);
                this.dangerForHuman = (winner == human) ? 0 : 1;
                this.dangerForAI = (winner == human) ? 1 : 0;
                return winner;
            } else {
                this.dangerForHuman += colDangerForHuman;
                this.dangerForAI += colDangerForAI;
            }
        }

        //diagonais esquerda-direita
        let previous = this.boardMatrix[0][0];
        counter = 1;
        var diagDangerForHuman = 0;
        var diagDangerForAI = 0;

        for (let i = 1; i < boardHeight; i++) {
            if ((this.boardMatrix[i][i] == previous) && this.boardMatrix[i][i] != empty) {
                counter++;
                winner = this.boardMatrix[i][i];
            } else {

                if (counter <= winCondition - 1) { // If a winner was not found

                    // Heuristic
                    let maxAllowPerc = (winCondition - 1) / winCondition;
                    let percWon = counter / winCondition;
                    let danger = percWon * (100 / maxAllowPerc);

                    if (previous == human && danger > diagDangerForAI) {
                        diagDangerForAI = danger;
                    } else if (previous == ai && danger > diagDangerForHuman) {
                        diagDangerForHuman = danger;
                    }

                    previous = this.boardMatrix[i][i];
                    counter = 1;
                }
            }
        }

        if (counter > winCondition - 1) {
            //console.log("Found a diagonal winner. "+winner);
            this.dangerForHuman = (winner == human) ? 0 : 1;
            this.dangerForAI = (winner == human) ? 1 : 0;
            return winner;
        } else {
            this.dangerForHuman += diagDangerForHuman;
            this.dangerForAI += diagDangerForAI;
        }

        var previous1 = this.boardMatrix[0][1];
        var previous2 = this.boardMatrix[1][0];
        var previous3 = this.boardMatrix[0][2];
        var previous4 = this.boardMatrix[2][0];
        var previous5 = this.boardMatrix[0][3];
        var previous6 = this.boardMatrix[3][0];

        var counter1 = 1;
        var counter2 = 1;
        var counter3 = 1;
        var counter4 = 1;
        var counter5 = 1;
        var counter6 = 1;

        var diagDangerForHuman1 = 0;
        var diagDangerForHuman2 = 0;
        var diagDangerForHuman3 = 0;
        var diagDangerForHuman4 = 0;
        var diagDangerForHuman5 = 0;
        var diagDangerForHuman6 = 0;
        var diagDangerForAI1 = 0;
        var diagDangerForAI2 = 0;
        var diagDangerForAI3 = 0;
        var diagDangerForAI4 = 0;
        var diagDangerForAI5 = 0;
        var diagDangerForAI6 = 0;


        for (let i = 1; i < boardHeight; i++) {
            if ((this.boardMatrix[i][i + 1] == previous1) && this.boardMatrix[i][i + 1] != empty) {
                counter1++;
                winner = this.boardMatrix[i][i + 1];
            } else {

                if (counter1 <= winCondition - 1) {

                    // Heuristic
                    let maxAllowPerc = (winCondition - 1) / winCondition;
                    let percWon = counter1 / winCondition;
                    let danger = percWon * (100 / maxAllowPerc);

                    if (previous1 == human && danger > diagDangerForAI1) {
                        diagDangerForAI1 = danger;
                    } else if (previous1 == ai && danger > diagDangerForHuman1) {
                        diagDangerForHuman1 = danger;
                    }

                    previous1 = this.boardMatrix[i][i + 1];
                    counter1 = 1;
                }
            }
            if (i < 5) {
                if ((this.boardMatrix[i + 1][i] == previous2) && this.boardMatrix[i + 1][i] != empty) {
                    counter2++;
                    winner = this.boardMatrix[i + 1][i];
                } else {

                    if (counter2 <= winCondition - 1) {

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter2 / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        if (previous2 == human && danger > diagDangerForAI2) {
                            diagDangerForAI2 = danger;
                        } else if (previous2 == ai && danger > diagDangerForHuman2) {
                            diagDangerForHuman2 = danger;
                        }

                        previous2 = this.boardMatrix[i + 1][i];
                        counter2 = 1;
                    }
                }

                if (i < 4) {
                    if ((this.boardMatrix[i][i + 2] == previous3) && this.boardMatrix[i][i + 2] != empty) {
                        counter3++;
                        winner = this.boardMatrix[i][i + 2];
                    } else {

                        if (counter3 <= winCondition - 1) {

                            // Heuristic
                            let maxAllowPerc = (winCondition - 1) / winCondition;
                            let percWon = counter3 / winCondition;
                            let danger = percWon * (100 / maxAllowPerc);

                            if (previous3 == human && danger > diagDangerForAI3) {
                                diagDangerForAI3 = danger;
                            } else if (previous3 == ai && danger > diagDangerForHuman3) {
                                diagDangerForHuman3 = danger;
                            }

                            previous3 = this.boardMatrix[i][i + 2];
                            counter3 = 1;
                        }
                    }

                    if ((this.boardMatrix[i + 2][i] == previous4) && this.boardMatrix[i + 2][i] != empty) {
                        counter4++;
                        winner = this.boardMatrix[i + 2][i];
                    } else {

                        if (counter4 <= winCondition - 1) {

                            // Heuristic
                            let maxAllowPerc = (winCondition - 1) / winCondition;
                            let percWon = counter4 / winCondition;
                            let danger = percWon * (100 / maxAllowPerc);

                            if (previous4 == human && danger > diagDangerForAI4) {
                                diagDangerForAI4 = danger;
                            } else if (previous4 == ai && danger > diagDangerForHuman4) {
                                diagDangerForHuman4 = danger;
                            }

                            previous4 = this.boardMatrix[i][i + 2];
                            counter4 = 1;
                        }
                    }

                    if (i < 3) {
                        if ((this.boardMatrix[i][i + 3] == previous5) && this.boardMatrix[i][i + 3] != empty) {
                            counter5++;
                            winner = this.boardMatrix[i][i + 3];
                        } else {

                            if (counter5 <= winCondition - 1) {

                                // Heuristic
                                let maxAllowPerc = (winCondition - 1) / winCondition;
                                let percWon = counter5 / winCondition;
                                let danger = percWon * (100 / maxAllowPerc);

                                if (previous5 == human && danger > diagDangerForAI5) {
                                    diagDangerForAI5 = danger;
                                } else if (previous5 == ai && danger > diagDangerForHuman5) {
                                    diagDangerForHuman5 = danger;
                                }

                                previous5 = this.boardMatrix[i][i + 3];
                                counter5 = 1;
                            }
                        }

                        if ((this.boardMatrix[i + 3][i] == previous6) && this.boardMatrix[i + 3][i] != empty) {
                            counter6++;
                            winner = this.boardMatrix[i + 3][i];
                        } else {

                            if (counter6 <= winCondition - 1) {

                                // Heuristic
                                let maxAllowPerc = (winCondition - 1) / winCondition;
                                let percWon = counter6 / winCondition;
                                let danger = percWon * (100 / maxAllowPerc);

                                if (previous6 == human && danger > diagDangerForAI6) {
                                    diagDangerForAI6 = danger;
                                } else if (previous6 == ai && danger > diagDangerForHuman6) {
                                    diagDangerForHuman6 = danger;
                                }

                                previous6 = this.boardMatrix[i][i + 3];
                                counter6 = 1;
                            }
                        }
                    }
                }
            }

        }

        if ((counter1 > winCondition - 1) || (counter2 > winCondition - 1)
            || (counter3 > winCondition - 1) || (counter4 > winCondition - 1)
            || (counter5 > winCondition - 1) || (counter6 > winCondition - 1)) {
            //console.log("Found a diagonal winner. "+winner);
            this.dangerForHuman = (winner == human) ? 0 : 1;
            this.dangerForAI = (winner == human) ? 1 : 0;
            return winner;
        } else {
            this.dangerForHuman += diagDangerForHuman1 + diagDangerForHuman2 + diagDangerForHuman3 + diagDangerForHuman4 + diagDangerForHuman5 + diagDangerForHuman6;
            this.dangerForAI += diagDangerForAI1 + diagDangerForAI2 + diagDangerForAI3 + diagDangerForAI4 + diagDangerForAI5 + diagDangerForAI6;
        }


        //diagonais direita-esquerda
        previous = this.boardMatrix[0][boardWidth - 1];
        counter = 1;
        diagDangerForHuman = 0;
        diagDangerForAI = 0;

        for (let i = 1; i < boardHeight; i++) {
            if ((this.boardMatrix[i][boardWidth - i - 1] == previous) && this.boardMatrix[i][boardWidth - i - 1] != empty) {
                counter++;
                winner = this.boardMatrix[i][boardWidth - i - 1];

            } else {

                if (counter <= winCondition - 1) {

                    // Heuristic
                    let maxAllowPerc = (winCondition - 1) / winCondition;
                    let percWon = counter / winCondition;
                    let danger = percWon * (100 / maxAllowPerc);

                    if (previous == human && danger > diagDangerForAI) {
                        diagDangerForAI = danger;
                    } else if (previous == ai && danger > diagDangerForHuman) {
                        diagDangerForHuman = danger;
                    }

                    previous = this.boardMatrix[i][boardWidth - i - 1];
                    counter = 1;
                }
            }
        }
        if (counter > winCondition - 1) {
            //console.log("Found a diagonal winner. "+winner);
            this.dangerForHuman = (winner == human) ? 0 : 1;
            this.dangerForAI = (winner == human) ? 1 : 0;
            return winner;
        } else {
            this.dangerForHuman += diagDangerForHuman;
            this.dangerForAI += diagDangerForAI;
        }


        previous1 = this.boardMatrix[0][4];
        previous2 = this.boardMatrix[1][5];
        previous3 = this.boardMatrix[0][3];
        previous4 = this.boardMatrix[2][5];
        previous5 = this.boardMatrix[0][2];
        previous6 = this.boardMatrix[3][5];

        counter1 = 1;
        counter2 = 1;
        counter3 = 1;
        counter4 = 1;
        counter5 = 1;
        counter6 = 1;

        diagDangerForHuman1 = 0;
        diagDangerForHuman2 = 0;
        diagDangerForHuman3 = 0;
        diagDangerForHuman4 = 0;
        diagDangerForHuman5 = 0;
        diagDangerForHuman6 = 0;
        diagDangerForAI1 = 0;
        diagDangerForAI2 = 0;
        diagDangerForAI3 = 0;
        diagDangerForAI4 = 0;
        diagDangerForAI5 = 0;
        diagDangerForAI6 = 0;

        for (let i = 1; i < boardHeight; i++) {
            if ((this.boardMatrix[i][boardHeight - i - 2] == previous1) && this.boardMatrix[i][boardHeight - i - 2] != empty) {
                counter1++;
                winner = this.boardMatrix[i][boardHeight - i - 2];
            } else {

                if (counter1 <= winCondition - 1) {

                    // Heuristic
                    let maxAllowPerc = (winCondition - 1) / winCondition;
                    let percWon = counter1 / winCondition;
                    let danger = percWon * (100 / maxAllowPerc);

                    if (previous1 == human && danger > diagDangerForAI1) {
                        diagDangerForAI1 = danger;
                    } else if (previous1 == ai && danger > diagDangerForHuman1) {
                        diagDangerForHuman1 = danger;
                    }

                    previous1 = this.boardMatrix[i][boardHeight - i - 2];
                    counter1 = 1;
                }
            }

            if (i >= 2) {
                if ((this.boardMatrix[i][boardHeight - i] == previous2) && this.boardMatrix[i][boardHeight - i] != empty) {
                    counter2++;
                    winner = this.boardMatrix[i][boardHeight - i];
                } else {

                    if (counter2 <= winCondition - 1) {

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter2 / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        if (previous2 == human && danger > diagDangerForAI2) {
                            diagDangerForAI2 = danger;
                        } else if (previous2 == ai && danger > diagDangerForHuman2) {
                            diagDangerForHuman2 = danger;
                        }

                        previous2 = this.boardMatrix[i][boardHeight - i];
                        counter2 = 1;
                    }
                }
            }

            if (i >= 3) {
                if ((this.boardMatrix[i][boardHeight - i + 1] == previous4) && this.boardMatrix[i][boardHeight - i + 1] != empty) {
                    counter4++;
                    winner = this.boardMatrix[i][boardHeight - i + 1];
                } else {

                    if (counter4 <= winCondition - 1) {

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter4 / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        if (previous4 == human && danger > diagDangerForAI4) {
                            diagDangerForAI4 = danger;
                        } else if (previous4 == ai && danger > diagDangerForHuman4) {
                            diagDangerForHuman4 = danger;
                        }

                        previous4 = this.boardMatrix[i][boardHeight - i + 1];
                        counter4 = 1;
                    }
                }
            }

            if (i >= 4) {
                if ((this.boardMatrix[i][boardHeight - i + 2] == previous6) && this.boardMatrix[i][boardHeight - i + 2] != empty) {
                    counter6++;
                    winner = this.boardMatrix[i][boardHeight - i + 2];
                } else {

                    if (counter6 <= winCondition - 1) {

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter6 / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        if (previous6 == human && danger > diagDangerForAI6) {
                            diagDangerForAI6 = danger;
                        } else if (previous6 == ai && danger > diagDangerForHuman6) {
                            diagDangerForHuman6 = danger;
                        }

                        previous6 = this.boardMatrix[i][boardHeight - i + 2];
                        counter6 = 1;
                    }
                }
            }

            if (i < 4) {
                if ((this.boardMatrix[i][boardHeight - 3 - i] == previous3) && this.boardMatrix[i][boardHeight - 3 - i] != empty) {
                    counter3++;
                    winner = this.boardMatrix[i][boardHeight - 3 - i];
                } else {

                    if (counter3 <= winCondition - 1) {

                        // Heuristic
                        let maxAllowPerc = (winCondition - 1) / winCondition;
                        let percWon = counter3 / winCondition;
                        let danger = percWon * (100 / maxAllowPerc);

                        if (previous3 == human && danger > diagDangerForAI3) {
                            diagDangerForAI3 = danger;
                        } else if (previous3 == ai && danger > diagDangerForHuman3) {
                            diagDangerForHuman3 = danger;
                        }

                        previous3 = this.boardMatrix[i][boardHeight - 3 - i];
                        counter3 = 1;
                    }
                }
                if (i < 3) {
                    if ((this.boardMatrix[i][boardHeight - i - 4] == previous5) && this.boardMatrix[i][boardHeight - i - 4] != empty) {
                        counter5++;
                        winner = this.boardMatrix[i][boardHeight - i - 4];
                    } else {

                        if (counter5 <= winCondition - 1) {

                            // Heuristic
                            let maxAllowPerc = (winCondition - 1) / winCondition;
                            let percWon = counter5 / winCondition;
                            let danger = percWon * (100 / maxAllowPerc);

                            if (previous5 == human && danger > diagDangerForAI5) {
                                diagDangerForAI5 = danger;
                            } else if (previous5 == ai && danger > diagDangerForHuman5) {
                                diagDangerForHuman5 = danger;
                            }

                            previous5 = this.boardMatrix[i][boardHeight - i - 4];
                            counter5 = 1;
                        }
                    }
                }
            }

        }

        if ((counter1 > winCondition - 1) || (counter2 > winCondition - 1)
            || (counter3 > winCondition - 1) || (counter4 > winCondition - 1)
            || (counter5 > winCondition - 1) || (counter6 > winCondition - 1)) {
            //console.log("Found a diagonal winner. "+winner);
            this.dangerForHuman = (winner == human) ? 0 : 1;
            this.dangerForAI = (winner == human) ? 1 : 0;
            return winner;
        } else {
            this.dangerForHuman += diagDangerForHuman1 + diagDangerForHuman2 + diagDangerForHuman3 + diagDangerForHuman4 + diagDangerForHuman5 + diagDangerForHuman6;
            this.dangerForAI += diagDangerForAI1 + diagDangerForAI2 + diagDangerForAI3 + diagDangerForAI4 + diagDangerForAI5 + diagDangerForAI6;
        }

        for (let row = 0; row < boardHeight; row++) {
            for (let column = 0; column < boardWidth; column++) {
                if (this.boardMatrix[row][column] != empty) {
                    drawFindWinner--;
                }
            }
        }

        if (drawFindWinner == 0) {
            //console.log("Found a draw.");
            this.dangerForAI = 1;
            this.dangerForHuman = 1;
            return draw;
        }

        this.dangerForAI /= (100 * 26); // 20 lines (sum of rows, columns and diagonals)
        this.dangerForHuman /= (100 * 26);
        return noWinner;
    }

    setMiniMax(value) {
        this.minimax = value;
    }

    getMiniMax() {
        return this.minimax;
    }

    getDangerForAI() {
        return this.dangerForAI;
    }

    getDangerForHuman() {
        return this.dangerForHuman;
    }
}
