const mainBoard = document.querySelector('.main-board')
const playerTurn = document.querySelector('.player-turn')


// ? Sets width of grid/boards/cells
const width = 3
const cells = []
//const boardA = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8']

// ? Used to construct ids for the cells
const smallBoardIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const cellIds = []

// ? Sets up player variables
let currentPlayer = 'carnivore'
const boneMarkers = []
const leafMarkers = []
const carnivoreWins = []
const herbivoreWins = []

let carnivoreWinsRound = false
let herbivoreWinsRound = false

let carnivoreWinA = false
let herbivoreWinA = false
let carnivoreWinB = false
let herbivoreWinB = false
let carnivoreWinC = false
let herbivoreWinC = false
let carnivoreWinD = false
let herbivoreWinD = false
let carnivoreWinE = false
let herbivoreWinE = false
let carnivoreWinF = false
let herbivoreWinF = false
let carnivoreWinG = false
let herbivoreWinG = false
let carnivoreWinH = false
let herbivoreWinH = false
let carnivoreWinI = false
let herbivoreWinI = false


// ? Sets up win conditions
const boards = {
  A: {
    winConditions: [
      ['A0', 'A1', 'A2'],
      ['A3', 'A4', 'A5'],
      ['A6', 'A7', 'A8'],
      ['A0', 'A3', 'A6'],
      ['A1', 'A4', 'A7'],
      ['A2', 'A5', 'A8'],
      ['A0', 'A4', 'A8'],
      ['A2', 'A4', 'A6']
    ],
    won: false,
    drawn: false
  },
  B: {
    winConditions: [
      ['B0', 'B1', 'B2'],
      ['B3', 'B4', 'B5'],
      ['B6', 'B7', 'B8'],
      ['B0', 'B3', 'B6'],
      ['B1', 'B4', 'B7'],
      ['B2', 'B5', 'B8'],
      ['B0', 'B4', 'B8'],
      ['B2', 'B4', 'B6']
    ],
    won: false,
    drawn: false
  },
  C: {
    winConditions: [
      ['C0', 'C1', 'C2'],
      ['C3', 'C4', 'C5'],
      ['C6', 'C7', 'C8'],
      ['C0', 'C3', 'C6'],
      ['C1', 'C4', 'C7'],
      ['C2', 'C5', 'C8'],
      ['C0', 'C4', 'C8'],
      ['C2', 'C4', 'C6']
    ],
    won: false,
    drawn: false
  },
  D: {
    winConditions: [
      ['D0', 'D1', 'D2'],
      ['D3', 'D4', 'D5'],
      ['D6', 'D7', 'D8'],
      ['D0', 'D3', 'D6'],
      ['D1', 'D4', 'D7'],
      ['D2', 'D5', 'D8'],
      ['D0', 'D4', 'D8'],
      ['D2', 'D4', 'D6']
    ],
    won: false,
    drawn: false
  },
  E: {
    winConditions: [
      ['E0', 'E1', 'E2'],
      ['E3', 'E4', 'E5'],
      ['E6', 'E7', 'E8'],
      ['E0', 'E3', 'E6'],
      ['E1', 'E4', 'E7'],
      ['E2', 'E5', 'E8'],
      ['E0', 'E4', 'E8'],
      ['E2', 'E4', 'E6']
    ],
    won: false,
    drawn: false
  },
  F: {
    winConditions: [
      ['F0', 'F1', 'F2'],
      ['F3', 'F4', 'F5'],
      ['F6', 'F7', 'F8'],
      ['F0', 'F3', 'F6'],
      ['F1', 'F4', 'F7'],
      ['F2', 'F5', 'F8'],
      ['F0', 'F4', 'F8'],
      ['F2', 'F4', 'F6']
    ],
    won: false,
    drawn: false
  },
  G: {
    winConditions: [
      ['G0', 'G1', 'G2'],
      ['G3', 'G4', 'G5'],
      ['G6', 'G7', 'G8'],
      ['G0', 'G3', 'G6'],
      ['G1', 'G4', 'G7'],
      ['G2', 'G5', 'G8'],
      ['G0', 'G4', 'G8'],
      ['G2', 'G4', 'G6']
    ],
    won: false,
    drawn: false
  },
  H: {
    winConditions: [
      ['H0', 'H1', 'H2'],
      ['H3', 'H4', 'H5'],
      ['H6', 'H7', 'H8'],
      ['H0', 'H3', 'H6'],
      ['H1', 'H4', 'H7'],
      ['H2', 'H5', 'H8'],
      ['H0', 'H4', 'H8'],
      ['H2', 'H4', 'H6']
    ],
    won: false,
    drawn: false
  },
  I: {
    winConditions: [
      ['I0', 'I1', 'I2'],
      ['I3', 'I4', 'I5'],
      ['I6', 'I7', 'I8'],
      ['I0', 'I3', 'I6'],
      ['I1', 'I4', 'I7'],
      ['I2', 'I5', 'I8'],
      ['I0', 'I4', 'I8'],
      ['I2', 'I4', 'I6']
    ],
    won: false,
    drawn: false
  }

}

