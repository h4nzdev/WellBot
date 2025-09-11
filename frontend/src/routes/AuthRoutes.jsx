import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../page/AuthPages/Login";
import Registere from "../page/AuthPages/Register";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Registere />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
