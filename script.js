// alternate between red and yellow pieces 
// have pieces start bottom and work way up
// winning combinations 
// alert winner 
// have reset button clear board 


//select player (red and yellow) --> alternate turns 
//pieces gravitate toward lowest open position 
//click changes color -- red/yellow alternating 
//check winner before placing
    //check horizontal
    //check vertical 
    //check diagonal 
//if winner, alert ___ is winner and stop game
//if no open positions available -- alert tie and restart
//option to restart game (restart button clears board)

const pieces = document.querySelectorAll(".piece");
for (let piece of pieces) {
    piece.addEventListener("click", (evt) => {piece.style.backgroundColor = "red"})
}