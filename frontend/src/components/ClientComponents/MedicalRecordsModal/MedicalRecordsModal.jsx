"use client";

import {
  Calendar,
  Clock,
  Heart,
  Plus,
  Bot,
  BellRing,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { AppointmentContext } from "../../../context/AppointmentContext";
import axios from "axios";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ClientDashboard() {
  const { user } = useContext(AuthContext);
  const { appointments, setAppointments } = useContext(AppointmentContext);
  const [date, setDate] = useState(new Date());

  // fetch appointments
  useEffect(() => {
    async function fetchAppointments() {
      const res = await axios.get("http://localhost:3000/appointment");
      setAppointments(res.data);
    }
    fetchAppointments();
  }, [setAppointments]);

  // filter appointments based on selected date
  const filteredAppointments = appointments.filter(
    (app) => new Date(app.date).toDateString() === date.toDateString()
  );

  // find next upcoming appointment
  const nextAppointment = [...appointments]
    .filter((a) => new Date(a.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Calendar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-cyan-600" />
                </div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Calendar
                </h2>
              </div>
              <div className="calendar-container">
                <ReactCalendar
                  onChange={setDate}
                  value={date}
                  className="!border-none !bg-transparent"
                  // highlight appointment dates
                  tileClassName={({ date }) => {
                    if (
                      appointments.find(
                        (app) =>
                          new Date(app.date).toDateString() === date.toDateString()
                      )
                    ) {
                      return "!bg-gradient-to-r from-cyan-400 to-cyan-500 !text-white rounded-full shadow-md transform hover:scale-105 transition-all";
                    }
                    return "hover:bg-gray-100 transition-colors";
                  }}
                />
              </div>
            </div>

            {/* Health Tip */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Health Tip
                </h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border-l-4 border-red-400">
                <p className="text-gray-700 leading-relaxed">
                  💧 Stay hydrated! Aim for 8 glasses of water today.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome + Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-cyan-700 to-cyan-600 bg-clip-text text-transparent">
                    Welcome back, {user?.username} 👋
                  </h1>
                  <p className="text-gray-600 mt-1">Have a productive day!</p>
                </div>
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-medium">
                  <Plus className="h-4 w-4" /> New Appointment
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button className="group p-4 bg-gradient-to-br from-cyan-50 to-cyan-100/50 hover:from-cyan-100 hover:to-cyan-200 rounded-xl flex flex-col items-center gap-2 border border-cyan-200/50 hover:border-cyan-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <span className="font-medium text-gray-700">Upcoming</span>
                </button>
                <button className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200 rounded-xl flex flex-col items-center gap-2 border border-purple-200/50 hover:border-purple-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-700">Services</span>
                </button>
                <button className="group p-4 bg-gradient-to-br from-pink-50 to-pink-100/50 hover:from-pink-100 hover:to-pink-200 rounded-xl flex flex-col items-center gap-2 border border-pink-200/50 hover:border-pink-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <BellRing className="h-6 w-6 text-pink-600" />
                  </div>
                  <span className="font-medium text-gray-700">Reminders</span>
                </button>
                <button className="group p-4 bg-gradient-to-br from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-200 rounded-xl flex flex-col items-center gap-2 border border-orange-200/50 hover:border-orange-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <Bot className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="font-medium text-gray-700">Assistant</span>
                </button>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  📅 Appointments
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Next Appointment */}
              <div className="bg-gradient-to-r from-cyan-50 via-cyan-50 to-blue-50 border border-cyan-200/50 rounded-xl p-4 mb-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Clock className="h-5 w-5 text-cyan-700" />
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-800 block">Next Appointment:</span>
                    <span className="text-cyan-700">
                      {nextAppointment
                        ? new Date(nextAppointment.date).toLocaleString()
                        : "No upcoming appointments"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Appointment List for Selected Date */}
              <div className="space-y-3">
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((app, index) => (
                    <div
                      key={app._id}
                      className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-gray-100 hover:to-gray-200/50 rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-200 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.5s ease-out forwards'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-sm"></div>
                        <div>
                          <p className="font-semibold text-gray-900">{app.patientName}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(app.date).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all ${
                          app.status === "confirmed"
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200"
                            : "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-200"
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-gray-500 font-medium">No appointments on this date</p>
                    <p className="text-gray-400 text-sm">Select a different date to view appointments</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calendar-container .react-calendar {
          font-family: inherit;
        }
        .calendar-container .react-calendar__tile {
          position: relative;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}