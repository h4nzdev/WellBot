import { Bot, Send, User } from "lucide-react";
import React from "react";

const ClientChat = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 mx-auto w-full flex flex-col">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
            AI Symptom Checker
          </h1>
          <p className="text-slate-600 mt-1">
            Get basic advice for your symptoms. This is not a substitute for
            professional medical advice.
          </p>
        </header>

        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col">
          {/* Chat messages */}
          <div className="flex-1 space-y-6 overflow-y-auto pr-4">
            {/* AI Message */}
            <div className="flex items-start gap-4">
              <div className="bg-cyan-600 p-3 rounded-full shadow-md">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-slate-100 rounded-2xl p-4 max-w-lg">
                <p className="font-semibold text-slate-800">AI Assistant</p>
                <p className="text-slate-700">
                  Hello! I'm here to help you with basic symptom advice. What are
                  you experiencing today?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="bg-slate-700 p-3 rounded-full shadow-md">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="bg-cyan-50 rounded-2xl p-4 max-w-lg">
                <p className="font-semibold text-slate-800">You</p>
                <p className="text-slate-700">
                  I have been having a severe headache and some migraine
                  symptoms for the last two days.
                </p>
              </div>
            </div>
            
            {/* AI Message */}
            <div className="flex items-start gap-4">
              <div className="bg-cyan-600 p-3 rounded-full shadow-md">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-slate-100 rounded-2xl p-4 max-w-lg">
                <p className="font-semibold text-slate-800">AI Assistant</p>
                <p className="text-slate-700">
                  I'm sorry to hear that. For severe headaches, it's important to rest in a quiet, dark room. Staying hydrated can also help. However, since the symptoms are severe and persistent, I strongly recommend you consult a doctor for a proper diagnosis. Would you like to book an appointment?
                </p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-6 flex items-center gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow"
            />
            <button className="p-4 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-700 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientChat;