import { Calendar, MapPin, MessageSquare, Pill } from "lucide-react";
import React from "react";

const ClientDashboardQuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
          <Calendar className="h-8 w-8 text-green-600 mb-2" />
          <span className="text-sm font-medium text-green-700">
            Book Appointment
          </span>
        </button>

        <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
          <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium text-blue-700">
            AI Assistant
          </span>
        </button>

        <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
          <Pill className="h-8 w-8 text-purple-600 mb-2" />
          <span className="text-sm font-medium text-purple-700">
            Prescriptions
          </span>
        </button>

        <button className="flex flex-col items-center p-4 bg-red-50 rounded-lg border border-red-200 hover:bg-red-100 transition-colors">
          <MapPin className="h-8 w-8 text-red-600 mb-2" />
          <span className="text-sm font-medium text-red-700">Find Clinics</span>
        </button>
      </div>

      {/* Health Tips */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="font-medium text-gray-900 mb-2">Today's Health Tip</h3>
        <p className="text-sm text-gray-600">
          Stay hydrated! Aim to drink at least 8 glasses of water throughout the
          day to maintain optimal health.
        </p>
      </div>
    </div>
  );
};

export default ClientDashboardQuickActions;
