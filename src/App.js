import { CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";
import Navbar from "./component/layout/Navbar/Navbar";
import { theme } from "./theme/theme";
import Home from "./component/pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
