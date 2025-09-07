import React from "react";

const ClientProfileEmergencyContact = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Emergency Contact
      </h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <p className="font-medium text-gray-900">Jane Doe</p>
        </div>
        <div>
          <label className="text-sm text-gray-600">Relationship</label>
          <p className="font-medium text-gray-900">Spouse</p>
        </div>
        <div>
          <label className="text-sm text-gray-600">Phone</label>
          <p className="font-medium text-gray-900">(555) 123-4568</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProfileEmergencyContact;
