import { Stethoscope, Heart, Users, Activity } from "lucide-react";

const ClientBookAppointment = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Book Appointment
        </h1>
        <p className="text-gray-600 mt-1">
          Schedule your next visit with our healthcare professionals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Appointment Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Appointment Details
            </h2>

            <div className="space-y-6">
              {/* Clinic Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Clinic
                </label>
                <select
                  disabled
                  value="green-valley"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                >
                  <option value="green-valley">
                    Green Valley Medical Center
                  </option>
                  <option value="sunrise">Sunrise Health Clinic</option>
                  <option value="wellness-point">
                    Wellness Point Hospital
                  </option>
                </select>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor
                </label>
                <select
                  disabled
                  value="dr-johnson"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                >
                  <option value="dr-johnson">
                    Dr. Sarah Johnson - General Medicine
                  </option>
                  <option value="dr-chen">Dr. Michael Chen - Cardiology</option>
                  <option value="dr-rodriguez">
                    Dr. Emily Rodriguez - Pediatrics
                  </option>
                  <option value="dr-patel">Dr. Raj Patel - Dermatology</option>
                  <option value="dr-wilson">
                    Dr. Lisa Wilson - Orthopedics
                  </option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    disabled
                    value="2024-06-15"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    disabled
                    value="9:00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                  >
                    <option value="9:00">9:00 AM</option>
                    <option value="9:30">9:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Appointment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Type
                </label>
                <select
                  disabled
                  value="consultation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                >
                  <option value="consultation">General Consultation</option>
                  <option value="follow-up">Follow-up Visit</option>
                  <option value="check-up">Health Check-up</option>
                  <option value="urgent">Urgent Care</option>
                  <option value="vaccination">Vaccination</option>
                </select>
              </div>

              {/* Reason for Visit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  disabled
                  rows="4"
                  value="I have been experiencing mild headaches and would like a consultation."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex space-x-4">
                <button
                  disabled
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium opacity-70 cursor-not-allowed"
                >
                  Book Appointment
                </button>
                <button
                  disabled
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium opacity-70 cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Doctors */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Available Doctors
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-full">
                  <Stethoscope className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    Dr. Sarah Johnson
                  </h4>
                  <p className="text-xs text-gray-600">General Medicine</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">
                      Available Today
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Heart className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    Dr. Michael Chen
                  </h4>
                  <p className="text-xs text-gray-600">Cardiology</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-xs text-yellow-600">
                      Limited Slots
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    Dr. Emily Rodriguez
                  </h4>
                  <p className="text-xs text-gray-600">Pediatrics</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">
                      Available Today
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-red-100 p-2 rounded-full">
                  <Activity className="h-4 w-4 text-red-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Dr. Raj Patel</h4>
                  <p className="text-xs text-gray-600">Dermatology</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-xs text-red-600">Fully Booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Tips */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mt-6">
            <h3 className="font-medium text-blue-900 mb-3">Appointment Tips</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Arrive 15 minutes early</li>
              <li>• Bring your insurance card</li>
              <li>• List current medications</li>
              <li>• Prepare questions to ask</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBookAppointment;
