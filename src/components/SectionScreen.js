import React from "react";
import { Box, Button } from "@mui/material";
import OQGNLogo from "../assets/SectionA/OQGNDarkVariant.webp";
import sectionAImage from "../assets/SectionA/Section1.webp";
import sectionBImage from "../assets/SectionA/Section2.webp";
import sectionCImage from "../assets/SectionA/Section3.webp";
import sectionDImage from "../assets/SectionA/Section4.webp";
import "../App.css"; // Import global styles

function SectionScreen({ section, startQuiz }) {
  const getSectionImage = () => {
    if (section === "A") {
      return sectionAImage;
    } else if (section === "B") {
      return sectionBImage;
    } else if (section === "C") {
      return sectionCImage;
    } else if (section === "D") {
      return sectionDImage;
    }

    return null;
  };

  return (
    <Box
      className="section-screen"
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <img src={OQGNLogo} alt="OQGN Logo" className="oqgn-logo" />
      <img src={getSectionImage()} alt={`Heading for section ${section}`} className="section-logo" />

      {/* Start Button */}
      <Button variant="nextButton" className="start-button" onClick={startQuiz}>
        NEXT
      </Button>
    </Box>
  );
}

export default SectionScreen;
