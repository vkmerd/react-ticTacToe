import React from 'react';

export default function GameForm({ playerName }) {
  return (
    <div className="formContainer">
      <h1>Tic Tac Toe oyununa hoşgeldiniz!</h1>
      <form onSubmit={playerName} className="playerNameForm">
        <input type="text" name="playerName" placeholder="Oyuncu Adını Giriniz" />
        <button type="submit">Başla!</button>
      </form>
    </div>
  );
}