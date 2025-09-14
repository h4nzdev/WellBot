'use client';

import {
  CalendarPlus,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import AddAppointmentModal from "../../../components/ClientComponents/AddAppointmentModal/AddAppointmentModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientAppointments() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      title: "Total Appointments",
      value: "24",
      icon: Calendar,
      color: "bg-slate-100/80 text-slate-700",
      iconColor: "text-slate-600",
    },
    {
      title: "Upcoming",
      value: "3",
      icon: Clock,
      color: "bg-cyan-50/80 text-cyan-700",
      iconColor: "text-cyan-600",
    },
    {
      title: "Completed",
      value: "18",
      icon: CheckCircle,
      color: "bg-emerald-50/80 text-emerald-700",
      iconColor: "text-emerald-600",
    },
    {
      title: "Pending",
      value: "3",
      icon: AlertCircle,
      color: "bg-amber-50/80 text-amber-700",
      iconColor: "text-amber-600",
    },
  ];

  const appointments = [
    {
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiology",
      date: "2024-09-15",
      time: "09:00 AM",
      status: "confirmed",
    },
    {
      doctor: "Dr. Michael Brown",
      specialty: "Dermatology",
      date: "2024-09-18",
      time: "10:30 AM",
      status: "pending",
    },
    {
      doctor: "Dr. Emily Davis",
      specialty: "Neurology",
      date: "2024-09-20",
      time: "02:00 PM",
      status: "confirmed",
    },
    {
      doctor: "Dr. James Miller",
      specialty: "Orthopedics",
      date: "2024-09-22",
      time: "11:15 AM",
      status: "pending",
    },
    {
      doctor: "Dr. Lisa Anderson",
      specialty: "Pediatrics",
      date: "2024-09-25",
      time: "03:30 PM",
      status: "confirmed",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return (
          <span className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-full text-emerald-700 bg-emerald-50/80 border border-emerald-200/50 text-xs md:text-sm font-bold backdrop-blur-sm">
            <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
            Confirmed
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-full text-amber-700 bg-amber-50/80 border border-amber-200/50 text-xs md:text-sm font-bold backdrop-blur-sm">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            Pending
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-full text-red-700 bg-red-50/80 border border-red-200/50 text-xs md:text-sm font-bold backdrop-blur-sm">
            <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
            Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-full text-slate-700 bg-slate-100/80 border border-slate-200/50 text-xs md:text-sm font-bold backdrop-blur-sm">
            <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
            Completed
          </span>
        );
    }
  };

  return (
    <>
      <ToastContainer />
      <AddAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50">
        <div className="mx-auto">
          <header className="mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                  My Appointments
                </h1>
                <p className="text-slate-600 mt-2 text-base sm:text-lg font-medium">
                  View and manage your upcoming appointments.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center px-4 md:px-6 py-3 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 w-full sm:w-auto backdrop-blur-sm border border-white/20 text-sm md:text-base font-bold"
              >
                <CalendarPlus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                New Appointment
              </button>
            </div>
          </header>

          <section className="mb-6 md:mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-slate-600 text-xs md:text-sm font-bold uppercase tracking-wider mb-2 truncate">
                          {stat.title}
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ${stat.color} border border-white/20 ml-2 flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-5 h-5 md:w-6 md:h-6 ${stat.iconColor}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            {/* Mobile Card Layout */}
            <div className="block md:hidden space-y-4">
              <h2 className="text-lg font-bold text-slate-800 mb-4 tracking-tight">
                All Appointments
              </h2>
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-base mb-1">
                        {appointment.doctor}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium mb-2">
                        {appointment.specialty}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600">
                        <span className="font-medium">{appointment.date}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="font-medium">{appointment.time}</span>
                      </div>
                    </div>
                    <div className="ml-3 flex-shrink-0">
                      {getStatusBadge(appointment.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table Layout */}
            <div className="hidden md:block overflow-x-auto rounded-3xl border border-white/20 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
              <table className="w-full text-left">
                <thead className="bg-slate-50/80 backdrop-blur-sm">
                  <tr>
                    <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                      Doctor
                    </th>
                    <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                      Specialty
                    </th>
                    <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                      Date
                    </th>
                    <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                      Time
                    </th>
                    <th className="py-4 md:py-5 px-4 md:px-6 font-bold text-slate-700 tracking-wide text-sm md:text-base">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className="border-t border-slate-200/50 hover:bg-slate-50/50 transition-all duration-300"
                    >
                      <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-bold text-sm md:text-base">
                        {appointment.doctor}
                      </td>
                      <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                        {appointment.specialty}
                      </td>
                      <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                        {appointment.date}
                      </td>
                      <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 font-medium text-sm md:text-base">
                        {appointment.time}
                      </td>
                      <td className="py-4 md:py-5 px-4 md:px-6">
                        {getStatusBadge(appointment.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
