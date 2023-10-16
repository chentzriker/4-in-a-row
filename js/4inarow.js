let board = [];

function createDivs(rows, columns) {
    for (let i = 0; i < columns; i++) {
        console.log("entered")
        let column = [];
        for (let j = 0; j < rows; j++) {
            console.log("hi")
            let newElement = document.createElement("div")
            newElement.classList.add("blank")
            newElement.classList.add("cell")
            newElement.classList.add(i)
            document.getElementById("container").appendChild(newElement)
            newElement.addEventListener("click", turn)
            column.push(newElement)
        }
        board.push(column);
    }
    let container = document.getElementById("container")
    container.style.backgroundColor = "black";
    container.style.gridTemplateColumns = `repeat(${columns},auto)`
    container.style.gridTemplateRows = `repeat(${rows},auto)`
    console.log('container.style: ', container.style);

}
createDivs(6, 7);
console.log(board)

//not finished, אמור לסמן את הריבוע בצבע
function turn() {

}