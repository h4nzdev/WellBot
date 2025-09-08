import { Routes, Route, Navigate } from "react-router-dom";
import ClinicPage from "../page/Clinic/ClinicPage";

const ClinicRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/clinic" />} />
      <Route path="/clinic" element={<ClinicPage />} />
    </Routes>
  );
};

export default ClinicRoutes;
