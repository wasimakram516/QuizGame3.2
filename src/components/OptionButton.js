import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function OptionButton({ option, handleAnswer, optionLetter }) {
  // Define the color styles based on the option letters
  const optionStyles = {
    A: {
      backgroundColor: "#87B353",
      color: "#FFFFFF",
    },
    B: {
      backgroundColor: "#F58220",
      color: "#FFFFFF",
    },
    C: {
      backgroundColor: "#394E29",
      color: "#FFFFFF",
    },
    D: {
      backgroundColor: "#FAC090",
      color: "#FFFFFF",
    },
  };


  return (
    <Box
      sx={{
        width: '100px',
        height: '100px',
        display: 'inline-block',
        margin: '10px',
      }}
    >
      <Button
        onClick={() => handleAnswer(option)}  // Trigger answer handler
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: optionStyles[optionLetter].backgroundColor,  // Set background color based on option letter
          color: optionStyles[optionLetter].color,  // Set text color
          borderRadius: '50%',  // Make it circular
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {optionLetter} {/* Display A, B, C, D */}
        </Typography>
      </Button>
    </Box>
  );
}

export default OptionButton;
