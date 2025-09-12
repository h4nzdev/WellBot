import express from "express";
import {
  loginClinic,
  logoutClinic,
} from "../controller/clinicAuthController.js";

const clinicAuthRoutes = express.Router();

clinicAuthRoutes.post("/login", loginClinic);
clinicAuthRoutes.post("/logout", logoutClinic);

export default clinicAuthRoutes;
