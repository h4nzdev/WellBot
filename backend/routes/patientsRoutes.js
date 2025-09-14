import express from "express";
import {
  addPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controller/patientsController.js";

const patientRouter = express.Router();
// Get all patients
patientRouter.get("/", getPatients);

// Get single patient by ID
patientRouter.get("/:id", getPatientById);

// Update patient info
patientRouter.put("/:id", updatePatient);

// Delete patient
patientRouter.delete("/:id", deletePatient);

export default patientRouter;
