import bcrypt from "bcrypt";
import Patient from "../model/patientsModel.js";

// Login patient with sessions
export const loginClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find patient by email and populate clinicId
    const patient = await Patient.findOne({ email }).populate("clinicId");
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

export const registerClient = async (req, res) => {
  try {
    const {
      clinicId,
      name,
      age,
      gender,
      phone,
      email,
      address,
      password,
      emergencyContact,
    } = req.body;

    // ✅ Check if email already exists
    const existingPatientByEmail = await Patient.findOne({ email });
    if (existingPatientByEmail) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ✅ Check if phone already exists
    const existingPatientByPhone = await Patient.findOne({ phone });
    if (existingPatientByPhone) {
      return res
        .status(400)
        .json({ message: "Phone number already registered" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new patient with emergency contact
    const newPatient = new Patient({
      clinicId,
      name,
      age,
      gender,
      phone,
      email,
      address,
      password: hashedPassword,
      emergencyContact, // 👈 added this line
    });

    await newPatient.save();

    res.status(201).json({
      message: "Patient registered successfully",
      patient: {
        id: newPatient._id,
        name: newPatient.name,
        email: newPatient.email,
        emergencyContact: newPatient.emergencyContact, // 👈 optional return
      },
    });
  } catch (error) {
    // Extra check: catch Mongo duplicate error
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern)[0];
      return res
        .status(400)
        .json({ message: `${duplicateField} already registered` });
    }

    res.status(500).json({
      message: "Error registering patient",
      error: error.message,
    });
  }
};
