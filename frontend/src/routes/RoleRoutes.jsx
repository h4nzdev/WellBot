import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClinicRoutes from "./ClinicRoutes";
import ClientRoutes from "./ClientRoutes";
import AuthRoutes from "./AuthRoutes";

const RoleRoutes = () => {
  const { role, user } = useContext(AuthContext);

  if (!user) {
    return <AuthRoutes />;
  }

  if (role === "Clinic") return <ClinicRoutes />;
  if (role === "Client") return <ClientRoutes />;
  return null;
};

export default RoleRoutes;
