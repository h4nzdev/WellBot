import React from "react";
import {
  User,
  Mail,
  Lock,
  Phone,
  Calendar,
  Heart,
  Shield,
  Eye,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white p-6 lg:p-12">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl mb-6">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-green-600">Join WellBot+</h1>
          <p className="text-gray-600 mt-3 text-lg">
            Create your account to start your health journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Account Setup */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Account Setup
              </h2>

              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="password"
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Create a password"
                    />
                    <Eye className="absolute inset-y-0 right-3 h-5 w-5 text-gray-400 my-auto" />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="password"
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Confirm your password"
                    />
                    <Eye className="absolute inset-y-0 right-3 h-5 w-5 text-gray-400 my-auto" />
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture (Optional)
                </label>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Choose File
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Personal Info + Emergency + Terms) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="First name"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="date"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="tel"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70">
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <textarea
                      rows="2"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Enter your full address"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Emergency Contact */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Emergency Contact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Emergency contact name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 my-auto" />
                    <input
                      type="tel"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70"
                      placeholder="Emergency contact phone"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-gray-700">
                    I agree to the{" "}
                    <span className="text-green-600 font-medium cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-green-600 font-medium cursor-pointer">
                      Privacy Policy
                    </span>
                  </p>
                </div>

                <button className="w-full bg-green-600 text-white py-4 px-4 rounded-xl font-medium hover:bg-green-700 transition">
                  Create My WellBot+ Account
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="font-medium text-green-600 cursor-pointer">
                        Sign in here
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center text-xs text-gray-500">
            <Shield className="h-4 w-4 mr-1 text-green-600" />
            Your personal health information is encrypted and secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
