import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClinicAppointments from "../page/ClinicPages/ClinicAppointments/ClinicAppointments";
import ClinicLayout from "../layout/ClinicLayout";
import ClinicPatients from "../page/ClinicPages/ClinicPatients/ClinicPatients";
import ClinicDoctors from "../page/ClinicPages/ClinicDoctors/ClinicDoctors";
import ClinicPatientsChat from "../page/ClinicPages/ClinicPatientsChat/ClinicPatientsChat";
import ClinicMedicalRecords from "../page/ClinicPages/ClinicMedicalRecords/ClinicMedicalRecords";
import ClinicSubscriptions from "../page/ClinicPages/ClinicSubscriptions/ClinicSubscriptions";
import ClinicDashboard from "../page/ClinicPages/ClinicDashboard/ClinicDashboard";

const ClinicRoutes = () => {
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
        <Route
          path="/clinic/appointments"
          element={
            <ClinicLayout>
              <ClinicAppointments />
            </ClinicLayout>
          }
        />
        <Route
          path="/clinic/patients"
          element={
            <ClinicLayout>
              <ClinicPatients />
            </ClinicLayout>
          }
        />
        <Route
          path="/clinic/doctors"
          element={
            <ClinicLayout>
              <ClinicDoctors />
            </ClinicLayout>
          }
        />
        <Route
          path="/clinic/patients-chats"
          element={
            <ClinicLayout>
              <ClinicPatientsChat />
            </ClinicLayout>
          }
        />
        <Route
          path="/clinic/medical-records"
          element={
            <ClinicLayout>
              <ClinicMedicalRecords />
            </ClinicLayout>
          }
        />
        <Route
          path="/clinic/subscriptions"
          element={
            <ClinicLayout>
              <ClinicSubscriptions />
            </ClinicLayout>
          }
        />
        <Route path="*" element={<Navigate to="/clinic/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ClinicRoutes;
