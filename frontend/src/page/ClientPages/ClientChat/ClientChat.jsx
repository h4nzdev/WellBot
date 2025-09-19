import { Bot, Send, User, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const ClientChat = () => {
  const [message, setMessage] = useState("");
  const bottomRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedChatHistory = localStorage.getItem("chatHistory");
    if (storedChatHistory) {
      setChatHistory(JSON.parse(storedChatHistory));
    } else {
      setChatHistory([
        {
          role: "bot",
          text: "Hello! I'm Medora, your clinic appointment and symptoms checker assistant. I can help you with:\n\n• Checking your symptoms\n• Providing basic health information\n• Guiding you through the appointment booking process\n• Answering questions about clinic services\n\nHow may I assist you today?",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

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
        text: response.data.reply,
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, loading]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-cyan-100 p-3 rounded-full">
            <Bot className="h-6 w-6 text-cyan-600" />
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              AI Symptom Checker
            </h1>
            <p className="text-gray-600">
              Get basic advice for your symptoms. This is not a substitute for
              professional medical advice.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${
              chat.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                chat.role === "user"
                  ? "bg-cyan-600 text-white"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              {chat.role === "bot" && (
                <div className="flex items-center space-x-2 mb-2">
                  <Bot className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm font-medium text-cyan-600">
                    AI Assistant
                  </span>
                </div>
              )}
              <p className="md:text-lg text-sm">{chat.text}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-600">
                  AI Assistant
                </span>
              </div>
              <p className="text-sm">Typing...</p>
            </div>
          </div>
        )}

        {/* Sample health questions */}
        <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200">
          <h3 className="font-medium text-blue-900 mb-3">
            Common Questions You Can Ask:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
            <div
              onClick={() => setMessage("I have a headache and feel tired")}
              className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none"
            >
              <p className="text-sm text-blue-800">
                "I have a headache and feel tired"
              </p>
            </div>
            <div
              onClick={() => setMessage("What are symptoms of flu?")}
              className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none"
            >
              <p className="text-sm text-blue-800">
                "What are symptoms of flu?"
              </p>
            </div>
            <div
              onClick={() => setMessage("When should I see a doctor?")}
              className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none"
            >
              <p className="text-sm text-blue-800">
                "When should I see a doctor?"
              </p>
            </div>
            <div
              onClick={() => setMessage("How to manage stress?")}
              className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none"
            >
              <p className="text-sm text-blue-800">"How to manage stress?"</p>
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-cyan-50 rounded-xl p-4 lg:p-6 border border-cyan-200 md:block hidden">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="h-5 w-5 text-cyan-600" />
            <h3 className="font-medium text-cyan-900">Daily Health Reminder</h3>
          </div>
          <p className="text-sm text-cyan-800">
            Remember to stay hydrated throughout the day. Aim for 8 glasses of
            water to maintain optimal health and energy levels.
          </p>
        </div>

        <div ref={bottomRef}></div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4 lg:p-6">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-cyan-700 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientChat;
