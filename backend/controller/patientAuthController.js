import bcrypt from "bcrypt";
import Patient from "../model/patientsModel.js";

// Login patient with sessions
export const loginClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find patient by email
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", patient: patient });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
