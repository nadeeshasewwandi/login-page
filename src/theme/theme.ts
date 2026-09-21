import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Poppins, Arial, Helvetica, sans-serif",
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;