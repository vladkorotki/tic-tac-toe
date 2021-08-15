class TicTacToe {
    constructor() {
        this.battleArea = [
            [null, null, null],
            [null, null, null],
            [null, null, null]];
        this.CurrentPlayerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.battleArea[rowIndex][columnIndex] === null && this.CurrentPlayerSymbol === 'x') {
            this.battleArea[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol = 'o';
        } else if (this.battleArea[rowIndex][columnIndex] === null && this.CurrentPlayerSymbol === 'o') {
            this.battleArea[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        if (this.isDraw() === true || this.winner !== null) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        this.isDraw();
        return this.winner;
    }

    noMoreTurns() {
        if (this.battleArea[0].indexOf(null) === -1 && this.battleArea[1].indexOf(null) === -1 && this.battleArea[2].indexOf(null) === -1) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {

        for (let j = 0; j < this.battleArea.length; j++) {

            if (this.battleArea[0][j]) {
                let verticalCount = 0;
                this.battleArea.forEach((item) => {

                    if (this.battleArea[0][j] === item[j]) {
                        verticalCount++;
                    }
                });

                if (verticalCount === this.battleArea.length) {
                    this.winner = this.battleArea[0][j];
                    break;
                }
            }
            if (this.battleArea[j][0]) {
                let horizontalCount = 0;
                this.battleArea[j].forEach((item) => {

                    if (this.battleArea[j][0] === item) {
                        horizontalCount++;
                    }
                });
                if (horizontalCount === this.battleArea.length) {
                    this.winner = this.battleArea[j][0];
                    break;
                }
            }
            if (this.battleArea[0][0] === this.battleArea[j][j] || this.battleArea[0][j] === this.battleArea[j][0]) {
                let mainDiagonalCount = 0;
                let secondaryDiagonalCount = 0;
                this.battleArea.forEach((item, n) => {

                    if (this.battleArea[0][j] === item[n]) {
                        mainDiagonalCount++;
                    }
                    if (this.battleArea[j][0] === item[(item.length - 1) - n]) {
                        secondaryDiagonalCount++;
                    }
                });
                if (mainDiagonalCount === this.battleArea.length) {
                    this.winner = this.battleArea[0][j];
                    break;
                }

                if (secondaryDiagonalCount === this.battleArea.length) {
                    this.winner = this.battleArea[j][0];
                    break;
                }
            }
        }

        if (this.winner === null && this.noMoreTurns() === true) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.battleArea[rowIndex][colIndex];
    }
}


module.exports = TicTacToe;



