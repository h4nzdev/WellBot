import express from "express";
import {
  addMedicalRecord,
  getAllMedicalRecords,
  getMedicalRecordById,
  getRecordsByPatient,
  deleteMedicalRecord,
} from "../controller/medical_recordsController.js";

const medicalRecordsRouter = express.Router();

// ================================
// Routes for Medical Records
// ================================

// Create a new medical record
medicalRecordsRouter.post("/add-records", addMedicalRecord);

// Get all medical records
medicalRecordsRouter.get("/", getAllMedicalRecords);

// Get a single medical record by ID
medicalRecordsRouter.get("/:id", getMedicalRecordById);

// Get all records for a specific patient
medicalRecordsRouter.get("/patient/:patientId", getRecordsByPatient);

// Delete a medical record
medicalRecordsRouter.delete("/:id", deleteMedicalRecord);

export default medicalRecordsRouter;
