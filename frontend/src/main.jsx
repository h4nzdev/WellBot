import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";

import App from "./App.jsx";
import { DoctorProvider } from "./context/DoctorContext.jsx";
import { PatientsProvider } from "./context/PatientsContext.jsx";
import { AppointmentProvider } from "./context/AppointmentContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DoctorProvider>
      <PatientsProvider>
        <AppointmentProvider>
          <App />
        </AppointmentProvider>
      </PatientsProvider>
    </DoctorProvider>
  </AuthProvider>
);
