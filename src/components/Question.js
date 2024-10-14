import React from 'react';
import { Typography } from '@mui/material';

function Question({ text }) {
  return (
    <Typography variant="h5" align="center" gutterBottom sx={{backgroundColor:"transparent"}}>
      {text}
    </Typography>
  );
}

export default Question;
