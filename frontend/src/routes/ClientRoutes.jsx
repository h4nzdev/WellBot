import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import ClientDashboard from "../page/Client/ClientDashboard/ClientDashboard";
import ClientProfile from "../page/Client/ClientProfile/ClientProfile";
import ClientAIChat from "../page/Client/ClientAIAssistant/ClientAIChat";
import ClientBookAppointment from "../page/Client/ClientBookAppointment/ClientBookAppointment";
import ClientClinicMap from "../page/Client/ClientClinicLocations/ClientClinicMap";
import ClientNotifications from "../page/Client/ClientNotifications/ClientNotifications";
import ClientMedicalRecords from "../page/Client/ClientMedicalRecords/ClientMedicalRecords";
import ClientPrescriptions from "../page/Client/Prescriptions/ClientPrescriptions";

function ClientRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route
        path="/"
        element={
          <ClientLayout>
            <ClientDashboard />
          </ClientLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <ClientLayout>
            <ClientProfile />
          </ClientLayout>
        }
      />
      <Route
        path="/ai-assistant"
        element={
          <ClientLayout>
            <ClientAIChat />
          </ClientLayout>
        }
      />
      <Route
        path="/book-appointment"
        element={
          <ClientLayout>
            <ClientBookAppointment />
          </ClientLayout>
        }
      />
      <Route
        path="/clinic-locations"
        element={
          <ClientLayout>
            <ClientClinicMap />
          </ClientLayout>
        }
      />
      <Route
        path="/notifications"
        element={
          <ClientLayout>
            <ClientNotifications />
          </ClientLayout>
        }
      />
      <Route
        path="/medical-records"
        element={
          <ClientLayout>
            <ClientMedicalRecords />
          </ClientLayout>
        }
      />
      <Route
        path="/prescriptions"
        element={
          <ClientLayout>
            <ClientPrescriptions />
          </ClientLayout>
        }
      />
    </Routes>
  );
}

export default ClientRoutes;
