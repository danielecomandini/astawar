import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App.tsx";

import "./index.css";

import Theme from "./UI/themes/Theme.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
