"use client";

import {
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Plus,
  Bot,
  BellRing,
} from "lucide-react";

export default function ClientDashboard() {
  const healthTips = [
    "Stay hydrated by drinking at least 8 glasses of water a day.",
    "Incorporate at least 30 minutes of moderate-intensity exercise into your daily routine.",
    "Ensure you get 7-9 hours of quality sleep per night for better health.",
    "A balanced diet rich in fruits, vegetables, and whole grains is key to a healthy lifestyle.",
  ];

  const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50">
      <div className="mx-auto px-4">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Welcome, John!
          </h1>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-medium">
            Here's a summary of your health journey.
          </p>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 p-5 md:p-6 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Upcoming Appointments
                </p>
                <p className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                  3
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 p-5 md:p-6 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 pr-3">
                <p className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Health Tip of the Day
                </p>
                <p className="text-slate-700 mt-2 leading-relaxed font-medium text-sm md:text-base">
                  {randomTip}
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 md:mb-6 tracking-tight">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
            <button className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 text-slate-700 font-bold group text-sm md:text-base">
              <Plus className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
              Book Appointment
            </button>
            <button className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 text-slate-700 font-bold group text-sm md:text-base">
              <Bot className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
              Start AI Chat
            </button>
            <button className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 text-slate-700 font-bold group text-sm md:text-base">
              <BellRing className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
              Set Reminder
            </button>
          </div>
        </section>

        {/* Recent Appointments */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 md:mb-6 tracking-tight">
            Recent Appointments
          </h2>

          {/* Mobile Card Layout */}
          <div className="block md:hidden space-y-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-base">
                    Dr. Sarah Wilson
                  </h3>
                  <p className="text-slate-600 text-sm">2024-09-10 09:00 AM</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-emerald-700 bg-emerald-50/80 border border-emerald-200/50 text-xs font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  Confirmed
                </span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-base">
                    Dr. Michael Brown
                  </h3>
                  <p className="text-slate-600 text-sm">2024-09-12 10:30 AM</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-amber-700 bg-amber-50/80 border border-amber-200/50 text-xs font-semibold">
                  <Clock className="w-3 h-3" />
                  Pending
                </span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-base">
                    Dr. Sarah Wilson
                  </h3>
                  <p className="text-slate-600 text-sm">2024-08-25 02:00 PM</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-slate-700 bg-slate-100/80 border border-slate-200/50 text-xs font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  Completed
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-white/20 bg-white/80 backdrop-blur-sm shadow-xl">
            <table className="w-full text-left">
              <thead className="bg-slate-50/80 backdrop-blur-sm">
                <tr>
                  <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                    Doctor
                  </th>
                  <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                    Date & Time
                  </th>
                  <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200/50 hover:bg-slate-50/50 transition-all duration-300">
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                    Dr. Sarah Wilson
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                    2024-09-10 09:00 AM
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-emerald-700 bg-emerald-50/80 border border-emerald-200/50 text-sm font-semibold backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4" />
                      Confirmed
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200/50 hover:bg-slate-50/50 transition-all duration-300">
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                    Dr. Michael Brown
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                    2024-09-12 10:30 AM
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-amber-700 bg-amber-50/80 border border-amber-200/50 text-sm font-semibold backdrop-blur-sm">
                      <Clock className="w-4 h-4" />
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200/50 hover:bg-slate-50/50 transition-all duration-300">
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                    Dr. Sarah Wilson
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                    2024-08-25 02:00 PM
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-slate-700 bg-slate-100/80 border border-slate-200/50 text-sm font-semibold backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4" />
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
