import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./Header";
import Charts from "./Charts";

const App = () => {
  // https://codesandbox.io/s/toggle-theme-dark-light-3gw9m
  const [theme, setTheme] = useState({
    palette: {
      type: "dark"
    }
  });

  const toggleTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />

      <Header toggleTheme={toggleTheme} />
      <Container>
        <Charts />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
