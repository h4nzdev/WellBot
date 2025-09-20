"use client";

import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Award,
  Stethoscope,
  MapPin,
  Edit,
  Settings,
  Badge,
} from "lucide-react";

const ClinicDoctorProfile = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                Doctor Profile
              </h1>
              <p className="text-slate-600 mt-1">
                View and manage doctor information
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Experience
                </p>
                <p className="text-4xl font-semibold text-slate-800">5</p>
                <p className="text-sm text-slate-500">Years</p>
              </div>
              <div className="bg-slate-500 p-4 rounded-2xl shadow-md">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Specialty
                </p>
                <p className="text-2xl font-semibold text-emerald-600">
                  Cardiologist
                </p>
              </div>
              <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Status
                </p>
                <p className="text-2xl font-semibold text-amber-600">Active</p>
              </div>
              <div className="bg-amber-500 p-4 rounded-2xl shadow-md">
                <Badge className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Availability
                </p>
                <p className="text-2xl font-semibold text-blue-600">1</p>
                <p className="text-sm text-slate-500">Days</p>
              </div>
              <div className="bg-blue-500 p-4 rounded-2xl shadow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Personal Information
                </h2>
                <button
                  type="button"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-cyan-100 p-3 rounded-xl">
                    <User className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Full Name
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      Jethro Galos
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Gender</p>
                    <p className="text-lg font-semibold text-slate-800">Male</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Qualification
                    </p>
                    <p className="text-lg font-semibold text-slate-800">MD</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Stethoscope className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Specialty
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      Cardiologist
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Experience
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      5 Years
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Badge className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Status</p>
                    <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-md text-sm w-fit">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mt-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Email Address
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      jethro@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Phone Number
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      0996988171
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Schedule */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Availability Schedule
                </h2>
                <button
                  type="button"
                  className="bg-slate-600 hover:bg-slate-700 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Manage
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Monday</h3>
                    <span className="inline-block bg-emerald-100 text-emerald-700 border border-emerald-300 px-2 py-1 rounded-md text-xs">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">09:00 - 17:00</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Tuesday</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 border border-slate-300 px-2 py-1 rounded-md text-xs">
                      Not Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">No schedule</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Wednesday</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 border border-slate-300 px-2 py-1 rounded-md text-xs">
                      Not Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">No schedule</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Thursday</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 border border-slate-300 px-2 py-1 rounded-md text-xs">
                      Not Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">No schedule</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Friday</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 border border-slate-300 px-2 py-1 rounded-md text-xs">
                      Not Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">No schedule</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Saturday</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 border border-slate-300 px-2 py-1 rounded-md text-xs">
                      Not Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">No schedule</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">Sunday</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 border border-slate-300 px-2 py-1 rounded-md text-xs">
                      Not Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">No schedule</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mt-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Account Details
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <User className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Doctor ID
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      #68ce1adb
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Calendar className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Joined Date
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      Sep 20, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClinicDoctorProfile;
