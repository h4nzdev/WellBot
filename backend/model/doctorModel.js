import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  clinicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clinic",
    required: true,
  },
  name: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  qualification: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: Number, default: 0 }, // years of practice
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  profileImage: { type: String, default: "" },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  availability: [
    {
      day: String,
      startTime: String,
      endTime: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Doctor = mongoose.model("Doctor", DoctorSchema, "doctors");

export default Doctor;
