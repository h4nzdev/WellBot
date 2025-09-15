/* eslint-disable react/prop-types */
const MedicalRecordsModal = ({ isOpen, setIsOpen, record }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Medical Record Details</h2>
        {record && (
          <div>
            <p><strong>Appointment ID:</strong> {record.appointmentId?._id}</p>
            <p><strong>Appointment Date:</strong> {new Date(record.appointmentId?.date).toLocaleDateString()}</p>
            <p><strong>Appointment Status:</strong> {record.appointmentId?.status}</p>
            <p><strong>Clinic:</strong> {record.clinicId?.clinicName}</p>
            <p><strong>Date Recorded:</strong> {new Date(record.createdAt).toLocaleDateString()}</p>
            <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
            <p><strong>Doctor:</strong> {record.doctorId?.name}</p>
            <p><strong>Specialty:</strong> {record.doctorId?.specialty}</p>
            <p><strong>Notes:</strong> {record.notes}</p>
            <div>
              <strong>Prescriptions:</strong>
              <ul>
                {record.prescriptions.map((p, i) => (
                  <li key={i}>{p.medication} - {p.dosage} - {p.instructions}</li>
                ))}
              </ul>
            </div>
            <p><strong>Treatment:</strong> {record.treatment}</p>
          </div>
        )}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MedicalRecordsModal;
