import { Calendar, Pill, FileText, Shield, X } from "lucide-react";

const ClientNotifications = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Notifications
        </h1>
        <p className="text-gray-600 mt-1">
          Stay updated with your health reminders and appointments
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Recent Notifications */}
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
                  <h3 className="font-medium text-gray-900">
                    Medication Reminder
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Time to take your blood pressure medication (Lisinopril
                    10mg)
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
                    Your blood work results from January 15th are now available
                    in your medical records
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
                  <h3 className="font-medium text-gray-900">
                    Health Checkup Due
                  </h3>
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

        {/* Notification Settings */}
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
      </div>
    </div>
  );
};

export default ClientNotifications;
