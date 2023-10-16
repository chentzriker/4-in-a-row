let board = [];

function createDivs(rows, columns) {
    for (let i = 0; i < columns; i++) {
        console.log("entered")
        for (let j = 0; j<rows; j++) {
            console.log("hi")
            let row = [];
            let newElement = document.createElement("div")
            newElement.classList.add("w")
            newElement.classList.add(i)
            document.getElementById("container").appendChild(newElement)
            newElement.addEventListener("click", turn)
            row.push(newElement)
            if (j==(rows-1)){
                board.push(row);
            }
        
        }
    }
}
createDivs(6,7);

//not finished, אמור לסמן את הריבוע בצבע
function turn () {

}