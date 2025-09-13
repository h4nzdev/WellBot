import express from "express";
import { loginClinic } from "../controller/clinicAuthController.js";

const clinicAuthRoutes = express.Router();

clinicAuthRoutes.post("/login", loginClinic);

export default clinicAuthRoutes;
