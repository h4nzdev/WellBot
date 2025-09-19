"use client";
import { useState, useEffect } from "react";
import {
  MessageCircle,
  Search,
  ChevronDown,
  Filter,
  MoreHorizontal,
  X,
} from "lucide-react";
import { appointments } from "../../../utils/appointment";
import axios from "axios";

export default function ClinicPatientsChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/chat");
        const data = response.data;
        if (data.success) {
          const chatsByPatient = data.chats.reduce((acc, chat) => {
            const patientId = chat.patientId || "Unknown Patient";
            if (!acc[patientId]) {
              acc[patientId] = {
                patient: patientId,
                chat: [],
              };
            }
            acc[patientId].chat.push({
              role: chat.role,
              text: chat.message,
              timestamp: chat.timestamp,
            });
            return acc;
          }, {});

          setChatHistory(Object.values(chatsByPatient));
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchChats();
  }, []);

  const lastUserMessage = (chat) => {
    // find last message from patient
    const userMessages = chat.filter((message) => message.role === "patient");
    return userMessages[userMessages.length - 1];
  };

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-3">
          <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
              Patient Chat Overview
            </h1>
            <p className="text-slate-600 mt-1">
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
              className="pl-10 h-12 rounded-xl border border-slate-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-200 w-full"
              disabled
            />
          </div>

          <button
            type="button"
            className="flex items-center h-12 px-4 rounded-xl border border-slate-200 hover:border-cyan-300 bg-transparent text-slate-700 cursor-not-allowed"
            disabled
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Chat Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg p-6">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-slate-50">
              <tr>
                <th className="py-4 px-4 font-semibold text-slate-700">
                  Patient
                </th>
                <th className="py-4 px-4 font-semibold text-slate-700">
                  Last Chat Snippet
                </th>
                <th className="py-4 px-4 font-semibold text-slate-700">
                  Last Interaction
                </th>
                <th className="py-4 px-4 font-semibold text-slate-700 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {chatHistory.map((item, index) => {
                const lastMessage = item.chat[item.chat.length - 1];
                const lastInteractionTime = lastMessage
                  ? new Date(lastMessage.timestamp).toLocaleString()
                  : "N/A";
                const patient = appointments.find(
                  (appointment) => appointment.id === item.patient
                );

                return (
                  <tr
                    key={index}
                    className="border-t border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-4 px-4 flex items-center gap-3">
                      <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
                        {patient?.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {patient?.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          ID: #
                          {item.patient === "Unknown Patient"
                            ? "N/A"
                            : item.patient.substring(0, 8)}
                        </p>
                      </div>
                    </td>
                    <td
                      className="py-4 px-4 text-slate-700 max-w-xl truncate"
                      title={lastUserMessage(item.chat)?.text}
                    >
                      {lastUserMessage(item.chat)?.text}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {lastInteractionTime}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedChat(item.chat)}
                        className="h-8 w-8 p-0 hover:bg-slate-100 rounded-md inline-flex items-center justify-center"
                        aria-label="View chat details"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {selectedChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Chat History</h2>
              <button
                onClick={() => setSelectedChat(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4 h-96 overflow-y-auto">
              {selectedChat.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "patient" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                      message.role === "patient"
                        ? "bg-cyan-600 text-white"
                        : "bg-white border border-gray-200 text-gray-900"
                    }`}
                  >
                    <p className="md:text-lg text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}