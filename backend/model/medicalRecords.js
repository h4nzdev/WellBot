import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  clinicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clinic",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
  },
  diagnosis: {
    type: String, // e.g. "Flu", "Hypertension"
    required: true,
  },
  treatment: {
    type: String, // e.g. "Paracetamol 500mg, rest, hydration"
  },
  notes: {
    type: String, // doctor's additional notes
  },
  prescriptions: [
    {
      medicine: String,
      dosage: String, // e.g. "1 tablet twice a day"
      duration: String, // e.g. "5 days"
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MedicalRecord = mongoose.model(
  "MedicalRecord",
  MedicalRecordSchema,
  "medical_records"
);

export default MedicalRecord;
