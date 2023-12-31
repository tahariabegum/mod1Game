const columns = 7;
const rows = 6;
let currentPlayer = "red"
let gameOver = false

const reset = document.querySelector(".resetButton");
const pieces = document.querySelectorAll(".piece");
const board = document.querySelector("board")

let winningOptions = [
[0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
]; 

// Loop through pieces and assign index 
pieces.forEach((piece, index) => {
    piece.addEventListener("click", () => {
      // if game is not over, then find empty row in clicked column 
      if (!gameOver) {
        const col = index % columns; 
        const currentRow = emptyRow(col); // emptyRow in clicked column
        // If valid move is possible (empty row found), then find index where piece can be places and change background to player piece
        if (currentRow !== -1) {
          const indexPiece = col + currentRow * columns;
          pieces[indexPiece].style.backgroundColor = currentPlayer;  
          // if piece is placed, then Check if winner
          checkWinner(currentRow, col);
  
          // Next player turn
        //   turn();
        }
      }
    });
});

//Alternates Players
function turn() {
    if (currentPlayer === "red") { 
        currentPlayer = "yellow"
    } else {
        currentPlayer = "red"
    }
}

//Find empty row in clicked column 
function emptyRow(col) {
    //iterate through row backward (bottom up)
    for (let row = rows - 1; row >= 0; row--) {
      // find index where piece can be placed in row and if empty return row or return column full 
      const indexPiece = col + row * columns;
      if (!pieces[indexPiece].style.backgroundColor) {
        return row;
      }
    }
    return -1;
}

//Game Reset
function resetGame() {
    for (let piece of pieces) {
        piece.style.backgroundColor = "";
    }
    currentPlayer = "red";
    gameOver = false;
    turn();
}

reset.addEventListener("click", () => {
    resetGame()
    currentPlayer = "red"
});

//Check for winner 
function checkWinner(row, col) {
  //loop through winning options array to find 4 same colors then alert winner
    for (let option of winningOptions) {
      const [a, b, c, d] = option;
      if (
        pieces[a].style.backgroundColor &&
        pieces[a].style.backgroundColor === pieces[b].style.backgroundColor &&
        pieces[b].style.backgroundColor === pieces[c].style.backgroundColor &&
        pieces[c].style.backgroundColor === pieces[d].style.backgroundColor
      ) {
        alert(`${currentPlayer} wins!`);
        resetGame(); 
      } 
    }
    if (tiedGame()) {
        return
    }
    turn()
}

//Check if game is tied 
function tiedGame() {
    //loop through each piece to check if spot is empty 
    for (let piece of pieces) {
        if (!piece.style.backgroundColor) {
            return false; //if piece is empty then game is not tied 
        }
    }
    //if game tied alert tie and then restart game 
    alert("No winner! It's a tie! Better Luck Next Time!");
    resetGame();
    return true;
}
