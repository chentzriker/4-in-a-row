let board = [];
let inARow;
//creating the board
const rows = 6;
const cols = 7;
const numInRow = 4;
createGameBoard(rows, cols, numInRow);
function createGameBoard(rows, columns, level) {
    for (let i = 0; i < columns; i++) {
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
        container.style.gridTemplateColumns = `repeat(${columns},auto)`
        container.style.gridTemplateRows = `repeat(${rows},auto)`
        inARow = level;

    }
}

//seppuse to clear the board so we could build a new one
function clearBoard() { }

let count = 1;
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
            count++;

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
        stopGame()
        winingMessage(`${colorToCheck} won`)
        return;
    }
    if (checkRow(row, col, colorToCheck)) {
        // stopGame()
        winingMessage(`${colorToCheck} won`)
        return;
    }
    if (check1SLant(row, col, colorToCheck)) {
        // stopGame()
        winingMessage(`${colorToCheck} won`)
        return;
    }
    if (check2SLant(row, col, colorToCheck)) {
        // stopGame()
        winingMessage(`${colorToCheck} won`)
        return;
    }
}

//Resets the game in case of a tie or win
function resetGame() {
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


//checks if there are 4 in the column
function checkColumn(row, col, color) {
    let counter = 0;
    for (let d = row; d < board[col].length; d++) {
        //add one if the div has a class of the same color
        //! Do the else before - I will explain
        if (board[col][d].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter === 4) {
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
        if (counter === 4) {
            return true
        }
    }
    counter = 0;
    for (let s = indexRightCol; s >= 0; s--) {
        //add one if the div has a class of the same color 
        if (board[s][row].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter === 4) {
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
        console.log('1first board[i][j]: ', board[i][j]);

        if (!board[i][j].classList.contains(color)) {
            indexRightCol = i - 1;
            indexHigherRow = j + 1;
            break;
        }
        else {
            counter++
        }
        if (counter === 4) {
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
        if (counter === 4) {
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
        console.log('2first board[i][j]: ', board[i][j]);
        if (!board[i][j].classList.contains(color)) {
            indexLeftCol = i + 1;
            indexHigherRow = j + 1;
            break;
        }
        else {
            counter++
        }
        if (counter === 4) {
            return true
        }
    }
    counter = 0;
    for (let i = indexLeftCol, j = indexHigherRow; i < board.length && j < board[0].length; i++, j++) {
        console.log('2second board[i][j]: ', board[i][j]);
        if (board[i][j].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter === 4) {
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
    playAgain.addEventListener("click", clearBoard)
}

//after the popup shows, the function prevent the players to color more circles
function stopGame() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            (board[i][j]).removeEventLisener("click", function () { turnConvertColor(column, i) })
        }
    }
    return
}