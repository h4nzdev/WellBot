import express from "express";
import { loginClient } from "../controller/patientAuthController.js";

const patientAuthRouter = express.Router();

// 🟢 Patient login route
patientAuthRouter.post("/login", loginClient);

export default patientAuthRouter;
