'use client';

import {
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Plus,
  Bot,
  BellRing,
} from 'lucide-react';

export default function ClientDashboard() {
  const healthTips = [
    'Stay hydrated by drinking at least 8 glasses of water a day.',
    'Incorporate at least 30 minutes of moderate-intensity exercise into your daily routine.',
    'Ensure you get 7-9 hours of quality sleep per night for better health.',
    'A balanced diet rich in fruits, vegetables, and whole grains is key to a healthy lifestyle.',
  ];

  const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto p-4 sm:p-6 max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
            Welcome, John!
          </h1>
          <p className="text-slate-600 mt-1">
            Here’s a summary of your health journey.
          </p>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Upcoming Appointments
                </p>
                <p className="text-4xl font-semibold text-slate-800">3</p>
              </div>
              <div className="bg-cyan-500 p-4 rounded-2xl shadow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between h-full">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Health Tip of the Day
                </p>
                <p className="text-slate-700 mt-2">{randomTip}</p>
              </div>
              <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 font-semibold">
              <Plus className="w-6 h-6 mr-3 text-cyan-600" />
              Book Appointment
            </button>
            <button className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 font-semibold">
              <Bot className="w-6 h-6 mr-3 text-cyan-600" />
              Start AI Chat
            </button>
            <button className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 font-semibold">
              <BellRing className="w-6 h-6 mr-3 text-cyan-600" />
              Set Reminder
            </button>
          </div>
        </section>

        {/* Recent Appointments */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Recent Appointments
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left min-w-[700px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-4 px-4 font-semibold text-slate-700">
                    Doctor
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-700">
                    Date & Time
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-slate-700">Dr. Sarah Wilson</td>
                  <td className="py-4 px-4 text-slate-700">
                    2024-09-10 09:00 AM
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-emerald-700 bg-emerald-50 border border-emerald-200 text-sm w-fit">
                      <CheckCircle className="w-4 h-4" />
                      Confirmed
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-slate-700">
                    Dr. Michael Brown
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    2024-09-12 10:30 AM
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-amber-700 bg-amber-50 border border-amber-200 text-sm w-fit">
                      <Clock className="w-4 h-4" />
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-slate-700">Dr. Sarah Wilson</td>
                  <td className="py-4 px-4 text-slate-700">
                    2024-08-25 02:00 PM
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-700 bg-slate-100 border border-slate-200 text-sm w-fit">
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
