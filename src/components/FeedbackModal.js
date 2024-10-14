import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  useTheme,
  Box
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function FeedbackModal({ open, isCorrect, feedbackImage, handleNextQuestion }) {
  const theme = useTheme();
  const getTitle = () => {
    return isCorrect ? "Correct!" : "Wrong!";
  };

  return (
    <Dialog open={open} onClose={handleNextQuestion} fullWidth maxWidth="sm">
      <DialogTitle
      sx={{
        bgcolor: isCorrect? theme.palette.primary.main:theme.palette.error.main,
        color: theme.palette.primary.contrastText,
      }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
        {getTitle()}
        {/* Close button (X) in the top-right corner */}
        <IconButton onClick={handleNextQuestion} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        {/* Display the feedback image (wrong or correct) */}
        {feedbackImage && (
          <img
            src={feedbackImage}
            alt={isCorrect ? "Correct Answer" : "Wrong Answer"}
            style={{
              paddingTop:"20px",
              width: "70%",
              height: "auto",
              display: 'block',
              margin: '0 auto',
            }}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNextQuestion} variant="contained" autoFocus 
        sx={{
          backgroundColor:"primary.main", color:"white",
          "&:hover": {
              backgroundColor: "primary.light", 
            },
          }}
          >
          Next Question
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FeedbackModal;
