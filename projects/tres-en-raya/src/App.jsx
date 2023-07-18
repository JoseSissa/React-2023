import { useState } from "react"

const TURN = {
  X : 'x',
  O : 'o'
}

const Square = ({ children, index, updateBoard, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
        {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  // Null es que no hay ganador, false que hay empate
  const [winner, setWinner] = useState(null) 

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every(elem => elem != null)
  }

  const updateBoard = (index) => {
    // Si ya hay un valor en la posición de la board o hay ganador entonces no actualizar 
    if (board[index] || winner) return

    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    //Revisamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <section className="game">
        {
          board.map((elem, i) => {
            return (
              <Square index={i} key={i} updateBoard={updateBoard} >
                {board[i]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURN.X} >
          {TURN.X}
        </Square>
        <Square isSelected={turn === TURN.O} >
          {TURN.O}
        </Square>
      </section>

      <div>
        <button onClick={resetGame}>Resetar Game</button>
      </div>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Ganó'
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de Nuevo !</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
