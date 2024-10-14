import React from "react";
import { Box, Button } from "@mui/material";
import AnnualHSE from "../assets/Intro/AnnualHSE.webp";
import InteractiveQuiz from "../assets/Intro/InteractiveQuiz.webp";
import OQGNLogo from "../assets/Intro/OQGNLogo.webp";
import Start from "../assets/Intro/START.webp";
import "../App.css"; // Import global styles

function StartScreen({ startGame }) {
  return (
    <Box
      className="start-screen"
      sx={{
        width: "100%",
        height: '100vh',
      }}
    >
      <img src={AnnualHSE} alt="Annual HSE" className="annual-hse" />
      <img src={InteractiveQuiz} alt="Interactive Quiz" className="interactive-quiz" />
      <img src={OQGNLogo} alt="OQGN Logo" className="oqgn-logo" />

      {/* Start Button */}
      <Button variant="startButton" className="start-button" onClick={startGame}>
        <img src={Start} alt="Start Button" />
      </Button>
    </Box>
  );
}

export default StartScreen;
