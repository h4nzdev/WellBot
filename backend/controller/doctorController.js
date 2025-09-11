import Doctor from "../model/doctorModel.js";

// ➤ Add new doctor
export const addDoctor = async (req, res) => {
  try {
    const { clinicId, name, specialty, email, phone, status, availability } =
      req.body;

    // create new doctor
    const doctor = new Doctor({
      clinicId,
      name,
      specialty,
      email,
      phone,
      status: status || "Active", // default if not provided
      availability,
    });

    await doctor.save();
    res.status(201).json({ message: "Doctor added successfully", doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding doctor", error: error.message });
  }
};

// ➤ Get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("clinicId", "name email");
    res.json(doctors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching doctors", error: error.message });
  }
};

// ➤ Get single doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate(
      "clinicId",
      "name email"
    );
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching doctor", error: error.message });
  }
};

// ➤ Update doctor (can update phone, status, etc.)
export const updateDoctor = async (req, res) => {
  try {
    const { name, specialty, email, phone, status, availability } = req.body;

    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { name, specialty, email, phone, status, availability },
      { new: true }
    );

    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    res.json({ message: "Doctor updated successfully", doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating doctor", error: error.message });
  }
};

// ➤ Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting doctor", error: error.message });
  }
};
