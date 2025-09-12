import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import ClientDashboard from "../page/ClientPages/ClientDashboard/ClientDashboard";

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
    </Routes>
  );
};

export default ClientRoutes;
