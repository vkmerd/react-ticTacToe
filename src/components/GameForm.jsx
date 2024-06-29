import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function GameForm({ playerName }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h4" gutterBottom>Tic Tac Toe oyununa hoşgeldiniz!</Typography>
      <form onSubmit={playerName} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField label="Oyuncu Adını Giriniz" name="playerName" variant="outlined" required />
        <Button type="submit" variant="contained" color="primary">Başla!</Button>
      </form>
    </Box>
  );
}