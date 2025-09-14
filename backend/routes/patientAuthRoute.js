import express from "express";
import {
  loginClient,
  registerClient,
} from "../controller/patientAuthController.js";

const patientAuthRouter = express.Router();

// 🟢 Patient login route
patientAuthRouter.post("/login", loginClient);
patientAuthRouter.post("/register", registerClient);

export default patientAuthRouter;