const roundWinConditions = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['A', 'D', 'G'],
  ['B', 'E', 'H'],
  ['C', 'F', 'I'],
  ['A', 'E', 'I'],
  ['C', 'E', 'G']
]




// ! A for loop that sets up the main board as a 3*3 grid
for (let index = 0; index < width ** 2; index++) {
  const smallBoard = document.createElement('div')
  smallBoard.classList.add('small-board')
  smallBoard.classList.add('active')
  mainBoard.appendChild(smallBoard)
  smallBoard.style.width = `${95 / width}%`
  smallBoard.style.height = `${95 / width}%`
  smallBoard.setAttribute('id', `${smallBoardIds[index]}`)
  //console.log(smallBoards[index])
  //console.log(smallBoard.id)

  // ! a for loop that sets up 3*3 cells within each smallBoard
  for (let index = 0; index < width ** 2; index++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    smallBoard.appendChild(cell)
    cells.push(cell)
    cell.style.width = `${90 / width}%`
    cell.style.height = `${90 / width}%`
    cell.setAttribute('id', `${smallBoard.id}${index}`)
    //console.log(cell.id)
    cellIds.push(cell.id)


    // ! Click event listener for placing markers - CARNIVORE

    cell.addEventListener('click', () => {

      if (currentPlayer === 'carnivore'
        && !cell.classList.contains('bone')
        && !cell.classList.contains('leaf')
        && smallBoard.classList.contains('active')
        && !smallBoard.classList.contains('carnivore')
        && !smallBoard.classList.contains('herbivore')) { //carnivore goes first
        cell.classList.add('bone') // adds class bone to cell
        boneMarkers.push(cell.id) // pushes cell ID to boneMarkers array

        // ? Functions that check for win condition on each board

        checkForWinA()
        checkForWinB()
        checkForWinC()
        checkForWinD()
        checkForWinE()
        checkForWinF()
        checkForWinG()
        checkForWinH()
        checkForWinI()


        // ? CHECK FOR TIE
        
        checkForTie(smallBoard.id)

        
        // ? CHECK FOR OVERALL WIN

        checkRoundWin()
        if (carnivoreWinsRound === true) {
          playerWins()
        }

        // ? CHECK FOR OVERALL TIE

        checkRoundTie()

        currentPlayer = 'herbivore' // changes player to herbivore

        playerTurn.innerHTML = 'Herbivore GO!'

        smallBoards.forEach(smallBoard => smallBoard.classList.remove('active')) // removes active class from all except active boards
        smallBoards.forEach(smallBoard => smallBoard.classList.add('disabled')) // disables all boards


        // ? If statement that selects next active board - CARNIVORE

        if (index === 0) {
          // grabs next active board
          const activeBoard = document.getElementById('A')
          if (boards.A.won === false && boards.A.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 1) {
          const activeBoard = document.getElementById('B')
          if (boards.B.won === false && boards.B.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 2) {
          const activeBoard = document.getElementById('C')
          if (boards.C.won === false && boards.C.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 3) {
          const activeBoard = document.getElementById('D')
          if (boards.D.won === false && boards.D.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 4) {
          const activeBoard = document.getElementById('E')
          if (boards.E.won === false && boards.E.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 5) {
          const activeBoard = document.getElementById('F')
          if (boards.F.won === false && boards.F.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 6) {
          const activeBoard = document.getElementById('G')
          if (boards.G.won === false && boards.G.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 7) {
          const activeBoard = document.getElementById('H')
          if (boards.H.won === false && boards.H.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 8) {
          const activeBoard = document.getElementById('I')
          if (boards.I.won === false && boards.I.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        }


        // ! Click event listener for placing markers - HERBIVORE


      } else if (currentPlayer === 'herbivore'
        && !cell.classList.contains('bone')
        && !cell.classList.contains('leaf')
        && smallBoard.classList.contains('active')
        && !smallBoard.classList.contains('carnivore')
        && !smallBoard.classList.contains('herbivore')) {
        cell.classList.add('leaf')
        leafMarkers.push(cell.id)

        // ? Functions that check for win condition on each board

        checkForWinA()
        checkForWinB()
        checkForWinC()
        checkForWinD()
        checkForWinE()
        checkForWinF()
        checkForWinG()
        checkForWinH()
        checkForWinI()


        // ? CHECK FOR TIE

        checkForTie(smallBoard.id)

        
        // ? CHECK FOR OVERALL WIN

        checkRoundWin()
        if (herbivoreWinsRound === true) {
          playerWins()
        }

        // ? CHECK FOR OVERALL TIE

        checkRoundTie()

        currentPlayer = 'carnivore' //changes player to carnivore

        playerTurn.innerHTML = 'Carnivore GO!'

        //const smallBoards = document.querySelectorAll('.small-board')

        smallBoards.forEach(smallBoard => smallBoard.classList.remove('active')) // removes active class from all except active boards

        smallBoards.forEach(smallBoard => smallBoard.classList.add('disabled')) // disables all boards


        // ? If statement that selects next active board - HERBIVORE

        if (index === 0) {
          // grabs next active board
          const activeBoard = document.getElementById('A')
          if (boards.A.won === false && boards.A.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 1) {
          const activeBoard = document.getElementById('B')
          if (boards.B.won === false && boards.B.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 2) {
          const activeBoard = document.getElementById('C')
          if (boards.C.won === false && boards.C.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 3) {
          const activeBoard = document.getElementById('D')
          if (boards.D.won === false && boards.D.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 4) {
          const activeBoard = document.getElementById('E')
          if (boards.E.won === false && boards.E.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 5) {
          const activeBoard = document.getElementById('F')
          if (boards.F.won === false && boards.F.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 6) {
          const activeBoard = document.getElementById('G')
          if (boards.G.won === false && boards.G.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 7) {
          const activeBoard = document.getElementById('H')
          if (boards.H.won === false && boards.H.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        } else if (index === 8) {
          const activeBoard = document.getElementById('I')
          if (boards.I.won === false && boards.I.drawn === false) {
            activeBoard.classList.add('active')
            activeBoard.classList.remove('disabled')
          } else {
            smallBoards.forEach(smallBoard => smallBoard.classList.add('active'))
            smallBoards.forEach(smallBoard => smallBoard.classList.remove('disabled'))
          }
        }

      }

    })

  }



}

const smallBoards = Array.from(document.querySelectorAll('.small-board'))

// ! Function to check for tie

function checkForTie(activeBoard) {
  //console.log(activeBoard)
  //console.log(boards[activeBoard].won)
  let currentBoard = ''
  for (let i = 0; i < smallBoards.length; i++) {
    if (activeBoard === smallBoards[i].id) {
      currentBoard = smallBoards[i]
    }
  }
  const children = Array.from(currentBoard.children)
  let emptyCells = 0
  for (let i = 0; i < children.length; i++) {
    if (!children[i].classList.contains('leaf') && !children[i].classList.contains('bone')) {
      emptyCells++
    }
  }
  if (emptyCells === 0 && !boards[activeBoard].won) {
    console.log('board is a tie!')
    currentBoard.classList.add('tie')
    boards[activeBoard].drawn = true
  }
  console.log(boards[activeBoard].drawn)  
}


// ! Function to check for overall tie in round

function checkRoundTie() {

  // Will return true if all boards have class carnivore, herbivore or tie and no win condition has been met.
  let activeBoards = 0
  for (let i = 0; i < smallBoards.length; i++) {
    if (!smallBoards[i].classList.contains('carnivore') && !smallBoards[i].classList.contains('herbivore') && !smallBoards[i].classList.contains('tie')) {
      activeBoards++
    }
  }
  if (activeBoards === 0 && !carnivoreWinsRound && !herbivoreWinsRound) {
    console.log('Game is a tie!')
  }

}

// ! Functions to check for win in each small board

function checkForWinA() {
  for (let i = 0; i < boards.A.winConditions.length; i++) {
    const winA = boards.A.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winA[0]) && boneMarkers.includes(winA[1]) && boneMarkers.includes(winA[2])) {
      const boardWon = document.getElementById('A')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins A!')
      boards.A.won = true
      carnivoreWins.push('A')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      return carnivoreWinA = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winA[0]) && leafMarkers.includes(winA[1]) && leafMarkers.includes(winA[2])) {
      const boardWon = document.getElementById('A')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins A!')
      boards.A.won = true
      herbivoreWins.push('A')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      return herbivoreWinA = true
      
    } 
  }
}

function checkForWinB() {
  for (let i = 0; i < boards.B.winConditions.length; i++) {
    
    const winB = boards.B.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winB[0]) && boneMarkers.includes(winB[1]) && boneMarkers.includes(winB[2])) {
      const boardWon = document.getElementById('B')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins B!')
      boards.B.won = true
      carnivoreWins.push('B')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      return carnivoreWinB = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winB[0]) && leafMarkers.includes(winB[1]) && leafMarkers.includes(winB[2])) {
      const boardWon = document.getElementById('B')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins B!')
      herbivoreWins.push('B')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.B.won = true
      return herbivoreWinB = true
    }
  }

}

function checkForWinC() {
  for (let i = 0; i < boards.C.winConditions.length; i++) {
    
    const winC = boards.C.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winC[0]) && boneMarkers.includes(winC[1]) && boneMarkers.includes(winC[2])) {
      const boardWon = document.getElementById('C')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins C!')
      carnivoreWins.push('C')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      boards.C.won = true
      return carnivoreWinC = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winC[0]) && leafMarkers.includes(winC[1]) && leafMarkers.includes(winC[2])) {
      const boardWon = document.getElementById('C')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins C!')
      herbivoreWins.push('C')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.C.won = true
      return herbivoreWinC = true
    }
  }

}

function checkForWinD() {
  for (let i = 0; i < boards.D.winConditions.length; i++) {
    
    const winD = boards.D.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winD[0]) && boneMarkers.includes(winD[1]) && boneMarkers.includes(winD[2])) {
      const boardWon = document.getElementById('D')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins D!')
      boards.D.won = true
      carnivoreWins.push('D')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      return carnivoreWinD = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winD[0]) && leafMarkers.includes(winD[1]) && leafMarkers.includes(winD[2])) {
      const boardWon = document.getElementById('D')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins D!')
      herbivoreWins.push('D')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.D.won = true
      return herbivoreWinD = true
    }
  }

}

function checkForWinE() {
  for (let i = 0; i < boards.E.winConditions.length; i++) {
    
    const winE = boards.E.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winE[0]) && boneMarkers.includes(winE[1]) && boneMarkers.includes(winE[2])) {
      const boardWon = document.getElementById('E')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins E!')
      carnivoreWins.push('E')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      boards.E.won = true
      return carnivoreWinE = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winE[0]) && leafMarkers.includes(winE[1]) && leafMarkers.includes(winE[2])) {
      const boardWon = document.getElementById('E')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins E!')
      herbivoreWins.push('E')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.E.won = true
      return herbivoreWinE = true
    }
  }

}

function checkForWinF() {
  for (let i = 0; i < boards.F.winConditions.length; i++) {
   
    const winF = boards.F.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winF[0]) && boneMarkers.includes(winF[1]) && boneMarkers.includes(winF[2])) {
      const boardWon = document.getElementById('F')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins F!')
      carnivoreWins.push('F')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      boards.F.won = true
      return carnivoreWinF = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winF[0]) && leafMarkers.includes(winF[1]) && leafMarkers.includes(winF[2])) {
      const boardWon = document.getElementById('F')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins F!')
      herbivoreWins.push('F')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.F.won = true
      return herbivoreWinF = true
    }
  }

}

