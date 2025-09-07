import {
  MapPin,
  Building,
  Star,
  Navigation,
  Phone,
  Clock,
  Users,
} from "lucide-react";

const ClientClinicMap = () => {
  // Static selected clinic
  const selectedClinic = "green-valley";

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Clinic Locations
        </h1>
        <p className="text-gray-600 mt-1">
          Find healthcare facilities near you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Mock Map */}
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
          </div>
        </div>

        {/* Clinic List */}
        <div className="lg:col-span-1">
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
                    <p className="text-sm text-gray-600">
                      123 Main St, Downtown
                    </p>
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">4.8</span>
                      </div>
                      <div className="flex items-center">
                        <Navigation className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-gray-600 ml-1">
                          0.8 mi
                        </span>
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
                        <span className="text-xs text-gray-600 ml-1">
                          1.2 mi
                        </span>
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
                    <p className="text-sm text-gray-600">
                      789 Pine St, Midtown
                    </p>
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">4.9</span>
                      </div>
                      <div className="flex items-center">
                        <Navigation className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-gray-600 ml-1">
                          2.1 mi
                        </span>
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

          {/* Clinic Details */}
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
                <Users className="h-4 w-4 mr-3" />
                <span className="text-sm">15+ Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientClinicMap;
