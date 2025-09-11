"use client"

import {
  User,
  Send,
  ChevronLeft,
  MoreHorizontal,
} from "lucide-react"

export default function ClinicPatientsChat() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 flex items-center space-x-4 shadow-sm">
        <button
          type="button"
          className="p-2 rounded-md hover:bg-slate-100"
          aria-label="Back to Patients"
          disabled
        >
          <ChevronLeft className="w-6 h-6 text-slate-600" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
            JS
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800">John Smith</h1>
            <p className="text-sm text-slate-500">Patient</p>
          </div>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="p-2 rounded-md hover:bg-slate-100"
            aria-label="More options"
            disabled
          >
            <MoreHorizontal className="w-6 h-6 text-slate-600" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Message from Doctor */}
        <div className="flex items-start space-x-3 max-w-xl">
          <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
            SW
          </div>
          <div>
            <div className="bg-white rounded-xl shadow p-4 text-slate-800 max-w-md">
              <p>Hello John, how are you feeling today?</p>
              <span className="block text-xs text-slate-400 mt-1">Dr. Sarah Wilson • 09:00 AM</span>
            </div>
          </div>
        </div>

        {/* Message from Patient */}
        <div className="flex items-start space-x-3 max-w-xl ml-auto">
          <div>
            <div className="bg-cyan-600 text-white rounded-xl shadow p-4 max-w-md">
              <p>Hi Dr. Wilson, I’m feeling better but still have some pain in my back.</p>
              <span className="block text-xs text-cyan-200 mt-1 text-right">John Smith • 09:05 AM</span>
            </div>
          </div>
          <div className="bg-cyan-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
            JS
          </div>
        </div>

        {/* Message from Doctor */}
        <div className="flex items-start space-x-3 max-w-xl">
          <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold text-lg">
            SW
          </div>
          <div>
            <div className="bg-white rounded-xl shadow p-4 text-slate-800 max-w-md">
              <p>Thanks for the update. Please continue the prescribed medication and let me know if the pain worsens.</p>
              <span className="block text-xs text-slate-400 mt-1">Dr. Sarah Wilson • 09:10 AM</span>
            </div>
          </div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t border-slate-200 p-4 flex items-center space-x-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 h-12 rounded-xl border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          disabled
        />
        <button
          type="button"
          className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl p-3 disabled:opacity-50"
          disabled
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </footer>
    </div>
  )
}