import { Bot, Send, Shield } from "lucide-react";
import ClientAIChatMessage from "./components/ClientAIChatMessage";
import ClientAIChatMessageInput from "./components/ClientAIChatMessageInput";

const ClientAIChat = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-full">
            <Bot className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              AI Health Assistant
            </h1>
            <p className="text-gray-600">
              Get instant health guidance and symptom analysis
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <ClientAIChatMessage />
      {/* Message Input */}
      <ClientAIChatMessageInput />
    </div>
  );
};

export default ClientAIChat;
