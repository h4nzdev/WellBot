import mongoose from "mongoose";

const ClinicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, // clinic login email
    required: true,
    unique: true,
  },
  password: {
    type: String, // hashed password
    required: true,
  },
  subscriptionPlan: {
    type: String,
    enum: ["Basic", "Premium"], // only allow these values
    default: "Basic",
  },
  dailyPatientLimit: {
    type: Number,
    default: 20, // Basic = 20; Premium = 50 (we can update dynamically)
  },
  currentPatientCount: {
    type: Number,
    default: 0, // resets each day
  },
  role: {
    type: String,
    default: "Clinic",
  },
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Clinic = mongoose.model("Clinic", ClinicSchema, "clinics");

export default Clinic;
