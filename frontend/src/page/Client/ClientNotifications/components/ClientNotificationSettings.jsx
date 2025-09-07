import React from "react";

const ClientNotificationSettings = () => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Notification Settings
        </h3>

        <div className="space-y-4">
          {[
            {
              label: "Appointment Reminders",
              description: "Get notified before appointments",
              enabled: true,
            },
            {
              label: "Medication Reminders",
              description: "Daily medication notifications",
              enabled: true,
            },
            {
              label: "Test Results",
              description: "Lab and test result notifications",
              enabled: true,
            },
            {
              label: "Health Tips",
              description: "Daily health and wellness tips",
              enabled: false,
            },
            {
              label: "Promotional",
              description: "Special offers and updates",
              enabled: false,
            },
          ].map(({ label, description, enabled }) => (
            <div key={label} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  {label}
                </label>
                <p className="text-xs text-gray-600">{description}</p>
              </div>
              <div
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  enabled ? "bg-green-600" : "bg-gray-200"
                } cursor-default`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    enabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="space-y-3">
          <button
            disabled
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm opacity-70 cursor-not-allowed"
          >
            Mark All as Read
          </button>
          <button
            disabled
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm opacity-70 cursor-not-allowed"
          >
            Clear All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientNotificationSettings;
