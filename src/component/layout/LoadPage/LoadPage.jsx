import { Backdrop, CircularProgress } from "@mui/material";

import React from "react";

export const LoadPage = ({ load }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={load}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default LoadPage;
