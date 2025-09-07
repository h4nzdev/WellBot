import React from "react";

const ClientPrescriptionMedicationReminders = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Today's Medications
      </h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg select-none cursor-default">
          <div>
            <p className="font-medium text-gray-900">Lisinopril</p>
            <p className="text-xs text-gray-600">8:00 AM</p>
          </div>
          <div className="bg-green-600 text-white px-3 py-1 rounded text-xs select-none cursor-default">
            Taken
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg select-none cursor-default">
          <div>
            <p className="font-medium text-gray-900">Metformin</p>
            <p className="text-xs text-gray-600">12:00 PM</p>
          </div>
          <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs select-none cursor-default">
            Mark Taken
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg select-none cursor-default">
          <div>
            <p className="font-medium text-gray-900">Metformin</p>
            <p className="text-xs text-gray-600">6:00 PM</p>
          </div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded text-xs select-none cursor-default">
            Pending
          </div>
        </div>
      </div>

      <div className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm mt-4 text-center select-none cursor-default">
        Set Reminder
      </div>
    </div>
  );
};

export default ClientPrescriptionMedicationReminders;
