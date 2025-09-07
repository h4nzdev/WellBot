import React from "react";

const ClientPrescriptionsPharmacyInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6 select-none cursor-default">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Preferred Pharmacy
      </h3>
      <div className="space-y-3">
        <div className="p-3 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900">CVS Pharmacy</h4>
          <p className="text-sm text-gray-600">123 Main Street</p>
          <p className="text-sm text-gray-600">Downtown, State 12345</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-green-600">Open until 10 PM</span>
            <div className="text-blue-300 text-xs select-none cursor-not-allowed">
              Call Pharmacy
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm mt-4 text-center select-none cursor-default">
        Change Pharmacy
      </div>
    </div>
  );
};

export default ClientPrescriptionsPharmacyInfo;
