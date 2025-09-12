import { Bot, Send, User } from "lucide-react";

const ClientChat = () => {
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
            {/* AI Message */}
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-3 rounded-full shadow-lg ring-2 ring-cyan-100">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 max-w-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                <p className="font-bold text-slate-800 text-sm tracking-wide mb-1">
                  AI Assistant
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Hello! I'm here to help you with basic symptom advice. What
                  are you experiencing today?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-3 rounded-full shadow-lg ring-2 ring-slate-100">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="bg-cyan-50/80 backdrop-blur-sm rounded-2xl p-4 max-w-lg shadow-sm border border-cyan-100 hover:shadow-md transition-all duration-200">
                <p className="font-bold text-slate-800 text-sm tracking-wide mb-1">
                  You
                </p>
                <p className="text-slate-700 leading-relaxed">
                  I have been having a severe headache and some migraine
                  symptoms for the last two days.
                </p>
              </div>
            </div>

            {/* AI Message */}
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-3 rounded-full shadow-lg ring-2 ring-cyan-100">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 max-w-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                <p className="font-bold text-slate-800 text-sm tracking-wide mb-1">
                  AI Assistant
                </p>
                <p className="text-slate-700 leading-relaxed">
                  I'm sorry to hear that. For severe headaches, it's important
                  to rest in a quiet, dark room. Staying hydrated can also help.
                  However, since the symptoms are severe and persistent, I
                  strongly recommend you consult a doctor for a proper
                  diagnosis. Would you like to book an appointment?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-4 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md font-medium placeholder:text-slate-400"
            />
            <button className="p-4 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ring-2 ring-cyan-100 hover:ring-cyan-200">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientChat;
