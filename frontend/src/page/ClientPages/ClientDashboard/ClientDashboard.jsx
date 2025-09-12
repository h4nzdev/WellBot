"use client";

import {
  Calendar,
  User,
  FileText,
  MessageCircle,
  CreditCard,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

export default function ClientDashboard() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto p-6 max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
            Dashboard
          </h1>
          <p className="text-slate-600 mt-1">
            Welcome back! Here’s an overview of your clinic.
          </p>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Appointments
                </p>
                <p className="text-4xl font-semibold text-slate-800">8</p>
              </div>
              <div className="bg-cyan-500 p-4 rounded-2xl shadow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Patients
                </p>
                <p className="text-4xl font-semibold text-slate-800">12</p>
              </div>
              <div className="bg-slate-500 p-4 rounded-2xl shadow-md">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Medical Records
                </p>
                <p className="text-4xl font-semibold text-slate-800">24</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-2xl shadow-md">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Subscriptions
                </p>
                <p className="text-4xl font-semibold text-slate-800">Pro</p>
              </div>
              <div className="bg-cyan-600 p-4 rounded-2xl shadow-md">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
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
                    Patient
                  </th>
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
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    John Smith
                  </td>
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
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    Maria Garcia
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    Dr. Michael Brown
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    2024-09-10 10:30 AM
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-amber-700 bg-amber-50 border border-amber-200 text-sm w-fit">
                      <Clock className="w-4 h-4" />
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    David Johnson
                  </td>
                  <td className="py-4 px-4 text-slate-700">Dr. Sarah Wilson</td>
                  <td className="py-4 px-4 text-slate-700">
                    2024-09-10 02:00 PM
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-cyan-700 bg-cyan-50 border border-cyan-200 text-sm w-fit">
                      <CheckCircle className="w-4 h-4" />
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Patient Chats */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Recent Patient Chats
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
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
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    John Smith
                  </td>
                  <td
                    className="py-4 px-4 text-slate-700 truncate max-w-xl"
                    title="I have been having a severe headache and some migraine symptoms for the last two days."
                  >
                    I have been having a severe headache and some migraine
                    symptoms for the last two days.
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    2024-09-10 09:15 AM
                  </td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    Maria Garcia
                  </td>
                  <td
                    className="py-4 px-4 text-slate-700 truncate max-w-xl"
                    title="I have a persistent cough and mild fever. What should I do?"
                  >
                    I have a persistent cough and mild fever. What should I do?
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    2024-09-10 10:45 AM
                  </td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    David Wilson
                  </td>
                  <td
                    className="py-4 px-4 text-slate-700 truncate max-w-xl"
                    title="Experiencing shortness of breath and chest tightness."
                  >
                    Experiencing shortness of breath and chest tightness.
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    2024-09-11 08:30 AM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Subscription Summary */}
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Subscription
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 max-w-md">
            <p className="text-lg font-medium text-cyan-700 mb-2">Pro Plan</p>
            <p className="text-slate-600 mb-4">Billed monthly at $29.99</p>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Active</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
