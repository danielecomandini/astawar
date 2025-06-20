import { createTheme } from "@mui/material/styles";


export const AW_COLORS = {
  background: '#1A2C3B', // Background Color
  text: "#FFB300",       // Text Color
  headerBg: "#227788",   // Background of the AppBar
  headerText: "#FFB300", // Text AppBar
  highlight: "#43A047",  // Buttons and links
};

export const AW_FONT_FAMILY = "Quicksand";
// export const AW_FONT_FAMILY = 'Times New Roman'

// Create the theme
const Theme = createTheme({
  palette: {
    background: {
      default: AW_COLORS.background,
      paper: AW_COLORS.headerBg,
    },
    text: {
      primary: AW_COLORS.text,
      secondary: AW_COLORS.highlight,
    },
    primary: {
      main: AW_COLORS.headerBg,
      contrastText: "#000000",
    },
    // secondary: {
    //   main: AW_COLORS.highlight,
    //   contrastText: AW_COLORS.background,
    // },
  },
  typography: {
    fontFamily: AW_FONT_FAMILY,
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.167,
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
      lineHeight: 1.235,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.334,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h7: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h8: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      lineHeight: 1.43,
    },
    h9: {
      fontSize: "0.75rem", // 12px
      fontWeight: 500,
      lineHeight: 1.66,
    },
  },
});

export default Theme;
