import express from "express";
import { chatWithGemini } from "../controller/chatbot.js";

const chatRoutes = express.Router();

chatRoutes.post("/chat", chatWithGemini);

export default chatRoutes;
