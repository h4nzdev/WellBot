import React from "react";

const ClientAppointmentTips = () => {
  return (
    <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mt-6">
      <h3 className="font-medium text-blue-900 mb-3">Appointment Tips</h3>
      <ul className="text-sm text-blue-800 space-y-2">
        <li>• Arrive 15 minutes early</li>
        <li>• Bring your insurance card</li>
        <li>• List current medications</li>
        <li>• Prepare questions to ask</li>
      </ul>
    </div>
  );
};

export default ClientAppointmentTips;
