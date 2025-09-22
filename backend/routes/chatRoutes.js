import express from "express";
import { chatWithGemini, summarizeChatHistory } from "../controller/chatbot.js";
import {
  saveChat,
  getChatsByPatient,
  getAllPatientChats,
  getChatsByClinic,
  deleteChatsByPatient,
  getChatCredits,
  incrementChatCredits,
} from "../controller/chatController.js";

const chatRoutes = express.Router();

chatRoutes.post("/chat", chatWithGemini);
chatRoutes.post("/chat/summarize", summarizeChatHistory);
chatRoutes.post("/chat/save-chat", saveChat);
chatRoutes.get("/chat/:patientId", getChatsByPatient);
chatRoutes.get("/chat", getAllPatientChats);
chatRoutes.get("/chat/clinic/:clinicId", getChatsByClinic);
chatRoutes.delete("/chat/:patientId", deleteChatsByPatient);
chatRoutes.get("/chat/credits/:patientId", getChatCredits);
chatRoutes.post("/chat/increment-credits", incrementChatCredits);

export default chatRoutes;
