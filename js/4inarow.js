let board = [];
let inARow = null;
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
createGameBoard(6, 7, 4);
let count = 1;
function turnConvertColor(arrCol, col) {
    for (let i = arrCol.length - 1; i >= 0; i--) {
        if (arrCol[i].classList.contains("white")) {
            arrCol[i].classList.remove("white");
            if (count % 2 == 0) {
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
    console.log("column:" + col);
    console.log("row:" + row);
    //saves the div that was colored now
    let coloredNow = board[col][row];
    console.log('coloredNow: ', coloredNow);
    //counts how many of the same color 
    let counter = 0;
    let colorToCkek = null;
    if (count%2===0){
        colorToCkek = "yellow"
    } else {
        colorToCkek = "red"
    }
    //check all cells under coloredNow and count how much are the same color
    for (let d = row; d < board[col].length; d++) {
        if (board[col][d].classList.contains(colorToCkek)){
            counter++
            console.log(counter)
        }
        if (counter >= 4 ) {
        alert (`${colorToCkek} won`)
        return
        } 
        // counter = 0;
    }
}
