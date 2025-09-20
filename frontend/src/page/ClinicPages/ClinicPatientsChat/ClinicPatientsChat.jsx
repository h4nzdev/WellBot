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
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
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
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Chats
                </p>
                <p className="text-4xl font-semibold text-slate-800">
                  {chatHistory?.length}
                </p>
              </div>
              <div className="bg-slate-500 p-4 rounded-2xl shadow-md">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Active Patients
                </p>
                <p className="text-4xl font-semibold text-emerald-600">
                  {chatHistory?.length}
                </p>
              </div>
              <div className="bg-emerald-500 p-4 rounded-2xl shadow-md">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Recent Messages
                </p>
                <p className="text-4xl font-semibold text-amber-600">
                  {chatHistory?.reduce(
                    (total, item) => total + item.chat.length,
                    0
                  )}
                </p>
              </div>
              <div className="bg-amber-500 p-4 rounded-2xl shadow-md">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search patients or messages..."
                  className="pl-10 h-12 rounded-xl border border-slate-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-200 w-full"
                  disabled
                />
              </div>

              {/* Filter */}
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
          </div>

          {/* Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="font-semibold text-slate-700 py-4 px-4">
                    Patient ID
                  </th>
                  <th className="font-semibold text-slate-700 px-4">
                    Patient Name
                  </th>
                  <th className="font-semibold text-slate-700 px-4">
                    Last Message
                  </th>
                  <th className="font-semibold text-slate-700 px-4">
                    Last Interaction
                  </th>
                  <th className="font-semibold text-slate-700 px-4">Status</th>
                  <th className="font-semibold text-slate-700 px-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {chatHistory && chatHistory.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-slate-500">
                      No patient chats found.
                    </td>
                  </tr>
                ) : (
                  chatHistory?.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50 transition-colors border-t border-slate-200"
                    >
                      <td className="py-4 px-4 font-mono text-slate-700">
                        #0001
                      </td>
                      <td className="px-4 font-semibold text-slate-800">
                        {item.patientName}
                      </td>
                      <td
                        className="px-4 max-w-xs truncate"
                        title={lastUserMessage(item.chat)?.text}
                      >
                        {lastUserMessage(item.chat)?.text || "No messages yet"}
                      </td>
                      <td className="px-4">
                        {item.lastTimestamp
                          ? new Date(item.lastTimestamp).toLocaleDateString()
                          : "Never"}
                      </td>
                      <td className="px-4">
                        <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-md text-sm w-fit">
                          Active
                        </span>
                      </td>
                      <td className="px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedPatient({
                                id: item.patientId,
                                name: item.patientName,
                              });
                              setSelectedChat(item.chat);
                            }}
                            className="px-3 py-1.5 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 border border-cyan-200 hover:border-cyan-300 rounded-md font-medium transition-all duration-200 text-sm"
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
                            className="px-3 py-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 hover:border-red-300 rounded-md font-medium transition-all duration-200 text-sm"
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

          {/* Results Summary */}
          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <p>
              Showing {chatHistory?.length} of {chatHistory?.length} chats
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                className="rounded-lg bg-transparent border border-slate-300 px-3 py-1 text-slate-400 cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                disabled
                className="rounded-lg bg-transparent border border-slate-300 px-3 py-1 text-slate-400 cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
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
