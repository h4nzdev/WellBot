import React from "react";
import { CalendarPlus } from "lucide-react";
import ClientAppointmentsTableBody from "./components/ClientAppointmentsTableBody";

const ClientAppointments = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto p-4 sm:p-6 max-w-7xl">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                My Appointments
              </h1>
              <p className="text-slate-600 mt-1">
                View and manage your upcoming appointments.
              </p>
            </div>
            <button className="flex items-center justify-center p-3 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-700 transition-all duration-300 w-full sm:w-auto">
              <CalendarPlus className="w-6 h-6 mr-2" />
              New Appointment
            </button>
          </div>
        </header>

        <section>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left min-w-[700px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-4 px-4 font-semibold text-slate-700">Doctor</th>
                  <th className="py-4 px-4 font-semibold text-slate-700">Specialty</th>
                  <th className="py-4 px-4 font-semibold text-slate-700">Date</th>
                  <th className="py-4 px-4 font-semibold text-slate-700">Time</th>
                  <th className="py-4 px-4 font-semibold text-slate-700">Status</th>
                </tr>
              </thead>
              <ClientAppointmentsTableBody />
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientAppointments;
