import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme, { injectGlobalStyles } from "./theme";
import App from "./App";

// Browser resets, font-family, and similar
injectGlobalStyles();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
