import React from "react";

const ClientPrescriptionsQuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6 select-none cursor-default">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        <div className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg text-sm text-center">
          Transfer Prescription
        </div>
        <div className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg text-sm text-center">
          Report Side Effect
        </div>
        <div className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm text-center">
          Medication Guide
        </div>
      </div>
    </div>
  );
};

export default ClientPrescriptionsQuickActions;
