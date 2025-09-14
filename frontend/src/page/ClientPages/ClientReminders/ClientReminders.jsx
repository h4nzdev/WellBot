"use client";

import {
  BellRing,
  Plus,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Edit3,
  Trash2,
  Bell,
  ChevronDown,
} from "lucide-react";

const ClientReminders = () => {
  const reminders = [
    {
      reminder: "Take medication",
      time: "08:00 AM",
      status: "Active",
      notifyCount: 2,
    },
    {
      reminder: "Check blood sugar",
      time: "12:30 PM",
      status: "Active",
      notifyCount: 1,
    },
    {
      reminder: "Evening walk",
      time: "06:00 PM",
      status: "Inactive",
      notifyCount: 0,
    },
  ];

  const stats = {
    total: reminders.length,
    active: reminders.filter((r) => r.status === "Active").length,
    inactive: reminders.filter((r) => r.status === "Inactive").length,
    today: reminders.length,
  };

  return (
    <>
      <div className="w-full min-h-screen bg-slate-50">
        <div className="mx-auto">
          <header className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                  My Reminders
                </h1>
                <p className="text-slate-600 mt-2 font-medium tracking-wide">
                  Manage your personal health reminders.
                </p>
              </div>
              <button className="group flex items-center justify-center px-6 py-3 bg-cyan-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg hover:bg-cyan-700 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto border border-cyan-500/20">
                <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">
                  Set New Reminder
                </span>
              </button>
            </div>
          </header>

          <section className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-800 tracking-tight">
                    {stats.total}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Total Reminders
                  </p>
                </div>
                <div className="p-3 bg-slate-100/80 rounded-lg">
                  <BellRing className="w-6 h-6 text-slate-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-emerald-700 tracking-tight">
                    {stats.active}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Active
                  </p>
                </div>
                <div className="p-3 bg-emerald-100/80 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-600 tracking-tight">
                    {stats.inactive}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Inactive
                  </p>
                </div>
                <div className="p-3 bg-slate-100/80 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-200/50 shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-cyan-700 tracking-tight">
                    {stats.today}
                  </p>
                  <p className="text-slate-600 font-medium tracking-wide">
                    Due Today
                  </p>
                </div>
                <div className="p-3 bg-cyan-100/80 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-6 flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-lg font-bold text-slate-800 tracking-tight leading-tight">
                    {reminder.reminder}
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                      reminder.status === "Active"
                        ? "text-emerald-700 bg-emerald-50/80 border border-emerald-200/50 shadow-sm"
                        : "text-slate-700 bg-slate-100/80 border border-slate-200/50 shadow-sm"
                    }`}
                  >
                    <BellRing className="w-4 h-4" />
                    {reminder.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-cyan-600" />
                  <p className="text-cyan-700 font-bold tracking-wide">
                    {reminder.time}
                  </p>
                </div>
                <div className="mt-auto flex gap-2">
                  <button className="px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                    Remove
                  </button>

                  <div className="relative flex-1">
                    <button
                      className="dropdown-btn group w-full flex items-center justify-center px-4 py-3 bg-slate-100/80 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-slate-200/80 hover:shadow-md hover:scale-105 transition-all duration-300 border border-slate-200/50"
                      type="button"
                    >
                      <MoreVertical className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      <span className="font-semibold tracking-wide flex-1">
                        Options
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ClientReminders;
