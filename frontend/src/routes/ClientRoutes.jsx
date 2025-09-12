import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import ClientDashboard from "../page/ClientPages/ClientDashboard/ClientDashboard";
import ClientAppointments from "../page/ClientPages/ClientAppointments/ClientAppointments";
import ClientChat from "../page/ClientPages/ClientChat/ClientChat";
import ClientMedicalRecords from "../page/ClientPages/ClientMedicalRecords/ClientMedicalRecords";
import ClientReminders from "../page/ClientPages/ClientReminders/ClientReminders";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/client/dashboard" />} />
      <Route
        path="/client/dashboard"
        element={
          <ClientLayout>
            <ClientDashboard />
          </ClientLayout>
        }
      />
      <Route
        path="/client/appointments"
        element={
          <ClientLayout>
            <ClientAppointments />
          </ClientLayout>
        }
      />
      <Route
        path="/client/chats"
        element={
          <ClientLayout>
            <ClientChat />
          </ClientLayout>
        }
      />
      <Route
        path="/client/medical-records"
        element={
          <ClientLayout>
            <ClientMedicalRecords />
          </ClientLayout>
        }
      />
      <Route
        path="/client/reminders"
        element={
          <ClientLayout>
            <ClientReminders />
          </ClientLayout>
        }
      />
    </Routes>
  );
};

export default ClientRoutes;
