import express from "express";
import {
  addClinic,
  getAllClinics,
  getClinicById,
  updateClinic,
  deleteClinic,
} from "../controller/clinicController.js";

const clinicRouter = express.Router();

// ✅ Add a new clinic
clinicRouter.post("/add-clinic", addClinic);

// ✅ Get all clinics
clinicRouter.get("/", getAllClinics);

// ✅ Get a clinic by ID
clinicRouter.get("/:id", getClinicById);

// ✅ Update clinic details
clinicRouter.put("/:id", updateClinic);

// ✅ Delete a clinic
clinicRouter.delete("/:id", deleteClinic);

export default clinicRouter;
