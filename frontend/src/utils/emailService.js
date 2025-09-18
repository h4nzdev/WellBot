// utils/emailService.js
import emailjs from "@emailjs/browser";

// EmailJS configuration - replace with your real IDs & key
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_50vrouu",        // Your EmailJS service ID
  APPROVAL_TEMPLATE_ID: "template_evtsibo", // Template ID for approval
  REJECTION_TEMPLATE_ID: "template_evtsibo", // Template ID for rejection
  PUBLIC_KEY: "MnJJTRsFLVayVbcMf",      // Your public key
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  console.log("EmailJS initialized!");
};

// Send appointment approval email
export const sendApprovalEmail = async (patientEmail, patientName, appointmentDetails) => {
  const templateParams = {
    to_email: patientEmail,
    patient_name: patientName,
    appointment_date: appointmentDetails.date,
    appointment_time: appointmentDetails.time,
    doctor_name: appointmentDetails.doctorName,
    clinic_name: appointmentDetails.clinicName,
  };

  try {
    const res = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.APPROVAL_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return res;
  } catch (err) {
    console.error("Approval email error:", err);
    throw new Error("Failed to send approval email");
  }
};

// Send appointment rejection email
export const sendRejectionEmail = async (patientEmail, patientName, appointmentDetails) => {
  const templateParams = {
    to_email: patientEmail,
    patient_name: patientName,
    appointment_date: appointmentDetails.date,
    appointment_time: appointmentDetails.time,
    doctor_name: appointmentDetails.doctorName,
    clinic_name: appointmentDetails.clinicName,
    rejection_reason: appointmentDetails.rejectionReason || "No reason provided",
  };

  try {
    const res = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.REJECTION_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return res;
  } catch (err) {
    console.error("Rejection email error:", err);
    throw new Error("Failed to send rejection email");
  }
};
