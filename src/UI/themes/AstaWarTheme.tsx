import { createTheme } from '@mui/material/styles';

// Define the custom colors
export const AW_COLORS = {
  background: '#1D4225', // Green background
  text: '#FFFFFF',       // White text
  highlight: '#FFEB3B',  // Yellow highlight
};

export const AW_FONT_FAMILY = 'Quicksand'

// Create the theme
const AstaWarTheme = createTheme({
  palette: {
    background: {
      default: AW_COLORS.background,
      paper: AW_COLORS.background,
    },
    text: {
      primary: AW_COLORS.text,
      secondary: AW_COLORS.highlight,
    },
    primary: {
      main: AW_COLORS.highlight,
      contrastText: '#000000',
    },
    secondary: {
      main: AW_COLORS.text,
      contrastText: AW_COLORS.background,
    },
  },
  typography: {
    fontFamily: AW_FONT_FAMILY,
    h1: {
        fontSize: '6rem',
        fontWeight: 300,
        lineHeight: 1.167,
      },
      h2: {
        fontSize: '3.75rem',
        fontWeight: 300,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 400,
        lineHeight: 1.167,
      },
      h4: {
        fontSize: '2.125rem',
        fontWeight: 400,
        lineHeight: 1.235,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: 1.334,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.6,
      },
    //   h7: {
    //     fontSize: '1.125rem',
    //     fontWeight: 500,
    //     lineHeight: 1.6,
    //   },
    //   h8: {
    //     fontSize: '1rem',
    //     fontWeight: 500,
    //     lineHeight: 1.5,
    //   },
    //   h9: {
    //     fontSize: '0.875rem',
    //     fontWeight: 500,
    //     lineHeight: 1.43,
    //   },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          fontWeight: 600,
          textTransform: 'uppercase',
          backgroundColor: AW_COLORS.highlight,
          color: AW_COLORS.background,          
        },
        contained: {
          backgroundColor: AW_COLORS.highlight,
          color: AW_COLORS.background,
        },
        outlined: {
          borderColor: AW_COLORS.highlight,
          backgroundColor: AW_COLORS.background,
          color: AW_COLORS.highlight,
        },
      },
    },
  },
});

export default AstaWarTheme;
