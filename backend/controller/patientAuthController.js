import bcrypt from "bcrypt";
import Patient from "../model/patientsModel.js";;

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
    const { clinicId, name, age, gender, phone, email, address, password } =
      req.body;

    // ✅ Check if email already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new patient
    const newPatient = new Patient({
      clinicId,
      name,
      age,
      gender,
      phone,
      email,
      address,
      password: hashedPassword,
    });

    await newPatient.save();

    res.status(201).json({
      message: "Patient registered successfully",
      patient: {
        id: newPatient._id,
        name: newPatient.name,
        email: newPatient.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering patient",
      error: error.message,
    });
  }
};
