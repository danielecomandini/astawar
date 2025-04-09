import {
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import AstaWarTheme from "./UI/themes/AstaWarTheme";
import AWButton from "./UI/elements/buttons/AWButton";

import './index.css'

const App = () => {
  return (
    <ThemeProvider theme={AstaWarTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          bgcolor: "background.default",
        }}
      >
        <AWButton variant="outlined">OUTLINED</AWButton>
        <AWButton variant="contained">CONTAINED</AWButton>
        <br />
      </Box>
      <Typography variant="h1">TESTO QUI</Typography>
    </ThemeProvider>
  );
};

export default App;
