import { Pill } from "lucide-react";
import ClientPrescriptionsActive from "./components/ClientPrescriptionsActive";
import ClientPrescriptionsHistory from "./components/ClientPrescriptionsHistory";
import ClientPrescriptionMedicationReminders from "./components/ClientPrescriptionMedicationReminders";
import ClientPrescriptionsPharmacyInfo from "./components/ClientPrescriptionsPharmacyInfo";
import ClientPrescriptionsQuickActions from "./components/ClientPrescriptionsQuickActions";

const ClientPrescriptions = () => {
  return (
    <div className="w-full lg:px-0">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Prescriptions
        </h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          Manage your medications and refill requests
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Active Prescriptions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 sm:gap-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Active Prescriptions
              </h2>
              <button
                disabled
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm opacity-70 cursor-not-allowed select-none w-full sm:w-auto"
              >
                Request Refill
              </button>
            </div>
            <ClientPrescriptionsActive />
            {/* Prescription History */}
            <ClientPrescriptionsHistory />
          </div>
        </div>

        {/* Medication Reminders & Pharmacy */}
        <div className="lg:col-span-1">
          {/* Medication Reminders */}
          <ClientPrescriptionMedicationReminders />

          {/* Pharmacy Information */}
          <ClientPrescriptionsPharmacyInfo />

          {/* Quick Actions */}
          <ClientPrescriptionsQuickActions />
        </div>
      </div>
    </div>
  );
};

export default ClientPrescriptions;
