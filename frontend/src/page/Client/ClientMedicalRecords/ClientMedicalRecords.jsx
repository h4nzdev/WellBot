import { FileText, Activity, Stethoscope, Shield, Heart } from "lucide-react";

const ClientMedicalRecords = () => {
  return (
    <div className="w-full">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Medical Records
        </h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          Access your complete health history and documents
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Categories
            </h3>
            <div className="space-y-2">
              <div className="w-full text-left px-3 py-2 bg-green-100 text-green-700 rounded-lg font-medium select-none cursor-default">
                All Records
              </div>
              <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
                Imaging
              </div>
              <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
                Prescriptions
              </div>
              <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
                Visit Notes
              </div>
              <div className="w-full text-left px-3 py-2 text-gray-600 rounded-lg select-none cursor-default">
                Vaccinations
              </div>
            </div>
          </div>
        </div>

        {/* Records List */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 sm:gap-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Recent Records
              </h2>
              <button
                disabled
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm opacity-70 cursor-not-allowed select-none w-full sm:w-auto"
              >
                Request Records
              </button>
            </div>

            <div className="space-y-4">
              {/* Record Item */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="bg-blue-100 p-3 rounded-full w-fit">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    Blood Work Results
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete Blood Count, Lipid Panel
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Dr. Sarah Johnson
                    </span>
                    <span className="text-xs text-gray-500">
                      January 15, 2024
                    </span>
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
                    <span className="text-xs text-gray-500">
                      Dr. Michael Chen
                    </span>
                    <span className="text-xs text-gray-500">
                      December 20, 2023
                    </span>
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
                  <h3 className="font-medium text-gray-900">
                    Annual Physical Exam
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete health assessment
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Dr. Sarah Johnson
                    </span>
                    <span className="text-xs text-gray-500">
                      November 10, 2023
                    </span>
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
                  <h3 className="font-medium text-gray-900">
                    COVID-19 Vaccination
                  </h3>
                  <p className="text-sm text-gray-600">
                    Pfizer-BioNTech Booster
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Wellness Point Hospital
                    </span>
                    <span className="text-xs text-gray-500">
                      October 5, 2023
                    </span>
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
                  <h3 className="font-medium text-gray-900">
                    Cardiology Consultation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Heart rhythm assessment
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-500">
                      Dr. Michael Chen
                    </span>
                    <span className="text-xs text-gray-500">
                      September 22, 2023
                    </span>
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

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-6 border-t border-gray-200 gap-4 sm:gap-0">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Showing 1-5 of 23 records
              </p>
              <div className="flex justify-center sm:justify-end space-x-2 select-none">
                <div className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-400 cursor-not-allowed">
                  Previous
                </div>
                <div className="px-3 py-1 bg-green-600 text-white rounded text-sm cursor-default">
                  1
                </div>
                <div className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-400 cursor-not-allowed">
                  2
                </div>
                <div className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-400 cursor-not-allowed">
                  3
                </div>
                <div className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-400 cursor-not-allowed">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMedicalRecords;
