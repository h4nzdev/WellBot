import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClientRoutes from "./ClientRoutes";
import ClinicRoutes from "./ClinicRoutes";
import AuthRoutes from "./AuthRoutes";
import LandingPageRoutes from "./LandingPageRoutes";

const Index = () => {
  const { user, role } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // if at root path "/", send to /wellbot
    if (
      location.pathname.includes("/clinic") ||
      location.pathname.includes("/client")
    ) {
      return <Navigate to="/wellbot" replace />;
    }
    // else, allow auth + landing pages normally
    return (
      <>
        <AuthRoutes />
        <LandingPageRoutes />
      </>
    );
  }

  if (role === "Client") return <ClientRoutes />;
  if (role === "Clinic") return <ClinicRoutes />;

  return <LandingPageRoutes />;
};

export default Index;
