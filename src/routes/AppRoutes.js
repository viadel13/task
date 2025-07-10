// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home/Home";
// import Features from "../pages/Features/Features";
// import Contact from "../pages/Contact/Contact";
// import About from "../pages/About/About";
//
// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/features" element={<Features />} />
//       <Route path="/contact" element={<Contact />} />
//       {/*<Route path="*" element={<NotFound />} />*/}
//     </Routes>
//   );
// };
//
// export default AppRoutes;

// router.jsx ou routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Features from "../pages/Features/Features";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contient ton layout (Navbar, Outlet, loader)
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
