import {
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
  Button,
} from "@mui/material";
import AstaWarTheme from "./UI/themes/AstaWarTheme";
import AWButton from "./UI/elements/buttons/AWButton";

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
      {Array.from({ length: 7 }, (_, i) => (
        <div key={i}>
          <Typography style={{
          }} variant={`h${i+1}`}>TESTO QUI</Typography>
        </div>
      ))}
    </ThemeProvider>
  );
};

export default App;
