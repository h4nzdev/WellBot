import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:3000/appointment");
      setAppointments(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  console.log(appointments)

  return (
    <AppointmentContext.Provider
      value={{ appointments, setAppointments, fetchAppointments }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
