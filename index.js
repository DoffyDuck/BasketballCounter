let score = 0;
let score2 = 0;
let displayedBoard = document.getElementById("home")
let displayedBoard2 = document.getElementById("guest")

function addOne() {
  displayedBoard.textContent = score++
}
function addTwo() {
  score += 2
  displayedBoard.textContent = score
}
function addThree() {
  score += 3
  displayedBoard.textContent = score 
}

function addOneGuest() {
  displayedBoard2.textContent = score2++
}
function addTwoGuest() {
  score2 += 2
  displayedBoard2.textContent = score2
}
function addThreeGuest() {
  score2 += 3
  displayedBoard2.textContent = score2 
}

console.log(displayedBoard)
console.log(displayedBoard2)