import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Patient" },
  clinicId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Clinic" },
  role: { type: String, enum: ["Client", "ai"], required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chats", chatSchema, "chats");
export default Chat;
