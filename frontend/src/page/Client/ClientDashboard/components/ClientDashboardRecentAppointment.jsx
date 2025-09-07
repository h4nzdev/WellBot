import { Heart, Stethoscope } from "lucide-react";
import React from "react";

const ClientDashboardRecentAppointment = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Recent Appointments
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-green-100 p-3 rounded-full">
            <Stethoscope className="h-5 w-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">Dr. Sarah Johnson</h3>
            <p className="text-sm text-gray-600">General Checkup</p>
            <p className="text-xs text-gray-500">January 15, 2024 • 10:00 AM</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Completed
          </span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-blue-100 p-3 rounded-full">
            <Heart className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">Dr. Michael Chen</h3>
            <p className="text-sm text-gray-600">Cardiology Consultation</p>
            <p className="text-xs text-gray-500">December 20, 2023 • 2:30 PM</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Completed
          </span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="bg-blue-100 p-3 rounded-full">
            <Stethoscope className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">Dr. Emily Rodriguez</h3>
            <p className="text-sm text-gray-600">Follow-up Consultation</p>
            <p className="text-xs text-gray-500">January 25, 2024 • 9:00 AM</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            Upcoming
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardRecentAppointment;
