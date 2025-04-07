// theme.ts
import { createTheme } from '@mui/material/styles';
import { red, green, blueGrey } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5B301', // brillante, sportivo
    },
    secondary: {
      main: '#FF3366', // accento forte per azione
    },
    text: {
      primary: '#F2E94D',
      secondary: '#8B949E',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C2128',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          borderRadius: 20,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
