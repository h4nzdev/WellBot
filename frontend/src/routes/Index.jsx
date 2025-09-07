import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import WellBotLandingPage from "../page/LandingPage/WellBotLandingPage";
import Login from "../page/Auth/Login";
import Registration from "../page/Auth/Registration";
import ClientRoutes from "./ClientRoutes";
import DoctorRoutes from "./DoctorRoutes";

const Index = () => {
  const { user, role } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            {/* Landing Page and Auth Routes */}
            <Route path="/" element={<WellBotLandingPage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Registration />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* Authenticated Routes */}
            {role === "Client" && (
              <Route path="/client/*" element={<ClientRoutes />} />
            )}
            {role === "Doctor" && (
              <Route path="/doctor/*" element={<DoctorRoutes />} />
            )}
            {/* Redirect to home based on role */}
            <Route
              path="*"
              element={
                <Navigate
                  to={
                    role === "Client"
                      ? "/client/dashboard"
                      : "/doctor/dashboard"
                  }
                  replace
                />
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
