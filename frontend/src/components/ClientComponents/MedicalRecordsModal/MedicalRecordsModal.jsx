/* eslint-disable react/prop-types */
import { X } from 'lucide-react';

const MedicalRecordsModal = ({ isOpen, setIsOpen, record }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Medical Record Details</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
          >
            <X size={28} />
          </button>
        </div>

        {record && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Appointment ID:</p>
                <p className="text-gray-900">{record.appointmentId?._id}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Appointment Date:</p>
                <p className="text-gray-900">{new Date(record.appointmentId?.date).toLocaleDateString()}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Appointment Status:</p>
                <p className="text-gray-900 capitalize">{record.appointmentId?.status}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Clinic:</p>
                <p className="text-gray-900">{record.clinicId?.clinicName}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Doctor:</p>
                <p className="text-gray-900">{record.doctorId?.name} ({record.doctorId?.specialty})</p>
              </div>
               <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Date Recorded:</p>
                <p className="text-gray-900">{new Date(record.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Diagnosis:</p>
              <p className="text-gray-900">{record.diagnosis}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Treatment:</p>
              <p className="text-gray-900">{record.treatment}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Notes:</p>
              <p className="text-gray-900">{record.notes}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prescriptions</h3>
              <ul className="space-y-2">
                {record.prescriptions.map((p, i) => (
                  <li key={i} className="bg-gray-50 p-3 rounded-lg flex justify-between">
                    <span>{p.medication}</span>
                    <span>{p.dosage}</span>
                    <span>{p.instructions}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-right">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordsModal;
