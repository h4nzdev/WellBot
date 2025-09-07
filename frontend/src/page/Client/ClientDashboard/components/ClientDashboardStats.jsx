import { Activity, Calendar, Clock, Pill } from "lucide-react";
import React from "react";

const ClientDashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Appointments</p>
            <p className="text-2xl font-bold text-gray-900">24</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Upcoming</p>
            <p className="text-2xl font-bold text-gray-900">3</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <Clock className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Health Score</p>
            <p className="text-2xl font-bold text-gray-900">85%</p>
          </div>
          <div className="bg-red-100 p-3 rounded-lg">
            <Activity className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Prescriptions</p>
            <p className="text-2xl font-bold text-gray-900">2</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <Pill className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardStats;
