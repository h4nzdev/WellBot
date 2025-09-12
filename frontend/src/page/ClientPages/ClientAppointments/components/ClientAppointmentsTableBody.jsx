import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const ClientAppointmentsTableBody = () => {
  const appointments = [
    {
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiology",
      date: "2024-09-15",
      time: "09:00 AM",
      status: "confirmed",
    },
    {
      doctor: "Dr. Michael Brown",
      specialty: "Dermatology",
      date: "2024-09-18",
      time: "10:30 AM",
      status: "pending",
    },
    {
      doctor: "Dr. Emily Davis",
      specialty: "Neurology",
      date: "2024-09-20",
      time: "02:00 PM",
      status: "confirmed",
    },
    {
      doctor: "Dr. James Miller",
      specialty: "Orthopedics",
      date: "2024-09-22",
      time: "11:15 AM",
      status: "pending",
    },
    {
      doctor: "Dr. Lisa Anderson",
      specialty: "Pediatrics",
      date: "2024-09-25",
      time: "03:30 PM",
      status: "confirmed",
    },
  ];

  const getStatusBadge = () => {
    switch (status) {
      case "confirmed":
        return (
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-emerald-700 bg-emerald-50/80 border border-emerald-200/50 text-sm font-bold backdrop-blur-sm">
            <CheckCircle className="w-4 h-4" />
            Confirmed
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-amber-700 bg-amber-50/80 border border-amber-200/50 text-sm font-bold backdrop-blur-sm">
            <Clock className="w-4 h-4" />
            Pending
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-red-700 bg-red-50/80 border border-red-200/50 text-sm font-bold backdrop-blur-sm">
            <AlertCircle className="w-4 h-4" />
            Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-slate-700 bg-slate-100/80 border border-slate-200/50 text-sm font-bold backdrop-blur-sm">
            <CheckCircle className="w-4 h-4" />
            Completed
          </span>
        );
    }
  };

  return (
    <tbody>
      {appointments.map((appointment, index) => (
        <tr
          key={index}
          className="border-t border-slate-200/50 hover:bg-slate-50/50 transition-all duration-300"
        >
          <td className="py-5 px-6 text-slate-700 font-bold">
            {appointment.doctor}
          </td>
          <td className="py-5 px-6 text-slate-700 font-medium">
            {appointment.specialty}
          </td>
          <td className="py-5 px-6 text-slate-700 font-medium">
            {appointment.date}
          </td>
          <td className="py-5 px-6 text-slate-700 font-medium">
            {appointment.time}
          </td>
          <td className="py-5 px-6">{getStatusBadge(appointment.status)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientAppointmentsTableBody;
