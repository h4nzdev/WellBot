import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [role, setRole] = useState("Client");
  // const [user, setUser] = useState(() => {
  //   const savedUser = sessionStorage.getItem("user");
  //   return savedUser ? JSON.parse(savedUser) : false;
  // });
  // const [role, setRole] = useState(() => {
  //   const savedRole = sessionStorage.getItem("role");
  //   return savedRole || "Clinic";
  // });

  // useEffect(() => {
  //   sessionStorage.setItem("user", JSON.stringify(user));
  //   sessionStorage.setItem("role", role);
  // }, [user, role]);

  return (
    <AuthContext.Provider value={{ user, setUser, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
