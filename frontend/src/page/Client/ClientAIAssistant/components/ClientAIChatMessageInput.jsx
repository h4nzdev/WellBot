import { Send } from "lucide-react";
import React from "react";

const ClientAIChatMessageInput = () => {
  return (
    <div className="bg-white border-t border-gray-200 p-4 lg:p-6">
      <div className="flex space-x-3">
        <input
          type="text"
          value=""
          disabled
          placeholder="Describe your symptoms or ask a health question..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
          readOnly
        />
        <button
          disabled
          className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center cursor-not-allowed opacity-70"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ClientAIChatMessageInput;
