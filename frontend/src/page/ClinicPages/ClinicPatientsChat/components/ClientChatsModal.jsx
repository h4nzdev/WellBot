import { useEffect, useState } from "react";
import axios from "axios";
import { X, Sparkles, MessageCircle } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

export default function ClientChatsModal({ patient, initialChat, onClose }) {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState(initialChat || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPatientChats = async () => {
      if (!patient?.id) return;
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/chat/${patient.id}`);
        const chats = res.data?.chats || [];
        const normalized = chats.map((c) => ({
          role: c.role === "Client" ? "user" : "bot",
          text: c.message,
          timestamp: c.timestamp,
        }));
        setMessages(normalized);
      } catch (e) {
        // keep initialChat fallback
        // eslint-disable-next-line no-console
        console.error("Failed to load patient chats", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPatientChats();
  }, [patient]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200/50">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl p-2.5 shadow-md">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {patient?.name ? `${patient.name}'s Chat` : "Chat History"}
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                {messages.length} message{messages.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-500 hover:text-slate-700 transition-all duration-200 hover:scale-105"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-hidden">
          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center text-slate-500">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 mb-4">
                <MessageCircle className="w-12 h-12 text-slate-400 mx-auto animate-pulse" />
              </div>
              <p className="text-lg font-medium">Loading chat history...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="h-96 flex flex-col items-center justify-center">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 mb-6">
                <MessageCircle className="w-16 h-16 text-slate-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                No messages yet
              </h3>
              <p className="text-slate-500 text-center">
                This patient hasn't started any conversations with the chatbot.
              </p>
            </div>
          ) : (
            <div className="p-6 space-y-4 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 hide-scroll">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md xl:max-w-lg px-5 py-4 rounded-2xl shadow-sm ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-white"
                        : "bg-white border border-slate-200 text-slate-800 shadow-md"
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {message.text}
                    </p>
                    {message.timestamp && (
                      <p
                        className={`text-xs mt-2 ${
                          message.role === "user"
                            ? "text-cyan-100"
                            : "text-slate-500"
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Button Footer */}
        {messages.length > 0 && !loading && (
          <div className="p-6 border-t border-slate-200/50 bg-slate-50/50 rounded-b-2xl">
            <div className="flex justify-center">
              <button
                type="button"
                disabled={user.subscriptionPlan !== "pro"}
                className={`group flex items-center gap-3 px-6 py-3 ${
                  user.subscriptionPlan !== "pro"
                    ? "bg-gray-500/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-sky-500"
                } text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 hover:from-cyan-600 hover:to-sky-600`}
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Summarize Chat History
                <Sparkles className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
