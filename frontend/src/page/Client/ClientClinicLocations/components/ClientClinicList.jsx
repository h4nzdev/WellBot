import { Building, Navigation, Star } from "lucide-react";
import React from "react";

const ClientClinicList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Nearby Clinics
      </h3>

      <div className="space-y-4">
        {/* Green Valley Medical */}
        <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Building className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">
                Green Valley Medical
              </h4>
              <p className="text-sm text-gray-600">123 Main St, Downtown</p>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">4.8</span>
                </div>
                <div className="flex items-center">
                  <Navigation className="h-3 w-3 text-blue-600" />
                  <span className="text-xs text-gray-600 ml-1">0.8 mi</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Open Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sunrise Health Clinic */}
        <div className="p-4 bg-gray-50 rounded-lg border border-transparent">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Building className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">
                Sunrise Health Clinic
              </h4>
              <p className="text-sm text-gray-600">456 Oak Ave, Uptown</p>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">4.6</span>
                </div>
                <div className="flex items-center">
                  <Navigation className="h-3 w-3 text-blue-600" />
                  <span className="text-xs text-gray-600 ml-1">1.2 mi</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Closes 6 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wellness Point Hospital */}
        <div className="p-4 bg-gray-50 rounded-lg border border-transparent">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Building className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">
                Wellness Point Hospital
              </h4>
              <p className="text-sm text-gray-600">789 Pine St, Midtown</p>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">4.9</span>
                </div>
                <div className="flex items-center">
                  <Navigation className="h-3 w-3 text-blue-600" />
                  <span className="text-xs text-gray-600 ml-1">2.1 mi</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg cursor-not-allowed opacity-70 font-medium">
          Get Directions
        </button>
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg cursor-not-allowed opacity-70 font-medium">
          Call Clinic
        </button>
      </div>
    </div>
  );
};

export default ClientClinicList;
