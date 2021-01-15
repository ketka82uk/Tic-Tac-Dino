
// ? Set query selectors
const board = document.querySelector('.board')
const reset = document.querySelector('.reset')
const playerTurn = document.querySelector('.player-turn')
const result = document.querySelector('.result')

// ? Specify the width of the grid.
const width = 3
const cells = []

// ? Set player variables
let currentPlayer = 1
const playerOneMarkers = []
const playerTwoMarkers = []
let currentTurns = 0
let playerOneWin = false
let playerTwoWin = false

// ? Set win conditions

const winningConditions = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]
]

// Possible win conditions:
// Horizontal: [0, 1, 2], [3, 4, 5], [6, 7, 8]
// Vertical: [0, 3, 6], [1, 4, 7], [2, 5, 8]
// Diagonal: [0, 4, 8], [2, 4, 6]
// If a player marker array contains one of these 
// sets of numbers then the winning condition is met.


// ! Sets up the playing grid as a 3 x 3 square
for (let index = 0; index < width ** 2; index++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  board.appendChild(cell)
  cells.push(cell)
  cell.style.width = `${100 / width}%`
  cell.style.height = `${100 / width}%`
  
  
  // ! Player clicks on cell
  // adds an X if player 1 active
  // adds a O if player 2 active
  // When marker placed the cell index is pushed to the player markers array
  // Turn moves to the next player

   
  cell.addEventListener('click', () => {
    if (currentPlayer === 1 && !cell.innerHTML) {
      cell.innerHTML = 'X'
      playerOneMarkers.push(index)
      checkForWin()
      if (playerOneWin === true) {
        result.innerHTML = 'Player 1 wins!'
      }
      currentTurns += 1
      if (currentTurns === 9) {
        result.innerHTML = "It's a tie!"
      }
      currentPlayer += 1
      console.log(currentPlayer)
      playerTurn.innerHTML = 'Player 2 GO!'
    } else if (currentPlayer === 2 && !cell.innerHTML) {
      cell.innerHTML = 'O'
      playerTwoMarkers.push(index)
      checkForWin()
      if (playerTwoWin === true) {
        result.innerHTML = 'Player 2 wins!'
      }
      currentTurns += 1
      if (currentTurns === 9) {
        result.innerHTML = "It's a tie!"
      }
      currentPlayer -= 1
      console.log(currentPlayer)
      playerTurn.innerHTML = 'Player 1 GO!'
    }
  })

  

  // ! Reset button 
  //wipes board clean on click and 
  // clears player marker arrays
  // puts current player back to 1
  reset.addEventListener('click', () => {
    cell.innerHTML = ''
    playerTurn.innerHTML = 'Player 1 GO!'
    playerOneMarkers.length = 0
    playerTwoMarkers.length = 0
    currentPlayer = 1
  })


}

// ! Function to check if winning condition is met for player 1

function checkForWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const win = winningConditions[i]
    console.log(win)
    if (playerOneMarkers.includes(win[0]) && playerOneMarkers.includes(win[1]) && playerOneMarkers.includes(win[2])) {
      console.log('player 1 wins!')
      return playerOneWin = true
    } else if (playerTwoMarkers.includes(win[0]) && playerTwoMarkers.includes(win[1]) && playerTwoMarkers.includes(win[2])) {
      console.log('player 2 wins!')
      return playerTwoWin = true
    }
  }
}



