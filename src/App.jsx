import { useState } from "react"
import './App.css'
export default function App(){
  const [startGame , setIsStartGame] = useState(false)
  const [name, playName] = useState("")
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const robot = "robot"
  const playerName = (e) => {
    e.preventDefault();
    const playerNameData = Object.fromEntries(new FormData(e.target))
    const playNames = playerNameData.playerName
    playName(playNames)
    setIsStartGame(true)
  }

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
    setWinner(newBoard);
  }

  const resetGame = () => {
    setIsStartGame(false)
  }
  return(
    <>
      {
        !startGame ? (
          <div className="formContainer">
            <h1>Tic Tac Toe oyununa hoşgeldiniz!</h1>
            <form onSubmit={playerName} className="playerNameForm">
                <input type="text" name="playerName" placeholder="Adınızı Giriniz" />
                <button type="submit">Başla!</button>
            </form>
          </div>
        ) : (
          <div className="playerAppContainer">
            <div className="playerApp">
              <div className="playerAppBoards">
                <div className="playerName">Oyuncu adı: {name}</div>
                <div className="playerName">karşı Taraf: {robot}</div>
                <div className="playerAppBoard">
                  {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="playButtonGrid" onClick={() => handleClick(index)}>
                      {board[index]}
                    </div>
                  ))}
                </div>
                <div className="game-reset">
                  <button onClick={resetGame}>Reset Game</button>
                </div>
              </div>
            </div>
        </div>
        )}
    </>
  )
}