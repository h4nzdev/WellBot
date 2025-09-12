import React from "react";
import { CheckCircle, Clock, MoreVertical } from "lucide-react";

const ClientAppointmentsTableBody = () => {
  const appointments = [
    {
      doctor: "Dr. Sarah Wilson",
      datetime: "2024-09-10 09:00 AM",
      status: "Confirmed",
    },
    {
      doctor: "Dr. Michael Brown",
      datetime: "2024-09-12 10:30 AM",
      status: "Pending",
    },
    {
      doctor: "Dr. Sarah Wilson",
      datetime: "2024-08-25 02:00 PM",
      status: "Completed",
    },
  ];

  return (
    <tbody>
      {appointments.map((appointment, index) => (
        <tr key={index} className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
          <td className="py-4 px-4 text-slate-700">{appointment.doctor}</td>
          <td className="py-4 px-4 text-slate-700">{appointment.datetime}</td>
          <td className="py-4 px-4">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm w-fit ${
                appointment.status === "Confirmed"
                  ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                  : appointment.status === "Pending"
                  ? "text-amber-700 bg-amber-50 border border-amber-200"
                  : "text-slate-700 bg-slate-100 border border-slate-200"
              }`}
            >
              {appointment.status === "Confirmed" || appointment.status === "Completed" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Clock className="w-4 h-4" />
              )}
              {appointment.status}
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

export default ClientAppointmentsTableBody;
