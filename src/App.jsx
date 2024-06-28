import { useState } from "react";
import './App.css';

export default function App() {
  const [startGame, setIsStartGame] = useState(false);
  const [playerName1, setPlayerName1] = useState('');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const playerName = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setPlayerName1(formData.get('playerName'));
    setIsStartGame(true);
  };

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);

    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner);
      return;
    }

    if (newBoard.every(cell => cell !== null)) {
      setIsDraw(true);
      return;
    }

    setTimeout(() => {
      makeAIMove(newBoard);
    }, 1000);
  };

  const makeAIMove = (newBoard) => {
    if (winner || isDraw) return;

    const emptyIndices = newBoard
      .map((emptyBox, index) => (emptyBox === null ? index : null))
      .filter((emptyBox) => emptyBox !== null);

    if (emptyIndices.length === 0) return;

    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    newBoard[randomIndex] = 'O';
    setBoard(newBoard);
    setIsXNext(true);

    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner);
      return;
    }

    if (newBoard.every(cell => cell !== null)) {
      setIsDraw(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
    setIsStartGame(false);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [2, 4, 6], [0, 3, 6],
      [1, 4, 7], [2, 5, 8]
    ];

    const winningLine = lines.find(([a, b, c]) => {
      return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    });

    return winningLine ? squares[winningLine[0]] : null;
  };

  return (
    <>
      {!startGame ? (
        <div className="formContainer">
          <h1>Tic Tac Toe oyununa hoşgeldiniz!</h1>
          <form onSubmit={playerName} className="playerNameForm">
            <input type="text" name="playerName" placeholder="Oyuncu Adını Giriniz" />
            <button type="submit">Başla!</button>
          </form>
        </div>
      ) : (
        <div className="playerAppContainer">
          <div className="playerApp">
            <div className="playerAppBoards">
              <div className="playerName">Aktif Oyuncu adı: {isNext ? playerName1 : 'AI'}</div>
              <div className="playerAppBoard">
                {Array.from({ length: 9 }, (_, index) => (
                  <div key={index} className="playButtonGrid" onClick={() => isNext && handleClick(index)}>
                    {board[index]}
                  </div>
                ))}
                <div className="game-info">
                  {winner ? (
                    <div>Kazanan: {winner === 'X' ? playerName1 : 'AI'}</div>
                  ) : isDraw ? (
                    <div>Berabere!</div>
                  ) : (
                    <div>Henüz kazanan yok</div>
                  )}
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
  );
}