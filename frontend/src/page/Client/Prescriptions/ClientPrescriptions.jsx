import { Pill } from "lucide-react";

const ClientPrescriptions = () => {
  return (
    <div className="w-full lg:px-0">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Prescriptions
        </h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          Manage your medications and refill requests
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Active Prescriptions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 sm:gap-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Active Prescriptions
              </h2>
              <button
                disabled
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm opacity-70 cursor-not-allowed select-none w-full sm:w-auto"
              >
                Request Refill
              </button>
            </div>

            <div className="space-y-4">
              {/* Prescription Item */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="bg-green-100 p-3 rounded-full w-fit">
                  <Pill className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Lisinopril 10mg</h3>
                  <p className="text-sm text-gray-600">
                    Take 1 tablet daily for blood pressure
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Prescribed by Dr. Michael Chen
                    </span>
                    <span className="text-xs text-gray-500">
                      30 tablets remaining
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "75%" }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 select-none cursor-default">
                      75% remaining
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right select-none cursor-default">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    Refill due: Feb 15
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="bg-blue-100 p-3 rounded-full w-fit">
                  <Pill className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Metformin 500mg</h3>
                  <p className="text-sm text-gray-600">
                    Take 2 tablets twice daily with meals
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Prescribed by Dr. Sarah Johnson
                    </span>
                    <span className="text-xs text-gray-500">
                      45 tablets remaining
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 select-none cursor-default">
                      50% remaining
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right select-none cursor-default">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    Refill due: Feb 20
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="bg-yellow-100 p-3 rounded-full w-fit">
                  <Pill className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    Vitamin D3 1000 IU
                  </h3>
                  <p className="text-sm text-gray-600">Take 1 capsule daily</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Prescribed by Dr. Sarah Johnson
                    </span>
                    <span className="text-xs text-gray-500">
                      15 capsules remaining
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "25%" }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 select-none cursor-default">
                      25% remaining
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right select-none cursor-default">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Low Stock
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    Refill due: Feb 10
                  </p>
                </div>
              </div>
            </div>

            {/* Prescription History */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent History
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg select-none cursor-default gap-2 sm:gap-0">
                  <div>
                    <p className="font-medium text-gray-900">
                      Amoxicillin 500mg
                    </p>
                    <p className="text-sm text-gray-600">
                      Completed antibiotic course
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      Completed
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Dec 2023</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg select-none cursor-default gap-2 sm:gap-0">
                  <div>
                    <p className="font-medium text-gray-900">Ibuprofen 400mg</p>
                    <p className="text-sm text-gray-600">
                      Pain relief as needed
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      Discontinued
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Nov 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medication Reminders & Pharmacy */}
        <div className="lg:col-span-1">
          {/* Medication Reminders */}
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

          {/* Pharmacy Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6 select-none cursor-default">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preferred Pharmacy
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">CVS Pharmacy</h4>
                <p className="text-sm text-gray-600">123 Main Street</p>
                <p className="text-sm text-gray-600">Downtown, State 12345</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-1 sm:gap-0">
                  <span className="text-xs text-green-600">
                    Open until 10 PM
                  </span>
                  <div className="text-blue-300 text-xs select-none cursor-not-allowed">
                    Call Pharmacy
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm mt-4 text-center select-none cursor-default">
              Change Pharmacy
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6 select-none cursor-default">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <div className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg text-sm text-center">
                Transfer Prescription
              </div>
              <div className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg text-sm text-center">
                Report Side Effect
              </div>
              <div className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm text-center">
                Medication Guide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPrescriptions;
