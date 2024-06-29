import React from 'react';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function GameScreen({ playerName1, board, isNext, winner, isDraw, handleClick, resetGame }) {
  const renderIcon = (value) => {
    if (value === 'X') return <CloseIcon fontSize="large" />;
    if (value === 'O') return <RadioButtonUncheckedIcon fontSize="large" />;
    return null;
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h5" gutterBottom>Aktif Oyuncu adı: {isNext ? playerName1 : 'AI'}</Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Grid container spacing={1} justifyContent="center">
          {board.map((value, index) => (
            <Grid item xs={4} key={index}>
              <Paper 
                onClick={() => isNext && handleClick(index)} 
                style={{ 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer', 
                  fontSize: '24px' 
                }}>
                {renderIcon(value)}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box mt={2}>
          <Typography variant="h6">
            {winner ? `Kazanan: ${winner === 'X' ? playerName1 : 'AI'}` : isDraw ? 'Berabere!' : 'Henüz kazanan yok'}
          </Typography>
          <Button onClick={resetGame} variant="contained" color="secondary" style={{ marginTop: '16px' }}>Reset Game</Button>
        </Box>
      </Box>
    </Box>
  );
}