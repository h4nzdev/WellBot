import { Clock, Phone, User } from "lucide-react";
import React from "react";

const ClientMapClinicDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Clinic Details
      </h3>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Phone className="h-4 w-4 mr-3" />
          <span className="text-sm">(555) 123-4567</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-3" />
          <span className="text-sm">Mon-Fri: 8AM-8PM</span>
        </div>
        <div className="flex items-center text-gray-600">
          <User className="h-4 w-4 mr-3" />
          <span className="text-sm">15+ Specialists</span>
        </div>
      </div>
    </div>
  );
};

export default ClientMapClinicDetails;
