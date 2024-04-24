import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import Home from "./pages/Home";
import Trailer from "./pages/Trailer";

import { AnimatePresence } from "framer-motion";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trailer" element={<Trailer />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
