// Theme.js
import { createTheme } from '@mui/material/styles';

// Importa il font Inter da Google Fonts
import '@fontsource/inter'; // Assicurati che sia installato: npm install @fontsource/inter

const theme = createTheme({
  palette: {
    background: {
      default: '#1D4225',
    },
    text: {
      primary: '#F2E94D',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 400,
    },
    h2: {
      fontSize: '2.5rem', // 40px
      fontWeight: 400,
    },
    h3: {
      fontSize: '2rem', // 32px
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.75rem', // 28px
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem', // 24px
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem', // 20px
      fontWeight: 400,
    },
    h7: {
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      color: '#F2E94D',
    },
    h8: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      color: '#F2E94D',
    },
    h9: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      color: '#F2E94D',
    },
    subtitle1: {
      fontSize: '1rem',     // 16px
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.57,
    },
    allVariants: {
      color: '#F2E94D', // Applica il colore anche a tutte le varianti
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1D4225',
        },
      },
    },
  },
});

export default theme;
