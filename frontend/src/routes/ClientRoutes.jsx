import { Routes, Route, Navigate } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import ClientDashboard from "../page/Client/ClientDashboard/ClientDashboard";
import ClientAIChat from "../page/Client/ClientAIAssistant/ClientAIChat";
import ClientBookAppointment from "../page/Client/ClientBookAppointment/ClientBookAppointment";
import ClientClinicMap from "../page/Client/ClientClinicLocations/ClientClinicMap";
import ClientMedicalRecords from "../page/Client/ClientMedicalRecords/ClientMedicalRecords";
import ClientNotifications from "../page/Client/ClientNotifications/ClientNotifications";
import ClientProfile from "../page/Client/ClientProfile/ClientProfile";
import ClientPrescriptions from "../page/Client/Prescriptions/ClientPrescriptions";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/client/dashboard" />} />
      <Route
        path="/client/dashboard"
        element={
          <ClientLayout>
            <ClientDashboard />
          </ClientLayout>
        }
      />
      <Route
        path="/client/ai-assistant"
        element={
          <ClientLayout>
            <ClientAIChat />
          </ClientLayout>
        }
      />
      <Route
        path="/client/book-appointment"
        element={
          <ClientLayout>
            <ClientBookAppointment />
          </ClientLayout>
        }
      />
      <Route
        path="/client/clinic-locations"
        element={
          <ClientLayout>
            <ClientClinicMap />
          </ClientLayout>
        }
      />
      <Route
        path="/client/medical-records"
        element={
          <ClientLayout>
            <ClientMedicalRecords />
          </ClientLayout>
        }
      />
      <Route
        path="/client/notifications"
        element={
          <ClientLayout>
            <ClientNotifications />
          </ClientLayout>
        }
      />
      <Route
        path="/client/profile"
        element={
          <ClientLayout>
            <ClientProfile />
          </ClientLayout>
        }
      />
      <Route
        path="/client/prescriptions"
        element={
          <ClientLayout>
            <ClientPrescriptions />
          </ClientLayout>
        }
      />
    </Routes>
  );
};

export default ClientRoutes;
