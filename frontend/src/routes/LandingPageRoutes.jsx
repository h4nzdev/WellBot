import { Routes, Route } from "react-router-dom";
import WellBotLandingPage from "../page/LandingPage/WellBotLandingPage";

const LandingPageRoutes = () => {
  return (
    <Routes>
      <Route path="/wellbot" element={<WellBotLandingPage />} />
    </Routes>
  );
};

export default LandingPageRoutes;
