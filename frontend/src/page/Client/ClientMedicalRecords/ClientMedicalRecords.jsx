import { FileText, Activity, Stethoscope, Shield, Heart } from "lucide-react";
import ClientMedicalCategory from "./components/ClientMedicalCategory";
import ClientMedicalRecordsList from "./components/ClientMedicalRecordsList";
import ClientMedicalPagination from "./components/ClientMedicalPagination";

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
          <ClientMedicalCategory />
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
            <ClientMedicalRecordsList />
            {/* Pagination */}
            <ClientMedicalPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMedicalRecords;
