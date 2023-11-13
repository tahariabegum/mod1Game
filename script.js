// alternate between red and yellow pieces 
// have pieces start bottom and work way up
// winning combinations 
// alert winner 
// have reset button clear board 

const pieces = document.querySelectorAll(".piece");
for (let piece of pieces) {
    piece.addEventListener("click", (evt) => {piece.style.backgroundColor = "red"})
}
