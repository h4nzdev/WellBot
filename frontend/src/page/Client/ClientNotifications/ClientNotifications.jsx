import { Calendar, Pill, FileText, Shield, X } from "lucide-react";
import ClientNotificationRecentNotification from "./components/ClientNotificationRecentNotification";
import ClientNotificationSettings from "./components/ClientNotificationSettings";

const ClientNotifications = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Notifications
        </h1>
        <p className="text-gray-600 mt-1">
          Stay updated with your health reminders and appointments
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Recent Notifications */}
        <ClientNotificationRecentNotification />

        {/* Notification Settings */}
        <ClientNotificationSettings />
      </div>
    </div>
  );
};

export default ClientNotifications;
