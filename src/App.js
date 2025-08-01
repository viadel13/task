import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import Navbar from "./component/layout/Navbar/Navbar";
import { theme } from "./theme/theme";
import LoadPage from "./component/layout/LoadPage/LoadPage";
import Footer from "./component/layout/Footer/Footer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {isLoading && <LoadPage load={isLoading} />}

        <main className="content">
          <Outlet />
        </main>

        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
