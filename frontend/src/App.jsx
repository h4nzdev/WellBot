import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClinicDashboard from "./page/ClinicPages/ClinicDashboard";
import ClinicLayout from "./layout/ClinicLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/clinic/dashboard"
          element={
            <ClinicLayout>
              <ClinicDashboard />
            </ClinicLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
