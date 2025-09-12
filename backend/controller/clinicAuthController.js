import bcrypt from "bcrypt";
import Clinic from "../model/clinicModel.js";

// Login clinic with sessions
export const loginClinic = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find clinic by email
    const clinic = await Clinic.findOne({ email });
    if (!clinic) {
      return res.status(404).json({ message: "Clinic not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, clinic.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", clinic: clinic });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

// Logout clinic
export const logoutClinic = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out" });
    }
    res.clearCookie("connect.sid"); // clears session cookie
    res.json({ message: "Logged out successfully" });
  });
};
