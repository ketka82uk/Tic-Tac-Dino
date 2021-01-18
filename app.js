const mainBoard = document.querySelector('.main-board')


// ? Sets width of grid/boards/cells
const width = 3
const cells = []

// ? Used to construct ids for the cells
const smallBoards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const cellIds = []

// ? Sets up player variables
let currentPlayer = 'carnivore'
const boneMarkers = []
const leafMarkers = []
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




// ! A for loop that sets up the main board as a 3*3 grid
for (let index = 0; index < width ** 2; index++) {
  const smallBoard = document.createElement('div')
  smallBoard.classList.add('small-board')
  smallBoard.classList.add('active')
  mainBoard.appendChild(smallBoard)
  smallBoard.style.width = `${100 / width}%`
  smallBoard.style.height = `${100 / width}%`
  smallBoard.setAttribute('id', `${smallBoards[index]}`)
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
        // ? CHECK FOR OVERALL WIN
        // ? CHECK FOR OVERALL TIE

        currentPlayer = 'herbivore' // changes player to herbivore

        const smallBoards = document.querySelectorAll('.small-board')

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
        // ? CHECK FOR OVERALL WIN
        // ? CHECK FOR OVERALL TIE

        currentPlayer = 'carnivore' //changes player to carnivore


        const smallBoards = document.querySelectorAll('.small-board')

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

      //console.log(boneMarkers)
      //console.log(leafMarkers)


    })

  }



}

function checkForWinA() {
  for (let i = 0; i < boards.A.winConditions.length; i++) {
    const winA = boards.A.winConditions[i]
    // IF CARNIVORE WINS:
    if (boneMarkers.includes(winA[0]) && boneMarkers.includes(winA[1]) && boneMarkers.includes(winA[2])) {
      const boardWon = document.getElementById('A')
      boardWon.classList.add('carnivore')
      console.log('carnivore wins A!')
      boards.A.won = true
      return carnivoreWinA = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winA[0]) && leafMarkers.includes(winA[1]) && leafMarkers.includes(winA[2])) {
      const boardWon = document.getElementById('A')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins A!')
      boards.A.won = true
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
      return carnivoreWinB = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winB[0]) && leafMarkers.includes(winB[1]) && leafMarkers.includes(winB[2])) {
      const boardWon = document.getElementById('B')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins B!')
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
      boards.C.won = true
      return carnivoreWinC = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winC[0]) && leafMarkers.includes(winC[1]) && leafMarkers.includes(winC[2])) {
      const boardWon = document.getElementById('C')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins C!')
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
      return carnivoreWinD = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winD[0]) && leafMarkers.includes(winD[1]) && leafMarkers.includes(winD[2])) {
      const boardWon = document.getElementById('D')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins D!')
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
      boards.E.won = true
      return carnivoreWinE = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winE[0]) && leafMarkers.includes(winE[1]) && leafMarkers.includes(winE[2])) {
      const boardWon = document.getElementById('E')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins E!')
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
      boards.F.won = true
      return carnivoreWinF = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winF[0]) && leafMarkers.includes(winF[1]) && leafMarkers.includes(winF[2])) {
      const boardWon = document.getElementById('F')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins F!')
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
      boards.G.won = true
      return carnivoreWinG = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winG[0]) && leafMarkers.includes(winG[1]) && leafMarkers.includes(winG[2])) {
      const boardWon = document.getElementById('G')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins G!')
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
      boards.H.won = true
      return carnivoreWinH = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winH[0]) && leafMarkers.includes(winH[1]) && leafMarkers.includes(winH[2])) {
      const boardWon = document.getElementById('H')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins H!')
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
      boards.I.won = true
      return carnivoreWinI = true
    // IF HERBIVORE WINS
    } else if (leafMarkers.includes(winI[0]) && leafMarkers.includes(winI[1]) && leafMarkers.includes(winI[2])) {
      const boardWon = document.getElementById('I')
      boardWon.classList.add('herbivore')
      console.log('herbivore wins I!')
      boards.I.won = true
      return herbivoreWinI = true
    }
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

To do:
 - Change background color of active small-board depending on player
 - Add eggs points
 - Activate all open boards if an index referrs to a drawn/won board

 */




