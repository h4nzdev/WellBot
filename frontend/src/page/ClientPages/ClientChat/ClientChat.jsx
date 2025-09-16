import { Bot, Send, User } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const ClientChat = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/chat", {
        message: message,
        history: chatHistory,
      });

      const botMessage = {
        role: "bot",
        text: response.data.message,
      };

      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      const errorMessage = {
        role: "bot",
        text: "Sorry, something went wrong. Please try again.",
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 mx-auto w-full flex flex-col">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            AI Symptom Checker
          </h1>
          <p className="text-slate-600 mt-2 text-lg font-medium">
            Get basic advice for your symptoms. This is not a substitute for
            professional medical advice.
          </p>
        </header>

        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-6 flex flex-col">
          {/* Chat messages */}
          <div className="flex-1 space-y-6 overflow-y-auto pr-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  chat.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`p-3 rounded-full shadow-lg ring-2 ${
                    chat.role === "user"
                      ? "bg-gradient-to-br from-slate-600 to-slate-800 ring-slate-100"
                      : "bg-gradient-to-br from-cyan-500 to-cyan-700 ring-cyan-100"
                  }`}
                >
                  {chat.role === "user" ? (
                    <User className="w-6 h-6 text-white" />
                  ) : (
                    <Bot className="w-6 h-6 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-2xl p-4 max-w-lg shadow-sm border hover:shadow-md transition-all duration-200 ${
                    chat.role === "user"
                      ? "bg-cyan-50/80 backdrop-blur-sm border-cyan-100"
                      : "bg-slate-50/80 backdrop-blur-sm border-slate-100"
                  }`}
                >
                  <p className="font-bold text-slate-800 text-sm tracking-wide mb-1">
                    {chat.role === "user" ? "You" : "AI Assistant"}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {chat.text}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-3 rounded-full shadow-lg ring-2 ring-cyan-100">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 max-w-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                  <p className="font-bold text-slate-800 text-sm tracking-wide mb-1">
                    AI Assistant
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Typing...
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 p-4 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md font-medium placeholder:text-slate-400"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="p-4 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ring-2 ring-cyan-100 hover:ring-cyan-200 disabled:opacity-50"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientChat;
