import { useState } from "react"

import { Square } from "./Components/Square/Square"
import { TURN } from './constants.js'
import { checkEndGame, checkWinner } from "./logic/board.js"
import { WinnerModal } from "./Components/WinnerModal/WinnerModal"

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  // Null es que no hay ganador, false que hay empate
  const [winner, setWinner] = useState(null) 

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

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
