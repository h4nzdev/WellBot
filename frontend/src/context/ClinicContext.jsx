import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ClinicContext = createContext();

export const ClinicProvider = ({ children }) => {
  const [clinics, setClinics] = useState();

  const fetchClinics = async () => {
    try {
      const res = await axios.get("http://localhost:3000/clinic");
      setClinics(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  return (
    <ClinicContext.Provider value={{ clinics, setClinics, fetchClinics }}>
      {children}
    </ClinicContext.Provider>
  );
};
