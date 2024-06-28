import React from 'react';

export default function GameScreen({ playerName1, board, isNext, winner, isDraw, handleClick, resetGame }) {
  return (
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
  );
}