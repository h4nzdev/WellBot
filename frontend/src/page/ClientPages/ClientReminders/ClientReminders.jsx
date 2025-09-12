import React from "react";
import { BellRing, Plus, MoreVertical } from "lucide-react";

const ClientReminders = () => {
  const reminders = [
    {
      reminder: "Take Vitamin D supplement",
      time: "08:00 AM",
      status: "Active",
    },
    {
      reminder: "Drink a glass of water",
      time: "Every hour",
      status: "Active",
    },
    {
      reminder: "Evening walk",
      time: "06:00 PM",
      status: "Inactive",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                My Reminders
              </h1>
              <p className="text-slate-600 mt-1">
                Manage your personal health reminders.
              </p>
            </div>
            <button className="flex items-center justify-center p-3 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-700 transition-all duration-300 w-full sm:w-auto">
              <Plus className="w-6 h-6 mr-2" />
              Set New Reminder
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 flex flex-col hover:shadow-cyan-100 transition-shadow"
            >
              <div className="flex justify-between items-start">
                <p className="text-lg font-semibold text-slate-800">
                  {reminder.reminder}
                </p>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm w-fit ${
                    reminder.status === "Active"
                      ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                      : "text-slate-700 bg-slate-100 border border-slate-200"
                  }`}
                >
                  <BellRing className="w-4 h-4" />
                  {reminder.status}
                </span>
              </div>
              <p className="text-cyan-600 font-medium mt-1">{reminder.time}</p>
              <div className="mt-auto pt-4">
                <button className="w-full flex items-center justify-center p-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                  <MoreVertical className="w-5 h-5 mr-2" />
                  View Options
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClientReminders;
