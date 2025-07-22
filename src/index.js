import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';

import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>,
);
