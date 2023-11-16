const columns = 7;
const rows = 6;
let currentPlayer = "red"
let gameOver = false


const reset = document.querySelector(".resetButton");
const pieces = document.querySelectorAll(".piece");

//Brings piece to first opening on bottom of board 

//Changes color of background 
// for (let piece of pieces) {
//     piece.addEventListener ("click", () => {
//         piece.style.backgroundColor = currentPlayer;
//         turn()
//     });
//     reset.addEventListener("click", () => {piece.style.backgroundColor = "", currentPlayer = "red"}); //Resets game 
// }

//Outer Loop through column 
for (let col = 0; col < columns; col++) {
    const columnPiece = document.querySelectorAll(`.piece:nth-child(${col + 1})`); 
    //Inner Loop through rows in current columns 
    for (let row = 0; row < rows; row++) {
        const piece = columnPiece[row]
        for (let piece of pieces) {
        piece.addEventListener("click", () => {
        //checks game over -- if not over --> find empty row in current column 
            if(!gameOver) {
                const currentRow = emptyRow(col) //emptyRow in clicked column 
                //If valid move is possible, change background to player piece 
                if (currentRow !== -1) {
                    piece.style.backgroundColor = currentPlayer;
                    //check if winner 
                    checkWinner(currentRow, col)
                    //Next player turn 
                    turn()
                }
            }
            
        });
        
    }

}}
    
//Alternates Players
function turn() {
    if (currentPlayer === "red") { 
        currentPlayer = "yellow"
    } else {
        currentPlayer = "red"
    }
}

//Find empty row in column 
function emptyRow(col) {
    for (let row = rows - 1; row >= 0; row--) {
        const indexPiece = col + row * columns ;
        if (!pieces[indexPiece].style.backgroundColor){
            return row
        }
            
    }
    return -1
}

reset.addEventListener("click", () => {
    for (let piece of pieces) {
        piece.style.backgroundColor = "";
        currentPlayer = "red";
        gameOver = false;
    }
}) 


// function dropPiece(index) {
//     const columns =  document.querySelectorAll('.board .piece');
//     for (let i = columns.length - 1; i >= 0; i -7) {
//         const piece = columns[i - index];
//         if (!piece.style.backgroundColor) {
//         }
//         turn()
//     }
// }

//When placing items, select column (1-7) if row in associated column is filled then piece will be placed on above row 
//Row 5 will be filled first, 4, 3, 2, 1. When row === 1 , then no more pieces can be placed 
//checkWinner() function needed. called prior to placing pieces 