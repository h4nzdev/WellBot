import React from "react";

const ClientPrescriptionsHistory = () => {
  return (
    <div className="mt-6 sm:mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recent History
      </h3>
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg select-none cursor-default gap-2 sm:gap-0">
          <div>
            <p className="font-medium text-gray-900">Amoxicillin 500mg</p>
            <p className="text-sm text-gray-600">Completed antibiotic course</p>
          </div>
          <div className="text-left sm:text-right">
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              Completed
            </span>
            <p className="text-xs text-gray-500 mt-1">Dec 2023</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg select-none cursor-default gap-2 sm:gap-0">
          <div>
            <p className="font-medium text-gray-900">Ibuprofen 400mg</p>
            <p className="text-sm text-gray-600">Pain relief as needed</p>
          </div>
          <div className="text-left sm:text-right">
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              Discontinued
            </span>
            <p className="text-xs text-gray-500 mt-1">Nov 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPrescriptionsHistory;
