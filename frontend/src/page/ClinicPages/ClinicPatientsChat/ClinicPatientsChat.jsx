"use client";

import {
  User,
  MessageCircle,
  Search,
  ChevronDown,
  Filter,
  MoreHorizontal,
} from "lucide-react";

export default function ClinicPatientsChat() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-3">
          <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
              Patient Chat Overview
            </h1>
            <p className="text-slate-600 mt-1">
              View recent chatbot conversations from patients
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients or symptoms..."
              className="pl-10 h-12 rounded-xl border border-slate-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-200 w-full"
              disabled
            />
          </div>

          <button
            type="button"
            className="flex items-center h-12 px-4 rounded-xl border border-slate-200 hover:border-cyan-300 bg-transparent text-slate-700 cursor-not-allowed"
            disabled
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Chat Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg p-6">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-slate-50">
              <tr>
                <th className="py-4 px-4 font-semibold text-slate-700">
                  Patient
                </th>
                <th className="py-4 px-4 font-semibold text-slate-700">
                  Last Chat Snippet
                </th>
                <th className="py-4 px-4 font-semibold text-slate-700">
                  Last Interaction
                </th>
                <th className="py-4 px-4 font-semibold text-slate-700 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
                    JS
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">John Smith</p>
                    <p className="text-sm text-slate-500">ID: #0001</p>
                  </div>
                </td>
                <td
                  className="py-4 px-4 text-slate-700 max-w-xl truncate"
                  title="I have been having a severe headache and some migraine symptoms for the last two days."
                >
                  I have been having a severe headache and some migraine
                  symptoms for the last two days.
                </td>
                <td className="py-4 px-4 text-slate-600">
                  2024-09-10 09:15 AM
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    type="button"
                    className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md inline-flex items-center justify-center"
                    disabled
                    aria-label="View chat details"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
                    MG
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Maria Garcia</p>
                    <p className="text-sm text-slate-500">ID: #0002</p>
                  </div>
                </td>
                <td
                  className="py-4 px-4 text-slate-700 max-w-xl truncate"
                  title="I have a persistent cough and mild fever. What should I do?"
                >
                  I have a persistent cough and mild fever. What should I do?
                </td>
                <td className="py-4 px-4 text-slate-600">
                  2024-09-10 10:45 AM
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    type="button"
                    className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md inline-flex items-center justify-center"
                    disabled
                    aria-label="View chat details"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
                    DW
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">David Wilson</p>
                    <p className="text-sm text-slate-500">ID: #0003</p>
                  </div>
                </td>
                <td
                  className="py-4 px-4 text-slate-700 max-w-xl truncate"
                  title="Experiencing shortness of breath and chest tightness."
                >
                  Experiencing shortness of breath and chest tightness.
                </td>
                <td className="py-4 px-4 text-slate-600">
                  2024-09-11 08:30 AM
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    type="button"
                    className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md inline-flex items-center justify-center"
                    disabled
                    aria-label="View chat details"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <p>Showing 3 of 10 patients</p>
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
