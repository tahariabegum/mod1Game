
// have pieces start bottom and work way up
// winning combinations 
// alert winner 
//pieces gravitate toward lowest open position 
//check winner before placing
    //check horizontal
    //check vertical 
    //check diagonal 
//if winner, alert ___ is winner and stop game --> gameOver == true 
//if no open positions available -- alert tie and restart

const column = 7;
const row = 6;
let currentPlayer = "red"
let gameOver = false


const reset = document.querySelector(".resetButton");
const pieces = document.querySelectorAll(".piece");




//Brings piece to first opening on bottom of board 

//Alternates Players
function turn() {
    if (currentPlayer === "red") { 
        currentPlayer = "yellow"
    } else {
        currentPlayer = "red"
    }
}
//Changes color of background 
for (let piece of pieces) {
    piece.addEventListener ("click", () => {
        piece.style.backgroundColor = currentPlayer;
        turn()
    });
    reset.addEventListener("click", () => {piece.style.backgroundColor = "", currentPlayer = "red"}); //Resets game 
}

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