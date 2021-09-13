import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import "./index.css";
import App from "./Components/App";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  typography: {
    fontFamily: "'Alfa Slab One', cursive",
  },
  palette: {
    primary: {
      main: "#C7EFCF",
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
