export const playerName = (e, setPlayerName1, setIsStartGame) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setPlayerName1(formData.get('playerName'));
    setIsStartGame(true);
  };
  
  export const handleClick = (index, board, winner, isDraw, setBoard, setIsXNext, setWinner, setIsDraw, makeAIMove, calculateWinner) => {
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
      makeAIMove(newBoard, setBoard, setIsXNext, setWinner, setIsDraw, calculateWinner, winner, isDraw);
    }, 1000);
  };
  
  export const makeAIMove = (newBoard, setBoard, setIsXNext, setWinner, setIsDraw, calculateWinner, winner, isDraw) => {
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
  
  export const resetGame = (setBoard, setIsXNext, setWinner, setIsDraw, setIsStartGame) => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
    setIsStartGame(false);
  };
  
  export const calculateWinner = (squares) => {
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