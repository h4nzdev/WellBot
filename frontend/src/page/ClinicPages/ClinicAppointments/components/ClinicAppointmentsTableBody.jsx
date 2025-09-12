import { CheckCircle, MoreHorizontal } from "lucide-react";
import React, { useContext } from "react";
import { AppointmentContext } from "../../../../context/AppointmentContext";

const ClinicAppointmentsTableBody = () => {
  const { appointments } = useContext(AppointmentContext);
  return (
    <tbody>
      {/* Appointment Row 1 */}
      {appointments.map((appointment) => (
        <tr className="hover:bg-slate-50 transition-colors border-t border-slate-200">
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
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-emerald-700 bg-emerald-50 border border-emerald-200 text-sm w-fit">
              <CheckCircle className="w-4 h-4" />
              {appointment.status}
            </span>
          </td>
          <td className="px-4 text-sm">
            <p className="text-slate-700">{appointment.patientId.phone}</p>
            <p className="text-slate-500">{appointment.patientId.email}</p>
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
      ))}
      {/* Add more rows similarly if needed */}
    </tbody>
  );
};

export default ClinicAppointmentsTableBody;
