import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientDashboard from "../page/ClientPages/ClientDashboard/ClientDashboard";

const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/client/dashboard" />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ClientRoutes;
