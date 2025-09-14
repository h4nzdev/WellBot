import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react";
import React, { useContext } from "react";
import { AppointmentContext } from "../../../../context/AppointmentContext";
import { AuthContext } from "../../../../context/AuthContext";

const ClinicAppointmentsTableBody = () => {
  const { appointments } = useContext(AppointmentContext);
  const { user } = useContext(AuthContext);

  const clinicAppointments = appointments?.filter(
    (appointment) => appointment.clinicId?._id === user._id
  );

  return (
    <tbody>
      {clinicAppointments.length > 0 ? (
        clinicAppointments.map((appointment) => (
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
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="p-2 hover:bg-slate-100 rounded-md text-green-500"
                  aria-label="Accept"
                >
                  <CheckCircle className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="p-2 hover:bg-slate-100 rounded-md text-red-500"
                  aria-label="Reject"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7" className="text-center py-8 text-slate-500">
            No appointments found.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ClinicAppointmentsTableBody;
