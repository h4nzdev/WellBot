import React from "react";
import { BellRing, MoreVertical } from "lucide-react";

const ClientRemindersTableBody = () => {
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
    <tbody>
      {reminders.map((reminder, index) => (
        <tr key={index} className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
          <td className="py-4 px-4 text-slate-700">{reminder.reminder}</td>
          <td className="py-4 px-4 text-slate-700">{reminder.time}</td>
          <td className="py-4 px-4">
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
          </td>
          <td className="py-4 px-4">
            <button className="p-2 text-slate-500 hover:text-slate-700">
              <MoreVertical className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientRemindersTableBody;
