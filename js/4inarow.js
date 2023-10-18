let board = [];
let inARow = null;
//creating the board
createGameBoard(6, 7, 4);
function createGameBoard(rows, columns, level) {
    for (let i = 0; i < columns; i++) {
        let column = [];
        for (let j = 0; j < rows; j++) {
            let newElement = document.createElement("div")
            newElement.classList.add("blank")
            newElement.classList.add("white")
            newElement.classList.add(i)
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


function clearBoard()
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
            chenFunc(col, i) //row and col of the cell
            count++;
            break;
        }
    }
}


function chenFunc(col, row) {
    //saves the div that was colored now
    let coloredNow = board[col][row];
    //counts how many of the same color 
    let colorToCheck = null;
    if (count % 2 === 0) {
        colorToCheck = "yellow"
    } else {
        colorToCheck = "red"
    }

    //checks if there are 4 in the column
    if (checkColumn(row,col,colorToCheck)){
        return;
    }

    //checks if there are 4 in the row
    if (checkRow(row,col,colorToCheck)){
        return;
    }
}

//checks if there are 4 in the column
function checkColumn(row,col,color){
    let counter = 0;
    for (let d = row; d < board[col].length; d++) {
        //add one if the div has a class of the same color
        if (board[col][d].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter >= 4) {
            board[col][d].classList.add(color)
            document.getElementById("wining-message").textContent = `${color} won!`
            return true
        }
    }
    return false
}

//checks if there are 4 in the row
function checkRow(row,col,color){
    let counter = 0;
    let checkFromHere = null;
    for (let s = col; s < board.length; s++){
        //maybe add counting here so we wont need to repeat pointless
        if (!board[s][row].classList.contains(color)){
            checkFromHere = s-1;
            break
        } 
        else {
            counter++
        }
        if (counter >= 4) {
            document.getElementById("wining-message").textContent = `${color} won!`
            return true
        }
    }
    counter = 0;
    for (let s = checkFromHere; s>=0; s--) {
        //add one if the div has a class of the same color
        // console.log('board[s][row]: ', board[s][row]);
        if (board[s][row].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter >= 4) {
            document.getElementById("wining-message").textContent = `${color} won!`
            return true
        }
    }
    return false
}
