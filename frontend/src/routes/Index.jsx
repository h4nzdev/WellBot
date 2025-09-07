import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClientRoutes from "./ClientRoutes";
import AuthRoutes from "./AuthRoutes";

const Index = () => {
  const { user } = useContext(AuthContext);

  return user ? <ClientRoutes /> : <AuthRoutes />;
};

export default Index;
