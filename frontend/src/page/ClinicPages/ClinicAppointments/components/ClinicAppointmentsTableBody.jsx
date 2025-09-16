import {
  CheckCircle,
  XCircle,
  Clock,
  CalendarCheck,
  CheckCheck,
  Ban,
  MoreHorizontal,
} from "lucide-react";
import React, { useContext } from "react";
import { AppointmentContext } from "../../../../context/AppointmentContext";
import { AuthContext } from "../../../../context/AuthContext";
import AppointmentActions from "./AppointmentActions";

const ClinicAppointmentsTableBody = () => {
  const { appointments } = useContext(AppointmentContext);
  const { user } = useContext(AuthContext);

  const scheduledAppointments = appointments?.filter(
    (appointment) =>
      appointment.clinicId?._id === user._id &&
      appointment.status === "scheduled"
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "accepted":
        return <CheckCircle className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      case "scheduled":
        return <CalendarCheck className="w-4 h-4" />;
      case "completed":
        return <CheckCheck className="w-4 h-4" />;
      case "cancelled":
        return <Ban className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  const handleComplete = (appointmentId) => {
    // logic to mark appointment as complete
    console.log(`Marking appointment ${appointmentId} as complete`);
  };

  const handleCancel = (appointmentId) => {
    // logic to cancel appointment
    console.log(`Cancelling appointment ${appointmentId}`);
  };

  const handleDelete = (appointmentId) => {
    // logic to delete appointment
    console.log(`Deleting appointment ${appointmentId}`);
  };

  return (
    <tbody>
      {scheduledAppointments.length > 0 ? (
        scheduledAppointments.map((appointment) => (
          <tr
            key={appointment._id}
            className="hover:bg-slate-50 transition-colors border-t border-slate-200"
          >
            <td className="py-4 px-4">
              <p className="font-semibold text-slate-800">
                {appointment.patientId.name}
              </p>
              <p className="text-sm text-slate-500">ID: #0001</p>
            </td>
            <td className="px-4">
              <p className="font-medium text-slate-700">
                {appointment.doctorId.name}
              </p>
            </td>
            <td className="px-4">
              <p className="font-medium text-slate-700">
                {appointment.date.slice(1, 10)}
              </p>
              <p className="text-sm text-slate-500">09:00 AM</p>
            </td>
            <td className="px-4">
              <span className="inline-block bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-sm">
                Consultation
              </span>
            </td>
            <td className="px-4">
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm w-fit ${
                  {
                    pending:
                      "text-amber-700 bg-amber-50 border border-amber-200",
                    accepted:
                      "text-green-700 bg-green-50 border border-green-200",
                    rejected: "text-red-700 bg-red-50 border border-red-200",
                    scheduled:
                      "text-blue-700 bg-blue-50 border border-blue-200",
                    completed:
                      "text-purple-700 bg-purple-50 border border-purple-200",
                    cancelled:
                      "text-gray-700 bg-gray-50 border border-gray-200",
                  }[appointment.status] ||
                  "text-slate-700 bg-slate-100 border border-slate-200"
                }`}
              >
                {getStatusIcon(appointment.status)}
                {appointment.status}
              </span>
            </td>
            <td className="px-4 text-sm">
              <p className="text-slate-700">{appointment.patientId.phone}</p>
              <p className="text-slate-500">{appointment.patientId.email}</p>
            </td>
            <td className="px-4 text-right">
              <AppointmentActions
                appointmentId={appointment._id}
                onComplete={handleComplete}
                onCancel={handleCancel}
                onDelete={handleDelete}
              />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7" className="text-center py-8 text-slate-500">
            No scheduled appointments found.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ClinicAppointmentsTableBody;
