import { Bot, Shield } from "lucide-react";
import React from "react";
const ClientAIChatMessage = () => {
  const messages = [
    {
      id: 1,
      type: "bot",
      message:
        "Hello! I'm your AI health assistant. I can help you understand symptoms, provide health information, and guide you on when to seek medical care. How can I help you today?",
      timestamp: "10:00 AM",
    },
  ];
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.type === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
              msg.type === "user"
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-200 text-gray-900"
            }`}
          >
            {msg.type === "bot" && (
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  AI Assistant
                </span>
              </div>
            )}
            <p className="text-sm">{msg.message}</p>
            <p
              className={`text-xs mt-1 ${
                msg.type === "user" ? "text-green-100" : "text-gray-500"
              }`}
            >
              {msg.timestamp}
            </p>
          </div>
        </div>
      ))}

      {/* Sample health questions */}
      <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200">
        <h3 className="font-medium text-blue-900 mb-3">
          Common Questions You Can Ask:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none">
            <p className="text-sm text-blue-800">
              "I have a headache and feel tired"
            </p>
          </div>
          <div className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none">
            <p className="text-sm text-blue-800">"What are symptoms of flu?"</p>
          </div>
          <div className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none">
            <p className="text-sm text-blue-800">
              "When should I see a doctor?"
            </p>
          </div>
          <div className="text-left p-3 bg-white rounded-lg border border-blue-200 cursor-default select-none">
            <p className="text-sm text-blue-800">"How to manage stress?"</p>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="bg-green-50 rounded-xl p-4 lg:p-6 border border-green-200">
        <div className="flex items-center space-x-2 mb-3">
          <Shield className="h-5 w-5 text-green-600" />
          <h3 className="font-medium text-green-900">Daily Health Reminder</h3>
        </div>
        <p className="text-sm text-green-800">
          Remember to stay hydrated throughout the day. Aim for 8 glasses of
          water to maintain optimal health and energy levels.
        </p>
      </div>
    </div>
  );
};

export default ClientAIChatMessage;
