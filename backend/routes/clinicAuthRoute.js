import express from "express";
import {
  loginClinic,
  clinicRegister,
} from "../controller/clinicAuthController.js";

const clinicAuthRoutes = express.Router();

clinicAuthRoutes.post("/login", loginClinic);
clinicAuthRoutes.post("/register", clinicRegister);

export default clinicAuthRoutes;
