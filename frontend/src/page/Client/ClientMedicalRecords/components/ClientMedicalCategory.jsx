import React from "react";

const ClientMedicalCategory = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        <div className="w-full text-left px-3 py-2 bg-green-100 text-green-700 rounded-lg font-medium select-none cursor-default">
          All Records
        </div>
        <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
          Imaging
        </div>
        <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
          Prescriptions
        </div>
        <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
          Visit Notes
        </div>
        <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
          Vaccinations
        </div>
      </div>
    </div>
  );
};

export default ClientMedicalCategory;
