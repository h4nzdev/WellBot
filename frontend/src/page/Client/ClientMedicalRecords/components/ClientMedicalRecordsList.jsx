import { Activity, FileText, Heart, Shield, Stethoscope } from "lucide-react";
import React from "react";

const ClientMedicalRecordsList = () => {
  return (
    <div className="space-y-4">
      {/* Record Item */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="bg-blue-100 p-3 rounded-full w-fit">
          <FileText className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">Blood Work Results</h3>
          <p className="text-sm text-gray-600">
            Complete Blood Count, Lipid Panel
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-gray-500">Dr. Sarah Johnson</span>
            <span className="text-xs text-gray-500">January 15, 2024</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full select-none cursor-default w-fit">
              Normal
            </span>
          </div>
        </div>
        <div className="text-blue-300 cursor-not-allowed select-none text-sm font-medium">
          View Details
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <div className="bg-purple-100 p-3 rounded-full w-fit">
          <Activity className="h-5 w-5 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">Chest X-Ray</h3>
          <p className="text-sm text-gray-600">Routine chest imaging</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-gray-500">Dr. Michael Chen</span>
            <span className="text-xs text-gray-500">December 20, 2023</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full select-none cursor-default w-fit">
              Clear
            </span>
          </div>
        </div>
        <div className="text-purple-300 cursor-not-allowed select-none text-sm font-medium">
          View Image
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="bg-green-100 p-3 rounded-full w-fit">
          <Stethoscope className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">Annual Physical Exam</h3>
          <p className="text-sm text-gray-600">Complete health assessment</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-gray-500">Dr. Sarah Johnson</span>
            <span className="text-xs text-gray-500">November 10, 2023</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full select-none cursor-default w-fit">
              Follow-up
            </span>
          </div>
        </div>
        <div className="text-green-300 cursor-not-allowed select-none text-sm font-medium">
          View Notes
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="bg-yellow-100 p-3 rounded-full w-fit">
          <Shield className="h-5 w-5 text-yellow-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">COVID-19 Vaccination</h3>
          <p className="text-sm text-gray-600">Pfizer-BioNTech Booster</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-gray-500">
              Wellness Point Hospital
            </span>
            <span className="text-xs text-gray-500">October 5, 2023</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full select-none cursor-default w-fit">
              Complete
            </span>
          </div>
        </div>
        <div className="text-yellow-300 cursor-not-allowed select-none text-sm font-medium">
          View Certificate
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="bg-red-100 p-3 rounded-full w-fit">
          <Heart className="h-5 w-5 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">Cardiology Consultation</h3>
          <p className="text-sm text-gray-600">Heart rhythm assessment</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-gray-500">Dr. Michael Chen</span>
            <span className="text-xs text-gray-500">September 22, 2023</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full select-none cursor-default w-fit">
              Stable
            </span>
          </div>
        </div>
        <div className="text-red-300 cursor-not-allowed select-none text-sm font-medium">
          View Report
        </div>
      </div>
    </div>
  );
};

export default ClientMedicalRecordsList;
