import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { registerSW } from 'vite-plugin-pwa/dist/registerSW.js';

import App from "./App.jsx";
import { DoctorProvider } from "./context/DoctorContext.jsx";
import { PatientsProvider } from "./context/PatientsContext.jsx";
import { AppointmentProvider } from "./context/AppointmentContext.jsx";
import { ClinicProvider } from "./context/ClinicContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DoctorProvider>
      <PatientsProvider>
        <AppointmentProvider>
          <ClinicProvider>
            <App />
          </ClinicProvider>
        </AppointmentProvider>
      </PatientsProvider>
    </DoctorProvider>
  </AuthProvider>
);

registerSW({ immediate: true });
