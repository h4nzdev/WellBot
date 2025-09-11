import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  clinicId: {
    type: mongoose.Schema.Types.ObjectId, // link doctor to a clinic
    ref: "Clinic",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"], // only allows these two
    default: "Active",
  },
  availability: [
    {
      day: String, // e.g. "Monday"
      startTime: String, // e.g. "09:00"
      endTime: String, // e.g. "17:00"
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model("Doctor", DoctorSchema, "doctors");

export default Doctor;
