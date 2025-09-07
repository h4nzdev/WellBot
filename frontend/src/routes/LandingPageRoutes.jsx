import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WellBotLandingPage from "../page/LandingPage/WellBotLandingPage";

const LandingPageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="wellbot" element={<WellBotLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LandingPageRoutes;
