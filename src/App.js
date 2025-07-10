import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Navbar from "./component/layout/Navbar/Navbar";
import { theme } from "./theme/theme";
import LoadPage from "./component/layout/LoadPage/LoadPage";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {isLoading && <LoadPage load={isLoading} />}
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
