import React, { useState, useEffect } from "react";
import axios from "axios";

const AddMedicalRecordModal = ({
  isOpen,
  onClose,
  appointment,
  patientId,
  clinicId,
  doctorId,
  appointmentId,
}) => {
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [notes, setNotes] = useState("");
  const [prescriptions, setPrescriptions] = useState([
    { medicine: "", dosage: "", duration: "" },
  ]);

  const handlePrescriptionChange = (index, event) => {
    const values = [...prescriptions];
    values[index][event.target.name] = event.target.value;
    setPrescriptions(values);
  };

  const handleAddPrescription = () => {
    setPrescriptions([...prescriptions, { medicine: "", dosage: "", duration: "" }]);
  };

  const handleRemovePrescription = (index) => {
    const values = [...prescriptions];
    values.splice(index, 1);
    setPrescriptions(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/medical-records/add-records", {
        patientId,
        clinicId,
        doctorId,
        appointmentId,
        diagnosis,
        treatment,
        notes,
        prescriptions,
      });
      console.log("Medical record added:", response.data);
      onClose(); // Close modal on success
    } catch (error) {
      console.error("Error adding medical record:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Add Medical Record</h2>
        <form onSubmit={handleSubmit}>
          {/* Diagnosis */}
          <div className="mb-4">
            <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">
              Diagnosis
            </label>
            <input
              type="text"
              id="diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Treatment */}
          <div className="mb-4">
            <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">
              Treatment
            </label>
            <textarea
              id="treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Prescriptions */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Prescriptions</h3>
            {prescriptions.map((prescription, index) => (
              <div key={index} className="flex gap-4 mb-2 items-center">
                <input
                  type="text"
                  name="medicine"
                  placeholder="Medicine"
                  value={prescription.medicine}
                  onChange={(e) => handlePrescriptionChange(index, e)}
                  className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="dosage"
                  placeholder="Dosage"
                  value={prescription.dosage}
                  onChange={(e) => handlePrescriptionChange(index, e)}
                  className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={prescription.duration}
                  onChange={(e) => handlePrescriptionChange(index, e)}
                  className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemovePrescription(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPrescription}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              + Add Prescription
            </button>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicalRecordModal;