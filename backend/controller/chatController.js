import Chat from "../model/chatModel.js";

// Save a new chat
export const saveChat = async (req, res) => {
  try {
    const { patientId, role, message } = req.body;
    const newChat = new Chat({ patientId, role, message });
    await newChat.save();
    res.status(201).json({ success: true, chat: newChat });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all chats for a single patient (populated)
export const getChatsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const chats = await Chat.find({ patientId })
      .sort({ timestamp: 1 })
      .populate("patientId", "name email"); // only get name & email from Patient
    res.json({ success: true, chats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all chats from all patients (populated)
export const getAllPatientChats = async (req, res) => {
  try {
    const chats = await Chat.find()
      .sort({ timestamp: 1 })
      .populate("patientId", "name email"); // populate patient info
    res.json({ success: true, chats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
