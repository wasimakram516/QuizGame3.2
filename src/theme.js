import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#394E29', // Sustainable Green
      light:"#87B353", // OQGN Green
    },
    secondary: {
      main: '#F58220', // OQGN Orange
    },
    success: {
      main: '#32CD32', // Lime Green for correct answers or success
    },
    error: {
      main: '#DC143C', // Crimson Red for wrong answers or errors
    },
    warning: {
      main: '#FFD700', // Soft Yellow for warning or highlights
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          // Define a new custom variant named 'startButton'
          props: { variant: 'startButton' },
          style: {
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            zIndex: 100,
          },
        },
        {
          // Define a new custom variant named 'nextButton'
          props: { variant: 'nextButton' },
          style: {
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            zIndex: 100,
            backgroundColor: "#394E29",
            color:"white",
            fontWeight:"bolder",
            width:"auto",
            fontSize:"20px",
            "&:hover": {
              backgroundColor: "#87B353", // Optional: if you want a darker green on hover
            },
          },
        },
        
      ],
    },
  },
});

export default theme;
