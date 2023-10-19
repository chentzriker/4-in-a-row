let board = [];
let inARow;
//creating the board
let rows;
let cols;
let numInRow;
let count = 1;
const level3 = document.getElementById("3");
const level4 = document.getElementById("4");
const level5 = document.getElementById("5");
level3.addEventListener("click", function () { createGameBoard(5, 6, 3) })
level4.addEventListener("click", function () { createGameBoard(6, 7, 4) })
level5.addEventListener("click", function () { createGameBoard(7, 8, 5) })


let color1;
let color2;
document.getElementById("start-game").addEventListener("click", setPlayersColor)
function setPlayersColor() {
    color1 = document.getElementById("color1").value;
    console.log('color1: ', color1);
    color2 = document.getElementById("color2").value;
    console.log('color2: ', color2);
}

createGameBoard(6, 7, 4)
function createGameBoard(rowsNum, columnsNum, level) {
    document.getElementById("turn").textContent = "";
    emptyBoard()
    rows = rowsNum;
    cols = columnsNum;
    numInRow = level;
    board = [];
    for (let i = 0; i < cols; i++) {
        let column = [];
        for (let j = 0; j < rows; j++) {
            let newElement = document.createElement("div")
            newElement.classList.add("blank", "white", i)
            document.getElementById("container").appendChild(newElement)
            column.push(newElement)
            newElement.addEventListener("click", function () { turnConvertColor(column, i) })
        }
        board.push(column);
        let container = document.getElementById("container")
        container.style.gridTemplateColumns = `repeat(${cols},auto)`
        container.style.gridTemplateRows = `repeat(${rows},auto)`
        numInRow = level;
        document.getElementById("game-name").textContent = `${level} in a row`
    }
}

function turnConvertColor(arrCol, col) {
    for (let i = arrCol.length - 1; i >= 0; i--) {
        if (arrCol[i].classList.contains("white")) {
            arrCol[i].classList.remove("white");
            if (count % 2 === 0) {
                arrCol[i].classList.add("color1")
                arrCol[i].style.backgroundColor = color1
            }
            else {
                arrCol[i].classList.add("color2")
                arrCol[i].style.backgroundColor = color2

            }
            isCurrPlayerWon(col, i) //row and col of the cell
            count++;
            if (count % 2 === 0) {
                document.getElementById("turn").textContent = "player 1 turn"
                document.getElementById("turn").style.backgroundColor = color1
            }
            else {
                document.getElementById("turn").textContent = "player 2 turn"
                document.getElementById("turn").style.backgroundColor = color2
            }
            break;
        }
    }
}

function isCurrPlayerWon(col, row) {
    let colorToCheck;
    if (count % 2 === 0) {
        colorToCheck = "color1"
    } else {
        colorToCheck = "color2"
    }

    let playerTurn = colorToCheck === "color1" ? "player1" : "player2"
    let colorTurnRgb = colorToCheck === "color1" ? color1 : color2
    //checks if there are 4 in the column
    if (checkColumn(row, col, colorToCheck)) {
        winingMessage(`${playerTurn} won!`, colorTurnRgb)
        return;
    }
    if (checkRow(row, col, colorToCheck)) {
        winingMessage(`${playerTurn} won!`, colorTurnRgb)
        return;
    }
    if (check1SLant(row, col, colorToCheck)) {
        winingMessage(`${playerTurn} won!`, colorTurnRgb)
        return;
    }
    if (check2SLant(row, col, colorToCheck)) {
        winingMessage(`${playerTurn} won!`, colorTurnRgb)
        return;
    }

    if (count === rows * cols) {
        winingMessage("no one won :(")
        return;
    }

}

//Resets the game in case of a tie or win
function resetGame() {
    document.getElementById("turn").textContent = "";
    if (document.getElementById("message-box")) {
        document.getElementById("message-box").remove();
        document.getElementById("blur-screen").remove();
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            board[i][j].classList.remove("color1", "color2")
            board[i][j].classList.add("white")
            board[i][j].style.backgroundColor = "white"
        }
    }
    count = 1
}

//remove all white divs from board
function emptyBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j].remove();

        }
    }
    count = 1
    return

}


//checks if there are 4 in the column
function checkColumn(row, col, color) {
    let counter = 0;
    for (let d = row; d < board[col].length; d++) {
        //add one if the div has a class of the same color
        if (!board[col][d].classList.contains(color)) {
            return false
        }
        else {
            counter++
        }
        if (counter === numInRow) {
            board[col][d].classList.add(color)
            return true
        }
    }
    return false
}

//checks if there are 4 in the row
function checkRow(row, col, color) {
    let counter = 0;
    let indexRightCol = board.length - 1; //with the same color 
    for (let s = col; s < board.length; s++) {
        //maybe add counting here so we wont need to repeat pointless
        if (!board[s][row].classList.contains(color)) {
            indexRightCol = s - 1;
            break
        }
        else {
            counter++
        }
        if (counter === numInRow) {
            return true
        }
    }
    counter = 0;
    for (let s = indexRightCol; s >= 0; s--) {
        //add one if the div has a class of the same color 
        if (!board[s][row].classList.contains(color)) {
            return false
        }
        else {
            counter++
        }
        if (counter === numInRow) {
            return true
        }
    }
    return false
}

function check1SLant(row, col, color) { // slant: /
    let counter = 0;
    let indexRightCol = col;
    let indexHigherRow = row;
    for (let i = col, j = row; i < board.length && j >= 0; i++, j--) {
        if (!board[i][j].classList.contains(color)) {
            indexRightCol = i - 1;
            indexHigherRow = j + 1;
            break;
        }
        else {
            counter++
        }
        if (counter === numInRow) {
            return true
        }
    }
    counter = 0;
    for (let i = indexRightCol, j = indexHigherRow; i >= 0 && j < board[0].length; i--, j++) {

        if (board[i][j].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter === numInRow) {
            return true;
        }
    }
    return false
}

function check2SLant(row, col, color) {
    let counter = 0;
    let indexLeftCol = col;
    let indexHigherRow = row;
    for (let i = col, j = row; i >= 0 && j >= 0; i--, j--) {
        if (!board[i][j].classList.contains(color)) {
            indexLeftCol = i + 1;
            indexHigherRow = j + 1;
            break;
        }
        else {
            counter++
        }
        if (counter === numInRow) {
            return true
        }
    }
    counter = 0;
    for (let i = indexLeftCol, j = indexHigherRow; i < board.length && j < board[0].length; i++, j++) {
        if (board[i][j].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter === numInRow) {
            return true;
        }
    }
    return false
}

function winingMessage(message, colorTurnRgb) {
    const blur = document.createElement("div");
    blur.setAttribute("id", "blur-screen")
    document.body.appendChild(blur)
    const messageBox = document.createElement("div");
    messageBox.setAttribute("id", "message-box")
    document.body.appendChild(messageBox)
    const winingMessage = document.createElement("h2");
    messageBox.appendChild(winingMessage)
    winingMessage.textContent = message;
    const playAgain = document.createElement("button");
    playAgain.setAttribute("class", "game-button")
    playAgain.textContent = "play again";
    messageBox.appendChild(playAgain)
    playAgain.addEventListener("click", resetGame)
    messageBox.style.backgroundColor=colorTurnRgb;
}