import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GiffArray from "./components/GifArray";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={GiffArray} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
