import React, { useState } from "react";
import { Box, Typography, Grid, Button, useTheme } from "@mui/material";
import OptionButton from "./OptionButton";
import FeedbackModal from "./FeedbackModal";
import correctImage from "../assets/QuestionAnswerSection/CorrectAnswer.webp"; // Correct feedback image
import wrongImageA from "../assets/QuestionAnswerSection/IncorrectAnswerA.webp"; // Wrong feedback image A
import wrongImageB from "../assets/QuestionAnswerSection/IncorrectAnswerB.webp"; // Wrong feedback image B
import wrongImageC from "../assets/QuestionAnswerSection/IncorrectAnswerC.webp"; // Wrong feedback image C
import wrongImageD from "../assets/QuestionAnswerSection/IncorrectAnswerD.webp"; // Wrong feedback image D

// Map option letters to the corresponding wrong answer feedback images
const wrongAnswerImages = {
  A: wrongImageA,
  B: wrongImageB,
  C: wrongImageC,
  D: wrongImageD,
};

function Quiz({ quizData, endGame, incrementScore, restartGame }) {
  const theme = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'
  const [feedbackImage, setFeedbackImage] = useState(null); // Feedback image for the modal
  const [imageLoading, setImageLoading] = useState(false); // Image loading state

  const currentQuestion = quizData[currentQuestionIndex];

  // Preload the feedback image dynamically based on correct/wrong state
  const preloadFeedbackImage = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = resolve;
    });
  };

  const handleAnswer = (option) => {
    const isCorrectAnswer = option.isCorrect;

    // Find and store the correct option
    const correctOption = currentQuestion.options.find((opt) => opt.isCorrect);

    // Determine which feedback image to load (correct or wrong)
    const feedbackImageSrc = isCorrectAnswer
      ? correctImage
      : wrongAnswerImages[correctOption.text.split(":")[0]];

    // Set loading state, preload image, and open modal after image is fully loaded
    setImageLoading(true);
    preloadFeedbackImage(feedbackImageSrc).then(() => {
      setFeedbackImage(feedbackImageSrc);
      setFeedback(isCorrectAnswer ? "correct" : "wrong");
      setImageLoading(false); // Image is now fully loaded, ready to show modal
    });

    // Increment score if correct
    if (isCorrectAnswer) {
      incrementScore();
    }
  };

  const handleNextQuestion = () => {
    setFeedback(null); // Reset feedback for next question
    setFeedbackImage(null); // Reset feedback image
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentQuestionIndex(nextIndex); // Move to the next question
    } else {
      endGame(); // End the game if it's the last question
    }
  };

  return (
    <Box
      className="quiz-screen"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 0,
        margin: 0,
        position: "relative", // Ensure relative positioning for the quiz content
      }}
    >
      {/* Restart Button - Fixed to the top-left corner */}
      <Button
        onClick={restartGame}  // Trigger the restart function
        sx={{
          position: "fixed",  // Fix the button in place even during scroll
          top: "10px",
          left: "10px",
          fontSize: "16px",
          backgroundColor: theme.palette.secondary.main, // Style as you prefer
          color: "#FFFFFF",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          zIndex: 1000, // Ensure the button is always on top of other content
        }}
      >
        Restart
      </Button>

      {/* Display Question Number */}
      <Typography
        variant="h2"
        gutterBottom
        sx={{ marginTop: "100px", fontWeight: "bold" }}
      >
        {currentQuestionIndex + 1}
      </Typography>

      {/* Display Question */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        {currentQuestion.question}
      </Typography>

      {/* Display Answer Options */}
      <Box
        sx={{
          textAlign: "left", // Aligns the text to the left
          maxWidth: "500px", // Limits the width of the container to 500px
          marginBottom: "24px", // Adds space below the container
          padding: "0 20px 0 20px", // Adds horizontal padding (left and right) of 20px, no padding on top and bottom
        }}
      >
        {currentQuestion.options.map((option, index) => (
          <Typography
            key={index}
            variant="body1" // Use body text style
            gutterBottom // Add some spacing between options
            sx={{ marginBottom: "12px" }} // Ensure spacing between options
          >
            {option.text}
          </Typography>
        ))}
      </Box>

      {/* Display Option Buttons in a 2x2 Grid */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {currentQuestion.options.map((option, index) => (
          <Grid item xs={6} key={index}>
            <OptionButton
              option={option}
              handleAnswer={() => handleAnswer(option)}
              optionLetter={["A", "B", "C", "D"][index]} // Pass A, B, C, or D based on the index
            />
          </Grid>
        ))}
      </Grid>

      {/* FeedbackModal: Only show the modal if feedback is available and the image is fully loaded */}
      {feedback !== null && !imageLoading && (
        <FeedbackModal
          open={feedback !== null && !imageLoading} // Ensure modal only opens when images are fully loaded
          isCorrect={feedback === "correct"}
          feedbackImage={feedbackImage} // Dynamically select feedback image
          handleNextQuestion={handleNextQuestion} // Proceed to next question
        />
      )}
    </Box>
  );
}

export default Quiz;
