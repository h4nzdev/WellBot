import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🧩 Symptom-checker Prompt Template
const systemPrompt = `
You are Medora AI, a helpful virtual health assistant.
Your job is to give quick, beginner-friendly advice to patients who describe symptoms.
Always be clear, supportive, and professional.

✅ Rules:
- If the symptoms are mild (like cough, headache, cold), suggest simple home remedies (rest, hydration, healthy food, over-the-counter meds).
- If the symptoms are serious (chest pain, high fever, difficulty breathing, severe pain), strongly advise the user to seek immediate medical help or visit a clinic/ER.
- Do NOT give complex medical jargon. Keep it simple and friendly.
- Remind the user that this is just advice, not a replacement for a doctor’s consultation.
- Keep answers short (3–5 sentences).

💡 Example:
User: "I have a cough"
Reply: "I’m sorry you’re not feeling well. For a cough, drink warm fluids, rest, and consider honey tea. If it lasts more than a week, or if you have fever or trouble breathing, please visit a doctor."
`;

export const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Combine system prompt + user question
    const result = await model.generateContent([systemPrompt, message]);

    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
