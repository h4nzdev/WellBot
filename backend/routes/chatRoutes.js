import express from "express";
import { chatWithGemini } from "../controller/chatbot.js";
import {
  saveChat,
  getChatsByPatient,
  getAllPatientChats,
} from "../controller/chatController.js";

const chatRoutes = express.Router();

chatRoutes.post("/chat", chatWithGemini);
chatRoutes.post("/chat/save-chat", saveChat);
chatRoutes.get("/chat/:patientId", getChatsByPatient);
chatRoutes.get("/chat", getAllPatientChats);

export default chatRoutes;