function checkForWinG() {
  for (let i = 0; i < boards.G.winConditions.length; i++) {
    
    const winG = boards.G.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winG[0]) && boneMarkers.includes(winG[1]) && boneMarkers.includes(winG[2])) {
      const boardWon = document.getElementById('G')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins G!')
      carnivoreWins.push('G')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      boards.G.won = true
      return carnivoreWinG = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winG[0]) && leafMarkers.includes(winG[1]) && leafMarkers.includes(winG[2])) {
      const boardWon = document.getElementById('G')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins G!')
      herbivoreWins.push('G')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.G.won = true
      return herbivoreWinG = true
    }
  }

}

function checkForWinH() {
  for (let i = 0; i < boards.H.winConditions.length; i++) {
   
    const winH = boards.H.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winH[0]) && boneMarkers.includes(winH[1]) && boneMarkers.includes(winH[2])) {
      const boardWon = document.getElementById('H')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins H!')
      carnivoreWins.push('H')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      boards.H.won = true
      return carnivoreWinH = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winH[0]) && leafMarkers.includes(winH[1]) && leafMarkers.includes(winH[2])) {
      const boardWon = document.getElementById('H')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins H!')
      herbivoreWins.push('H')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.H.won = true
      return herbivoreWinH = true
    }
  }

}

