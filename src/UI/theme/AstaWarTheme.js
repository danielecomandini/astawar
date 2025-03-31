// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Colore principale
    },
    secondary: {
      main: '#dc004e', // Colore secondario
    },
    background: {
      default: '#f4f4f4', // Colore di sfondo
    },
  },
  typography: {
    fontFamily: 'Inter', // Tipografia personalizzata
  },
});

export default theme;
