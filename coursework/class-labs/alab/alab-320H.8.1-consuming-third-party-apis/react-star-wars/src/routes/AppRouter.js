import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import StarshipCard from "../components/StarshipCard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/starship:id" element={<StarshipCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
