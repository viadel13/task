import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: '"Inter", sans-serif',
          borderRadius: "8px",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdx: 988, // ✅ ton breakpoint personnalisé
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
    },
  },

  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
      paper: "#7D67FD03",
    },
    text: {
      primary: "#000000",
      secondary: "#001858",
      A100: "#172C66A6",
    },
    primary: {
      main: "#15156D",
      A600: "#5251C4",
      100: "#FCFCFF",
      A100: "rgba(75,115,62,0.1)",
      A200: "#4B733E7D",
      A400: "#F5FFF2",
      A700: "#FCFCF9",
    },
    secondary: {
      main: "#001858",
      A100: "rgba(26,66,125,0.1)",
      A200: "#E6E6E6",
      A400: "rgba(255,255,255,0.95)",
      A700: "#4B733E33",
    },
    grey: {
      A100: "#222221",
      A200: "#4B733E7D",
      A400: "#F5F5F54D",
      A700: "#F4F4F4",
    },
  },
});
