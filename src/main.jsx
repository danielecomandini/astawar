import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AstaWarTheme from "./UI/themes/AstaWarTheme.tsx";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={AstaWarTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
