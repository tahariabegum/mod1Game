
// have pieces start bottom and work way up
// winning combinations 
// alert winner 
//pieces gravitate toward lowest open position 
//click changes color -- red/yellow alternating 
//check winner before placing
    //check horizontal
    //check vertical 
    //check diagonal 
//if winner, alert ___ is winner and stop game
//if no open positions available -- alert tie and restart
//make sure once spot is selected cannot be changed 

const column = 7;
const row = 6;
let currentPlayer = "red"


const reset = document.querySelector(".resetButton");
const pieces = document.querySelectorAll(".piece");

for (let piece of pieces) {
    piece.addEventListener ("click", (evt) => { 
        piece.style.backgroundColor = currentPlayer;


        if (currentPlayer === "red") {
            currentPlayer = "yellow"
        } else {
            currentPlayer = "red"
        }
    })
    reset.addEventListener("click", (evt) => {piece.style.backgroundColor = "", currentPlayer = "red"});
}
