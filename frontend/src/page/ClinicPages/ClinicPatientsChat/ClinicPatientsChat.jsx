"use client";
import { useState, useEffect } from "react";
import {
  User,
  MessageCircle,
  Search,
  ChevronDown,
  Filter,
  MoreHorizontal,
  X,
} from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import ClientChatsModal from "./components/ClientChatsModal.jsx";

export default function ClinicPatientsChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/chat");
      const chats = res.data?.chats || [];

      // Group chats by patient and normalize message shape
      const byPatient = new Map();
      chats.forEach((c) => {
        const patient = c.patientId || {}; // populated doc with name/email
        const patientKey = patient._id || "unknown";
        const patientName = patient.name || patient.email || "Unknown";

        if (!byPatient.has(patientKey)) {
          byPatient.set(patientKey, {
            patientId: patientKey,
            patientName,
            lastTimestamp: c.timestamp ? new Date(c.timestamp).getTime() : 0,
            chat: [],
          });
        }

        const entry = byPatient.get(patientKey);
        entry.chat.push({
          role: c.role === "Client" ? "user" : "bot",
          text: c.message,
          timestamp: c.timestamp,
        });
        const ts = c.timestamp ? new Date(c.timestamp).getTime() : 0;
        if (ts > entry.lastTimestamp) entry.lastTimestamp = ts;
      });

      const grouped = Array.from(byPatient.values()).sort(
        (a, b) => b.lastTimestamp - a.lastTimestamp
      );

      setChatHistory(grouped);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    // fetch immediately when component mounts
    fetchMessages();

    // then keep fetching every 5 seconds
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000);

    // cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  const lastUserMessage = (chat) => {
    const userMessages = chat.filter((message) => message.role === "user");
    return userMessages[userMessages.length - 1];
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/30">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-3">
          <div className="bg-gradient-to-r from-cyan-500 to-sky-500 p-3 rounded-2xl shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent tracking-tight">
              Patient Chat Overview
            </h1>
            <p className="text-slate-600 mt-2 text-lg">
              View recent chatbot conversations from patients
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients or symptoms..."
              className="pl-10 h-12 rounded-xl border border-slate-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-200 w-full bg-white/80 backdrop-blur-sm"
              disabled
            />
          </div>

          <button
            type="button"
            className="flex items-center h-12 px-4 rounded-xl border border-slate-200 hover:border-cyan-300 bg-white/80 backdrop-blur-sm text-slate-700 cursor-not-allowed"
            disabled
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Chat Table */}
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/80 backdrop-blur-sm shadow-lg">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-gradient-to-r from-slate-50 to-slate-100/50">
              <tr>
                <th className="py-6 px-6 font-bold text-slate-700 text-base">
                  Patient
                </th>
                <th className="py-6 px-6 font-bold text-slate-700 text-base">
                  Last Chat Snippet
                </th>
                <th className="py-6 px-6 font-bold text-slate-700 text-base">
                  Last Interaction
                </th>
                <th className="py-6 px-6 font-bold text-slate-700 text-base text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {chatHistory && chatHistory.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-16">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 w-fit mx-auto mb-6">
                      <MessageCircle className="w-20 h-20 text-slate-400 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-3">
                      No patient chats found
                    </h3>
                    <p className="text-slate-500 text-lg">
                      Patient conversations will appear here once they start chatting with the bot.
                    </p>
                  </td>
                </tr>
              ) : (
                chatHistory?.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-200/30 hover:bg-slate-50/50 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6 flex items-center gap-3">
                      <div className="bg-gradient-to-br from-cyan-500 to-sky-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                        {item?.patientName?.charAt(0) || ""}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-lg group-hover:text-cyan-600 transition-colors duration-300">
                          {item.patientName}
                        </p>
                        <p className="text-base text-slate-500 font-medium">ID: #0001</p>
                      </div>
                    </td>
                    <td
                      className="py-6 px-6 text-slate-700 text-base max-w-xl truncate"
                      title={lastUserMessage(item.chat)?.text}
                    >
                      <span className="font-medium">
                        {lastUserMessage(item.chat)?.text || "No messages yet"}
                      </span>
                    </td>
                    <td className="py-6 px-6 text-slate-600 text-base font-medium">
                      {item.lastTimestamp
                        ? new Date(item.lastTimestamp).toLocaleString()
                        : "Never"}
                    </td>
                    <td className="py-6 px-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPatient({
                              id: item.patientId,
                              name: item.patientName,
                            });
                            setSelectedChat(item.chat);
                          }}
                          className="px-3 py-1.5 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 border border-cyan-200 hover:border-cyan-300 rounded-md font-medium transition-all duration-200"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              const result = await Swal.fire({
                                title: "Delete chats?",
                                text: `This will delete all chats for ${item.patientName}.`,
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "Delete",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#dc2626",
                              });
                              if (result.isConfirmed) {
                                await axios.delete(
                                  `http://localhost:3000/chat/${item.patientId}`
                                );
                                await Swal.fire({
                                  title: "Deleted",
                                  text: "Patient chats were deleted.",
                                  icon: "success",
                                  timer: 1200,
                                  showConfirmButton: false,
                                });
                                fetchMessages();
                              }
                            } catch (e) {
                              await Swal.fire({
                                title: "Error",
                                text: "Failed to delete chats.",
                                icon: "error",
                              });
                              // eslint-disable-next-line no-console
                              console.error("Failed to delete chats", e);
                            }
                          }}
                          className="px-3 py-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 hover:border-red-300 rounded-md font-medium transition-all duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selectedChat && (
        <ClientChatsModal
          patient={selectedPatient}
          initialChat={selectedChat}
          onClose={() => {
            setSelectedChat(null);
            setSelectedPatient(null);
          }}
        />
      )}
    </div>
  );
}