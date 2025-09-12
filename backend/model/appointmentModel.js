import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
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
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    default: "Consultation",
  },
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled"],
    default: "scheduled",
  },
  reason: {
    type: String, // reason for visit (e.g., "check-up", "follow-up")
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model(
  "Appointment",
  AppointmentSchema,
  "appointments"
);

export default Appointment;
