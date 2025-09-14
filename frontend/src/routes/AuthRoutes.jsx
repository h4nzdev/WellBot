import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientLogin from "../page/AuthPages/ClientAuth/ClientLogin";
import ClientRegister from "../page/AuthPages/ClientAuth/ClientRegister";
import ClinicLogin from "../page/AuthPages/ClinicAuth/ClinicLogin";
import ClinicRegister from "../page/AuthPages/ClinicAuth/ClinicRegister";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/clinic/login" />} />
        <Route path="/clinic/login" element={<ClinicLogin />} />
        <Route path="/clinic/register" element={<ClinicRegister />} />
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/client/register" element={<ClientRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
