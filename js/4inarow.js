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
createGameBoard(6, 7, 4)
function createGameBoard(rowsNum, columnsNum, level) {
    emptyBoard()
    console.log("hi");
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
                arrCol[i].classList.add("yellow")
            }
            else {
                arrCol[i].classList.add("red")
            }
            isCurrPlayerWon(col, i) //row and col of the cell
            console.log(count)         
            count++;
             if (count % 2 === 0) {
                 document.getElementById("turn").textContent = "yellow's turn"
            }
            else {
                document.getElementById("turn").textContent = "red's turn"
            }
            break;
        }
    }
}

function isCurrPlayerWon(col, row) {
    //saves the div that was colored now
    let coloredNow = board[col][row];
    //counts how many of the same color 
    let colorToCheck;
    if (count % 2 === 0) {
        colorToCheck = "yellow"
    } else {
        colorToCheck = "red"
    }
    //checks if there are 4 in the column
    if (checkColumn(row, col, colorToCheck)) {
        winingMessage(`${colorToCheck} won!`)
        return;
    }
    if (checkRow(row, col, colorToCheck)) {
        winingMessage(`${colorToCheck} won!`)
        return;
    }
    if (check1SLant(row, col, colorToCheck)) {
        winingMessage(`${colorToCheck} won!`)
        return;
    }
    if (check2SLant(row, col, colorToCheck)) {
        
        winingMessage(`${colorToCheck} won!`)
        return;
    }
}

//Resets the game in case of a tie or win
function resetGame() {
    if (document.getElementById("message-box")) {
        document.getElementById("message-box").remove();
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            if (board[i][j].classList.contains("yellow")) {
                board[i][j].classList.remove("yellow");
                board[i][j].classList.add("white")
            }
            else if (board[i][j].classList.contains("red")) {
                board[i][j].classList.remove("red");
                board[i][j].classList.add("white")
            }
        }
    }
}

//remove all white divs from board
function emptyBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j].remove();

        }
    }
    count = 0
    return
    count=0;

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
    let j;
    for (let i = col, j = row; i < board.length && j >= 0; i++, j--) {
        // console.log('1first board[i][j]: ', board[i][j]);

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

function check2SLant(row, col, color) { // slant: \
    let counter = 0;
    let indexLeftCol = col;
    let indexHigherRow = row;
    let j;
    for (let i = col, j = row; i >= 0 && j >= 0; i--, j--) {
        // console.log('2first board[i][j]: ', board[i][j]);
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
        // console.log('2second board[i][j]: ', board[i][j]);
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

function winingMessage(message) {
    console.log("entered")
    let messageBox = document.createElement("div");
    messageBox.setAttribute("id", "message-box")
    document.body.appendChild(messageBox)
    let winingMessage = document.createElement("h2");
    messageBox.appendChild(winingMessage)
    winingMessage.textContent = message;
    let playAgain = document.createElement("p");
    playAgain.textContent = "play again";
    messageBox.appendChild(playAgain)
    playAgain.addEventListener("click", resetGame)
}