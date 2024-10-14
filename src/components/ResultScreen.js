import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import BackgroundImage from "../assets/SectionA/Background.webp";
function ResultScreen({ score, total, restartGame }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Translate both X and Y to center the Paper
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency for better readability
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976D2" }}
        >
          Quiz Completed! <br />
          🎉
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "#333", marginBottom: 3 }}
        >
          Your Score:{" "}
          <strong>
            {score} / {total}
          </strong>
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "primary.main", // Use the theme's sustainable green color
            color: "white", // White text
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "primary.light", // Use the theme's OQGN green color
            },
          }}
          onClick={restartGame}
        >
          Play Again
        </Button>
      </Paper>
    </Box>
  );
}

export default ResultScreen;
