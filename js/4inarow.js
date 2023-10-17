let board = [];

function createGameBoard(rows, columns) {
    for (let i = 0; i < columns; i++) {
        let column = [];
        for (let j = 0; j < rows; j++) {
            let newElement = document.createElement("div")
            newElement.classList.add("blank")
            newElement.classList.add("white")
            newElement.classList.add(i)
            document.getElementById("container").appendChild(newElement)
            column.push(newElement)
            newElement.addEventListener("click", function () { turnConvertColor(column) })
            board.push(column);
        }
        let container = document.getElementById("container")
        container.style.gridTemplateColumns = `repeat(${columns},auto)`
        container.style.gridTemplateRows = `repeat(${rows},auto)`

    }
}
createGameBoard(6, 7);
let count = 1;
function turnConvertColor(arrCol) {
    for (let i = arrCol.length - 1; i >= 0; i--) {
        if (arrCol[i].classList.contains("white")) {
            arrCol[i].classList.remove("white");
            if (count % 2 == 0) {
                arrCol[i].classList.add("yellow")
            }
            else {
                arrCol[i].classList.add("red")
            }
            count++;
            break;
        }
    }
}