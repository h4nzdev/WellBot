import {
  CheckCircle,
  XCircle,
  Clock,
  CalendarCheck,
  CheckCheck,
  Ban,
  MoreHorizontal,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { AppointmentContext } from "../../../../context/AppointmentContext";
import { AuthContext } from "../../../../context/AuthContext";
import AppointmentActions from "./AppointmentActions";
import AddMedicalRecordModal from "../../../../components/ClinicComponents/AddMedicalRecordModal";
import {
  getStatusBadge,
  getStatusIcon,
} from "../../../../utils/appointmentStats";

const ClinicAppointmentsTableBody = () => {
  const { appointments } = useContext(AppointmentContext);
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const scheduledAppointments = appointments?.filter(
    (appointment) => appointment.clinicId?._id === user._id
  );

  const handleComplete = (appointmentId) => {
    const appointment = scheduledAppointments.find(
      (app) => app._id === appointmentId
    );
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCancel = (appointmentId) => {
    // logic to cancel appointment
    console.log(`Cancelling appointment ${appointmentId}`);
  };

  const handleDelete = (appointmentId) => {
    // logic to delete appointment
    console.log(`Deleting appointment ${appointmentId}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <>
      <tbody>
        {scheduledAppointments.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center py-6 text-slate-500 italic">
              No appointments found
            </td>
          </tr>
        ) : (
          <>
            {scheduledAppointments.map((appointment) => (
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
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm w-fit ${getStatusBadge(
                      appointment.status
                    )}`}
                  >
                    {getStatusIcon(appointment.status)}
                    {appointment.status}
                  </span>
                </td>
                <td className="px-4 text-sm">
                  <p className="text-slate-700">
                    {appointment.patientId.phone}
                  </p>
                  <p className="text-slate-500">
                    {appointment.patientId.email}
                  </p>
                </td>
                <td className="px-4 text-right">
                  <AppointmentActions
                    appointmentId={appointment._id}
                    status={appointment.status}
                    onComplete={handleComplete}
                    onCancel={handleCancel}
                    onDelete={handleDelete}
                  />
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
      {selectedAppointment && (
        <AddMedicalRecordModal
          isOpen={isModalOpen}
          onClose={closeModal}
          patientId={selectedAppointment.patientId._id}
          clinicId={selectedAppointment.clinicId._id}
          doctorId={selectedAppointment.doctorId._id}
          appointmentId={selectedAppointment._id}
        />
      )}
    </>
  );
};

export default ClinicAppointmentsTableBody;
