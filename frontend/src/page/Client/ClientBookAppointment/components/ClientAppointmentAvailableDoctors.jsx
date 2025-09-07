import { Activity, Heart, Stethoscope, Users } from "lucide-react";
import React from "react";

const ClientAppointmentAvailableDoctors = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Available Doctors
      </h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="bg-green-100 p-2 rounded-full">
            <Stethoscope className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Dr. Sarah Johnson</h4>
            <p className="text-xs text-gray-600">General Medicine</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-green-600">Available Today</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="bg-blue-100 p-2 rounded-full">
            <Heart className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Dr. Michael Chen</h4>
            <p className="text-xs text-gray-600">Cardiology</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-xs text-yellow-600">Limited Slots</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="bg-purple-100 p-2 rounded-full">
            <Users className="h-4 w-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Dr. Emily Rodriguez</h4>
            <p className="text-xs text-gray-600">Pediatrics</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-green-600">Available Today</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="bg-red-100 p-2 rounded-full">
            <Activity className="h-4 w-4 text-red-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Dr. Raj Patel</h4>
            <p className="text-xs text-gray-600">Dermatology</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-xs text-red-600">Fully Booked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAppointmentAvailableDoctors;
