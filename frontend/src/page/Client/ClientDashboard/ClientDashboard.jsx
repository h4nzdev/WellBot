import {
  Activity,
  Calendar,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Pill,
  Stethoscope,
} from "lucide-react";

const ClientDashboard = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1">Welcome back, John Doe</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Appointments</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Health Score</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Prescriptions</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Pill className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Appointments and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Appointments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Appointments
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-3 rounded-full">
                <Stethoscope className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">General Checkup</p>
                <p className="text-xs text-gray-500">
                  January 15, 2024 • 10:00 AM
                </p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Completed
              </span>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full">
                <Heart className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Dr. Michael Chen</h3>
                <p className="text-sm text-gray-600">Cardiology Consultation</p>
                <p className="text-xs text-gray-500">
                  December 20, 2023 • 2:30 PM
                </p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Completed
              </span>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="bg-blue-100 p-3 rounded-full">
                <Stethoscope className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  Dr. Emily Rodriguez
                </h3>
                <p className="text-sm text-gray-600">Follow-up Consultation</p>
                <p className="text-xs text-gray-500">
                  January 25, 2024 • 9:00 AM
                </p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Upcoming
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
              <Calendar className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-green-700">
                Book Appointment
              </span>
            </button>

            <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
              <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-blue-700">
                AI Assistant
              </span>
            </button>

            <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
              <Pill className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-purple-700">
                Prescriptions
              </span>
            </button>

            <button className="flex flex-col items-center p-4 bg-red-50 rounded-lg border border-red-200 hover:bg-red-100 transition-colors">
              <MapPin className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-red-700">
                Find Clinics
              </span>
            </button>
          </div>

          {/* Health Tips */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h3 className="font-medium text-gray-900 mb-2">
              Today's Health Tip
            </h3>
            <p className="text-sm text-gray-600">
              Stay hydrated! Aim to drink at least 8 glasses of water throughout
              the day to maintain optimal health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
