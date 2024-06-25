import { useState } from "react"
import './App.css'
export default function App(){
  const [startGame , setIsStartGame] = useState(false)
  const [playerName1, setPlayerName1] = useState('')
  const [playerName2, setPlayerName2] = useState('')
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const playerName = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    setPlayerName1(formData.get('playerName'))
    setPlayerName2(formData.get('playerName2'))
    setIsStartGame(true)
  }

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isNext);

    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
        setWinner(currentWinner);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsStartGame(false);
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,4,8], [2,4,6], [0,3,6],
      [1,4,7], [2,5,8]
    ];

    const winningLine = lines.find(([a, b, c]) => {
      return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    });

    return winningLine ? squares[winningLine[0]] : null;
  }

  return(
    <>
      {
        !startGame ? (
          <div className="formContainer">
            <h1>Tic Tac Toe oyununa hoşgeldiniz!</h1>
            <form onSubmit={playerName} className="playerNameForm">
                <input type="text" name="playerName" placeholder="1. Oyuncu Adını Giriniz" />
                <input type="text" name="playerName2" placeholder="2. Oyuncu Adını Giriniz" />
                <button type="submit">Başla!</button>
            </form>
          </div>
        ) : (
          <div className="playerAppContainer">
            <div className="playerApp">
              <div className="playerAppBoards">
                <div className="playerName">Aktif Oyuncu adı: {isNext ? playerName1 : playerName2}</div>
                <div className="playerAppBoard">
                  {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="playButtonGrid" onClick={() => handleClick(index)}>
                      {board[index]}
                    </div>
                  ))}

                  <div className="game-info">
                  {
                    winner ? (
                      <div>Kazanan: {winner === 'X' ? playerName1 : playerName2}</div>
                    ) : (
                      board.every(cell => cell !== null) ? <div>Berabere!</div> : <div>Henüz kazanan yok</div>
                    )
                  }
                  </div>
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