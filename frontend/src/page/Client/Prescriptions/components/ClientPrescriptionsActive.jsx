import { Pill } from "lucide-react";
import React from "react";

const ClientPrescriptionsActive = () => {
  return (
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
            <span className="text-xs text-gray-500">30 tablets remaining</span>
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
          <p className="text-xs text-gray-500 mt-2">Refill due: Feb 15</p>
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
            <span className="text-xs text-gray-500">45 tablets remaining</span>
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
          <p className="text-xs text-gray-500 mt-2">Refill due: Feb 20</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="bg-yellow-100 p-3 rounded-full w-fit">
          <Pill className="h-5 w-5 text-yellow-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">Vitamin D3 1000 IU</h3>
          <p className="text-sm text-gray-600">Take 1 capsule daily</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
            <span className="text-xs text-gray-500">
              Prescribed by Dr. Sarah Johnson
            </span>
            <span className="text-xs text-gray-500">15 capsules remaining</span>
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
          <p className="text-xs text-gray-500 mt-2">Refill due: Feb 10</p>
        </div>
      </div>
    </div>
  );
};

export default ClientPrescriptionsActive;
