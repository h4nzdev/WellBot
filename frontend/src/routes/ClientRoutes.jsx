import ClientDashboard from "../page/Client/ClientDashboard/ClientDashboard";
import ClientProfile from "../page/Client/ClientProfile/ClientProfile";
import ClientAIChat from "../page/Client/ClientAIAssistant/ClientAIChat";
import ClientBookAppointment from "../page/Client/ClientBookAppointment/ClientBookAppointment";
import ClientClinicMap from "../page/Client/ClientClinicLocations/ClientClinicMap";
import ClientNotifications from "../page/Client/ClientNotifications/ClientNotifications";
import ClientMedicalRecords from "../page/Client/ClientMedicalRecords/ClientMedicalRecords";
import ClientPrescriptions from "../page/Client/Prescriptions/ClientPrescriptions";
import ClientLayout from "../layout/ClientLayout";
import { Routes, Route, Navigate } from "react-router-dom";

const ClientRoutes = () => {
  return (
    <ClientLayout>
      <Routes>
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="profile" element={<ClientProfile />} />
        <Route path="ai-assistant" element={<ClientAIChat />} />
        <Route path="book-appointment" element={<ClientBookAppointment />} />
        <Route path="clinic-locations" element={<ClientClinicMap />} />
        <Route path="notifications" element={<ClientNotifications />} />
        <Route path="medical-records" element={<ClientMedicalRecords />} />
        <Route path="prescriptions" element={<ClientPrescriptions />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </ClientLayout>
  );
};

export default ClientRoutes;
