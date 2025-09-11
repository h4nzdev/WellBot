"use client";

import {
  Calendar,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

export default function ClinicAppointments() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                Appointments
              </h1>
              <p className="text-slate-600 mt-1">
                Manage and track all patient appointments
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Appointments
                </p>
                <p className="text-4xl font-semibold text-slate-800">8</p>
              </div>
              <div className="bg-slate-500 p-4 rounded-2xl shadow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Confirmed
                </p>
                <p className="text-4xl font-semibold text-emerald-600">3</p>
              </div>
              <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Pending
                </p>
                <p className="text-4xl font-semibold text-amber-600">3</p>
              </div>
              <div className="bg-amber-500 p-4 rounded-2xl shadow-md">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Completed
                </p>
                <p className="text-4xl font-semibold text-cyan-600">1</p>
              </div>
              <div className="bg-cyan-500 p-4 rounded-2xl shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search appointments..."
                  className="pl-10 h-12 rounded-xl border border-slate-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-200 w-full"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex items-center h-12 px-4 rounded-xl border border-slate-200 hover:border-cyan-300 bg-transparent text-slate-700"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Status: All
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>

                <button
                  type="button"
                  className="flex items-center h-12 px-4 rounded-xl border border-slate-200 hover:border-cyan-300 bg-transparent text-slate-700"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Doctor: All
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Add Button */}
            <button
              type="button"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 h-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Appointment
            </button>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="font-semibold text-slate-700 py-4 px-4">
                    Patient
                  </th>
                  <th className="font-semibold text-slate-700 px-4">Doctor</th>
                  <th className="font-semibold text-slate-700 px-4">
                    Date & Time
                  </th>
                  <th className="font-semibold text-slate-700 px-4">Type</th>
                  <th className="font-semibold text-slate-700 px-4">Status</th>
                  <th className="font-semibold text-slate-700 px-4">Contact</th>
                  <th className="font-semibold text-slate-700 px-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Appointment Row 1 */}
                <tr className="hover:bg-slate-50 transition-colors border-t border-slate-200">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-slate-800">John Smith</p>
                    <p className="text-sm text-slate-500">ID: #0001</p>
                  </td>
                  <td className="px-4">
                    <p className="font-medium text-slate-700">
                      Dr. Sarah Wilson
                    </p>
                  </td>
                  <td className="px-4">
                    <p className="font-medium text-slate-700">2024-09-10</p>
                    <p className="text-sm text-slate-500">09:00 AM</p>
                  </td>
                  <td className="px-4">
                    <span className="inline-block bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-sm">
                      Consultation
                    </span>
                  </td>
                  <td className="px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-emerald-700 bg-emerald-50 border border-emerald-200 text-sm w-fit">
                      <CheckCircle className="w-4 h-4" />
                      Confirmed
                    </span>
                  </td>
                  <td className="px-4 text-sm">
                    <p className="text-slate-700">+1 (555) 123-4567</p>
                    <p className="text-slate-500">john.smith@email.com</p>
                  </td>
                  <td className="px-4 text-right">
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md flex items-center justify-center"
                        disabled
                        aria-label="Actions"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Add more rows similarly if needed */}
              </tbody>
            </table>
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <p>Showing 3 of 8 appointments</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                className="rounded-lg bg-transparent border border-slate-300 px-3 py-1 text-slate-400 cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                disabled
                className="rounded-lg bg-transparent border border-slate-300 px-3 py-1 text-slate-400 cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