function checkForWinI() {
  for (let i = 0; i < boards.I.winConditions.length; i++) {
    
    const winI = boards.I.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winI[0]) && boneMarkers.includes(winI[1]) && boneMarkers.includes(winI[2])) {
      const boardWon = document.getElementById('I')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins I!')
      carnivoreWins.push('I')
      const badge = document.createElement('div')
      badge.classList.add('bone-sticker')
      boardWon.appendChild(badge)
      boards.I.won = true
      return carnivoreWinI = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winI[0]) && leafMarkers.includes(winI[1]) && leafMarkers.includes(winI[2])) {
      const boardWon = document.getElementById('I')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins I!')
      herbivoreWins.push('I')
      const badge = document.createElement('div')
      badge.classList.add('leaf-sticker')
      boardWon.appendChild(badge)
      boards.I.won = true
      return herbivoreWinI = true
    }
  }

}

// ! Function to check for overall win in round

function checkRoundWin() {
  for (let i = 0; i < roundWinConditions.length; i++) {
    const roundWin = roundWinConditions[i]
    if (carnivoreWins.includes(roundWin[0]) && carnivoreWins.includes(roundWin[1]) && carnivoreWins.includes(roundWin[2])) {
      console.log('carnivore wins the game!')
      return carnivoreWinsRound = true
    } else if (herbivoreWins.includes(roundWin[0]) && herbivoreWins.includes(roundWin[1]) && herbivoreWins.includes(roundWin[2])) {
      console.log('herbivore wins the game!')
      return herbivoreWinsRound = true
    }
  }
}

