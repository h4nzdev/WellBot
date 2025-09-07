import { Calendar, FileText, Pill, Shield, X } from "lucide-react";
import React from "react";

const ClientNotificationRecentNotification = () => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Recent Notifications
        </h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="bg-blue-100 p-2 rounded-full">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">
                Appointment Reminder
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Your appointment with Dr. Emily Rodriguez is scheduled for
                tomorrow at 9:00 AM
              </p>
              <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
            </div>
            <div className="text-blue-300 cursor-not-allowed">
              <X className="h-4 w-4" />
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="bg-green-100 p-2 rounded-full">
              <Pill className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Medication Reminder</h3>
              <p className="text-sm text-gray-600 mt-1">
                Time to take your blood pressure medication (Lisinopril 10mg)
              </p>
              <p className="text-xs text-gray-500 mt-2">4 hours ago</p>
            </div>
            <div className="text-green-300 cursor-not-allowed">
              <X className="h-4 w-4" />
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="bg-purple-100 p-2 rounded-full">
              <FileText className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">
                Test Results Available
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Your blood work results from January 15th are now available in
                your medical records
              </p>
              <p className="text-xs text-gray-500 mt-2">1 day ago</p>
            </div>
            <div className="text-purple-300 cursor-not-allowed">
              <X className="h-4 w-4" />
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Shield className="h-4 w-4 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Health Checkup Due</h3>
              <p className="text-sm text-gray-600 mt-1">
                It's time for your annual health checkup. Would you like to
                schedule an appointment?
              </p>
              <p className="text-xs text-gray-500 mt-2">3 days ago</p>
            </div>
            <div className="text-yellow-300 cursor-not-allowed">
              <X className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientNotificationRecentNotification;
