let board = [];

function createDivs(rows, columns) {
    for (let i = 0; i < columns; i++) {
        console.log("entered")
        let column = [];
        for (let j = 0; j < rows; j++) {
            //creates divs according to the rows and columns given 
            // and add to the div different class names and an event listener
            let newElement = document.createElement("div")
            newElement.classList.add("blank")
            newElement.classList.add("cell")
            newElement.classList.add(i)
            document.getElementById("container").appendChild(newElement)
            newElement.addEventListener("click", turn)
            // push the new div to an array of all the divs in his column
            column.push(newElement)
        }
        //push the column array to be an element of board
        board.push(column);
    }
    let container = document.getElementById("container")
    container.style.backgroundColor = "black";
    //orgenizing the grid to have the number of columns and rows the board was set to
    container.style.gridTemplateColumns = `repeat(${columns},auto)`
    container.style.gridTemplateRows = `repeat(${rows},auto)`
    console.log('container.style: ', container.style);

}
createDivs(6, 7);
console.log(board)

//not finished, אמור לסמן את הריבוע בצבע
function turn() {

}