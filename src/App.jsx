import { useState } from "react";
import GameScreen from "./components/GameScreen";
import GameForm from "./components/GameForm";
import { playerName, handleClick, makeAIMove, resetGame, calculateWinner } from './components/GameFunctions';
import { Container } from '@mui/material';

export default function App() {
  const [startGame, setIsStartGame] = useState(false);
  const [playerName1, setPlayerName1] = useState('');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  return (
    <Container>
      {
        !startGame ? (
          <GameForm playerName={(e) => playerName(e, setPlayerName1, setIsStartGame)} />
        ) : (
          <GameScreen 
            playerName1={playerName1} 
            board={board} 
            isNext={isNext} 
            winner={winner} 
            isDraw={isDraw} 
            handleClick={(index) => handleClick(index, board, winner, isDraw, setBoard, setIsXNext, setWinner, setIsDraw, makeAIMove, calculateWinner)} 
            resetGame={() => resetGame(setBoard, setIsXNext, setWinner, setIsDraw, setIsStartGame)}
          />
        )
      }
    </Container>
  );
}