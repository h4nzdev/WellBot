import React from "react";

const ClientMedicalPagination = () => {
  return (
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
  );
};

export default ClientMedicalPagination;
