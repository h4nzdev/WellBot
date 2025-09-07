import React from "react";

const ClientProfileInsuranceInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Insurance Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Insurance Provider
          </label>
          <input
            type="text"
            value="Blue Cross Blue Shield"
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Policy Number
          </label>
          <input
            type="text"
            value="BC123456789"
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ClientProfileInsuranceInfo;
