import React from "react";
import { CheckCircle, Clock } from "lucide-react";

const ClientAppointmentsTableBody = () => {
  const appointments = [
    {
      doctor: "Dr. Evelyn Reed",
      specialty: "Cardiologist",
      date: "2024-09-15",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      doctor: "Dr. Marcus Thorne",
      specialty: "Neurologist",
      date: "2024-09-20",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      doctor: "Dr. Lena Petrova",
      specialty: "Dermatologist",
      date: "2024-09-22",
      time: "11:00 AM",
      status: "Completed",
    },
  ];

  const getStatusIcon = (status) => {
    if (status === "Confirmed") {
      return <CheckCircle className="w-4 h-4 text-emerald-700" />;
    }
    if (status === "Pending") {
      return <Clock className="w-4 h-4 text-amber-700" />;
    }
    return <CheckCircle className="w-4 h-4 text-slate-700" />;
  };

  const getStatusClass = (status) => {
    if (status === "Confirmed") {
      return "text-emerald-700 bg-emerald-50 border border-emerald-200";
    }
    if (status === "Pending") {
      return "text-amber-700 bg-amber-50 border border-amber-200";
    }
    return "text-slate-700 bg-slate-100 border border-slate-200";
  };

  return (
    <tbody>
      {appointments.map((appointment, index) => (
        <tr key={index} className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
          <td className="py-4 px-4 text-slate-700">{appointment.doctor}</td>
          <td className="py-4 px-4 text-slate-700">{appointment.specialty}</td>
          <td className="py-4 px-4 text-slate-700">{appointment.date}</td>
          <td className="py-4 px-4 text-slate-700">{appointment.time}</td>
          <td className="py-4 px-4">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm w-fit ${getStatusClass(
                appointment.status
              )}`}
            >
              {getStatusIcon(appointment.status)}
              {appointment.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientAppointmentsTableBody;