// ! Functions for pop-ups

function playerWins() {
  mainBoard.setAttribute('id', 'disabled')
  const popUp = document.createElement('div')
  popUp.classList.add('pop-up')
  document.body.appendChild(popUp)
  if (carnivoreWinsRound === true) {
    popUp.setAttribute('id', 'carnivore-win')
    popUp.innerHTML = 'Carnivore wins!'
  } else {
    popUp.setAttribute('id', 'herbivore-win')
    popUp.innerHTML = 'Herbivore wins!'
  }
}




/*

To check if a board is a tie:
All cells are full and no win condition is met.
Cell is full if it contains class bone || leaf
Function to check for tied board
Goes after click
*/




//console.log(event.target.id)
//console.log(index)
//console.log(leafMarkers)
//console.log(boneMarkers)
//console.log(event.target.id)
//console.log(index)
//console.log(smallBoard.id)
//console.log(cellIds)

/*

MVP (Tuesday):
- Set up tie conditions - DONE
- Set up overall win conditions - DONE
- Set up overall tie conditions - DONE
- Add pop-ups -DONE
- Add reset (start new game) button

Stretch goals (Wednesday):
- Add reset button
- Deactivate all boards when round won
- Add eggs points
- Add choose dino option
- Add sounds

Extra stretch goals (Thursday):
- AI
- Add name
- Change background color of active small-board depending on player
 

 */




