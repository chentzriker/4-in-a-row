let board = [];
let inARow = null;
//creating the board
createGameBoard(6, 7, 4);
function createGameBoard(rows, columns, level) {
    for (let i = 0; i < columns; i++) {
        let column = [];
        for (let j = 0; j < rows; j++) {
            let newElement = document.createElement("div")
            //! Try to add all classes at once :)
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

//! Change the function name
function chenFunc(col, row) {
    // console.log("column:" + col);
    // console.log("row:" + row);
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
    if (checkColumn(row, col, colorToCheck)) {
        return;
    }

    if (checkRow(row, col, colorToCheck)) {
        return;
    }
    if (check1SLant(row, col, colorToCheck)) {
        return;
    }
    if (check2SLant(row, col, colorToCheck)) {
        return;
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
        //! Why >= ? it need to === to the number that we check in this level
        if (counter >= 4) {
            board[col][d].classList.add(color)
            console.log(board[col][d].classList);
            console.log(`${color} won`)
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
        if (counter >= 4) {
            alert(`${color} won`)
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
        if (counter >= 4) {
            alert(`${color} won`)
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
        if (counter >= 4) {
            console.log(`${color} won`)
            return true
        }
    }
    counter = 0;
    for (let i = indexRightCol, j = indexHigherRow; i >= 0 && j < board[0].length; i--, j++) {
        console.log('1second board[i][j]: ', board[i][j]);

        if (board[i][j].classList.contains(color)) {
            counter++
        }
        else {
            return false
        }
        if (counter >= 4) {
            console.log(`${color} won`)
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
        if (counter >= 4) {
            console.log(`${color} won`)
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
        if (counter >= 4) {
            console.log(`${color} won`)
            return true;
        }
    }
    return false
}



