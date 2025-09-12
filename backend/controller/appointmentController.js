import Appointment from "../model/appointmentModel.js";
import Clinic from "../model/clinicModel.js";
import Patient from "../model/patientsModel.js";
import Doctor from "../model/doctorModel.js";

// Create appointment
export const addAppointment = async (req, res) => {
  try {
    const { clinicId, doctorId, patientId, date, time } = req.body;

    // check if clinic exists
    const clinic = await Clinic.findById(clinicId);
    if (!clinic) {
      return res.status(404).json({ message: "Clinic not found" });
    }

    // check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // check if patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // create appointment
    const newAppointment = new Appointment({
      clinicId,
      doctorId,
      patientId,
      date,
      time,
      status: "scheduled", // default status
    });

    await newAppointment.save();

    res.status(201).json({
      message: "Appointment created successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating appointment", error: error.message });
  }
};

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("clinicId", "name plan")
      .populate("doctorId", "name specialty")
      .populate("patientId", "name email phone");

    res.status(200).json(appointments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching appointments", error: error.message });
  }
};

// Get appointment by ID
export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("clinicId", "name plan")
      .populate("doctorId", "name specialty")
      .populate("patientId", "name email phone");

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching appointment", error: error.message });
  }
};

// Update appointment (e.g., status or time)
export const updateAppointment = async (req, res) => {
  try {
    const { status, date, time } = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status, date, time },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment updated successfully",
      appointment: updatedAppointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating appointment", error: error.message });
  }
};

// Delete appointment (cancel)
export const deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.id
    );

    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting appointment", error: error.message });
  }
};
