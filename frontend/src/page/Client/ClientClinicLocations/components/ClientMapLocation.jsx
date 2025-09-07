import { MapPin } from "lucide-react";
import React from "react";

const ClientMapLocation = () => {
  return (
    <div className="h-96 lg:h-[500px] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
      <div className="text-center">
        <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <p className="text-gray-600">Interactive Map View</p>
        <p className="text-sm text-gray-500 mt-2">
          Map integration would show clinic locations
        </p>
      </div>

      {/* Mock location pins */}
      <div className="absolute top-20 left-20 bg-green-600 text-white p-2 rounded-full shadow-lg">
        <MapPin className="h-4 w-4" />
      </div>
      <div className="absolute top-32 right-32 bg-blue-600 text-white p-2 rounded-full shadow-lg">
        <MapPin className="h-4 w-4" />
      </div>
      <div className="absolute bottom-24 left-1/3 bg-purple-600 text-white p-2 rounded-full shadow-lg">
        <MapPin className="h-4 w-4" />
      </div>
    </div>
  );
};

export default ClientMapLocation;
