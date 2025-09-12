import React from "react";
import { CalendarPlus } from "lucide-react";

const ClientAppointments = () => {
  const appointments = [
    {
      doctor: "Dr. Evelyn Reed",
      specialty: "Cardiologist",
      date: "2024-09-15",
      time: "10:30 AM",
    },
    {
      doctor: "Dr. Marcus Thorne",
      specialty: "Neurologist",
      date: "2024-09-20",
      time: "02:00 PM",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                My Appointments
              </h1>
              <p className="text-slate-600 mt-1">
                View and manage your upcoming appointments.
              </p>
            </div>
            <button className="flex items-center justify-center p-3 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-700 transition-all duration-300">
              <CalendarPlus className="w-6 h-6 mr-2" />
              New Appointment
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 hover:shadow-cyan-100 transition-shadow"
            >
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-slate-800">
                  {appointment.doctor}
                </p>
                <p className="text-cyan-600 font-medium">
                  {appointment.specialty}
                </p>
                <div className="my-4 h-px bg-slate-200"></div>
                <div className="text-slate-600 space-y-2">
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClientAppointments;
