import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { useState, useMemo, useContext } from "react";
import { AppointmentContext } from "../../../context/AppointmentContext";
import { AuthContext } from "../../../context/AuthContext";

export default function ClinicCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { appointments } = useContext(AppointmentContext);
  const { user } = useContext(AuthContext);

  const clinicAppointments = useMemo(() => {
    if (!appointments || !user) return [];
    return appointments.filter(
      (appointment) => appointment.clinicId?._id === user._id
    );
  }, [appointments, user]);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }, [currentDate]);

  const startingDay = useMemo(() => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  }, [currentDate]);

  const monthYear = useMemo(() => {
    return `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
  }, [currentDate]);

  const appointmentsForDate = (date) => {
    return clinicAppointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getDate() === date.getDate() &&
        appointmentDate.getMonth() === date.getMonth() &&
        appointmentDate.getFullYear() === date.getFullYear()
      );
    });
  };


  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
                Appointments Calendar
              </h1>
              <p className="text-slate-600 mt-1">
                View and manage clinic appointments.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex justify-between items-center mb-6">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-slate-100">
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <h2 className="text-2xl font-semibold text-slate-800">
              {monthYear}
            </h2>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-slate-100">
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-slate-600 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startingDay }).map((_, index) => (
              <div key={`empty-${index}`} className="border rounded-lg p-2 h-32 bg-slate-50"></div>
            ))}
            {daysInMonth.map((day, index) => (
              <div
                key={index}
                className={`border rounded-lg p-2 h-32 flex flex-col ${
                  new Date().toDateString() === day.toDateString() ? "bg-cyan-50 border-cyan-300" : "bg-white"
                }`}
              >
                <span className={`font-semibold ${new Date().toDateString() === day.toDateString() ? 'text-cyan-600' : 'text-slate-800'}`}>{day.getDate()}</span>
                <div className="mt-1 overflow-y-auto">
                  {appointmentsForDate(day).map((appointment, i) => (
                    <div key={i} className="bg-cyan-100 text-cyan-800 text-xs rounded p-1 mb-1">
                      {appointment.patientId?.name} - {appointment.doctorId?.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}